import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import gdgLogo from '../../assets/logos/gdg_logo.svg';
import './LogoTransition.css';

/**
 * Smooth logo transition: slides from previous slide → rotates at center → flows to top-left corner
 */
const LogoTransition = ({ isActive, direction = 'down', onComplete }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (isActive) {
      const timer = setTimeout(() => {
        if (onComplete) onComplete();
      }, 2800); // Total transition time

      return () => clearTimeout(timer);
    }
  }, [isActive, onComplete]);

  return (
    <div
      ref={containerRef}
      className={`logo-transition-overlay ${isActive ? 'active' : ''}`}
    >
      <div className={`logo-journey ${direction}`}>
        <img
          src={gdgLogo}
          alt="GDG Logo"
          className="journey-logo"
        />
      </div>
    </div>
  );
};

LogoTransition.propTypes = {
  isActive: PropTypes.bool.isRequired,
  direction: PropTypes.oneOf(['down', 'up']),
  onComplete: PropTypes.func,
};

export default LogoTransition;
