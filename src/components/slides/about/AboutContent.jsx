import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { typeText } from '../../../utils/typeText';
import ContentBox from '../../common/ContentBox';
import './AboutContent.css';

/**
 * Modular content component for GDG About slide
 * Can be extended with different content sections
 */
const AboutContent = ({ isActive }) => {
  const descRef = useRef(null);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    if (isActive && !hasAnimatedRef.current) {
      hasAnimatedRef.current = true;

      const descText = 'Google Developer Groups (GDG) are community groups for college and university students interested in Google developer technologies.';
      typeText(descRef.current, descText, null, 500, 25);
    } else if (!isActive) {
      // Reset animation state when not active
      hasAnimatedRef.current = false;
    }
  }, [isActive]);

  // Don't render content box until active
  if (!isActive) {
    return <div className="about-content"></div>;
  }

  return (
    <div className="about-content">
      <ContentBox variant="default" className="about-content-box">
        <div className="about-section">
          <p ref={descRef} className="about-description"></p>
        </div>
      </ContentBox>
    </div>
  );
};

AboutContent.propTypes = {
  isActive: PropTypes.bool,
};

export default AboutContent;
