import { useEffect, useRef } from 'react';
import { animate } from 'animejs';
import Slide from '../Slide';
import './StartSlide.css';

/**
 * Start Slide - Simple opening slide
 * Just small grey text "Scroll Down to Start" with floating arrow
 * Same background as GDGIntroSlide
 */
const StartSlide = () => {
  const textRef = useRef(null);
  const arrowRef = useRef(null);

  useEffect(() => {
    // Text fade in
    const text = textRef.current;
    if (text) {
      animate(text, {
        opacity: [0, 1]
      }, {
        duration: 1000,
        delay: 300,
        ease: 'out(2)'
      });
    }

    // Continuous floating arrow animation
    const arrow = arrowRef.current;
    if (arrow) {
      setTimeout(() => {
        animate(arrow, {
          translateY: [0, 10, 0]
        }, {
          duration: 1800,
          ease: 'inOut(2)',
          loop: true
        });
      }, 800);
    }
  }, []);

  return (
    <Slide id="start" backgroundColor="#000000">
      <div className="start-root">
        {/* Floating background dots - same as intro slide */}
        <div className="start-decorations">
          <div className="start-dot start-dot-blue"></div>
          <div className="start-dot start-dot-green"></div>
        </div>

        {/* Simple centered content */}
        <div className="start-content">
          <p className="start-text" ref={textRef}>Scroll Down to Start</p>
          <div className="start-arrow" ref={arrowRef}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
              <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="rgba(255, 255, 255, 0.5)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default StartSlide;
