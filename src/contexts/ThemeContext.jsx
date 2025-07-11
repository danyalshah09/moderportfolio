// contexts/ThemeContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

// Create the context with a default value
const defaultContextValue = {
  darkMode: false,
  themePreference: 'system',
  setTheme: () => {},
  toggleDarkMode: () => {}
};

const ThemeContext = createContext(defaultContextValue);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    console.error('useTheme must be used within a ThemeProvider');
    // Return default values to prevent crashes
    return defaultContextValue;
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const toggleDarkMode = () => {
    const newDarkMode = !theme === 'dark';
    setTheme(newDarkMode ? 'dark' : 'light');
  };

  const value = {
    darkMode: theme === 'dark',
    theme,
    toggleDarkMode,
    setTheme
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};