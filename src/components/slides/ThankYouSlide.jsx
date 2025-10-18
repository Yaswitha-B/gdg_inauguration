import { useEffect, useRef } from 'react';
import { animate } from 'animejs';
import Slide from '../Slide';
import './ThankYouSlide.css';

/**
 * Thank You Slide - Clean Closing Slide
 * Beautiful Thank You message with Google colors
 * Elegant typing animation
 */
const ThankYouSlide = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  const googleColors = {
    blue: '#4285F4',
    red: '#EA4335',
    yellow: '#FBBC04',
    green: '#34A853'
  };

  useEffect(() => {
    // Container entrance
    const container = containerRef.current;
    if (container) {
      animate(container, {
        opacity: [0, 1],
        scale: [0.95, 1]
      }, {
        duration: 1000,
        ease: 'out(3)'
      });
    }

    // Animate colored letters in "Thank You"
    const letters = titleRef.current?.querySelectorAll('.ty-letter');
    if (letters) {
      letters.forEach((letter, i) => {
        animate(letter, {
          opacity: [0, 1],
          translateY: [20, 0]
        }, {
          duration: 400,
          delay: 400 + i * 100,
          ease: 'out(2)'
        });
      });
    }

    // Subtitle animation
    const subtitle = subtitleRef.current;
    if (subtitle) {
      animate(subtitle, {
        opacity: [0, 1],
        translateY: [15, 0]
      }, {
        duration: 800,
        delay: 1800,
        ease: 'out(2)'
      });
    }
  }, []);

  return (
    <Slide id="thankyou" backgroundColor="#000000">
      <div className="ty-slide-root">
        {/* Floating background dots */}
        <div className="ty-slide-decorations">
          <div className="ty-slide-dot ty-slide-dot-blue"></div>
          <div className="ty-slide-dot ty-slide-dot-green"></div>
        </div>

        {/* Main bordered container */}
        <div className="ty-slide-container" ref={containerRef}>
          {/* Border decoration */}
          <div className="ty-slide-border">
            <div className="ty-slide-corner ty-slide-corner-tl" style={{ background: 'var(--google-blue)' }}></div>
            <div className="ty-slide-corner ty-slide-corner-tr" style={{ background: 'var(--google-red)' }}></div>
            <div className="ty-slide-corner ty-slide-corner-bl" style={{ background: 'var(--google-yellow)' }}></div>
            <div className="ty-slide-corner ty-slide-corner-br" style={{ background: 'var(--google-green)' }}></div>
          </div>

          {/* Content */}
          <div className="ty-slide-content">
            {/* Thank You with Google colors */}
            <h1 className="ty-title" ref={titleRef}>
              <span className="ty-letter" style={{ color: googleColors.blue }}>T</span>
              <span className="ty-letter" style={{ color: googleColors.red }}>h</span>
              <span className="ty-letter" style={{ color: googleColors.yellow }}>a</span>
              <span className="ty-letter" style={{ color: googleColors.green }}>n</span>
              <span className="ty-letter" style={{ color: googleColors.blue }}>k</span>
              <span className="ty-letter-space"> </span>
              <span className="ty-letter" style={{ color: googleColors.red }}>Y</span>
              <span className="ty-letter" style={{ color: googleColors.yellow }}>o</span>
              <span className="ty-letter" style={{ color: googleColors.green }}>u</span>
              <span className="ty-letter" style={{ color: googleColors.blue }}>!</span>
            </h1>

            {/* Subtitle */}
            <p className="ty-subtitle" ref={subtitleRef}>
              For being part of our journey
            </p>
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default ThankYouSlide;
