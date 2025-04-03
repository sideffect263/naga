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
const NotFound = lazy(() => import('./components/NotFound'));

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
        keywords: 'web development projects, app portfolio, cybersecurity tools, data visualization, software development, application development'
      };
    case 'about':
      return {
        description: 'Learn about NAGA\'s mission, expertise, and our approach to delivering innovative app solutions.',
        keywords: 'app development company, software development team, tech innovation, web application development, custom software solutions'
      };
    case 'contact':
      return {
        description: 'Get in touch with NAGA for your app concept needs. We\'re ready to turn your ideas into reality.',
        keywords: 'app development services, hire developers, software consultation, web app development, contact developers'
      };
    default:
      return {
        description: 'NAGA - Challenge us with your app concept. We\'ll deliver innovative solutions that drive results for web, mobile, and data applications.',
        keywords: 'app development, web apps, cybersecurity, data visualization, custom software, mobile apps, UI/UX design, web development, full-stack'
      };
  }
};

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // Initialize analytics
    ReactGA.initialize(TRACKING_ID, {
      gaOptions: {
        siteSpeedSampleRate: 100
      }
    });
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

    // Optimize for mobile
    const handleResize = () => {
      // Set viewport height for mobile browsers
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    handleResize(); // Initial call
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    // Track theme toggle in Google Analytics
    ReactGA.event({
      category: 'User',
      action: 'Toggled Theme',
      label: darkMode ? 'Light Mode' : 'Dark Mode'
    });
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
          
          {/* Custom 404 page */}
          <Route 
            path="/404" 
            element={
              <Suspense fallback={<LoadingComponent />}>
                <NotFound />
              </Suspense>
            } 
          />
          
          {/* Redirect any other routes to 404 page */}
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
