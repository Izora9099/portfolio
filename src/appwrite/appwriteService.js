import { Account, Databases, ID } from 'appwrite';
import client from './config';

export class AppwriteService {
    account;
    databases;
    databaseId = '681c086300399ca68598';
    projectsCollectionId = '681c0c6900322cf134e3';
    testimonialsCollectionId = '681c0c6900322cf134e3';

    constructor() {
        this.account = new Account(client);
        this.databases = new Databases(client);
    }

    // Authentication methods
    async login({ email, password }) {
        try {
            const session = await this.account.createSession(email, password);
            return session;
        } catch (error) {
            console.error('Error logging in:', error);
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.error('Error getting current user:', error);
            return null;
        }
    }

    async logout() {
        try {
            return await this.account.deleteSession('current');
        } catch (error) {
            console.error('Error logging out:', error);
            throw error;
        }
    }

    // Project methods
    async createProject(data) {
        try {
            return await this.databases.createDocument(
                this.databaseId,
                this.projectsCollectionId,
                ID.unique(),
                data
            );
        } catch (error) {
            console.error('Error creating project:', error);
            throw error;
        }
    }

    async updateProject(projectId, data) {
        try {
            return await this.databases.updateDocument(
                this.databaseId,
                this.projectsCollectionId,
                projectId,
                data
            );
        } catch (error) {
            console.error('Error updating project:', error);
            throw error;
        }
    }

    async deleteProject(projectId) {
        try {
            return await this.databases.deleteDocument(
                this.databaseId,
                this.projectsCollectionId,
                projectId
            );
        } catch (error) {
            console.error('Error deleting project:', error);
            throw error;
        }
    }

    async listProjects() {
        try {
            return await this.databases.listDocuments(
                this.databaseId,
                this.projectsCollectionId
            );
        } catch (error) {
            console.error('Error listing projects:', error);
            throw error;
        }
    }

    // Testimonial methods
    async createTestimonial(data) {
        try {
            return await this.databases.createDocument(
                this.databaseId,
                this.testimonialsCollectionId,
                ID.unique(),
                {
                    ...data,
                    approved: false,
                    createdAt: new Date().toISOString()
                }
            );
        } catch (error) {
            console.error('Error creating testimonial:', error);
            throw error;
        }
    }

    async updateTestimonial(testimonialId, data) {
        try {
            return await this.databases.updateDocument(
                this.databaseId,
                this.testimonialsCollectionId,
                testimonialId,
                data
            );
        } catch (error) {
            console.error('Error updating testimonial:', error);
            throw error;
        }
    }

    async approveTestimonial(testimonialId) {
        try {
            return await this.updateTestimonial(testimonialId, {
                approved: true,
                modifiedAt: new Date().toISOString()
            });
        } catch (error) {
            console.error('Error approving testimonial:', error);
            throw error;
        }
    }

    async listTestimonials(onlyApproved = false) {
        try {
            const testimonials = await this.databases.listDocuments(
                this.databaseId,
                this.testimonialsCollectionId
            );
            if (onlyApproved) {
                return {
                    ...testimonials,
                    documents: testimonials.documents.filter(doc => doc.approved)
                };
            }
            return testimonials;
        } catch (error) {
            console.error('Error listing testimonials:', error);
            throw error;
        }
    }

    // Database methods
    async createDocument(databaseId, collectionId, data) {
        try {
            return await this.databases.createDocument(
                databaseId,
                collectionId,
                ID.unique(),
                data
            );
        } catch (error) {
            console.error('Error creating document:', error);
            throw error;
        }
    }

    async listDocuments(databaseId, collectionId) {
        try {
            return await this.databases.listDocuments(databaseId, collectionId);
        } catch (error) {
            console.error('Error listing documents:', error);
            throw error;
        }
    }
}

const appwriteService = new AppwriteService();
export default appwriteService;
