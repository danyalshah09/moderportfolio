// App.js
import React from 'react';
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
import ScrollToTopButton from './ui_elements/scroll-to-top-button';
// import Skills from './components/Skills';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';

// Main App Content Component (uses the theme context)
const AppContent = () => {
  const { darkMode } = useTheme();

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode ? 'bg-black text-white' : 'bg-white text-black'
    }`}>
      <SEO
        title="Danyal Shah - Frontend Developer Portfolio"
        description="Experienced Frontend Developer specializing in React, JavaScript, and modern web technologies. View my portfolio and get in touch for your next project."
        keywords="frontend developer, react developer, javascript, web development, portfolio, UI/UX"
      />
      <Header />
      <Hero />
      <ScrollToTopButton />

      <About />
      <Services />
      <Portfolio />
      <Experience />
      {/* <Skills/> */}
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
};

// Main App Component wrapped with ThemeProvider
const App = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;