import React from 'react';
import { GitForkIcon, StarIcon, CodeIcon, EyeIcon, GitBranchIcon, GithubIcon } from './Icons';
import ProjectCard from './ProjectCard';

const Projects: React.FC = () => {
  // Placeholder project data
  const projects = [
    {
      id: 1,
      title: 'Project Alpha',
      description: 'A full-stack application with real-time updates and advanced user authentication.',
      languages: ['React', 'Node.js', 'MongoDB'],
      stars: 47,
      forks: 12,
      lastUpdate: '2 days ago',
      demoUrl: '#',
      repoUrl: '#',
    },
    {
      id: 2,
      title: 'Data Visualizer',
      description: 'Interactive data visualization dashboard with customizable charts and filters.',
      languages: ['Vue.js', 'D3.js', 'Firebase'],
      stars: 35,
      forks: 8,
      lastUpdate: '1 week ago',
      demoUrl: '#',
      repoUrl: '#',
    },
    {
      id: 3,
      title: 'AI Chat Interface',
      description: 'Natural language processing chat interface with machine learning capabilities.',
      languages: ['Python', 'TensorFlow', 'React'],
      stars: 92,
      forks: 24,
      lastUpdate: '3 days ago',
      demoUrl: '#',
      repoUrl: '#',
    },
    {
      id: 4,
      title: 'E-commerce Platform',
      description: 'Fully-featured online store with payment processing and inventory management.',
      languages: ['Next.js', 'Stripe', 'PostgreSQL'],
      stars: 28,
      forks: 5,
      lastUpdate: '1 month ago',
      demoUrl: '#',
      repoUrl: '#',
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