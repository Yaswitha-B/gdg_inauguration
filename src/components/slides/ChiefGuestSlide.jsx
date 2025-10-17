import { useEffect, useRef } from 'react';
import { animate } from 'animejs';
import Slide from '../Slide';
import './ChiefGuestSlide.css';

/**
 * Chief Guest Slide - Split Layout
 * Left: Big square image (50%)
 * Right: Welcome message and details (50%)
 * Google Material Design with animations
 */
const ChiefGuestSlide = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  const googleColors = {
    blue: '#4285F4',
    red: '#EA4335',
    yellow: '#FBBC04',
    green: '#34A853'
  };

  // Chief guest data
  const chiefGuest = {
    name: 'Mr. Raghu Pulaparthi', 
    title: 'IT Consulting Leader', 
    organization: 'K2 Partnering Solutions', 
    bio: 'An accomplished IT Consulting Leader with expertise in AI, Automation, and Digital Transformation, combining strategic leadership with humanitarian values to inspire innovation with purpose.'
  };

  useEffect(() => {
    // Card entrance animation
    if (rightRef.current) {
      animate(rightRef.current, {
        scale: [0.95, 1],
        opacity: [0, 1]
      }, {
        duration: 800,
        ease: 'out(3)'
      });
    }

    // Left image animation with rotation
    if (leftRef.current) {
      animate(leftRef.current, {
        translateX: [-50, 0],
        opacity: [0, 1],
        scale: [0.9, 1],
        rotate: [-5, 0]
      }, {
        duration: 1000,
        delay: 300,
        ease: 'out(3)'
      });

      // Animate corner decorations
      const corners = leftRef.current.querySelectorAll('.frame-corner');
      if (corners) {
        corners.forEach((corner, i) => {
          animate(corner, {
            scale: [0, 1],
            opacity: [0, 0.7]
          }, {
            duration: 500,
            delay: 800 + i * 150,
            ease: 'out(3)'
          });
        });
      }
    }

    // Welcome text animation
    const welcome = document.querySelector('.chief-welcome');
    if (welcome) {
      animate(welcome, {
        translateY: [-30, 0],
        opacity: [0, 1]
      }, {
        duration: 600,
        delay: 400
      });
    }

    // Name letters cascade animation
    const letters = document.querySelectorAll('.name-letter');
    if (letters) {
      letters.forEach((letter, i) => {
        animate(letter, {
          translateY: [-20, 0],
          opacity: [0, 1],
          scale: [0.5, 1],
          rotate: [15, 0]
        }, {
          duration: 500,
          delay: 600 + i * 40,
          ease: 'out(3)'
        });
      });
    }

    // Divider bars slide in
    const dividerBars = document.querySelectorAll('.chief-divider span');
    if (dividerBars) {
      dividerBars.forEach((bar, i) => {
        animate(bar, {
          scaleX: [0, 1]
        }, {
          duration: 600,
          delay: 1000 + i * 100,
          ease: 'out(3)'
        });
      });
    }

    // Details fade in from bottom
    const details = document.querySelectorAll('.detail-item');
    if (details) {
      details.forEach((detail, i) => {
        animate(detail, {
          translateY: [20, 0],
          opacity: [0, 1]
        }, {
          duration: 600,
          delay: 1200 + i * 150
        });
      });
    }
  }, []);

  return (
    <Slide id="chief-guest" backgroundColor="#000000">
      <div className="chief-guest-root">
        {/* Background decorations */}
        <div className="chief-decorations">
          <div className="chief-dot chief-dot-blue"></div>
          <div className="chief-dot chief-dot-red"></div>
        </div>

        {/* White Card Container with Image and Content */}
        <div className="chief-content-card" ref={rightRef}>
          <div className="chief-card-inner">
            {/* LEFT SIDE - Big Square Image */}
            <div className="chief-left" ref={leftRef}>
              <div className="chief-image-wrapper">
                <div className="chief-image-placeholder">
                  {/* Placeholder for chief guest image */}
                  <div className="placeholder-text">Chief Guest Photo</div>
                  <div className="image-overlay"></div>
                </div>
                {/* Decorative frame corners */}
                <div className="frame-corner corner-tl" style={{ borderColor: googleColors.blue }}></div>
                <div className="frame-corner corner-tr" style={{ borderColor: googleColors.red }}></div>
                <div className="frame-corner corner-bl" style={{ borderColor: googleColors.yellow }}></div>
                <div className="frame-corner corner-br" style={{ borderColor: googleColors.green }}></div>
              </div>
            </div>

            {/* RIGHT SIDE - Content */}
            <div className="chief-right">
              {/* Welcome Header */}
              <div className="chief-welcome">
                <h2 className="welcome-text">Welcome</h2>
              </div>

              {/* Chief Guest Name with Google Colors */}
              <h1 className="chief-name">
                {chiefGuest.name.split('').map((char, i) => (
                  <span
                    key={i}
                    className="name-letter"
                    style={{
                      color: char === ' ' ? 'transparent' :
                        [googleColors.blue, googleColors.red, googleColors.yellow, googleColors.green][i % 4]
                    }}
                  >
                    {char}
                  </span>
                ))}
              </h1>

              {/* Title and Organization */}
              <div className="detail-item chief-title" style={{ color: googleColors.blue }}>
                {chiefGuest.title}
              </div>
              <div className="detail-item chief-org">
                {chiefGuest.organization}
              </div>

              {/* Google Color Divider */}
              <div className="chief-divider">
                <span style={{ background: googleColors.blue }}></span>
                <span style={{ background: googleColors.red }}></span>
                <span style={{ background: googleColors.yellow }}></span>
                <span style={{ background: googleColors.green }}></span>
              </div>

              {/* Bio */}
              <div className="detail-item chief-bio">
                {chiefGuest.bio}
              </div>

              {/* Welcome Message */}
              <div className="detail-item chief-message">
                <div className="message-box" style={{ borderLeftColor: googleColors.blue }}>
                  <p className="message-content">
                    We are honored to have you grace our GDGoC Inauguration ceremony. Your insights will inspire our community!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default ChiefGuestSlide;
