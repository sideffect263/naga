import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProjectsSection from './components/ProjectsSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
import ScrollToTop from './components/ScrollToTop';
import ReactGA from 'react-ga';
import './App.css';

const TRACKING_ID = "G-9946VW8P5L"; // Replace with your Google Analytics tracking ID

const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    ReactGA.initialize(TRACKING_ID);
    ReactGA.pageview(window.location.pathname + window.location.search);
    
    // Apply theme class to body
    document.body.className = darkMode ? 'dark-theme' : 'light-theme';
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return(
    <div className="app-container">
      <Header />
      <ThemeToggle darkMode={darkMode} toggleTheme={toggleTheme} />
      <ScrollToTop />
      <Hero />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default App;
