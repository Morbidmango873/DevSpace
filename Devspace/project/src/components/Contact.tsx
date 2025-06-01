import React from 'react';
import { MailIcon, GithubIcon, LinkedinIcon, TwitterIcon } from './Icons';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-12">
          <MailIcon className="text-green-400 mr-3" size={28} />
          <h2 className="text-3xl font-bold text-white">Get In Touch</h2>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-400 text-lg mb-8 text-center">
            Interessado em trabalhar junto me manda um oi, estou ansioso para ouvir e criar a sua ideia
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <a 
              href="mailto:fran.hauch@gmail.com" 
              className="flex items-center bg-gray-800 hover:bg-gray-700 text-white py-3 px-6 rounded-md transition-colors"
            >
              <MailIcon className="mr-2 text-green-400" size={20} />
              your.email@example.com
            </a>
          </div>
          
          <div className="flex justify-center space-x-6">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-colors"
            >
              <GithubIcon className="text-white" size={24} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-colors"
            >
              <LinkedinIcon className="text-white" size={24} />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-colors"
            >
              <TwitterIcon className="text-white" size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;