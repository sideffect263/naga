import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FaEnvelope } from 'react-icons/fa';

const EmailLink = styled.button`
  background: none;
  border: none;
  color: var(--primary-color);
  cursor: pointer;
  font-family: inherit;
  font-size: inherit;
  text-decoration: underline;
  padding: 0;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  transition: color 0.3s ease;
  
  &:hover {
    color: var(--secondary-color);
  }
`;

/**
 * ObfuscatedEmail - A component that obfuscates email addresses to protect against spam harvesters
 * 
 * The component doesn't render the actual email in the DOM until the user interacts with it.
 * It uses a combination of Unicode characters and JavaScript to make it harder for bots to collect.
 * 
 * @param {string} email - The email address to obfuscate
 * @param {string} linkText - Optional text to display for the link (defaults to "Email me")
 * @param {boolean} showIcon - Whether to show an envelope icon
 * @param {object} className - CSS class to apply to the component
 */
const ObfuscatedEmail = ({ email, linkText = "Email me", showIcon = true, className }) => {
  const [clicked, setClicked] = useState(false);
  
  // Split the email into parts to make it harder for bots to parse
  const [username, domain] = email.split('@');
  
  // Convert parts to Unicode codes to prevent static crawling
  const obfuscatedUsername = username.split('').map(char => 
    String.fromCharCode(char.charCodeAt(0))
  ).join('');
  
  const obfuscatedDomain = domain.split('').map(char => 
    String.fromCharCode(char.charCodeAt(0))
  ).join('');
  
  const handleClick = () => {
    // When clicked, construct the email and open mail client
    const emailAddress = `${obfuscatedUsername}@${obfuscatedDomain}`;
    window.location.href = `mailto:${emailAddress}`;
    setClicked(true);
    
    // Track email click if ReactGA is available
    if (window.ReactGA) {
      window.ReactGA.event({
        category: 'Contact',
        action: 'Email Click',
        label: 'Obfuscated Email'
      });
    }
  };
  
  return (
    <EmailLink 
      onClick={handleClick} 
      className={className}
      aria-label="Send email"
    >
      {showIcon && <FaEnvelope />}
      {linkText}
    </EmailLink>
  );
};

ObfuscatedEmail.propTypes = {
  email: PropTypes.string.isRequired,
  linkText: PropTypes.string,
  showIcon: PropTypes.bool,
  className: PropTypes.string
};

export default ObfuscatedEmail; 