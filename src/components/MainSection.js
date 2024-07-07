import React from 'react';
import styled from 'styled-components';
import projects from '../data/projects';

const MainWrapper = styled.main`
  padding: 50px;
  background: linear-gradient(90deg, rgba(0,36,61,1) 0%, rgba(9,121,112,1) 100%);
  color: #fff;
  text-align: center;
`;

const Hero = styled.div`
  margin-bottom: 80px;
  h1 {
    font-size: 48px;
    margin-bottom: 20px;
  }
  p {
    font-size: 24px;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(470px, 1fr));
  gap: 50px;
  a, a:visited {
    color: #edf6f9;
    text-decoration: none;
  }
`;

const ProjectCard = styled.div`
  background: rgba(0, 0, 0, 0.7);
  padding: 20px;
  border-radius: 10px;
  transition: transform 0.5s, box-shadow 0.5s;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 0px 15px rgba(255, 255, 255, 0.3);
  }

  
`;

const ProjectImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
  margin-bottom: 15px;
  max-height: 300px;
    object-fit: cover;
    position: relative;
    image-rendering: auto;
    background-position: center;
`;

const ProjectName = styled.h3`
  font-size: 24px;
  margin-bottom: 10px;
`;

const ProjectDescription = styled.p`
  font-size: 16px;
`;

const MainSection = () => (
  <MainWrapper>
    <Hero>
      <h1>Challenge us with your app concept.</h1>
      <p>We'll deliver a solution that drives results</p>
    </Hero>
    <ProjectsGrid>
      {projects.map((project, index) => (
        <a href={project.url}>
        <ProjectCard key={index} >
          <ProjectImage src={project.image} alt={project.name} />
          <ProjectName>{project.name}</ProjectName>
          <ProjectDescription>{project.description}</ProjectDescription>
        </ProjectCard>
        </a>
      ))}
    </ProjectsGrid>
  </MainWrapper>
);

export default MainSection;