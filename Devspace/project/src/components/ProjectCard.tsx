import React from 'react';
import { StarIcon, GitForkIcon, CodeIcon, EyeIcon } from './Icons';

interface ProjectProps {
  project: {
    id: number;
    title: string;
    description: string;
    languages: string[];
    stars: number;
    forks: number;
    lastUpdate: string;
    demoUrl: string;
    repoUrl: string;
  };
}

const ProjectCard: React.FC<ProjectProps> = ({ project }) => {
  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-700 hover:border-green-400 transition-all duration-300 hover:shadow-lg hover:shadow-green-400/10 h-full">
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 font-mono flex items-center">
          <CodeIcon className="text-green-400 mr-2\" size={20} />
          {project.title}
        </h3>
        
        <p className="text-gray-400 mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.languages.map((lang, index) => (
            <span 
              key={index} 
              className="bg-gray-800 text-green-400 text-xs font-medium px-2 py-1 rounded"
            >
              {lang}
            </span>
          ))}
        </div>
        
        <div className="flex items-center text-gray-500 text-sm mb-4">
          <div className="flex items-center mr-4">
            <StarIcon className="text-yellow-400 mr-1" size={16} />
            <span>{project.stars}</span>
          </div>
          <div className="flex items-center mr-4">
            <GitForkIcon className="text-blue-400 mr-1" size={16} />
            <span>{project.forks}</span>
          </div>
          <div className="ml-auto">
            <span>Updated {project.lastUpdate}</span>
          </div>
        </div>
        
        <div className="flex gap-3 mt-4">
          <a 
            href={project.demoUrl}
            className="flex-1 bg-gray-800 hover:bg-gray-700 text-center text-gray-300 py-2 rounded transition-colors font-medium text-sm flex items-center justify-center"
          >
            <EyeIcon size={16} className="mr-1" />
            Live Demo
          </a>
          <a 
            href={project.repoUrl}
            className="flex-1 bg-gray-800 hover:bg-gray-700 text-center text-gray-300 py-2 rounded transition-colors font-medium text-sm flex items-center justify-center"
          >
            <CodeIcon size={16} className="mr-1" />
            View Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;