import React from 'react';
import { GitForkIcon, StarIcon, CodeIcon, EyeIcon, GitBranchIcon, GithubIcon } from './Icons';
import ProjectCard from './ProjectCard';

const Projects: React.FC = () => {
  // Placeholder project data
  const projects = [
    {
      id: 1,
      title: 'MedCare',
      description: 'Uma aplicação full stack usanodo react, node, express, e MYsql.',
      languages: ['React', 'Node.js', 'Mysql'],
      demoUrl: '#',
      repoUrl: 'https://github.com/Morbidmango873/Medcare',
    },
    {
      id: 2,
      title: 'SitePessoal',
      description: 'Foi meu primeriro porjeto pesao onde meu objetivo foi apenas testar html e css',
      languages: ['HTML', 'CSS'],
      demoUrl: '#',
      repoUrl: 'https://github.com/Morbidmango873/SitePEssoal',
    },
    {
      id: 3,
      title: 'MatematicaDiscreta',
      description: 'Um projeto em Python para calculos de operções de conjuntos',
      languages: ['Python'],
      demoUrl: '#',
      repoUrl: 'https://github.com/Morbidmango873/MatematicaDiscreta/blob/main/Matematica.py',
    },
    {
      id: 4,
      title: 'MatematicaRecursão',
      description: 'Um projeto em python para resolver problmeas matemáticos usando recursão',
      languages: ['Python'],
      demoUrl: '#',
      repoUrl: 'https://github.com/Morbidmango873/MAtematicaRecursao',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-12">
          <GitBranchIcon className="text-green-400 mr-3" size={28} />
          <h2 className="text-3xl font-bold text-white">My Projects</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center bg-gray-700 hover:bg-gray-600 text-gray-200 font-medium py-2 px-6 rounded-md transition-colors duration-300"
          >
            <GithubIcon className="mr-2" size={18} />
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;