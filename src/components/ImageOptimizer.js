import React from 'react';

/**
 * Helper functions for image optimization
 */

/**
 * Generates different sized image srcsets for responsive images
 * @param {string} src - Original image source
 * @param {Array} sizes - Array of sizes to generate (e.g. [320, 640, 960, 1280])
 * @returns {string} srcset attribute value
 */
export const generateSrcSet = (src, sizes = [320, 640, 960, 1280]) => {
  // For images stored on a CDN with resize capabilities (like Cloudinary)
  if (src.includes('res.cloudinary.com')) {
    return sizes
      .map(size => {
        // Find insertion point for width parameter
        const insertPoint = src.lastIndexOf('/upload/') + 8;
        const optimizedSrc = 
          src.slice(0, insertPoint) + 
          `w_${size},c_scale,q_auto,f_auto/` + 
          src.slice(insertPoint);
        return `${optimizedSrc} ${size}w`;
      })
      .join(', ');
  }
  
  // For local images (basic implementation - in production you would need
  // actual resized versions of these images)
  return src + ' 1280w';
};

/**
 * Creates size attribute for responsive images
 * @param {Object} breakpoints - Object with breakpoint configurations
 * @returns {string} sizes attribute value
 */
export const generateSizes = (breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280
}) => {
  return `
    (max-width: ${breakpoints.sm}px) 100vw,
    (max-width: ${breakpoints.md}px) 50vw,
    (max-width: ${breakpoints.lg}px) 40vw,
    33vw
  `;
};

/**
 * Responsive Image Component with built-in optimization
 */
const ResponsiveImage = ({
  src,
  alt,
  className,
  width,
  height,
  sizes,
  lazy = true,
  ...props
}) => {
  const imgSizes = sizes || generateSizes();
  const srcSet = generateSrcSet(src);
  
  return (
    <img
      src={src}
      srcSet={srcSet}
      sizes={imgSizes}
      alt={alt}
      className={className}
      width={width}
      height={height}
      loading={lazy ? "lazy" : "eager"}
      decoding="async"
      {...props}
    />
  );
};

export default ResponsiveImage; 