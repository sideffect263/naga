import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const HeaderContainer = styled.header`
  background: var(--header-bg);
  padding: 15px 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 1000;
  box-shadow: var(--shadow);
  transition: var(--transition);
  transform: translateZ(0);
  will-change: transform;
  -webkit-backdrop-filter: blur(0);
  backdrop-filter: blur(0);
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 480px) {
    padding: 0 15px;
  }
`;

const Logo = styled.div`
  font-size: 28px;
  font-weight: bold;
  color: white;
  font-family: 'Oswald', sans-serif;
  cursor: pointer;
  transition: var(--transition);

  &:hover {
    transform: scale(1.05);
  }
  
  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

const NavLinks = styled.nav`
  display: flex;
  gap: 30px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  transition: var(--transition);
  position: relative;

  &:after {
    content: '';
    position: absolute;
    width: ${props => props.className === 'active' ? '100%' : '0'};
    height: 2px;
    background: var(--accent-color);
    bottom: -5px;
    left: 0;
    transition: var(--transition);
  }

  &:hover:after {
    width: 100%;
  }
  
  &.active {
    color: var(--accent-color);
  }
`;

// Hamburger button animation
const hamburgerLine = keyframes`
  0% { transform: scaleX(1); }
  50% { transform: scaleX(0.6); }
  100% { transform: scaleX(1); }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: white;
  width: 40px;
  height: 40px;
  position: relative;
  cursor: pointer;
  border-radius: 50%;
  transition: var(--transition);
  outline: none;
  z-index: 1002;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
  
  &:active {
    background: rgba(255, 255, 255, 0.2);
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const HamburgerLine = styled.span`
  display: block;
  width: 24px;
  height: 2px;
  background-color: white;
  margin: 3px 0;
  transition: 0.4s;
  border-radius: 2px;
  
  &:nth-child(1) {
    transform: ${props => props.isOpen ? 'rotate(-45deg) translate(-5px, 5px)' : 'none'};
    width: ${props => props.isOpen ? '24px' : '16px'};
    margin-left: ${props => props.isOpen ? '0' : 'auto'};
  }
  
  &:nth-child(2) {
    opacity: ${props => props.isOpen ? '0' : '1'};
    width: 24px;
  }
  
  &:nth-child(3) {
    transform: ${props => props.isOpen ? 'rotate(45deg) translate(-5px, -5px)' : 'none'};
    width: ${props => props.isOpen ? '24px' : '20px'};
    margin-left: ${props => props.isOpen ? '0' : 'auto'};
  }
  
  &:not(:nth-child(2)) {
    animation: ${props => !props.isOpen ? hamburgerLine : 'none'} 2s infinite;
  }
`;

const slideIn = keyframes`
  from { 
    opacity: 0;
    transform: translateX(30px);
  }
  to { 
    opacity: 1;
    transform: translateX(0);
  }
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const MobileMenuOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(3px);
  z-index: 1000;
  opacity: ${props => props.isOpen ? '1' : '0'};
  pointer-events: ${props => props.isOpen ? 'all' : 'none'};
  transition: opacity 0.3s ease-in-out;
  animation: ${props => props.isOpen ? fadeIn : 'none'} 0.3s ease-in-out;
`;

const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  right: ${props => props.isOpen ? '0' : '-350px'};
  width: 280px;
  background: var(--card-bg);
  height: 100vh;
  transition: right 0.4s cubic-bezier(0.77, 0.2, 0.05, 1.0);
  display: flex;
  flex-direction: column;
  padding: 80px 20px 20px;
  box-shadow: -5px 0 25px rgba(0, 0, 0, 0.2);
  z-index: 1001;
  overflow-y: auto;

  @media (min-width: 769px) {
    display: none;
  }
  
  @media (max-width: 480px) {
    width: 80%;
  }
`;

const MobileNavLink = styled.a`
  color: var(--text-color);
  text-decoration: none;
  font-size: 18px;
  padding: 16px;
  margin: 5px 0;
  border-radius: 8px;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  animation: ${slideIn} 0.3s forwards;
  animation-delay: ${props => props.index * 0.1}s;
  opacity: 0;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    width: 4px;
    height: 0;
    background: var(--primary-color);
    border-radius: 0 4px 4px 0;
    transition: height 0.3s;
  }
  
  &:hover, &.active {
    background: rgba(var(--primary-color-rgb), 0.1);
    color: var(--primary-color);
    
    &::before {
      height: 70%;
    }
  }
  
  @media (max-width: 480px) {
    font-size: 20px;
    padding: 20px 16px;
  }
