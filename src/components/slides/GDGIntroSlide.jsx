import { useEffect, useRef } from 'react';
import { animate, createDraggable } from 'animejs';
import Slide from '../Slide';
import gdgLogo from '../../assets/logos/gdg_logo.svg';
import './GDGIntroSlide.css';

const GDGIntroSlide = () => {
  const logoRef = useRef(null);
  const logoContainerRef = useRef(null);
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const line3Ref = useRef(null);
  const line4Ref = useRef(null);
  const hasTypedRef = useRef(false);

  useEffect(() => {
    if (hasTypedRef.current) return;
    hasTypedRef.current = true;

    if (logoContainerRef.current) {
      createDraggable(logoContainerRef.current, {
        container: '.gdg-intro-root'
      });
    }

    if (logoRef.current) {
      animate(logoRef.current, {
        scale: [0, 1],
        rotate: ['360deg', '0deg'],
        opacity: [0, 1],
        duration: 2000,
        easing: 'outElastic(1, .6)'
      });

      setTimeout(() => {
        if (logoRef.current) {
          animate(logoRef.current, {
            scale: [1, 1.08, 1],
            duration: 3000,
            easing: 'inOutSine',
            loop: true
          });
        }
      }, 2000);
    }

    const typeText = (element, text, colors, startDelay, charDelay) => {
      if (!element) return;
      
      element.innerHTML = ''; 
      
      let currentIndex = 0;
      setTimeout(() => {

        const cursor = document.createElement('span');
        cursor.className = 'typing-cursor';
        cursor.textContent = '|';
        element.appendChild(cursor);
        
        const typeInterval = setInterval(() => {
          if (currentIndex < text.length) {
            const char = text[currentIndex];
            const span = document.createElement('span');
            span.textContent = char === ' ' ? '\u00A0' : char;
            span.className = 'char';
            
            if (colors && colors[currentIndex]) {
              span.style.color = colors[currentIndex];
            }
            
            const cursorElement = element.querySelector('.typing-cursor');
            if (cursorElement) {
              element.insertBefore(span, cursorElement);
            }
            
            currentIndex++;
          } else {
            clearInterval(typeInterval);
            // Remove cursor after typing completes
            setTimeout(() => {
              const cursorElement = element.querySelector('.typing-cursor');
              if (cursorElement) cursorElement.remove();
            }, 300);
          }
        }, charDelay);
      }, startDelay);
    };

    const line1Text = "Google Developer Groups";
    typeText(line1Ref.current, line1Text, null, 1000, 80);

    const line2Text = "on Campus";
    const line2Colors = {
      0: '#4285F4', // o - blue
      1: '#4285F4', // n - blue
      2: '#ffffff', // space
      3: '#EA4335', // C - red
      4: '#34A853', // a - green
      5: '#FBBC04', // m - yellow
      6: '#4285F4', // p - blue
      7: '#34A853', // u - green
      8: '#EA4335', // s - red
    };
    const line1Length = line1Text.length;
    typeText(line2Ref.current, line2Text, line2Colors, 500 + (line1Length * 80) + 250, 100);

    const line3Text = "Gayatri Vidya Parishad College";
    const line2Length = line2Text.length;
    typeText(line3Ref.current, line3Text, null, 500 + (line1Length * 80) + 250 + (line2Length * 80) + 250, 60);

    const line4Text = "of Engineering for Women";
    const line3Length = line3Text.length;
    typeText(line4Ref.current, line4Text, null, 500 + (line1Length * 80) + 250 + (line2Length * 80) + 250 + (line3Length * 80) + 250, 60);

  }, []);

  return (
    <Slide id="gdg-intro" backgroundColor="#0a0a0a">
      <div className="gdg-intro-root">
        <div className="ambient-glow"></div>
        
        <div className="gdg-flex-container">
          {/* Left side - Logo */}
          <div ref={logoContainerRef} className="gdg-logo-container draggable">
            <div className="logo-glow"></div>
            <div className="logo-circle">
              <img ref={logoRef} src={gdgLogo} alt="GDG Logo" className="gdg-logo" />
            </div>
          </div>
          
          {/* Right side - Text */}
          <div className="gdg-text-container">
            <h1 ref={line1Ref} className="gdg-text-line1"></h1>
            <h2 ref={line2Ref} className="gdg-text-line2"></h2>
            <h3 ref={line3Ref} className="gdg-text-line3"></h3>
            <h3 ref={line4Ref} className="gdg-text-line3"></h3>
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default GDGIntroSlide;
