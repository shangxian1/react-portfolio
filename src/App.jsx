import React, { useState } from 'react';
import Navbar from './components/NavBar.jsx';
import Hero from './components/Hero';
import ProjectGrid from './components/ProjectGrid';
import Experience from './components/Experience.jsx';
import ProjectDetail from './pages/ProjectDetail';

function App() {
  const [view, setView] = useState('home');

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-white selection:text-black">
      {/* Pass setView to Navbar so the 'Home' link can reset the view */}
      <Navbar setView={setView} />
      
      <main>
        {view === 'home' ? (
          <>
            <Hero />
            {/* Pass setView to ProjectGrid so clicking a card changes the view */}
            <ProjectGrid setView={setView} />
            <Experience />
          </>
        ) : (
          /* Show the detail page and pass a way to go back */
          <ProjectDetail projectId={view} setView={setView} />
        )}
      </main>
    </div>
  );
}

export default App;