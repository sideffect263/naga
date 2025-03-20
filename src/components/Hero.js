import React from 'react';
import styled, { keyframes } from 'styled-components';

const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const underlineAnimation = keyframes`
  0% { width: 0; left: 0; opacity: 0; }
  15% { width: 100%; left: 0; opacity: 0.4; }
  85% { width: 100%; left: 0; opacity: 0.4; }
  100% { width: 0; left: 100%; opacity: 0; }
`;

const HeroSection = styled.section`
  min-height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--bg-color);
  position: relative;
  overflow: hidden;
  padding: 70px 0 0;
  scroll-margin-top: 70px;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: linear-gradient(120deg, rgba(0,36,61,0.05) 0%, rgba(9,121,112,0.1) 100%);
    z-index: 1;
  }

  @media (max-width: 480px) {
    min-height: 80vh;
    padding: 60px 0 30px;
    scroll-margin-top: 60px;
  }
`;

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  text-align: center;
  z-index: 2;
  position: relative;

  @media (max-width: 480px) {
    padding: 0 15px;
  }
`;

const Title = styled.h1`
  font-size: 4.5rem;
  margin-bottom: 20px;
  animation: ${fadeIn} 1s ease-out;
  
  @media (max-width: 768px) {
    font-size: 3rem;
    margin-bottom: 15px;
  }
  
  @media (max-width: 480px) {
    font-size: 2.5rem;
    margin-bottom: 12px;
    padding: 0 10px;
  }
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 40px;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  animation: ${fadeIn} 1s ease-out 0.3s forwards;
  opacity: 0;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 30px;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 25px;
    padding: 0 10px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  animation: ${fadeIn} 1s ease-out 0.6s forwards;
  opacity: 0;
  
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }
`;

const HeroButton = styled.a`
  padding: 12px 30px;
  border-radius: 4px;
  font-weight: 600;
  font-size: 1.1rem;
  transition: var(--transition);
  text-decoration: none;
  display: inline-block;
  
  &.primary {
    background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
    background-size: 200% 200%;
    animation: ${gradientAnimation} 5s ease infinite;
    color: white;
    border: none;
    
    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    }
  }
  
  &.secondary {
    background: transparent;
    border: 2px solid var(--primary-color);
    color: var(--text-color);
    
    &:hover {
      background-color: var(--primary-color);
      color: white;
      transform: translateY(-5px);
    }
  }

  @media (max-width: 480px) {
    padding: 12px 25px;
    font-size: 1rem;
    width: 80%;
    max-width: 250px;
  }
`;

const Highlight = styled.span`
  color: var(--primary-color);
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 8px;
    bottom: 0;
    left: 0;
    background-color: var(--accent-color);
    opacity: 0;
    z-index: -1;
    animation: ${underlineAnimation} 6s ease-in-out infinite;
  }
`;

const Hero = () => {
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <HeroSection id="home">
      <HeroContent>
        <Title>
          Got a cool <Highlight>app</Highlight> idea?
        </Title>
        <Subtitle>
          I'm a passionate full-stack developer crafting beautiful, functional applications.
          Let's build something awesome together.
        </Subtitle>
        <ButtonContainer>
          <HeroButton href="#projects" style={{ display: 'flex' }} className="primary" onClick={(e) => scrollToSection(e, 'projects')}>
            View Projects
          </HeroButton>
          <HeroButton href="#contact" style={{ display: 'flex' }} className="secondary" onClick={(e) => scrollToSection(e, 'contact')}>
            Get In Touch
          </HeroButton>
        </ButtonContainer>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero; 


