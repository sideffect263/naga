import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaHome, FaSearch, FaEnvelope } from 'react-icons/fa';
import SEO from './SEO';

const NotFoundContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 20px;
  background-color: var(--bg-color);
`;

const NotFoundContent = styled.div`
  max-width: 600px;
  background-color: var(--card-bg);
  border-radius: 12px;
  padding: 40px;
  box-shadow: var(--shadow);
  margin-top: -50px;
  
  @media (max-width: 768px) {
    padding: 30px;
  }
`;

const NotFoundTitle = styled.h1`
  font-size: 6rem;
  margin: 0;
  background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  @media (max-width: 768px) {
    font-size: 4rem;
  }
`;

const NotFoundSubtitle = styled.h2`
  font-size: 2rem;
  margin: 10px 0 30px;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const NotFoundText = styled.p`
  font-size: 1.1rem;
  margin-bottom: 30px;
  color: var(--text-color);
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const NotFoundActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
  margin-top: 20px;
`;

const ActionButton = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &.primary {
    background-color: var(--primary-color);
    color: white;
    
    &:hover {
      background-color: var(--secondary-color);
      transform: translateY(-3px);
    }
  }
  
  &.secondary {
    background-color: rgba(var(--primary-color-rgb), 0.1);
    color: var(--text-color);
    
    &:hover {
      background-color: rgba(var(--primary-color-rgb), 0.2);
      transform: translateY(-3px);
    }
  }
`;

const PopularLinks = styled.div`
  margin-top: 40px;
  padding-top: 20px;
  border-top: 1px solid rgba(var(--primary-color-rgb), 0.2);
`;

const PopularLinksTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 15px;
`;

const LinkList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
`;

const LinkItem = styled.li`
  a {
    color: var(--primary-color);
    text-decoration: none;
    padding: 5px 10px;
    border-radius: 4px;
    transition: all 0.3s ease;
    
    &:hover {
      background-color: rgba(var(--primary-color-rgb), 0.1);
    }
  }
`;

const NotFound = () => {
  return (
    <NotFoundContainer>
      <SEO 
        title="404 - Page Not Found | NAGA"
        description="Sorry, the page you're looking for doesn't exist or has been moved."
        keywords="404, page not found, error page, NAGA"
      />
      
      <NotFoundContent>
        <NotFoundTitle>404</NotFoundTitle>
        <NotFoundSubtitle>Page Not Found</NotFoundSubtitle>
        <NotFoundText>
          Sorry, the page you're looking for doesn't exist or has been moved.
          Please check the URL or try one of the options below.
        </NotFoundText>
        
        <NotFoundActions>
          <ActionButton to="/" className="primary">
            <FaHome /> Go to Homepage
          </ActionButton>
          <ActionButton to="/#projects" className="secondary">
            <FaSearch /> Browse Projects
          </ActionButton>
          <ActionButton to="/#contact" className="secondary">
            <FaEnvelope /> Contact Us
          </ActionButton>
        </NotFoundActions>
        
        <PopularLinks>
          <PopularLinksTitle>Popular Pages</PopularLinksTitle>
          <LinkList>
            <LinkItem><Link to="/#projects">Projects</Link></LinkItem>
            <LinkItem><Link to="/#about">About</Link></LinkItem>
            <LinkItem><Link to="/#contact">Contact</Link></LinkItem>
            <LinkItem><Link to="/projects/mood-based-ui">Mood-Based UI</Link></LinkItem>
            <LinkItem><Link to="/projects/netviz-dashboard">NetViz Dashboard</Link></LinkItem>
          </LinkList>
        </PopularLinks>
      </NotFoundContent>
    </NotFoundContainer>
  );
};

export default NotFound; 