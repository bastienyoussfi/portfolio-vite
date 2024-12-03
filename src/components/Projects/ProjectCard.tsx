import React from "react";
import { Project } from "../../types";
import { Github } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group relative bg-gray-900 rounded-lg overflow-hidden transform hover:scale-[1.02] transition-all">
      <div className="aspect-w-16 aspect-h-9">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="object-cover"
        />
      </div>
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-semibold text-white">{project.title}</h3>
        <p className="text-gray-400">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-sm rounded-full bg-purple-900/50 text-purple-300"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex space-x-4">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-purple-400 transition"
          >
            <Github size={20} />
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-purple-400 transition"
            >
              <span>Live Demo →</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
