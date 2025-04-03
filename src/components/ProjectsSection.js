import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaGithub, FaDiscord, FaExternalLinkAlt, FaInfoCircle } from 'react-icons/fa';
import projects from '../data/projects';
import ReactGA from 'react-ga';
import { Helmet } from 'react-helmet';

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
  min-height: 200px; /* Ensure grid has height even when empty */
  
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
  transition: var(--transition), opacity 0.4s ease-in-out, transform 0.4s ease-in-out;
  height: 100%;
  display: flex;
  flex-direction: column;
  animation: fadeIn 0.5s ease-in-out;
  
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
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
  align-items: center;
  justify-content: center;
  
  @media (max-width: 480px) {
    gap: 20px;
    justify-content: center;
  }
`;

const ProjectLink = styled.a`
  color: var(--primary-color);
  font-size: 1.5rem;
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

const ProjectCardLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: block;
  height: 100%;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const ProjectDetailLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: var(--primary-color);
  font-size: 0.9rem;
  font-weight: 500;
  margin-top: 10px;
  padding: 6px 12px;
  border-radius: 4px;
  background-color: rgba(var(--primary-color-rgb), 0.1);
  transition: var(--transition);
  
  &:hover {
    background-color: rgba(var(--primary-color-rgb), 0.2);
  }
`;

const ProjectsSection = () => {
  const [activeProjects, setActiveProjects] = useState(projects);
  const [filter, setFilter] = useState('all');
  const [isAnimating, setIsAnimating] = useState(false);
  
  // Get unique categories from all projects
  const allCategories = [...new Set(projects.flatMap(project => project.categories || []))];
  
  // Randomize projects on initial load
  useEffect(() => {
    const shuffledProjects = [...projects].sort(() => Math.random() - 0.5);
    setActiveProjects(shuffledProjects);
  }, []);
  
  const handleFilterChange = (newFilter) => {
    if (filter === newFilter) return;
    
    setIsAnimating(true);
    setFilter(newFilter);
    
    // Track filter change in Google Analytics
    ReactGA.event({
      category: 'Projects',
      action: 'Filter Change',
      label: newFilter
    });
    
    // Wait for fade out animation
    setTimeout(() => {
      if (newFilter === 'all') {
        // Randomize the order of all projects
        const shuffledProjects = [...projects].sort(() => Math.random() - 0.5);
        setActiveProjects(shuffledProjects);
      } else {
        // Filter based on project categories
        const filtered = projects.filter(project => 
          project.categories && project.categories.includes(newFilter)
        );
        setActiveProjects(filtered);
      }
      
      // Reset animation state after a short delay
      setTimeout(() => {
        setIsAnimating(false);
      }, 100);
    }, 300);
  };

  // Generate schema.org JSON-LD for the projects collection
  const projectsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": activeProjects.map((project, index) => ({
      "@type": "SoftwareApplication",
      "position": index + 1,
      "name": project.name,
      "description": project.description,
      "image": project.image,
      "url": project.url || project.gitHubUrl,
      "applicationCategory": project.categories ? project.categories.join(', ') : "WebApplication",
      "operatingSystem": "Web",
      "datePublished": project.dateCreated || "2022-01-01",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
        "availability": "https://schema.org/OnlineOnly"
      },
      "sourceOrganization": {
        "@type": "Organization",
        "name": "NAGA",
        "url": "https://naga.com"
      }
    }))
  };

  return (
    <ProjectsSectionContainer id="projects">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(projectsSchema)}
        </script>
      </Helmet>
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
          {/* Add more dynamic filters based on categories */}
          {allCategories
            .filter(cat => !['web', 'data', 'cyber'].includes(cat))
            .slice(0, 2) // Limit to avoid too many buttons
            .map(category => (
              <FilterButton
                key={category}
                active={filter === category}
                onClick={() => handleFilterChange(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </FilterButton>
            ))
          }
        </FilterContainer>
        
        <ProjectsGrid style={{ opacity: isAnimating ? 0 : 1, transition: 'opacity 0.3s ease-in-out' }}>
          {activeProjects.map((project, index) => (
            <ProjectCard 
              key={`${project.name}-${index}`} 
              style={{ animationDelay: `${index * 0.1}s` }}
              itemScope
              itemType="https://schema.org/SoftwareApplication"
            >
              <ProjectCardLink to={`/projects/${project.slug || project.name.toLowerCase().replace(/\s+/g, '-')}`}>
                <ProjectImage>
                  <img 
                    src={project.image} 
                    alt={`${project.name} - ${project.description.split('.')[0]}`} 
                    loading="lazy"
                    width="100%"
                    height="auto"
                    itemProp="image"
                  />
                </ProjectImage>
                <ProjectContent>
                  <ProjectTitle itemProp="name">{project.name}</ProjectTitle>
                  <ProjectDescription itemProp="description">{project.description}</ProjectDescription>
                  {project.technologies && (
                    <div className="technologies" itemProp="applicationCategory">
                      {project.technologies.slice(0, 3).map((tech, i) => (
                        <span key={i} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  )}
                  
                  <ProjectDetailLink 
                    style={{ display: 'none' }}
                    to={`/projects/${project.slug || project.name.toLowerCase().replace(/\s+/g, '-')}`}
                    onClick={() => {
                      ReactGA.event({
                        category: 'Projects',
                        action: 'Clicked Project Details',
                        label: project.name
                      });
                    }}
                  >
                    <FaInfoCircle /> View Details
                  </ProjectDetailLink>
                  
                  <ProjectLinks>
                    {project.url && (
                      <ProjectLink 
                        href={project.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label={`Visit ${project.name} website`}
                        itemProp="url"
                        onClick={(e) => {
                          e.stopPropagation();
                          ReactGA.event({
                            category: 'Projects',
                            action: 'Clicked Project URL',
                            label: project.name
                          });
                        }}
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
                        onClick={(e) => {
                          e.stopPropagation();
                          ReactGA.event({
                            category: 'Projects',
                            action: 'Clicked GitHub Link',
                            label: project.name
                          });
                        }}
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
                        onClick={(e) => {
                          e.stopPropagation();
                          ReactGA.event({
                            category: 'Projects',
                            action: 'Clicked Discord Link',
                            label: project.name
                          });
                        }}
                      >
                        <FaDiscord />
                      </ProjectLink>
                    )}
                  </ProjectLinks>
                  
                  {/* Hidden metadata for SEO */}
                  <meta itemProp="operatingSystem" content="Web" />
                  <meta itemProp="datePublished" content={project.dateCreated || "2022-01-01"} />
                </ProjectContent>
              </ProjectCardLink>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </ProjectsContainer>
    </ProjectsSectionContainer>
  );
};

export default ProjectsSection; 