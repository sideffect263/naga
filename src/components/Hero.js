import React, { useState, useRef, useEffect, useCallback } from 'react';
import styled, { keyframes, css } from 'styled-components';

const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const underlineAnimation = keyframes`
  0% { width: 0; left: 0; opacity: 0; }
  15% { width: 100%; left: 0; opacity: 0.4; }
  85% { width: 100%; left: 0; opacity: 0.4; }
  100% { width: 0; left: 100%; opacity: 0; }
`;

// Animation definitions
const float = keyframes`
  0% { transform: translate(0, 0); }
  25% { transform: translate(10px, -10px); }
  50% { transform: translate(20px, 0); }
  75% { transform: translate(10px, 10px); }
  100% { transform: translate(0, 0); }
`;

const pulse = keyframes`
  0% { transform: scale(1); opacity: 0.7; }
  50% { transform: scale(1.05); opacity: 0.9; }
  100% { transform: scale(1); opacity: 0.7; }
`;

const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

// Animation container
const AnimationContainer = styled.div`
  position: relative;
  height: 180px;
  width: 100%;
  max-width: 800px;
  margin: 0 auto 30px;
  overflow: visible;
  animation: ${fadeIn} 1.5s ease-out;
  perspective: 1000px;
  
  @media (max-width: 768px) {
    height: 120px;
    margin-bottom: 20px;
    overflow: hidden;
  }
  
  @media (max-width: 480px) {
    height: 100px;
    margin-bottom: 15px;
    overflow: hidden;
  }
`;

// Common styles for animated elements
const animatedStyles = css`
  position: absolute;
  will-change: transform;
  transition: 1s all;

  transition: transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1);
  
  &:hover {
    filter: brightness(1.4);
    transform: scale(1.2);
    transition: 1s all;
  }
`;

// Floating element base
const FloatingElement = styled.div`
  ${animatedStyles}
  border-radius: 50%;
  background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
  opacity: 0.7;
  filter: blur(8px);
  width: ${props => props.size || '60px'};
  height: ${props => props.size || '60px'};
  top: ${props => props.top || '0'};
  left: ${props => props.left || '0'};
  z-index: ${props => props.zIndex || 1};
`;

const CircleElement = styled(FloatingElement)``;

const ShapeElement = styled.div`
  ${animatedStyles}
  width: ${props => props.size || '40px'};
  height: ${props => props.size || '40px'};
  top: ${props => props.top || '0'};
  left: ${props => props.left || '0'};
  background-color: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(2px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  z-index: ${props => props.zIndex || 1};
`;

const SquareElement = styled(ShapeElement)`
  border-radius: 4px;
  animation: ${props => css`${spin} ${props.spinDuration || '15s'} linear infinite`};
  transform-origin: center center;
`;

const TriangleElement = styled.div`
  ${animatedStyles}
  width: 0;
  height: 0;
  top: ${props => props.top || '0'};
  left: ${props => props.left || '0'};
  border-left: ${props => props.size || '20px'} solid transparent;
  border-right: ${props => props.size || '20px'} solid transparent;
  border-bottom: ${props => props.size || '35px'} solid rgba(var(--accent-color-rgb), 0.2);
  filter: blur(2px);
  z-index: ${props => props.zIndex || 1};
`;

// Rest of your styled components (HeroSection, HeroContent, etc.)
const HeroSection = styled.section`
  min-height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--bg-color);
  position: relative;
  overflow: hidden;
  padding: 70px 0 0;
  scroll-margin-top: 70px;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: linear-gradient(120deg, rgba(0,36,61,0.05) 0%, rgba(9,121,112,0.1) 100%);
    z-index: 1;
  }

  @media (max-width: 480px) {
    min-height: 80vh;
    padding: 60px 0 30px;
    scroll-margin-top: 60px;
  }
`;

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  text-align: center;
  z-index: 2;
  position: relative;

  @media (max-width: 480px) {
    padding: 0 15px;
  }
