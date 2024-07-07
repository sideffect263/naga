import React from 'react';
import styled from 'styled-components';
import {  FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const FooterWrapper = styled.footer`
  padding: 40px 20px;
  background: #111;
  color: #fff;
  text-align: center;
  position: relative;
`;

const SocialLinks = styled.div`
  margin: 20px 0;
  a {
    color: #fff;
    margin: 0 15px;
    text-decoration: none;
    font-size: 24px;
    transition: color 0.3s ease-in-out, transform 0.3s ease-in-out;

    &:hover {
      color: #ffd700; /* Gold color on hover */
      transform: translateY(-5px);
    }
  }
`;

const Copyright = styled.p`
  margin: 20px 0 0;
  font-size: 16px;
`;

const Footer = () => (
  <FooterWrapper>
    <SocialLinks>
      <a href="https://www.linkedin.com/in/ariel-biton/"><FaLinkedin /></a>
      <a href="https://github.com/sideffect263"><FaGithub /></a>
      <a href="https://www.instagram.com/arielbitonn/"><FaInstagram /></a>
      
    </SocialLinks>
    <Copyright>&copy; 2024 NAGA. All rights reserved.</Copyright>
  </FooterWrapper>
);

export default Footer;
