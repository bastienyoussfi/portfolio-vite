import React, { useState } from "react";
import ProjectCard from "../components/Projects/ProjectCard";
import { Project } from "../types";

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>("all");

  const projects: Project[] = [
    {
      id: "1",
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce platform built with React, Node.js, and PostgreSQL",
      technologies: ["React", "Node.js", "PostgreSQL", "Redux"],
      imageUrl: "/projects/ecommerce.jpg",
      githubUrl: "https://github.com/yourusername/ecommerce",
      liveUrl: "https://ecommerce-demo.com",
    },
    // Add more projects here
  ];

  const categories = ["all", "frontend", "backend", "fullstack", "mobile"];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.technologies.includes(filter));

  return (
    <div className="min-h-screen bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-8">My Projects</h1>

        {/* Filter Buttons */}
        <div className="flex space-x-4 mb-8 overflow-x-auto pb-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full capitalize transition ${
                filter === category
                  ? "bg-purple-600 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;