`;

const Title = styled.h1`
  font-size: 4.5rem;
  margin-bottom: 20px;
  animation: ${fadeIn} 1s ease-out;
  
  @media (max-width: 768px) {
    font-size: 3rem;
    margin-bottom: 15px;
  }
  
  @media (max-width: 480px) {
    font-size: 2.5rem;
    margin-bottom: 12px;
    padding: 0 10px;
  }
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 40px;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  animation: ${fadeIn} 1s ease-out 0.3s forwards;
  opacity: 0;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 30px;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 25px;
    padding: 0 10px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  animation: ${fadeIn} 1s ease-out 0.6s forwards;
  opacity: 0;
  
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }
`;

const HeroButton = styled.a`
  padding: 12px 30px;
  border-radius: 4px;
  font-weight: 600;
  font-size: 1.1rem;
  transition: var(--transition);
  text-decoration: none;
  display: inline-block;
  
  &.primary {
    background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
    background-size: 200% 200%;
    animation: ${gradientAnimation} 5s ease infinite;
    color: white;
    border: none;
    
    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    }
  }
  
  &.secondary {
    background: transparent;
    border: 2px solid var(--primary-color);
    color: var(--text-color);
    
    &:hover {
      background-color: var(--primary-color);
      color: white;
      transform: translateY(-5px);
    }
  }

  @media (max-width: 480px) {
    padding: 12px 25px;
    font-size: 1rem;
    width: 80%;
    max-width: 250px;
  }
`;

const Highlight = styled.span`
  color: var(--primary-color);
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 8px;
    bottom: 0;
    left: 0;
    background-color: var(--accent-color);
    opacity: 0;
    z-index: -1;
    animation: ${underlineAnimation} 6s ease-in-out infinite;
  }
