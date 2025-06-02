import React from 'react';
import { TerminalIcon, GitBranchIcon, UserIcon } from './Icons';
import Eu from "../imagens/EU.jpg"

const Hero: React.FC = () => {
  return (
    <section id="about" className="min-h-screen flex items-center bg-gray-900 pt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="flex items-center mb-4">
              <TerminalIcon className="text-green-400 mr-2" size={24} />
              <h2 className="text-green-400 font-mono text-xl">Hello World!</h2>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              <span className="text-green-400">Francisco Hauch</span>
              <br />
              <span className="text-gray-300">Desenvolvedor de Software</span>
            </h1>
            
            <p className="text-gray-400 text-lg mb-8 max-w-lg">
              Bem vindo ao meu portifolio e espero que voce estejam gostando do que estao vendo, abaixo estão meus projetos não esqueça de dar uma olhada
            </p>
            
            <div className="flex space-x-4">
              <a 
                href="#projects" 
                className="bg-green-500 hover:bg-green-600 text-gray-900 font-medium py-2 px-6 rounded-md transition-colors duration-300 flex items-center"
              >
                <GitBranchIcon className="mr-2" size={18} />
                Projetos
              </a>
              <a 
                href="#contact" 
                className="bg-gray-800 hover:bg-gray-700 text-green-400 border border-green-400 font-medium py-2 px-6 rounded-md transition-colors duration-300 flex items-center"
              >
                <UserIcon className="mr-2" size={18} />
                Contato
              </a>
            </div>
          </div>
          
          <div className="lg:w-1/2 flex justify-center">
            <div className="w-72 h-72 rounded-full bg-gray-800 border-4 border-green-400 overflow-hidden">
              <img src={Eu} alt="Foto de Francisco Hauch" className="w-full h-full object-cover" />
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;