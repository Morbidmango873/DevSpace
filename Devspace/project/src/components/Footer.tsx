import React from 'react';
import { GithubIcon } from './Icons';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <GithubIcon className="text-green-400 mr-2" size={20} />
            <span className="font-mono text-lg text-white">dev/<span className="text-green-400">portfolio</span></span>
          </div>
          
          <div className="text-gray-500 text-sm">
            <p>© {year} Your Name. All rights reserved.</p>
          </div>
          
          <div className="text-gray-500 text-sm mt-4 md:mt-0">
            <p>Built with <span className="text-green-400">❤</span> using React</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;