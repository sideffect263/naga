import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaDiscord } from 'react-icons/fa';
import projects from '../data/projects';



const MainWrapper = styled.main`
  padding: 50px;
  background: linear-gradient(90deg, rgba(0,36,61,1) 0%, rgba(9,121,112,1) 100%);
  color: #fff;
  text-align: center;
  font-family: 'Raleway', sans-serif; /* Change the font family */



    #colorText1 {
          background: linear-gradient(to right, #99d98c, #76c893, #76c893);
          -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-size: 1.1em; /* Adjust the size as needed */
      
    
}
#colorText2 {
  background: linear-gradient(to right, #76c893, #52b69a, #34a0a4);
  -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-size: 1.1em; /* Adjust the size as needed */
    
}

#colorText3 {
  background: linear-gradient(to right, #34a0a4, #34a0a4, #168aad);
  -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-size: 1.1em; /* Adjust the size as needed */
}
  


    .shadow-text {
      text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
    }

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

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 40px;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 30px;
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
  font-size: 18px;
`;

const GitHubLink = styled.a`
  color: #fff;
  font-size: 32px;
  display: inline-block;
  margin-top: 15px;
  &:hover {
    color: #9b9b9b;
  }
`;

const DiscordLink = styled.a`
  color: #e9ecfd;
  width: 40px;
  background: #7289da;
  border-radius: 100%;
  font-size: 32px;
  display: inline-block;
  margin-top: 15px;
  &:hover {
    color: #9b9b9b;
  }
`;


const MainSection = () => (
  <MainWrapper>
 <Hero>
 <h1>Got a cool <span id='colorText1' class="shadow-text">a</span><span id='colorText2' class="shadow-text">p</span><span id='colorText3' class="shadow-text">p</span> idea?</h1>
 <p>Let's build something awesome together.</p>
</Hero>

    <ProjectsGrid>
      {projects.map((project, index) => (
        <a href={project.url} key={index}>
          <ProjectCard>
            <ProjectImage src={project.image} alt={project.name} />
            <ProjectName>{project.name}</ProjectName>
            <ProjectDescription>{project.description}</ProjectDescription>
            {project.gitHubUrl && !project.discordUrl && (
              <GitHubLink href={project.gitHubUrl} target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </GitHubLink>
            )}

            {project.discordUrl && (
              <DiscordLink href={project.discordUrl} target="_blank" rel="noopener noreferrer">
                <FaDiscord />
              </DiscordLink>
            )}

          </ProjectCard>
        </a>
      ))}
    </ProjectsGrid>
  </MainWrapper>
);

export default MainSection;
