import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Monitor } from 'lucide-react';

// Built-in theme hook
const useTheme = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [themePreference, setThemePreference] = useState('system');

  const setTheme = (theme) => {
    setThemePreference(theme);
    if (theme === 'dark') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    } else if (theme === 'light') {
      setDarkMode(false);
      document.documentElement.classList.remove('dark');
    } else {
      // System preference
      const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setDarkMode(systemDark);
      document.documentElement.classList.toggle('dark', systemDark);
    }
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      if (themePreference === 'system') {
        setDarkMode(mediaQuery.matches);
        document.documentElement.classList.toggle('dark', mediaQuery.matches);
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    handleChange(); // Initial check

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [themePreference]);

  return { darkMode, themePreference, setTheme };
};

const Header = () => {
  const { darkMode, themePreference, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showThemeSelector, setShowThemeSelector] = useState(false);

  // Get the appropriate logo based on theme
  const getLogoSrc = () => {
    return darkMode ? '/danyalwhite.jpg' : '/danyalblack.jpg';
  };

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
        setShowThemeSelector(false);
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
    setTheme(theme);
    setShowThemeSelector(false);
  };

  // Toggle theme selector visibility
  const toggleThemeSelector = () => {
    setShowThemeSelector(!showThemeSelector);
  };

  // Get theme icon based on current preference
  const getThemeIcon = () => {
    switch (themePreference) {
      case 'light':
        return <Sun size={18} />;
      case 'dark':
        return <Moon size={18} />;
      case 'system':
        return <Monitor size={18} />;
      default:
        return <Sun size={18} />;
    }
  };

  return (
    <>
      {/* Fixed Header */}
      <header className="fixed top-0 w-full z-50 flex justify-between px-2 sm:px-6 ">
        <nav
          className={`
            w-full sm:w-11/12 md:w-10/12 lg:w-4/5 xl:w-3/4 2xl:w-2/3
            max-w-7xl
            mt-2 sm:mt-4 mx-auto px-3 sm:px-6 lg:px-8 xl:px-10 py-3 sm:py-4
            rounded-xl sm:rounded-2xl transition-all duration-300
            ${isScrolled
              ? 'bg-white/20 dark:bg-gray-900/20 backdrop-blur-lg border border-white/30 dark:border-gray-700/30 shadow-2xl'
              : 'bg-white/10 dark:bg-gray-900/10 backdrop-blur-md border border-white/20 dark:border-gray-700/20 shadow-lg'
            }
            contain-layout-style will-change-auto flex flex-row
          `}
        >
          <div className="flex items-center justify-between w-full">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img
                src={getLogoSrc()}
                alt="Danyal Logo"
                className="h-7 sm:h-8 md:h-9 lg:h-10 xl:h-12 w-auto object-contain rounded-lg transition-all duration-300"
                onError={(e) => {
                  e.target.style.display = 'none';
                  const nextEl = e.target.nextElementSibling;
                  if (nextEl) {
                    nextEl.style.display = 'block';
                  }
                }}
              />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-2 lg:space-x-4 xl:space-x-6 2xl:space-x-8 ml-4 lg:ml-8 xl:ml-12">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-sm lg:text-base xl:text-lg 2xl:text-xl text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 hover:scale-105 font-medium px-2 lg:px-3 xl:px-4 py-1 lg:py-2 rounded-lg hover:bg-white/10 dark:hover:bg-gray-700/10 whitespace-nowrap"
                >
                  {item}
                </button>
              ))}

              {/* Theme Toggle Button - Desktop */}
              <div className="relative theme-selector ml-2 lg:ml-4 xl:ml-6">
                <button
                  onClick={toggleThemeSelector}
                  className="p-2 lg:p-2.5 xl:p-3 rounded-full bg-white/20 dark:bg-gray-700/20 backdrop-blur-sm border border-white/30 dark:border-gray-600/30 text-gray-700 dark:text-gray-300 hover:bg-white/30 dark:hover:bg-gray-600/30 transition-all duration-200 hover:scale-110"
                  aria-label="Toggle theme selector"
                >
                  {getThemeIcon()}
                </button>

                {/* Theme Selector Dropdown */}
                {showThemeSelector && (
                  <div className="absolute right-0 mt-6 w-44 lg:w-48 py-2 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 z-50 theme-selector">
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
                  className="p-2 rounded-lg bg-white/20 dark:bg-gray-700/20 backdrop-blur-sm border border-white/30 dark:border-gray-600/30 text-gray-700 dark:text-gray-300 hover:bg-white/30 dark:hover:bg-gray-600/30 transition-all duration-200 touch-manipulation"
                  aria-label="Toggle theme selector"
                >
                  {getThemeIcon()}
                </button>

                {/* Mobile Theme Selector Dropdown */}
                {showThemeSelector && (
                  <div className="absolute right-0 mt-2 w-40 sm:w-48 py-2 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 z-50 theme-selector">
                    <button
                      onClick={() => handleThemeChange('light')}
                      className="flex items-center w-full px-3 sm:px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <Sun size={16} className="mr-2" />
                      <span>Light</span>
                      {themePreference === 'light' && (
                        <span className="ml-auto text-blue-600">✓</span>
                      )}
                    </button>
                    <button
                      onClick={() => handleThemeChange('dark')}
                      className="flex items-center w-full px-3 sm:px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <Moon size={16} className="mr-2" />
                      <span>Dark</span>
                      {themePreference === 'dark' && (
                        <span className="ml-auto text-blue-600">✓</span>
                      )}
                    </button>
                    <button
                      onClick={() => handleThemeChange('system')}
                      className="flex items-center w-full px-3 sm:px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
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
                className="p-2 rounded-lg bg-white/20 dark:bg-gray-700/20 backdrop-blur-sm border border-white/30 dark:border-gray-600/30 text-gray-700 dark:text-gray-300 hover:bg-white/30 dark:hover:bg-gray-600/30 transition-all duration-200 touch-manipulation active:scale-95"
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
            className="absolute top-16 sm:top-20 left-2 right-2 sm:left-4 sm:right-4 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl rounded-2xl border border-white/30 dark:border-gray-700/30 shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 sm:p-6">
              <div className="space-y-1">
                {navItems.map((item, index) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="block w-full text-left text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 py-3 sm:py-4 px-3 sm:px-4 rounded-xl hover:bg-blue-50 dark:hover:bg-gray-800/50 transition-all duration-200 text-base sm:text-lg font-medium touch-manipulation animate-slideInFromTop"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {item}
                  </button>
                ))}
              </div>

              {/* Mobile Theme Settings */}
              <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-200 dark:border-gray-700">
                <div className="flex flex-col space-y-3 sm:space-y-4">
                  <span className="text-gray-700 dark:text-gray-300 font-medium text-sm sm:text-base">
                    Theme Settings
                  </span>
                  <div className="grid grid-cols-3 gap-2 sm:gap-3">
                    <button
                      onClick={() => handleThemeChange('light')}
                      className={`flex flex-col items-center justify-between p-3 sm:p-4 rounded-xl transition-all duration-200 touch-manipulation ${
                        themePreference === 'light'
                          ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300'
                          : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
                      }`}
                    >
                      <Sun size={20} className="mb-1 sm:mb-2" />
                      <span className="text-xs sm:text-sm font-medium">Light</span>
                    </button>
                    <button
                      onClick={() => handleThemeChange('dark')}
                      className={`flex flex-col items-center justify-center p-3 sm:p-4 rounded-xl transition-all duration-200 touch-manipulation ${
                        themePreference === 'dark'
                          ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300'
                          : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
                      }`}
                    >
                      <Moon size={20} className="mb-1 sm:mb-2" />
                      <span className="text-xs sm:text-sm font-medium">Dark</span>
                    </button>
                    <button
                      onClick={() => handleThemeChange('system')}
                      className={`flex flex-col items-center justify-center p-3 sm:p-4 rounded-xl transition-all duration-200 touch-manipulation ${
                        themePreference === 'system'
                          ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300'
                          : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
                      }`}
                    >
                      <Monitor size={20} className="mb-1 sm:mb-2" />
                      <span className="text-xs sm:text-sm font-medium">System</span>
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