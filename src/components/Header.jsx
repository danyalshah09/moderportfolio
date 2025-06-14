import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Monitor } from 'lucide-react';

const Header = ({ darkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showThemeSelector, setShowThemeSelector] = useState(false);

  // Get the current theme preference
  const getCurrentTheme = () => {
    if (typeof window === 'undefined') return 'light';

    if (!('theme' in localStorage)) {
      return 'system';
    }
    return localStorage.theme;
  };

  const [themePreference, setThemePreference] = useState(getCurrentTheme());

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when window is resized to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Close theme selector when clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showThemeSelector && !event.target.closest('.theme-selector')) {
        setShowThemeSelector(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showThemeSelector]);

  const navItems = ['About', 'Services', 'Portfolio', 'Experience', 'Certifications', 'Contact'];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  // Handle theme selection
  const handleThemeChange = (theme) => {
    setThemePreference(theme);

    if (theme === 'dark') {
      localStorage.theme = 'dark';
      document.documentElement.classList.add('dark');
      if (!darkMode) toggleDarkMode();
    } else if (theme === 'light') {
      localStorage.theme = 'light';
      document.documentElement.classList.remove('dark');
      if (darkMode) toggleDarkMode();
    } else if (theme === 'system') {
      localStorage.removeItem('theme');
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      document.documentElement.classList.toggle('dark', systemPrefersDark);
      if (darkMode !== systemPrefersDark) toggleDarkMode();
    }

    setShowThemeSelector(false);
  };

  // Toggle theme selector visibility
  const toggleThemeSelector = () => {
    setShowThemeSelector(!showThemeSelector);
  };

  return (
    <>
      {/* Fixed Header */}
      <header className="fixed top-0 w-full z-50 flex justify-center px-4 sm:px-6">
        <nav
          className={`
            w-full sm:w-11/12 md:w-10/12 lg:w-3/4 xl:w-2/3 2xl:w-1/2
            mt-2 sm:mt-4 mx-auto px-4 sm:px-6 py-3 sm:py-4
            rounded-xl sm:rounded-2xl transition-all duration-300
            ${isScrolled
              ? 'bg-white/20 dark:bg-gray-900/20 backdrop-blur-lg border border-white/30 dark:border-gray-700/30 shadow-2xl'
              : 'bg-white/10 dark:bg-gray-900/10 backdrop-blur-md border border-white/20 dark:border-gray-700/20 shadow-lg'
            }
            contain-layout-style will-change-auto
          `}
        >
          <div className="flex items-center justify-between w-full">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img
                src="/danyalblack.jpg"
                alt="Danyal Logo"
                className="h-8 sm:h-10 w-auto object-contain rounded-lg"
                onError={(e) => {
                  e.target.style.display = 'none';
                  const nextEl = e.target.nextElementSibling;
                  if (nextEl) {
                    nextEl.style.display = 'block';
                  }
                }}
              />
              <div
                className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hidden"
              >
                Dannydev.
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-sm lg:text-base text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 hover:scale-105 font-medium px-2 py-1 rounded-lg hover:bg-white/10 dark:hover:bg-gray-700/10"
                >
                  {item}
                </button>
              ))}

              {/* Theme Toggle Button - Desktop */}
              <div className="relative theme-selector">
              <button
                  onClick={toggleThemeSelector}
                className="p-2 rounded-full bg-white/20 dark:bg-gray-700/20 backdrop-blur-sm border border-white/30 dark:border-gray-600/30 text-gray-700 dark:text-gray-300 hover:bg-white/30 dark:hover:bg-gray-600/30 transition-all duration-200 hover:scale-110 ml-2"
                  aria-label="Toggle theme selector"
                >
                  {themePreference === 'light' && <Sun size={18} />}
                  {themePreference === 'dark' && <Moon size={18} />}
                  {themePreference === 'system' && <Monitor size={18} />}
                </button>

                {/* Theme Selector Dropdown */}
                {showThemeSelector && (
                  <div className="absolute right-0 mt-2 w-48 py-2 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 z-50 theme-selector">
                    <button
                      onClick={() => handleThemeChange('light')}
                      className="flex items-center w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <Sun size={16} className="mr-2" />
                      <span>Light</span>
                      {themePreference === 'light' && (
                        <span className="ml-auto text-blue-600">✓</span>
                      )}
                    </button>
                    <button
                      onClick={() => handleThemeChange('dark')}
                      className="flex items-center w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <Moon size={16} className="mr-2" />
                      <span>Dark</span>
                      {themePreference === 'dark' && (
                        <span className="ml-auto text-blue-600">✓</span>
                      )}
                    </button>
                    <button
                      onClick={() => handleThemeChange('system')}
                      className="flex items-center w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <Monitor size={16} className="mr-2" />
                      <span>System</span>
                      {themePreference === 'system' && (
                        <span className="ml-auto text-blue-600">✓</span>
                      )}
              </button>
                  </div>
                )}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-2 flex-shrink-0">
              {/* Theme Toggle Button - Mobile */}
              <div className="relative theme-selector">
                <button
                  onClick={toggleThemeSelector}
                  className="p-2 rounded-lg bg-white/20 dark:bg-gray-700/20 backdrop-blur-sm border border-white/30 dark:border-gray-600/30 text-gray-700 dark:text-gray-300 hover:bg-white/30 dark:hover:bg-gray-600/30 transition-all duration-200"
                  aria-label="Toggle theme selector"
                >
                  {themePreference === 'light' && <Sun size={18} />}
                  {themePreference === 'dark' && <Moon size={18} />}
                  {themePreference === 'system' && <Monitor size={18} />}
                </button>

                {/* Mobile Theme Selector Dropdown */}
                {showThemeSelector && (
                  <div className="absolute right-0 mt-2 w-48 py-2 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 z-50 theme-selector">
                    <button
                      onClick={() => handleThemeChange('light')}
                      className="flex items-center w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <Sun size={16} className="mr-2" />
                      <span>Light</span>
                      {themePreference === 'light' && (
                        <span className="ml-auto text-blue-600">✓</span>
                      )}
                    </button>
                    <button
                      onClick={() => handleThemeChange('dark')}
                      className="flex items-center w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <Moon size={16} className="mr-2" />
                      <span>Dark</span>
                      {themePreference === 'dark' && (
                        <span className="ml-auto text-blue-600">✓</span>
                      )}
                    </button>
              <button
                      onClick={() => handleThemeChange('system')}
                      className="flex items-center w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <Monitor size={16} className="mr-2" />
                      <span>System</span>
                      {themePreference === 'system' && (
                        <span className="ml-auto text-blue-600">✓</span>
                      )}
              </button>
                  </div>
                )}
              </div>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg bg-white/20 dark:bg-gray-700/20 backdrop-blur-sm border border-white/30 dark:border-gray-600/30 text-gray-700 dark:text-gray-300 hover:bg-white/30 dark:hover:bg-gray-600/30 transition-all duration-200 touch-manipulation"
                aria-label="Toggle mobile menu"
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-40 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/20 dark:bg-black/40 backdrop-blur-sm" />

          {/* Menu Content */}
          <div
            className="absolute top-20 left-4 right-4 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl rounded-2xl border border-white/30 dark:border-gray-700/30 shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="space-y-1">
                {navItems.map((item, index) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="block w-full text-left text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 py-4 px-4 rounded-xl hover:bg-blue-50 dark:hover:bg-gray-800/50 transition-all duration-200 text-lg font-medium touch-manipulation animate-slideInFromTop"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {item}
                  </button>
                ))}
              </div>

              {/* Mobile Theme Settings */}
              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                <div className="flex flex-col space-y-4">
                  <span className="text-gray-700 dark:text-gray-300 font-medium">
                    Theme Settings
                  </span>
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      onClick={() => handleThemeChange('light')}
                      className={`flex flex-col items-center justify-center p-3 rounded-xl ${
                        themePreference === 'light'
                          ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300'
                          : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
                      } transition-all duration-200`}
                    >
                      <Sun size={24} className="mb-2" />
                      <span className="text-sm font-medium">Light</span>
                    </button>
                    <button
                      onClick={() => handleThemeChange('dark')}
                      className={`flex flex-col items-center justify-center p-3 rounded-xl ${
                        themePreference === 'dark'
                          ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300'
                          : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
                      } transition-all duration-200`}
                    >
                      <Moon size={24} className="mb-2" />
                      <span className="text-sm font-medium">Dark</span>
                    </button>
                  <button
                      onClick={() => handleThemeChange('system')}
                      className={`flex flex-col items-center justify-center p-3 rounded-xl ${
                        themePreference === 'system'
                          ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300'
                          : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
                      } transition-all duration-200`}
                    >
                      <Monitor size={24} className="mb-2" />
                      <span className="text-sm font-medium">System</span>
                  </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;