`;

// Animation elements data
const animationElements = [
  { type: 'circle', size: '70px', top: '20%', left: '15%', sensitivity: 0.8, zIndex: 3 },
  { type: 'circle', size: '40px', top: '60%', left: '25%', sensitivity: 1.2, zIndex: 1 },
  { type: 'circle', size: '55px', top: '30%', left: '60%', sensitivity: 1.0, zIndex: 2 },
  { type: 'circle', size: '30px', top: '70%', left: '75%', sensitivity: 1.5, zIndex: 1 },
  { type: 'square', size: '35px', top: '45%', left: '40%', sensitivity: 0.6, zIndex: 2, spinDuration: '18s' },
  { type: 'square', size: '25px', top: '20%', left: '80%', sensitivity: 0.5, zIndex: 1, spinDuration: '24s' },
  { type: 'square', size: '20px', top: '50%', left: '70%', sensitivity: 0.7, zIndex: 2, spinDuration: '15s' },
  { type: 'triangle', size: '15px', top: '65%', left: '55%', sensitivity: 0.7, zIndex: 1 },
  { type: 'triangle', size: '12px', top: '35%', left: '85%', sensitivity: 0.9, zIndex: 2 }
];

// Throttle function to limit execution frequency
const throttle = (func, limit) => {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

// Add a function to handle responsive positioning
const getResponsivePosition = (element, isMobile) => {
  const { type, size, top, left, zIndex, sensitivity, spinDuration } = element;
  
  // Adjust positions for mobile view to make it more compact and centered
  let mobileTop = top;
  let mobileLeft = left;
  
  if (isMobile) {
    // Make all elements cluster closer to center on mobile
    const distanceFromCenter = {
      x: Math.abs(50 - parseInt(left)),
      y: Math.abs(50 - parseInt(top))
    };
    
    // Move elements 30% closer to center
    const moveTowardCenter = 0.3;
    
    mobileTop = `${parseInt(top) + ((50 - parseInt(top)) * moveTowardCenter)}%`;
    mobileLeft = `${parseInt(left) + ((50 - parseInt(left)) * moveTowardCenter)}%`;
    
    // Adjust size for smaller screens - make elements a bit smaller
    const sizeFactor = type === 'circle' ? 0.8 : 0.9; // Reduce circles more than squares
    const newSize = `${parseInt(size) * sizeFactor}px`;
    
    return {
      ...element,
      top: mobileTop,
      left: mobileLeft,
      size: newSize
    };
  }
  
  return element;
};

// Main Hero component
const Hero = () => {
  // Refs for animation container and elements
  const containerRef = useRef(null);
  const elementsRef = useRef([]);
  const [isHovering, setIsHovering] = useState(false);
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });
  const rafRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isTouching, setIsTouching] = useState(false);
  const [touchStartPos, setTouchStartPos] = useState({ x: 0, y: 0 });
  
  // Check for mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile(); // Initial check
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  // Calculate element transforms with improved mobile support
  const updateElementPositions = useCallback(() => {
    if (!isHovering || !containerRef.current) return;
    
    const elements = elementsRef.current;
    if (!elements.length) return;
    
    elements.forEach((el, index) => {
      if (!el) return;
      
      const sensitivity = animationElements[index].sensitivity;
      const depth = 1 + sensitivity * 0.5; // Z-depth effect
      
      // Reduce movement on mobile for better experience
      const mobileFactor = isMobile ? 0.5 : 1; 
      
      // Calculate 3D transform
      const translateX = coordinates.x * 40 * sensitivity * mobileFactor;
      const translateY = coordinates.y * 40 * sensitivity * mobileFactor;
      const rotateX = coordinates.y * -5 * sensitivity * mobileFactor; // Tilt based on Y position
      const rotateY = coordinates.x * 5 * sensitivity * mobileFactor;  // Tilt based on X position
      
      // Preserve original rotation for squares
      const originalTransform = el.getAttribute('data-original-transform') || '';
      
      el.style.transform = `
        translate3d(${translateX}px, ${translateY}px, 0)
        rotateX(${rotateX}deg) 
        rotateY(${rotateY}deg)
        scale(${depth})
        ${originalTransform}
      `;
    });
    
    rafRef.current = null;
  }, [coordinates, isHovering, isMobile]);
  
  // Handle mouse movement
  const handleMouseMove = useCallback((e) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Calculate normalized mouse position (-1 to 1)
    const normX = ((e.clientX - rect.left) - centerX) / centerX;
    const normY = ((e.clientY - rect.top) - centerY) / centerY;
    
    setCoordinates({ x: normX, y: normY });
    
    // Use requestAnimationFrame for smoother updates
    if (!rafRef.current) {
      rafRef.current = requestAnimationFrame(updateElementPositions);
    }
  }, [updateElementPositions]);
  
  // Throttled event handler
  const throttledMouseMove = useCallback(
    throttle(handleMouseMove, 16), // ~60fps
    [handleMouseMove]
  );
  
  // Handle touch events for mobile with passive option
  const handleTouchStart = useCallback((e) => {
    if (!containerRef.current) return;
    
    const touch = e.touches[0];
    setTouchStartPos({ x: touch.clientX, y: touch.clientY });
    setIsTouching(true);
    setIsHovering(true); // Ensure hovering state is active for touch too
  }, []);
  
  const handleTouchMove = useCallback((e) => {
    if (!containerRef.current || !isTouching) return;
    
    const touch = e.touches[0];
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Calculate normalized touch position (-1 to 1)
    const touchX = ((touch.clientX - rect.left) - centerX) / centerX;
    const touchY = ((touch.clientY - rect.top) - centerY) / centerY;
    
    // Smooth transition by setting coordinates
    setCoordinates({ 
      x: touchX * 0.6, // Reduce sensitivity for touch even more
      y: touchY * 0.6 
    });
    
    // Use requestAnimationFrame for smoother updates on touch
    if (!rafRef.current) {
      rafRef.current = requestAnimationFrame(updateElementPositions);
    }
  }, [isTouching, updateElementPositions]);
  
  const handleTouchEnd = useCallback(() => {
    setIsTouching(false);
    
    // Return elements to center position with smooth animation
    setCoordinates({ x: 0, y: 0 });
    
    // Use requestAnimationFrame to update positions smoothly
    if (!rafRef.current) {
      rafRef.current = requestAnimationFrame(updateElementPositions);
    }
  }, [updateElementPositions]);
  
  // Setup event listeners including touch events with passive option
  useEffect(() => {
    const heroSection = document.getElementById('home');
    if (!heroSection || !containerRef.current) return;
    
    // Collect element refs
    elementsRef.current = Array.from(containerRef.current.querySelectorAll('.animated-element'));
    
    // Store original transforms for elements that need rotation
    elementsRef.current.forEach((el, index) => {
      const type = animationElements[index].type;
      if (type === 'square') {
        const spinDuration = animationElements[index].spinDuration;
        el.setAttribute('data-original-transform', `rotate(0deg)`);
        
        // Comment out direct style animation setting since we now use CSS props
        // el.style.animation = `${spin} ${spinDuration} linear infinite`;
      }
    });
    
    // Handle mouse enter/leave
    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => {
      setIsHovering(false);
      setCoordinates({ x: 0, y: 0 });
      
      // Animate elements back to center position
      elementsRef.current.forEach(el => {
        if (el) {
          el.style.transition = 'transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)';
          el.style.transform = 'translate3d(0, 0, 0) rotateX(0) rotateY(0) scale(1)';
        }
      });
      
      // Reset transition after returning to center
      setTimeout(() => {
        elementsRef.current.forEach(el => {
          if (el) el.style.transition = 'transform 0.15s ease-out';
        });
      }, 600);
    };
    
    // Add event listeners with passive option for touch events
    heroSection.addEventListener('mouseenter', handleMouseEnter);
    heroSection.addEventListener('mouseleave', handleMouseLeave);
    heroSection.addEventListener('mousemove', throttledMouseMove);
    
    // Add touch event listeners with passive option
    heroSection.addEventListener('touchstart', handleTouchStart, { passive: true });
    heroSection.addEventListener('touchmove', handleTouchMove, { passive: true });
    heroSection.addEventListener('touchend', handleTouchEnd, { passive: true });
    heroSection.addEventListener('touchcancel', handleTouchEnd, { passive: true });
    
    // Cleanup with matching passive option
    return () => {
      heroSection.removeEventListener('mouseenter', handleMouseEnter);
      heroSection.removeEventListener('mouseleave', handleMouseLeave);
      heroSection.removeEventListener('mousemove', throttledMouseMove);
      
      // Remove touch event listeners with matching passive option
      heroSection.removeEventListener('touchstart', handleTouchStart, { passive: true });
      heroSection.removeEventListener('touchmove', handleTouchMove, { passive: true });
      heroSection.removeEventListener('touchend', handleTouchEnd, { passive: true });
      heroSection.removeEventListener('touchcancel', handleTouchEnd, { passive: true });
      
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [throttledMouseMove, handleTouchStart, handleTouchMove, handleTouchEnd]);
  
  // Handle navigation
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Render animation elements dynamically with responsive handling
  const renderAnimationElements = () => {
    return animationElements.map((element, index) => {
      // Apply responsive positioning
      const responsiveElement = getResponsivePosition(element, isMobile);
      const { type, size, top, left, zIndex, spinDuration } = responsiveElement;
      
      const commonProps = {
        className: 'animated-element',
        key: `${type}-${index}`,
        size,
        top,
        left,
        zIndex
      };
      
      switch (type) {
        case 'circle':
          return <CircleElement {...commonProps} />;
        case 'square':
          return <SquareElement {...commonProps} spinDuration={spinDuration} />;
        case 'triangle':
          return <TriangleElement {...commonProps} />;
        default:
          return null;
      }
    });
  };

  return (
    <HeroSection id="home">
      <HeroContent>
        <AnimationContainer ref={containerRef}>
          {renderAnimationElements()}
        </AnimationContainer>
        <Title>
          Got a cool <Highlight>app</Highlight> idea?
        </Title>
        <Subtitle>
          I'm a passionate full-stack developer crafting beautiful, functional applications.
          Let's build something awesome together.
        </Subtitle>
        <ButtonContainer>
          <HeroButton href="#projects" className="primary" style={{display:'flex'}} onClick={(e) => scrollToSection(e, 'projects')}>
            View Projects
          </HeroButton>
          <HeroButton href="#contact" className="secondary" style={{display:'flex'}} onClick={(e) => scrollToSection(e, 'contact')}>
            Get In Touch
          </HeroButton>
        </ButtonContainer>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero; 


