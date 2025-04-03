import React, { useEffect, useState } from 'react';
import { useParams, Link , useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';
import { FaGithub, FaDiscord, FaExternalLinkAlt, FaArrowLeft } from 'react-icons/fa';
import projects from '../data/projects';
import ReactGA from 'react-ga';
import SocialShare from './SocialShare';
import OptimizedImage from './OptimizedImage';

const ProjectDetailContainer = styled.section`
  background-color: var(--bg-color);
  min-height: calc(100vh - 70px);
  padding: 100px 20px;
  scroll-margin-top: 70px;
  
  @media (max-width: 768px) {
    padding: 80px 15px;
  }
  
  @media (max-width: 480px) {
    padding: 60px 10px;
  }
`;

const ProjectContent = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  background-color: var(--card-bg);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: var(--shadow);
`;

const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--text-color);
  text-decoration: none;
  margin-bottom: 20px;
  padding: 10px;
  border-radius: 6px;
  transition: var(--transition);
  font-weight: 500;
  
  &:hover {
    background: rgba(var(--primary-color-rgb), 0.1);
    transform: translateX(-5px);
  }
`;

const ProjectHeader = styled.div`
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 200px;
    background: linear-gradient(to top, var(--card-bg), transparent);
    pointer-events: none;
  }
`;

const ProjectHeaderImage = styled.img`
  width: 100%;
  max-height: 500px;
  object-fit: cover;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
`;

const ProjectBody = styled.div`
  padding: 40px;
  
  @media (max-width: 768px) {
    padding: 30px 20px;
  }
  
  @media (max-width: 480px) {
    padding: 20px 15px;
  }
`;

const ProjectTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: var(--text-color);
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

const ProjectDescription = styled.div`
  margin-bottom: 30px;
  color: var(--text-color);
  font-size: 1.1rem;
  line-height: 1.6;
  
  p {
    margin-bottom: 20px;
  }
  
  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const MetaSection = styled.div`
  margin-bottom: 40px;
`;

const MetaTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 15px;
  color: var(--text-color);
  border-bottom: 2px solid rgba(var(--primary-color-rgb), 0.3);
  padding-bottom: 10px;
`;

const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 30px;
`;

const TechTag = styled.span`
  background-color: rgba(var(--primary-color-rgb), 0.1);
  color: var(--primary-color);
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
`;

const KeywordList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 30px;
`;

const KeywordTag = styled.span`
  background-color: rgba(var(--secondary-color-rgb, 120, 80, 200), 0.1);
  color: var(--secondary-color, #7850c8);
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 0.85rem;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 30px;
`;

const ProjectLink = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 20px;
  background-color: var(--primary-color);
  color: white;
  text-decoration: none;
  border-radius: 8px;
  transition: var(--transition);
  font-weight: 500;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
  }
  
  &.github {
    background-color: #333;
  }
  
  &.discord {
    background-color: #5865F2;
  }
`;

const TechnicalDetails = styled.div`
  margin-top: 40px;
  padding-top: 40px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const HiddenKeywords = styled.div`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
`;

