import React from 'react';
import styled from 'styled-components';
import { 
  FaFacebookF, 
  FaTwitter, 
  FaLinkedinIn, 
  FaPinterestP, 
  FaRedditAlien, 
  FaWhatsapp 
} from 'react-icons/fa';

const ShareContainer = styled.div`
  margin: 30px 0;
`;

const ShareTitle = styled.h4`
  font-size: 1.1rem;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  
  &::after {
    content: '';
    flex-grow: 1;
    height: 1px;
    background: rgba(var(--primary-color-rgb), 0.2);
    margin-left: 15px;
  }
`;

const ShareButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

const ShareButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 1.1rem;
  color: white;
  transition: var(--transition);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
  
  &.facebook {
    background-color: #3b5998;
  }
  
  &.twitter {
    background-color: #1da1f2;
  }
  
  &.linkedin {
    background-color: #0077b5;
  }
  
  &.pinterest {
    background-color: #bd081c;
  }
  
  &.reddit {
    background-color: #ff4500;
  }
  
  &.whatsapp {
    background-color: #25d366;
  }
`;

const SocialShare = ({ 
  url = window.location.href, 
  title = document.title, 
  description = '', 
  media = '' 
}) => {
  // Encode parameters
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  const encodedDescription = encodeURIComponent(description);
  const encodedMedia = encodeURIComponent(media);
  
  // Share URLs
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
  const twitterUrl = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`;
  const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
  const pinterestUrl = `https://pinterest.com/pin/create/button/?url=${encodedUrl}&media=${encodedMedia}&description=${encodedTitle}`;
  const redditUrl = `https://www.reddit.com/submit?url=${encodedUrl}&title=${encodedTitle}`;
  const whatsappUrl = `https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`;
  
  // Track share events
  const handleShare = (platform) => {
    if (window.ReactGA) {
      window.ReactGA.event({
        category: 'Social',
        action: 'Share Content',
        label: platform
      });
    }
  };
  
  return (
    <ShareContainer>
      <ShareTitle>Share This</ShareTitle>
      <ShareButtons>
        <ShareButton 
          href={facebookUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="facebook"
          aria-label="Share on Facebook"
          onClick={() => handleShare('Facebook')}
        >
          <FaFacebookF />
        </ShareButton>
        
        <ShareButton 
          href={twitterUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="twitter"
          aria-label="Share on Twitter"
          onClick={() => handleShare('Twitter')}
        >
          <FaTwitter />
        </ShareButton>
        
        <ShareButton 
          href={linkedinUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="linkedin"
          aria-label="Share on LinkedIn"
          onClick={() => handleShare('LinkedIn')}
        >
          <FaLinkedinIn />
        </ShareButton>
        
        {media && (
          <ShareButton 
            href={pinterestUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="pinterest"
            aria-label="Share on Pinterest"
            onClick={() => handleShare('Pinterest')}
          >
            <FaPinterestP />
          </ShareButton>
        )}
        
        <ShareButton 
          href={redditUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="reddit"
          aria-label="Share on Reddit"
          onClick={() => handleShare('Reddit')}
        >
          <FaRedditAlien />
        </ShareButton>
        
        <ShareButton 
          href={whatsappUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="whatsapp"
          aria-label="Share on WhatsApp"
          onClick={() => handleShare('WhatsApp')}
        >
          <FaWhatsapp />
        </ShareButton>
      </ShareButtons>
    </ShareContainer>
  );
};

export default SocialShare; 