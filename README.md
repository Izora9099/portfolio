# Personal Portfolio Website

## Overview

A modern, responsive portfolio website built with React and Appwrite, showcasing projects, skills, and testimonials. Features a clean design with smooth animations and interactive elements.

## 🚀 Live Demo

- Frontend: [https://portfolio-izora9099.vercel.app/](https://portfolio-izora9099.vercel.app/)

## ✨ Features

- **Dynamic Portfolio Display**: Showcase projects with images, descriptions, and tech stacks
- **Testimonials Section**: Display client reviews with ratings and avatars
- **Responsive Design**: Optimized for all device sizes
- **Modern UI/UX**: Smooth animations and transitions
- **Backend Integration**: Powered by Appwrite for content management

## 🛠️ Tech Stack

- **Frontend**:

  - React.js
  - CSS3 with custom animations
  - Swiper.js for carousels
  - React Icons
  - EmailJS for contact form
- **Backend**:

  - Appwrite (Database & Storage)
  - REST API integration

## 🔧 Setup & Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Izora9099/portfolio.git
   cd portfolio
   ```
2. Install dependencies:

   ```bash
   npm install
   ```
3. Configure Appwrite:

   - Create an Appwrite project
   - Set up collections for Projects and Testimonials
   - Update `src/appwrite/config.js` with your credentials
4. Start the development server:

   ```bash
   npm start
   ```

## 📁 Project Structure

```
src/
├── appwrite/          # Appwrite configuration and services
├── components/        # React components
│   ├── portfolio/     # Portfolio section
│   ├── testimonial/   # Testimonials section
│   └── common/        # Shared components
├── assets/           # Images and static files
└── App.jsx           # Main application component
```

## 📝 Collection Structure

### Projects Collection

- `title`: Project name
- `description`: Project details
- `imageURL`: Project screenshot
- `techStack`: Array of technologies used
- `projectLink`: Live demo or repository link

### Testimonials Collection

- `name`: Client name
- `rating`: Numeric rating
- `text`: Review content
- `approved`: Boolean for moderation

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/Izora9099/portfolio/issues).

## 👤 Author

**Ndifon Lemuel Ashu-Mbi**

- LinkedIn: [Ndifon Lemuel](https://www.linkedin.com/in/ndifon-lemuel-ashu-mbi-0a2264244/ "LinkedIn profile")
- GitHub: [Ndifon Lemuel](https://github.com/Izora9099 "Github profile")

## 📄 License

This project is MIT licensed.