const ProjectDetail = () => {
  const { projectSlug } = useParams();
  const navigate = useNavigate();
  const [imageLoaded, setImageLoaded] = useState(false);
  
  // Find project by slug
  const project = projects.find(p => 
    p.slug === projectSlug || p.name.toLowerCase().replace(/\s+/g, '-') === projectSlug
  );
  
  useEffect(() => {
    if (project) {
      // Track page view
      ReactGA.pageview(`/projects/${projectSlug}`);
      
      // Scroll to top when component mounts
      window.scrollTo(0, 0);
    }
  }, [projectSlug, project]);
  
  if (!project) {
    return (
      <ProjectDetailContainer>
        <div style={{ textAlign: 'center' }}>
          <h1>Project Not Found</h1>
          <BackLink to="/#projects">
            <FaArrowLeft /> Back to Projects
          </BackLink>
        </div>
      </ProjectDetailContainer>
    );
  }
  
  // Create extended description from the short one if expanded doesn't exist
  const extendedDescription = project.extendedDescription || 
    `${project.description} This ${project.categories?.join(' and ')} project showcases the use of 
     ${project.technologies?.join(', ')} to create an innovative solution for users.`;
  
  // Format description into paragraphs
  const descriptionParagraphs = extendedDescription
    .split('\n\n')
    .filter(p => p.trim().length > 0);
  
  // Generate schema.org data
  const projectSchema = {
    "@context": "https://schema.org",
    "@type": ["SoftwareApplication", "TechArticle"],
    "name": project.name,
    "headline": `${project.name}: ${project.categories?.join(', ')} Application`,
    "description": project.description,
    "image": project.image,
    "applicationCategory": project.categories?.join(', ') || "WebApplication",
    "operatingSystem": "Web",
    "url": project.url || "",
    "author": {
      "@type": "Organization",
      "name": "NAGA",
      "url": "https://naga.com"
    },
    "datePublished": project.dateCreated || new Date().toISOString().split('T')[0],
    "keywords": project.relatedKeywords?.join(', ') || project.categories?.join(', '),
    "articleBody": extendedDescription,
    "proficiencyLevel": "Expert"
  };
  
  return (
    <ProjectDetailContainer id={`project-${projectSlug}`}>
      <Helmet>
        <title>{project.name} | NAGA Projects</title>
        <meta name="description" content={project.description} />
        <meta name="keywords" content={
          [...(project.categories || []), ...(project.technologies || []), ...(project.relatedKeywords || [])]
            .join(', ')
        } />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={`${project.name} | NAGA Projects`} />
        <meta property="og:description" content={project.description} />
        <meta property="og:image" content={project.image} />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={`${project.name} | NAGA Projects`} />
        <meta property="twitter:description" content={project.description} />
        <meta property="twitter:image" content={project.image} />
            
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(projectSchema)}
        </script>
      </Helmet>
      
      <BackLink onClick={() => navigate(-1)} to="/#projects">
        <FaArrowLeft /> Back to All Projects
      </BackLink>
      
      <ProjectContent>
        <ProjectHeader>
          <OptimizedImage 
            src={project.image} 
            alt={`${project.name} - ${project.description.split('.')[0]}`}
            height="500px"
            borderRadius="12px 12px 0 0"
            hoverEffect={true}
            imgProps={{
              width: "1200",
              height: "600",
              itemProp: "image"
            }}
          />
        </ProjectHeader>
        
        <ProjectBody>
          <ProjectTitle itemProp="name">{project.name}</ProjectTitle>
          
          <ProjectDescription itemProp="description">
            {descriptionParagraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </ProjectDescription>
          
          {/* Add social sharing */}
          <SocialShare 
            url={`https://www.ofektechnology.comprojects/${projectSlug}`}
            title={`${project.name} | NAGA Projects`}
            description={project.description}
            media={project.image}
          />
          
          <MetaSection>
            <MetaTitle>Technologies Used</MetaTitle>
            <TechList itemProp="keywords">
              {project.technologies?.map((tech, index) => (
                <TechTag key={index}>{tech}</TechTag>
              ))}
            </TechList>
          </MetaSection>
          
          {project.relatedKeywords && (
            <MetaSection>
              <MetaTitle>Related Keywords</MetaTitle>
              <KeywordList>
                {project.relatedKeywords.map((keyword, index) => (
                  <KeywordTag key={index}>{keyword}</KeywordTag>
                ))}
              </KeywordList>
            </MetaSection>
          )}
          
          {project.technicalDetails && (
            <TechnicalDetails>
              <MetaTitle>Technical Details</MetaTitle>
              <div dangerouslySetInnerHTML={{ __html: project.technicalDetails }} />
            </TechnicalDetails>
          )}
          
          <ProjectLinks>
            {project.url && (
              <ProjectLink 
                href={project.url} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label={`Visit ${project.name} website`}
                onClick={() => {
                  ReactGA.event({
                    category: 'Project Detail',
                    action: 'Clicked Project URL',
                    label: project.name
                  });
                }}
              >
                <FaExternalLinkAlt /> Visit Project
              </ProjectLink>
            )}
            
            {project.gitHubUrl && (
              <ProjectLink 
                href={project.gitHubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="github"
                aria-label={`${project.name} GitHub repository`}
                onClick={() => {
                  ReactGA.event({
                    category: 'Project Detail',
                    action: 'Clicked GitHub Link',
                    label: project.name
                  });
                }}
              >
                <FaGithub /> View Code
              </ProjectLink>
            )}
            
            {project.discordUrl && (
              <ProjectLink 
                href={project.discordUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="discord"
                aria-label={`Join ${project.name} Discord`}
                onClick={() => {
                  ReactGA.event({
                    category: 'Project Detail',
                    action: 'Clicked Discord Link',
                    label: project.name
                  });
                }}
              >
                <FaDiscord /> Join Discord
              </ProjectLink>
            )}
          </ProjectLinks>
        </ProjectBody>
      </ProjectContent>
      
      {/* Hidden keywords for SEO */}
      <HiddenKeywords aria-hidden="true">
        {project.relatedKeywords?.map((keyword, index) => (
          <span key={index}>{keyword}</span>
        ))}
      </HiddenKeywords>
    </ProjectDetailContainer>
  );
};

export default ProjectDetail; 