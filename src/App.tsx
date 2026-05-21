import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950 font-sans antialiased selection:bg-blue-200 dark:selection:bg-blue-900 transition-colors duration-300">
      <Hero />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
};

export default App;