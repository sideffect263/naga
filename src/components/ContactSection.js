import React from 'react';
import styled from 'styled-components';
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaTwitter, FaInstagram } from 'react-icons/fa';
import ObfuscatedEmail from './ObfuscatedEmail';
import SocialShare from './SocialShare';

const ContactSectionContainer = styled.section`
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

const ContactContainer = styled.div`
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

const SectionDescription = styled.p`
  text-align: center;
  max-width: 700px;
  margin: 0 auto 50px;
  font-size: 1.2rem;
`;

const ContactInfo = styled.div`
  width: 100%;
  max-width: 700px;
  background-color: var(--card-bg);
  padding: 40px;
  border-radius: 10px;
  box-shadow: var(--shadow);
  
  h3 {
    font-size: 1.8rem;
    margin-bottom: 25px;
    text-align: center;
  }
  
  p {
    margin-bottom: 30px;
    font-size: 1.1rem;
    line-height: 1.7;
    text-align: center;
  }
`;

const ContactInfoList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 40px 0;
`;

const ContactInfoItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  font-size: 1.1rem;
`;

const ContactIcon = styled.div`
  font-size: 1.5rem;
  color: var(--primary-color);
  margin-right: 15px;
  min-width: 30px;
`;

const SocialLinks = styled.div`
  margin-top: 40px;
  text-align: center;
  
  h4 {
    font-size: 1.3rem;
    margin-bottom: 20px;
  }
  
  .social-icons {
    display: flex;
    gap: 15px;
    justify-content: center;
  }
`;

const SocialIcon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: rgba(var(--primary-color-rgb), 0.1);
  color: var(--primary-color);
  font-size: 1.5rem;
  transition: var(--transition);
  
  &:hover {
    background-color: var(--primary-color);
    color: white;
    transform: translateY(-5px);
  }
`;

const ContactSection = () => {
  return (
    <ContactSectionContainer id="contact">
      <ContactContainer>
        <SectionTitle>Get In Touch</SectionTitle>
        <SectionDescription>
          Have a project idea or just want to chat? Feel free to reach out through the following contact methods.
        </SectionDescription>
        
        <ContactInfo>
          <h3>Contact Information</h3>
          <p>
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
          </p>
          
          <ContactInfoList>
            <ContactInfoItem>
              <ContactIcon>
                <FaMapMarkerAlt />
              </ContactIcon>
              <span>Israel</span>
            </ContactInfoItem>
            
            <ContactInfoItem>
              <ContactIcon>
                <FaEnvelope />
              </ContactIcon>
              <ObfuscatedEmail 
                email="arielbiton03@gmail.com" 
                linkText="arielbiton03@gmail.com" 
                showIcon={false}
              />
            </ContactInfoItem>
          </ContactInfoList>
          
          <SocialLinks>
            <h4>Find me on</h4>
            <div className="social-icons">
              <SocialIcon 
                href="https://github.com/sideffect263" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
              >
                <FaGithub />
              </SocialIcon>
              <SocialIcon 
                href="https://www.linkedin.com/in/ariel-biton/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin />
              </SocialIcon>
              <SocialIcon 
                href="https://twitter.com/arielbiton" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Twitter Profile"
              >
                <FaTwitter />
              </SocialIcon>
              <SocialIcon 
                href="https://www.instagram.com/arielbitonn/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Instagram Profile"
              >
                <FaInstagram />
              </SocialIcon>
            </div>
          </SocialLinks>
          
          <div style={{ marginTop: '40px' }}>
            <SocialShare 
              url="https://www.ofektechnology.com" 
              title="NAGA - Innovative App Concept Solutions" 
              description="NAGA - Challenge us with your app concept. We'll deliver innovative solutions that drive results for web, mobile, and data applications."
            />
          </div>
        </ContactInfo>
      </ContactContainer>
    </ContactSectionContainer>
  );
};

export default ContactSection; 