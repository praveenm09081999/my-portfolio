import { useState,useRef } from 'react';
import About from '@/components/about';
import Projects from '@/components/projects';
import Contacts from '@/components/contacts';
import Hero from '@/components/hero';

export default function Home(): JSX.Element {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const aboutRef = useRef<HTMLDivElement>(null);

  return (
    <div className={darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}>
      {/* Toggle Button */}
      <div className="fixed top-4 right-4 z-20">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full bg-gray-300 dark:bg-gray-700 transition-all hover:rotate-180"
        >
          {darkMode ? '☀️' : '🌙'}
        </button>
      </div>

      {/* Hero Section */}
      <Hero aboutRef={aboutRef} darkMode={darkMode}/>

      {/* About Section */}
      <About aboutRef={aboutRef} darkMode={darkMode}/>

      {/* Projects Section */}
      <Projects />

      {/* Contact Section */}
      <Contacts />

      <footer className="text-center py-6 text-sm text-gray-400">
        Built with NextJS.
      </footer>
    </div>
  );
}