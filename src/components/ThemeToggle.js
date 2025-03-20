import React from 'react';
import styled from 'styled-components';

const ToggleContainer = styled.div`
  position: fixed;
  bottom: 30px;
  left: 30px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: var(--primary-color);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  z-index: 999;
  transition: var(--transition);
  overflow: hidden;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    bottom: 20px;
    left: 20px;
    width: 45px;
    height: 45px;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  
  &.sun {
    opacity: ${props => (props.darkMode ? 1 : 0)};
    transform: ${props => (props.darkMode ? 'translateY(0)' : 'translateY(100%)')};
  }
  
  &.moon {
    opacity: ${props => (props.darkMode ? 0 : 1)};
    transform: ${props => (props.darkMode ? 'translateY(-100%)' : 'translateY(0)')};
  }
`;

const SunIcon = styled.div`
  color: white;
  font-size: 1.5rem;
`;

const MoonIcon = styled.div`
  color: white;
  font-size: 1.5rem;
`;

const ThemeToggle = ({ darkMode, toggleTheme }) => {
  return (
    <ToggleContainer onClick={toggleTheme} aria-label="Toggle dark mode">
      <IconWrapper className="sun" darkMode={darkMode}>
        <SunIcon role="img" aria-label="Light mode">
          ☀️
        </SunIcon>
      </IconWrapper>
      <IconWrapper className="moon" darkMode={darkMode}>
        <MoonIcon role="img" aria-label="Dark mode">
          🌙
        </MoonIcon>
      </IconWrapper>
    </ToggleContainer>
  );
};

export default ThemeToggle; 