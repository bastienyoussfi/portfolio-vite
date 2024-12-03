import React from "react";
import { Project } from "../../types";
import { Github } from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="group relative bg-gray-900 overflow-hidden">
      <div className="aspect-w-16 aspect-h-9 bg-gray-800">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-semibold text-white group-hover:text-gray-300 transition">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm line-clamp-2">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs border border-gray-800 text-gray-400"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex space-x-4 pt-2">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition"
          >
            <Github size={20} />
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              Live Demo →
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
