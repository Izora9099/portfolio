import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import appwriteService from '../../appwrite/appwriteService';
import './admin.css';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('projects');
  const [projects, setProjects] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      const user = await appwriteService.getCurrentUser();
      if (!user) {
        navigate('/admin');
      }
    };
    checkAuth();
    loadData();
  }, [navigate]);

  const loadData = async () => {
    try {
      const [projectsData, testimonialsData] = await Promise.all([
        appwriteService.listDocuments('projects'),
        appwriteService.listDocuments('testimonials')
      ]);
      setProjects(projectsData.documents);
      setTestimonials(testimonialsData.documents);
    } catch (error) {
      console.error('Error loading data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await appwriteService.logout();
    navigate('/admin');
  };

  const handleApproveTestimonial = async (testimonialId) => {
    try {
      await appwriteService.updateDocument('testimonials', testimonialId, {
        approved: true
      });
      loadData();
    } catch (error) {
      console.error('Error approving testimonial:', error);
    }
  };

  const handleDeleteProject = async (projectId) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      try {
        await appwriteService.deleteDocument('projects', projectId);
        loadData();
      } catch (error) {
        console.error('Error deleting project:', error);
      }
    }
  };

  const handleCreateProject = async (projectData) => {
    try {
      await appwriteService.createDocument('projects', {
        ...projectData,
        createdAt: new Date().toISOString()
      });
      loadData();
    } catch (error) {
      console.error('Error creating project:', error);
    }
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="admin-dashboard">
      <header className="dashboard-header">
        <h1>Admin Dashboard</h1>
        <button onClick={handleLogout} className="btn btn-logout">
          Logout
        </button>
      </header>

      <div className="dashboard-tabs">
        <button
          className={`tab ${activeTab === 'projects' ? 'active' : ''}`}
          onClick={() => setActiveTab('projects')}
        >
          Projects
        </button>
        <button
          className={`tab ${activeTab === 'testimonials' ? 'active' : ''}`}
          onClick={() => setActiveTab('testimonials')}
        >
          Testimonials
        </button>
      </div>

      <div className="dashboard-content">
        {activeTab === 'projects' && (
          <div className="projects-section">
            <h2>Projects</h2>
            <button
              onClick={() => setActiveTab('new-project')}
              className="btn btn-primary"
            >
              Add New Project
            </button>
            <div className="projects-grid">
              {projects.map((project) => (
                <div key={project.$id} className="project-card">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-actions">
                    <button
                      onClick={() => handleDeleteProject(project.$id)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'testimonials' && (
          <div className="testimonials-section">
            <h2>Testimonials</h2>
            <div className="testimonials-grid">
              {testimonials.map((testimonial) => (
                <div key={testimonial.$id} className="testimonial-card">
                  <h3>{testimonial.name}</h3>
                  <p>{testimonial.message}</p>
                  <p>Rating: {testimonial.rating}/5</p>
                  {!testimonial.approved && (
                    <button
                      onClick={() => handleApproveTestimonial(testimonial.$id)}
                      className="btn btn-success"
                    >
                      Approve
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'new-project' && (
          <div className="new-project-section">
            <h2>Create New Project</h2>
            <ProjectForm onSubmit={handleCreateProject} onCancel={() => setActiveTab('projects')} />
          </div>
        )}
      </div>
    </div>
  );
};

const ProjectForm = ({ onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    github: '',
    demo: '',
    image: '',
    tags: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      ...formData,
      tags: formData.tags.split(',').map(tag => tag.trim())
    });
  };

  return (
    <form onSubmit={handleSubmit} className="project-form">
      <div className="form-group">
        <input
          type="text"
          name="title"
          placeholder="Project Title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          required
        />
      </div>
      <div className="form-group">
        <textarea
          name="description"
          placeholder="Project Description"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          required
        />
      </div>
      <div className="form-group">
        <input
          type="url"
          name="github"
          placeholder="GitHub URL"
          value={formData.github}
          onChange={(e) => setFormData({ ...formData, github: e.target.value })}
          required
        />
      </div>
      <div className="form-group">
        <input
          type="url"
          name="demo"
          placeholder="Demo URL"
          value={formData.demo}
          onChange={(e) => setFormData({ ...formData, demo: e.target.value })}
        />
      </div>
      <div className="form-group">
        <input
          type="url"
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={(e) => setFormData({ ...formData, image: e.target.value })}
          required
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          name="tags"
          placeholder="Tags (comma-separated)"
          value={formData.tags}
          onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
          required
        />
      </div>
      <div className="form-actions">
        <button type="submit" className="btn btn-primary">
          Create Project
        </button>
        <button type="button" onClick={onCancel} className="btn btn-secondary">
          Cancel
        </button>
      </div>
    </form>
  );
};

export default AdminDashboard;
