import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title = 'NAGA - Innovative App Concept Solutions',
  description = 'NAGA - Challenge us with your app concept. We\'ll deliver innovative solutions that drive results for web, mobile, and data applications.',
  keywords = 'app development, web apps, cybersecurity, data visualization, custom software, mobile apps, UI/UX design',
  image = '/images/og-image.jpg',
  url = 'https://www.ofektechnology.com',
  sectionName = '',
  lang = 'en'
}) => {
  const fullTitle = sectionName ? `${sectionName} | NAGA` : title;
  const fullUrl = sectionName ? `${url}/#${sectionName.toLowerCase()}` : url;
  
  // Structured data for Organization
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': 'NAGA',
    'url': url,
    'logo': `${url}/favicon/favicon.svg`,
    'description': 'NAGA delivers innovative app concept solutions that drive results for web, mobile, and data applications.',
    'contactPoint': {
      '@type': 'ContactPoint',
      'contactType': 'customer service',
      'email': 'arielbiton03@gmail.com'
    },
    'sameAs': [
      'https://github.com/sideffect263',
      'https://discord.gg/AM9V3m7U'
    ]
  };

  // Structured data based on section
  const getSectionSchema = () => {
    switch(sectionName.toLowerCase()) {
      case 'projects':
        return {
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          'name': 'NAGA Projects Portfolio',
          'description': 'Explore NAGA\'s portfolio of web apps, cybersecurity tools, and data visualization projects.',
          'url': `${url}/#projects`,
          'isPartOf': {
            '@type': 'WebSite',
            'name': 'NAGA',
            'url': url
          }
        };
      case 'about':
        return {
          '@context': 'https://schema.org',
          '@type': 'AboutPage',
          'name': 'About NAGA',
          'description': 'Learn about NAGA\'s mission, expertise, and our approach to delivering innovative app solutions.',
          'url': `${url}/#about`,
          'mainEntity': {
            '@type': 'Organization',
            'name': 'NAGA',
            'url': url
          }
        };
      case 'contact':
        return {
          '@context': 'https://schema.org',
          '@type': 'ContactPage',
          'name': 'Contact NAGA',
          'description': 'Get in touch with NAGA for your app concept needs.',
          'url': `${url}/#contact`,
          'mainEntity': {
            '@type': 'Organization',
            'name': 'NAGA',
            'url': url
          }
        };
      default:
        return {
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          'url': url,
          'name': title,
          'description': description,
          'potentialAction': {
            '@type': 'SearchAction',
            'target': `${url}/search?q={search_term_string}`,
            'query-input': 'required name=search_term_string'
          }
        };
    }
  };

  return (
    <Helmet>
      {/* Language */}
      <html lang={lang} />
      
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${url}${image}`} />
      <meta property="og:site_name" content="NAGA" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={`${url}${image}`} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />
      
      {/* Page navigation and indexing */}
      <meta name="robots" content="index, follow" />
      
      {/* Performance tags */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      
      {/* PWA tags */}
      <meta name="application-name" content="NAGA" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="NAGA" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="theme-color" content="#00243d" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      
      <script type="application/ld+json">
        {JSON.stringify(getSectionSchema())}
      </script>
    </Helmet>
  );
};

export default SEO; 