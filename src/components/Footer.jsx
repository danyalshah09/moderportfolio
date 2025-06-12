import React from 'react';
import { Linkedin, Github, Mail } from 'lucide-react';
// Footer Component
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                dannyDev.
              </div>
              <p className="text-gray-400 leading-relaxed">
                Frontend Developer passionate about creating amazing web experiences
                with modern technologies and clean code.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-gray-600 transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Danyal Shah. All rights reserved. Built with React & Tailwind CSS.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;