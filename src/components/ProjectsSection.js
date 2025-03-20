import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaGithub, FaDiscord, FaExternalLinkAlt } from 'react-icons/fa';
import projects from '../data/projects';

const ProjectsSectionContainer = styled.section`
  background-color: var(--bg-color);
  padding: 100px 20px;
  scroll-margin-top: 70px;
  
  @media (max-width: 768px) {
    padding: 80px 15px;
  }
  
  @media (max-width: 480px) {
    padding: 60px 10px;
  }
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
  
  @media (max-width: 480px) {
    font-size: 2rem;
    margin-bottom: 15px;
    
    &::after {
      width: 60px;
      height: 3px;
    }
  }
`;

const SectionDescription = styled.p`
  text-align: center;
  max-width: 700px;
  margin: 0 auto 50px;
  font-size: 1.2rem;
  
  @media (max-width: 768px) {
    margin-bottom: 40px;
    font-size: 1.1rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 30px;
    padding: 0 10px;
  }
`;

const ProjectsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 30px;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 20px;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 25px;
  }
`;

const ProjectCard = styled.div`
  background-color: var(--card-bg);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: var(--shadow);
  transition: var(--transition);
  height: 100%;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
  }
  
  @media (max-width: 480px) {
    max-width: 100%;
    margin: 0 auto;
  }
`;

const ProjectImage = styled.div`
  height: 200px;
  overflow: hidden;
  position: relative;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  ${ProjectCard}:hover & img {
    transform: scale(1.05);
  }
  
  @media (max-width: 480px) {
    height: 180px;
  }
`;

const ProjectContent = styled.div`
  padding: 20px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  
  @media (max-width: 480px) {
    padding: 15px;
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: var(--text-color);
  
  @media (max-width: 480px) {
    font-size: 1.3rem;
  }
`;

const ProjectDescription = styled.p`
  color: var(--text-color);
  margin-bottom: 20px;
  flex-grow: 1;
  
  @media (max-width: 480px) {
    margin-bottom: 15px;
    font-size: 0.95rem;
  }
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 15px;
  margin-top: auto;
  
  @media (max-width: 480px) {
    gap: 20px;
    justify-content: center;
  }
`;

const ProjectLink = styled.a`
  color: var(--primary-color);
  font-size: 1.2rem;
  transition: var(--transition);
  
  &:hover {
    color: var(--secondary-color);
    transform: translateY(-3px);
  }
  
  @media (max-width: 480px) {
    font-size: 1.4rem; /* Larger touch targets on mobile */
    padding: 5px;
  }
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
  flex-wrap: wrap;
  gap: 10px;
  
  @media (max-width: 480px) {
    margin-bottom: 25px;
  }
`;

const FilterButton = styled.button`
  background: ${props => props.active ? 'var(--primary-color)' : 'transparent'};
  color: ${props => props.active ? 'white' : 'var(--text-color)'};
  border: 2px solid var(--primary-color);
  padding: 8px 16px;
  border-radius: 30px;
  cursor: pointer;
  font-weight: 600;
  transition: var(--transition);
  
  &:hover {
    background: ${props => props.active ? 'var(--primary-color)' : 'rgba(var(--primary-color-rgb), 0.1)'};
  }
  
  @media (max-width: 480px) {
    padding: 8px 12px;
    font-size: 0.9rem;
    min-width: 90px;
  }
`;

const ProjectsSection = () => {
  const [activeProjects, setActiveProjects] = useState(projects);
  const [filter, setFilter] = useState('all');
  
  // Randomize projects on initial load
  useEffect(() => {
    const shuffledProjects = [...projects].sort(() => Math.random() - 0.5);
    setActiveProjects(shuffledProjects);
  }, []);
  
  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    
    if (newFilter === 'all') {
      // Randomize the order of all projects
      const shuffledProjects = [...projects].sort(() => Math.random() - 0.5);
      setActiveProjects(shuffledProjects);
    } else {
      // For demonstration purposes, we'll filter based on project descriptions
      // In a real app, you might want to add tags to your projects
      const filtered = projects.filter(project => 
        project.description.toLowerCase().includes(newFilter.toLowerCase())
      );
      setActiveProjects(filtered);
    }
  };

  return (
    <ProjectsSectionContainer id="projects">
      <ProjectsContainer>
        <SectionTitle>My Projects</SectionTitle>
        <SectionDescription>
          Here are some of the projects I've worked on. Click on a project to see it in action, or check out the code on GitHub.
        </SectionDescription>
        
        <FilterContainer>
          <FilterButton 
            active={filter === 'all'} 
            onClick={() => handleFilterChange('all')}
          >
            All
          </FilterButton>
          <FilterButton 
            active={filter === 'web'} 
            onClick={() => handleFilterChange('web')}
          >
            Web Apps
          </FilterButton>
          <FilterButton 
            active={filter === 'data'} 
            onClick={() => handleFilterChange('data')}
          >
            Data/ML
          </FilterButton>
          <FilterButton 
            active={filter === 'cyber'} 
            onClick={() => handleFilterChange('cyber')}
          >
            Cybersecurity
          </FilterButton>
        </FilterContainer>
        
        <ProjectsGrid>
          {activeProjects.map((project, index) => (
            <ProjectCard key={index}>
              <ProjectImage>
                <img src={project.image} alt={project.name} />
              </ProjectImage>
              <ProjectContent>
                <ProjectTitle>{project.name}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <ProjectLinks>
                  {project.url && (
                    <ProjectLink 
                      href={project.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label={`Visit ${project.name} website`}
                    >
                      <FaExternalLinkAlt />
                    </ProjectLink>
                  )}
                  {project.gitHubUrl && (
                    <ProjectLink 
                      href={project.gitHubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label={`${project.name} GitHub repository`}
                    >
                      <FaGithub />
                    </ProjectLink>
                  )}
                  {project.discordUrl && (
                    <ProjectLink 
                      href={project.discordUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label={`Join ${project.name} Discord`}
                    >
                      <FaDiscord />
                    </ProjectLink>
                  )}
                </ProjectLinks>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </ProjectsContainer>
    </ProjectsSectionContainer>
  );
};

export default ProjectsSection; 