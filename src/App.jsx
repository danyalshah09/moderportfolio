import React, { useState, useEffect } from 'react';

import {
  Menu, X, ChevronDown, ExternalLink, Github, Linkedin,
  Mail, Phone, MapPin, Star, Calendar, Briefcase,
  Code, Palette, Smartphone, Globe, Download, Send
} from 'lucide-react';
import SEO from './components/SEO';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/about-section';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';
import Certifications from './components/Certification';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Main App Component
const App = () => {
  const [darkMode, setDarkMode] = useState(() => {
    // Get the initial theme from localStorage or fall back to system preference
    if (typeof window !== 'undefined') {
      return localStorage.theme === 'dark' ||
        (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  // Update the HTML element class whenever darkMode changes
  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.theme = darkMode ? 'dark' : 'light';
  }, [darkMode]);

  // Listen for system preference changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleChange = () => {
      // Only update if the user hasn't set a manual preference
      if (!('theme' in localStorage)) {
        setDarkMode(mediaQuery.matches);
      }
    };

    // Add the listener
    mediaQuery.addEventListener('change', handleChange);

    // Clean up
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Toggle between light, dark, and system preference
  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.theme = newDarkMode ? 'dark' : 'light';
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode ? 'bg-black' : 'bg-white'
    }`}>
      <SEO
        title="Danyal Shah - Frontend Developer Portfolio"
        description="Experienced Frontend Developer specializing in React, JavaScript, and modern web technologies. View my portfolio and get in touch for your next project."
        keywords="frontend developer, react developer, javascript, web development, portfolio, UI/UX"
      />
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Experience />
      <Certifications/>
      <Contact />
      <Footer />
    </div>
  );
};

export default App;