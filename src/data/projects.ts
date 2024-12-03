import { Project } from "../types";

export const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce platform with real-time inventory management, payment processing, and admin dashboard. Built with modern technologies and best practices.",
    technologies: ["React", "Node.js", "PostgreSQL", "Redis", "TypeScript"],
    imageUrl: "/projects/ecommerce.jpg",
    githubUrl: "https://github.com/yourusername/ecommerce",
    liveUrl: "https://ecommerce-demo.com",
  },
  {
    id: "2",
    title: "AI Task Manager",
    description:
      "Smart task management application that uses AI to categorize, prioritize, and suggest optimal task scheduling. Features natural language processing for task input.",
    technologies: ["Next.js", "Python", "TensorFlow", "MongoDB"],
    imageUrl: "/projects/task-manager.jpg",
    githubUrl: "https://github.com/yourusername/ai-task-manager",
    liveUrl: "https://ai-taskmanager.demo.com",
  },
  {
    id: "3",
    title: "Real-time Analytics Dashboard",
    description:
      "Interactive dashboard for real-time data visualization and analysis. Features customizable widgets, data filtering, and export capabilities.",
    technologies: ["React", "D3.js", "WebSocket", "Express"],
    imageUrl: "/projects/analytics.jpg",
    githubUrl: "https://github.com/yourusername/analytics-dashboard",
  },
];