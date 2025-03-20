import React from 'react';
import styled from 'styled-components';
import { FaInstagram, FaLinkedin, FaGithub, FaHeart } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: #111927;
  color: white;
  padding: 60px 20px 55px;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 40px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const FooterSection = styled.div`
  h3 {
    font-size: 1.5rem;
    margin-bottom: 20px;
    position: relative;
    display: inline-block;
    
    &::after {
      content: '';
      position: absolute;
      width: 40px;
      height: 3px;
      background: var(--primary-color);
      bottom: -10px;
      left: 0;
      
      @media (max-width: 768px) {
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }
`;

const FooterLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  
  li {
    margin-bottom: 10px;
  }
  
  a {
    color: #a0a0a0;
    text-decoration: none;
    transition: var(--transition);
    
    &:hover {
      color: var(--primary-color);
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const SocialIcon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
  font-size: 1.2rem;
  transition: var(--transition);
  
  &:hover {
    background-color: var(--primary-color);
    transform: translateY(-5px);
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  margin-top: 40px;
  padding-top: 20px;
  text-align: center;
  color: #a0a0a0;
  
  p {
    font-size: 0.9rem;
  }
  
  .heart {
    color: #ff6b6b;
    display: inline-block;
    animation: heartbeat 1.5s infinite;
  }
  
  @keyframes heartbeat {
    0% { transform: scale(1); }
    50% { transform: scale(1.2); }
    100% { transform: scale(1); }
  }
`;

const Footer = () => {
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <h3>NAGA</h3>
          <p>Building digital solutions that connect people and solve real-world problems.</p>
          <SocialLinks>
            <SocialIcon href="https://www.linkedin.com/in/ariel-biton/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </SocialIcon>
            <SocialIcon href="https://github.com/sideffect263" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </SocialIcon>
            <SocialIcon href="https://www.instagram.com/arielbitonn/" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </SocialIcon>
          </SocialLinks>
        </FooterSection>
        
        <FooterSection>
          <h3>Navigation</h3>
          <FooterLinks>
            <li><a href="#home" onClick={(e) => scrollToSection(e, 'home')}>Home</a></li>
            <li><a href="#projects" onClick={(e) => scrollToSection(e, 'projects')}>Projects</a></li>
            <li><a href="#about" onClick={(e) => scrollToSection(e, 'about')}>About</a></li>
            <li><a href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>Contact</a></li>
          </FooterLinks>
        </FooterSection>
        
        <FooterSection>
          <h3>Contact</h3>
          <FooterLinks>
            <li>Israel</li>
            <li><a href="mailto:contact@naga.com">contact@naga.com</a></li>
          </FooterLinks>
        </FooterSection>
      </FooterContent>
      
      <FooterBottom>
        <p>
          &copy; {new Date().getFullYear()} NAGA. All rights reserved. Made with <FaHeart className="heart" /> by Ariel Biton
        </p>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
