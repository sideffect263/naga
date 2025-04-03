import React from 'react';
import styled from 'styled-components';
import { FaCode, FaServer, FaDatabase, FaShieldAlt, FaMobileAlt, FaCloud } from 'react-icons/fa';

const AboutSectionContainer = styled.section`
  background-color: var(--bg-color);
  padding: 100px 20px;
  position: relative;
  scroll-margin-top: 70px;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--primary-color), transparent);
    opacity: 0.3;
  }
`;

const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 20px;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    width: 80px;
    height: 4px;
    background: var(--primary-color);
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 2px;
  }
`;

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  margin-top: 60px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const AboutText = styled.div`
  h3 {
    font-size: 1.8rem;
    margin-bottom: 20px;
  }
  
  p {
    font-size: 1.1rem;
    line-height: 1.7;
    margin-bottom: 20px;
  }
`;

const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const SkillCard = styled.div`
  background-color: var(--card-bg);
  padding: 15px;
  border-radius: 10px;
  box-shadow: var(--shadow);
  transition: var(--transition);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

const SkillIcon = styled.div`
  font-size: 2.5rem;
  color: var(--primary-color);
  margin-bottom: 15px;
`;

const SkillTitle = styled.h4`
  font-size: 1.3rem;
  margin-bottom: 10px;
`;

const SkillDescription = styled.p`
  font-size: 1rem;
`;

const AboutSection = () => {
  return (
    <AboutSectionContainer id="about">
      <AboutContainer>
        <SectionTitle>About Me</SectionTitle>
        
        <AboutContent>
          <AboutText>
            <h3>Full-stack Developer & Problem Solver</h3>
            <p>
              Hi there! I'm a passionate developer with a strong background in building modern web applications, APIs, and data-driven systems. I love tackling complex problems and turning ideas into functional, beautiful products.
            </p>
            <p>
              My journey in tech started with a curiosity about how things work, which evolved into a passion for creating software that makes a difference. I specialize in building full-stack applications with a focus on clean code, performance, and user experience.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.
            </p>
          </AboutText>
          
          <SkillsContainer>
            <SkillCard>
              <SkillIcon>
                <FaCode />
              </SkillIcon>
              <SkillTitle>Frontend Development</SkillTitle>
              <SkillDescription>
                Building responsive, accessible user interfaces with React, Vue, and modern CSS
              </SkillDescription>
            </SkillCard>
            
            <SkillCard>
              <SkillIcon>
                <FaServer />
              </SkillIcon>
              <SkillTitle>Backend Development</SkillTitle>
              <SkillDescription>
                Creating robust APIs and services with Node.js, Express, and Django
              </SkillDescription>
            </SkillCard>
            
            <SkillCard>
              <SkillIcon>
                <FaDatabase />
              </SkillIcon>
              <SkillTitle>Database Design</SkillTitle>
              <SkillDescription>
                Working with SQL and NoSQL databases including MongoDB, PostgreSQL
              </SkillDescription>
            </SkillCard>
            
            <SkillCard>
              <SkillIcon>
                <FaShieldAlt />
              </SkillIcon>
              <SkillTitle>Cybersecurity</SkillTitle>
              <SkillDescription>
                Implementing security best practices and vulnerability assessments
              </SkillDescription>
            </SkillCard>
            
            <SkillCard>
              <SkillIcon>
                <FaMobileAlt />
              </SkillIcon>
              <SkillTitle>Mobile Development</SkillTitle>
              <SkillDescription>
                Building cross-platform mobile apps with React Native
              </SkillDescription>
            </SkillCard>
            
            <SkillCard>
              <SkillIcon>
                <FaCloud />
              </SkillIcon>
              <SkillTitle>Cloud Services</SkillTitle>
              <SkillDescription>
                Deploying and managing applications on AWS, Google Cloud, and Azure
              </SkillDescription>
            </SkillCard>
          </SkillsContainer>
        </AboutContent>
      </AboutContainer>
    </AboutSectionContainer>
  );
};

export default AboutSection; 