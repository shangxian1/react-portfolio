import React from 'react';

export default function Navbar() {
  
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/90 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-8 h-20 flex items-center">
        <div className="flex gap-x-10 font-sans">
          
          <button 
            onClick={() => handleScroll('about')}
            className="text-gray-500 hover:text-white transition-colors cursor-pointer"
          >
            About
          </button>
          <button 
            onClick={() => handleScroll('projects')}
            className="text-gray-500 hover:text-white transition-colors cursor-pointer"
          >
            Projects
          </button>

          <button 
            onClick={() => handleScroll('experience')}
            className="text-gray-500 hover:text-white transition-colors cursor-pointer"
          >
            Experience
          </button>

          <button 
            onClick={() => handleScroll('contact')}
            className="text-gray-500 hover:text-white transition-colors cursor-pointer"
          >
            Contact
          </button>

        </div>
      </div>
    </nav>
  );
}