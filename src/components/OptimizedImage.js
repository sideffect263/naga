import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: ${props => props.height || 'auto'};
  overflow: hidden;
  background-color: rgba(var(--primary-color-rgb), 0.05);
  border-radius: ${props => props.borderRadius || '0'};
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: ${props => props.objectFit || 'cover'};
  transition: opacity 0.3s ease, transform 0.5s ease;
  opacity: ${props => (props.isLoaded ? 1 : 0)};
  transform: scale(${props => (props.isLoaded ? 1 : 1.05)});
  
  &:hover {
    transform: ${props => (props.hoverEffect ? 'scale(1.05)' : 'none')};
  }
`;

const LoadingPlaceholder = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(var(--primary-color-rgb), 0.1);
  opacity: ${props => (props.isVisible ? 1 : 0)};
  transition: opacity 0.3s ease;
  pointer-events: none;
`;

const LoadingSpinner = styled.div`
  width: 30px;
  height: 30px;
  border: 3px solid rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  border-top-color: var(--primary-color);
  animation: spin 1s ease-in-out infinite;
  
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`;

/**
 * OptimizedImage - A component for optimized, responsive image loading
 * 
 * @param {string} src - Image source URL
 * @param {string} alt - Image alt text
 * @param {string} height - Image container height
 * @param {string} borderRadius - Border radius for the image container
 * @param {string} objectFit - CSS object-fit property for the image
 * @param {boolean} hoverEffect - Enable scale on hover effect
 * @param {string} lowResSrc - Low resolution image to show first (optional)
 * @param {Object} imgProps - Additional props to pass to the img element
 */
const OptimizedImage = ({ 
  src, 
  alt,
  height,
  borderRadius,
  objectFit = 'cover',
  hoverEffect = false,
  lowResSrc,
  ...imgProps
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Handle image load completion
  const handleImageLoaded = () => {
    setIsLoaded(true);
  };
  
  return (
    <ImageContainer height={height} borderRadius={borderRadius}>
      <LoadingPlaceholder isVisible={!isLoaded}>
        <LoadingSpinner />
      </LoadingPlaceholder>
      
      <StyledImage
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={handleImageLoaded}
        isLoaded={isLoaded}
        objectFit={objectFit}
        hoverEffect={hoverEffect}
        {...imgProps}
      />
    </ImageContainer>
  );
};

OptimizedImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  height: PropTypes.string,
  borderRadius: PropTypes.string,
  objectFit: PropTypes.string,
  hoverEffect: PropTypes.bool,
  lowResSrc: PropTypes.string,
};

export default OptimizedImage; 