import React from 'react';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <main className="min-h-screen bg-white dark:bg-black font-sans antialiased selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black transition-colors duration-300">
      <Hero />
      <Experience />
      <Education />
      <Projects />
      <Contact />
    </main>
  );
};

export default App;