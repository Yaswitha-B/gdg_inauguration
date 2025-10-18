import { useEffect, useRef } from 'react';
import { animate } from 'animejs';
import Slide from '../Slide';
import gdgLogo from '../../assets/logos/gdg_logo.svg';
import './LogoSlide.css';

/**
 * Logo Slide - Simple GDG Logo on Black Background
 * Just the logo centered on black
 */
const LogoSlide = () => {
  const logoRef = useRef(null);

  useEffect(() => {
    // Logo entrance
    const logo = logoRef.current;
    if (logo) {
      animate(logo, {
        opacity: [0, 1],
        scale: [0.8, 1]
      }, {
        duration: 1200,
        ease: 'out(3)'
      });
    }
  }, []);

  return (
    <Slide id="logo" backgroundColor="#000000">
      <div className="logo-slide-root">
        {/* Floating background dots */}
        <div className="logo-slide-decorations">
          <div className="logo-slide-dot logo-slide-dot-blue"></div>
          <div className="logo-slide-dot logo-slide-dot-green"></div>
        </div>

        {/* Logo directly on background */}
        <div className="logo-slide-content">
          <div className="logo-slide-wrapper" ref={logoRef}>
            <img src={gdgLogo} alt="GDG Logo" className="logo-slide-image" />
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default LogoSlide;
