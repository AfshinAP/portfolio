import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import FeaturedContent from './components/FeaturedContent';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-qa-dark text-slate-100 font-sans">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <FeaturedContent />
      </main>
      <Contact />
    </div>
  );
}

export default App;