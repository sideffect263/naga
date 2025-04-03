import React, { useEffect, useState, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import ThemeToggle from './components/ThemeToggle';
import ScrollToTop from './components/ScrollToTop';
import SEO from './components/SEO';
import ReactGA from 'react-ga';
import './App.css';

// Lazy load non-critical components
const ProjectsSection = lazy(() => import('./components/ProjectsSection'));
const ProjectDetail = lazy(() => import('./components/ProjectDetail'));
const AboutSection = lazy(() => import('./components/AboutSection'));
const ContactSection = lazy(() => import('./components/ContactSection'));
const Footer = lazy(() => import('./components/Footer'));

// Loading component for suspense fallback
const LoadingComponent = () => (
  <div className="loading-container">
    <div className="loading-spinner"></div>
  </div>
);

const TRACKING_ID = "G-9946VW8P5L"; // Replace with your Google Analytics tracking ID

// Home page component that contains all sections
const HomePage = ({ darkMode, toggleTheme, activeSection, setActiveSection }) => {
  return (
    <>
      <SEO 
        sectionName={
          activeSection === 'home' ? '' : 
          activeSection.charAt(0).toUpperCase() + activeSection.slice(1)
        }
        description={getSectionSeo(activeSection).description}
        keywords={getSectionSeo(activeSection).keywords}
      />
      <Header />
      <ThemeToggle darkMode={darkMode} toggleTheme={toggleTheme} />
      <ScrollToTop />
      <Hero />
      
      <Suspense fallback={<LoadingComponent />}>
        <ProjectsSection />
      </Suspense>
      
      <Suspense fallback={<LoadingComponent />}>
        <AboutSection />
      </Suspense>
      
      <Suspense fallback={<LoadingComponent />}>
        <ContactSection />
      </Suspense>
      
      <Suspense fallback={<LoadingComponent />}>
        <Footer />
      </Suspense>
    </>
  );
};

// SEO content based on active section
const getSectionSeo = (section) => {
  switch(section) {
    case 'projects':
      return {
        description: 'Explore NAGA\'s portfolio of web apps, cybersecurity tools, and data visualization projects.',
        keywords: 'web development projects, app portfolio, cybersecurity tools, data visualization'
      };
    case 'about':
      return {
        description: 'Learn about NAGA\'s mission, expertise, and our approach to delivering innovative app solutions.',
        keywords: 'app development company, software development team, tech innovation'
      };
    case 'contact':
      return {
        description: 'Get in touch with NAGA for your app concept needs. We\'re ready to turn your ideas into reality.',
        keywords: 'app development services, hire developers, software consultation'
      };
    default:
      return {
        description: 'NAGA - Challenge us with your app concept. We\'ll deliver innovative solutions that drive results for web, mobile, and data applications.',
        keywords: 'app development, web apps, cybersecurity, data visualization, custom software, mobile apps, UI/UX design'
      };
  }
};

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    ReactGA.initialize(TRACKING_ID);
    ReactGA.pageview(window.location.pathname + window.location.search);
    
    // Apply theme class to body
    document.body.className = darkMode ? 'dark-theme' : 'light-theme';

    // Track active section for SEO
    const handleScroll = () => {
      const sections = ['home', 'projects', 'about', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            // Track page section view in Google Analytics
            ReactGA.pageview(`/#${section}`);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return(
    <Router>
      <div className="app-container">
        <Routes>
          {/* Project Detail Route */}
          <Route 
            path="/projects/:projectSlug" 
            element={
              <Suspense fallback={<LoadingComponent />}>
                <ProjectDetail />
              </Suspense>
            } 
          />
          
          {/* Home Page Route with All Sections */}
          <Route 
            path="/" 
            element={
              <HomePage 
                darkMode={darkMode} 
                toggleTheme={toggleTheme} 
                activeSection={activeSection}
                setActiveSection={setActiveSection}
              />
            } 
          />
          
          {/* Redirect any other routes to home */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
