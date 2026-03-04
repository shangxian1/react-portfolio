import React, { useState, useRef } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero';
import ProjectGrid from './components/ProjectGrid';
import Timeline from './components/Timeline';
import ProjectDetail from './pages/ProjectDetail';
import Experience from './pages/Experience.jsx';
import Contact from './components/Contact';

function App() {
  const [view, setView] = useState('home');

  // Create refs for each section
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const experienceRef = useRef(null);
  const contactRef = useRef(null);

  const sectionRefs = { aboutRef, projectsRef, experienceRef, contactRef };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-white selection:text-black">
      <Navbar setView={setView} sectionRefs={sectionRefs} />

      <main>
        {view === 'home' ? (
          <>
            <section ref={aboutRef}>
              <Hero />
            </section>

            <section ref={projectsRef}>
              <ProjectGrid setView={setView} />
            </section>

            <section ref={experienceRef}>
              <Experience />
            </section>

            <section ref={contactRef}>
              <Contact />
            </section>
          </>
        ) : (
          <ProjectDetail projectId={view} setView={setView} />
        )}
      </main>
    </div>
  );
}

export default App;