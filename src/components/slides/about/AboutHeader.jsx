import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { typeText } from '../../../utils/typeText';
import gdgLogo from '../../../assets/logos/gdg_logo.svg';
import './AboutHeader.css';

/**
 * Modular header component for GDG About slide
 * Shows logo and title in top-left corner
 * Logo fades in to sync with transition logo disappearing
 */
const AboutHeader = ({ isActive, showLogo = false }) => {
  const titleRef = useRef(null);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    if (isActive && !hasAnimatedRef.current) {
      hasAnimatedRef.current = true;

      const titleText = 'GDG on Campus';
      typeText(titleRef.current, titleText, null, 500, 80);
    } else if (!isActive) {
      // Reset animation state when not active
      hasAnimatedRef.current = false;
      if (titleRef.current) {
        titleRef.current.innerHTML = '';
      }
    }
  }, [isActive]);

  return (
    <div className={`about-header ${showLogo ? 'show' : ''}`}>
      <div className="about-header-logo">
        <img src={gdgLogo} alt="GDG Logo" className="about-logo-image" />
      </div>
      <h1 ref={titleRef} className="about-header-title"></h1>
    </div>
  );
};

AboutHeader.propTypes = {
  isActive: PropTypes.bool,
  showLogo: PropTypes.bool,
};

export default AboutHeader;
