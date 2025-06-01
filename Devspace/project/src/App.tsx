import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { GithubIcon } from './components/Icons';

function App() {
  // Update document title
  useEffect(() => {
    document.title = 'Dev Portfolio';
  }, []);

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Header />
      <main>
        <Hero />
        <Projects />
        <Contact />
      </main>
      <Footer />
      
      {/* Floating GitHub Corner */}
      <a 
        href="https://github.com" 
        target="_blank"
        rel="noopener noreferrer"
        className="fixed top-0 right-0 z-50 hidden md:block"
        aria-label="View source on GitHub"
      >
        <div className="w-20 h-20 bg-gray-900 rotate-45 origin-bottom-left absolute -top-10 -right-10">
          <div className="absolute -rotate-45 bottom-5 right-7">
            <GithubIcon className="text-green-400" size={28} />
          </div>
        </div>
      </a>
    </div>
  );
}

export default App;