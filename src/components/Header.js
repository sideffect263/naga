import React from 'react';
import styled, { keyframes } from 'styled-components';

// Keyframes for background animation
const backgroundAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 40px;
  background: linear-gradient(90deg, #00243d, #097970);
  background-size: 200% 200%;
  animation: ${backgroundAnimation} 10s ease infinite;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
  top: 0;
  z-index: 1000;
  transition: all 0.3s ease-in-out;
    font-family: 'Raleway', sans-serif; /* Change the font family */;
    letter-spacing: 1px;


  &:hover {
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);
    transform: translateY(-2px);
  }
`;

const Logo = styled.div`
  font-size: 28px;
  color: #fff;
  font-weight: bold;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #ffd700; /* Gold color on hover */
  }
`;

const Nav = styled.nav`
  margin-left: auto;
  a {
    color: #fff;
    margin: 0 20px;
    text-decoration: none;
    font-size: 18px;
    transition: color 0.3s ease-in-out;

    &:hover {
      color: #ffd700; /* Gold color on hover */
    }
  }
`;

const Header = () => (
  <HeaderWrapper>
    <Logo>NAGA</Logo>
    
  </HeaderWrapper>
);

export default Header;