`;

const MobileMenuHeader = styled.div`
  padding: 20px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const MobileMenuFooter = styled.div`
  margin-top: auto;
  padding: 20px 0;
  text-align: center;
  font-size: 14px;
  color: var(--text-color);
  opacity: 0.7;
`;

const HeaderSpacer = styled.div`
  height: 70px;
  
  @media (max-width: 480px) {
    height: 60px;
  }
`;

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      // Determine active section based on scroll position
      const sections = ['home', 'projects', 'about', 'contact'];
      const checkSection = () => {
        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= 100 && rect.bottom >= 100) {
              setActiveSection(section);
              break;
            }
          }
        }
      };
      
      checkSection();
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      const headerHeight = document.querySelector('header').offsetHeight;
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      setMobileMenuOpen(false);
      setActiveSection(sectionId);
    }
  };

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Close mobile menu on window resize to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <HeaderContainer style={{ 
        background: isScrolled ? 'rgba(0, 36, 61, 0.95)' : 'var(--header-bg)',
        backdropFilter: isScrolled ? 'blur(10px)' : 'none',
        '-webkit-backdrop-filter': isScrolled ? 'blur(10px)' : 'none',
        boxShadow: isScrolled ? '0 4px 20px rgba(0, 0, 0, 0.2)' : 'var(--shadow)'
      }}>
        <NavContainer>
          <Logo>NAGA</Logo>
          <NavLinks>
            <NavLink 
              href="#home" 
              onClick={(e) => scrollToSection(e, 'home')}
              className={activeSection === 'home' ? 'active' : ''}
            >
              Home
            </NavLink>
            <NavLink 
              href="#projects" 
              onClick={(e) => scrollToSection(e, 'projects')}
              className={activeSection === 'projects' ? 'active' : ''}
            >
              Projects
            </NavLink>
            <NavLink 
              href="#about" 
              onClick={(e) => scrollToSection(e, 'about')}
              className={activeSection === 'about' ? 'active' : ''}
            >
              About
            </NavLink>
            <NavLink 
              href="#contact" 
              onClick={(e) => scrollToSection(e, 'contact')}
              className={activeSection === 'contact' ? 'active' : ''}
            >
              Contact
            </NavLink>
          </NavLinks>
          <MobileMenuButton 
            onClick={toggleMobileMenu} 
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            <HamburgerLine isOpen={mobileMenuOpen} />
            <HamburgerLine isOpen={mobileMenuOpen} />
            <HamburgerLine isOpen={mobileMenuOpen} />
          </MobileMenuButton>
        </NavContainer>
        
        <MobileMenuOverlay isOpen={mobileMenuOpen} onClick={toggleMobileMenu} />
        <MobileMenu isOpen={mobileMenuOpen}>
          <MobileNavLink 
            href="#home" 
            onClick={(e) => scrollToSection(e, 'home')}
            className={activeSection === 'home' ? 'active' : ''}
            index={0}
          >
            Home
          </MobileNavLink>
          <MobileNavLink 
            href="#projects" 
            onClick={(e) => scrollToSection(e, 'projects')}
            className={activeSection === 'projects' ? 'active' : ''}
            index={1}
          >
            Projects
          </MobileNavLink>
          <MobileNavLink 
            href="#about" 
            onClick={(e) => scrollToSection(e, 'about')}
            className={activeSection === 'about' ? 'active' : ''}
            index={2}
          >
            About
          </MobileNavLink>
          <MobileNavLink 
            href="#contact" 
            onClick={(e) => scrollToSection(e, 'contact')}
            className={activeSection === 'contact' ? 'active' : ''}
            index={3}
          >
            Contact
          </MobileNavLink>
          <MobileMenuFooter>© {new Date().getFullYear()} NAGA</MobileMenuFooter>
        </MobileMenu>
      </HeaderContainer>
      <HeaderSpacer />
    </>
  );
};

export default Header;
