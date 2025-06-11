import React, { useState, useEffect, useRef } from 'react';
import {
  Menu, X, ChevronDown, ExternalLink, Github, Linkedin,
  Mail, Phone, MapPin, Star, Calendar, Briefcase,
  Code, Palette, Smartphone, Globe, Download, Send
} from 'lucide-react';
import SEO from './components/SEO';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';
import Certifications from './components/Certification';
import Contact from './components/Contact';
import Footer from './components/Footer';
// Main App Component
const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Apply dark mode class to document
  useEffect(() => {
    console.log('Dark mode changed to:', darkMode); // Debug log
    if (darkMode) {
      document.documentElement.classList.add('dark');
      console.log('Added dark class to html element');
    } else {
      document.documentElement.classList.remove('dark');
      console.log('Removed dark class from html element');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    console.log('Toggle clicked, current darkMode:', darkMode); // Debug log
    setDarkMode(!darkMode);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
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