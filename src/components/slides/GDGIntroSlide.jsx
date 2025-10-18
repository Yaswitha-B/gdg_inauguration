import { useState, useEffect, useRef } from 'react';
import Slide from '../Slide';
import { floatingAnimation } from '../../utils/animations';
import gdgLogo from '../../assets/logos/gdg_logo.svg';
import './GDGIntroSlide.css';

/**
 * GDG Intro Slide - Clean Google Material Design
 * Features:
 * - Rotating carousel with 2 cards
 * - Selective colorful elements (only "Google" and "GDG")
 * - Cool bordered container
 * - Text outlines for visibility
 * - Auto-rotation every 8 seconds
 */
const GDGIntroSlide = () => {
  const [activeCard, setActiveCard] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const decorationsRef = useRef(null);
  const slideRef = useRef(null);

  // Google brand colors
  const googleColors = {
    blue: 'var(--google-blue)',
    red: 'var(--google-red)',
    yellow: 'var(--google-yellow)',
    green: 'var(--google-green)',
  };

  useEffect(() => {
    // Intersection Observer to detect when slide is visible
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of slide is visible
    );

    if (slideRef.current) {
      observer.observe(slideRef.current);
    }

    return () => {
      if (slideRef.current) {
        observer.unobserve(slideRef.current);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    // Start floating decorations only when visible
    const timeline = setTimeout(() => {
      if (decorationsRef.current) {
        const dots = decorationsRef.current.querySelectorAll('.floating-dot');
        floatingAnimation(dots, 40, 3000);
      }
    }, 300);

    // Auto-rotate carousel every 8 seconds only when visible
    const autoRotate = setInterval(() => {
      setActiveCard(prev => (prev === 0 ? 1 : 0));
    }, 8000);

    return () => {
      clearTimeout(timeline);
      clearInterval(autoRotate);
    };
  }, [isVisible]);

  // Card 1 - College Info (Logo Card style)
  const renderCollegeCard = () => {
    const line1 = "Google Developer Groups";
    const line2 = "on Campus";
    const line3 = "Gayatri Vidya Parishad";
    const line4 = "College of Engineering for Women (A)";

    // Google colors for "on Campus"
    const line2Colors = [
      googleColors.blue, googleColors.blue, null, // "on "
      googleColors.red, googleColors.green, googleColors.yellow, // "Cam"
      googleColors.blue, googleColors.green, googleColors.red // "pus"
    ];

    return (
      <div className="carousel-card college-card">
        <div className="logo-card-container">
          {/* Left side: Logo with glow */}
          <div className="logo-section">
            <div className="logo-glow"></div>
            <div className="logo-circle">
              <img src={gdgLogo} alt="GDG Logo" className="gdg-logo-pulsing" />
            </div>
          </div>

          {/* Right side: Text lines */}
          <div className="text-section">
            <h1 className="text-line1">
              {line1.split('').map((char, i) => (
                <span
                  key={i}
                  className="letter-animated"
                  style={{
                    animationDelay: `${i * 0.05}s`
                  }}
                >
                  {char}
                </span>
              ))}
            </h1>

            <h2 className="text-line2">
              {line2.split('').map((char, i) => (
                <span
                  key={i}
                  className="letter-animated"
                  style={{
                    color: line2Colors[i] || '#ffffff',
                    animationDelay: `${(line1.length * 0.05) + (i * 0.05)}s`
                  }}
                >
                  {char}
                </span>
              ))}
            </h2>

            <h3 className="text-line3">
              {line3.split('').map((char, i) => (
                <span
                  key={i}
                  className="letter-animated"
                  style={{
                    animationDelay: `${((line1.length + line2.length) * 0.05) + (i * 0.05)}s`
                  }}
                >
                  {char}
                </span>
              ))}
            </h3>

            <h3 className="text-line3">
              {line4.split('').map((char, i) => (
                <span
                  key={i}
                  className="letter-animated"
                  style={{
                    animationDelay: `${((line1.length + line2.length + line3.length) * 0.05) + (i * 0.05)}s`
                  }}
                >
                  {char}
                </span>
              ))}
            </h3>
          </div>
        </div>
      </div>
    );
  };

  // Card 2 - Welcome Message
  const renderWelcomeCard = () => {
    const quote = '"Technology is best when it brings people together. That\'s what GDG is all about."';
    const author = '- Google Developer Groups Community';

    const eventTitle = "GDGoC Inauguration";
    const eventColorPattern = [
      googleColors.blue, googleColors.red, googleColors.yellow,
      googleColors.green, googleColors.blue, // GDGoC
      '#3c4043', // space
      googleColors.red, googleColors.yellow, googleColors.green,
      googleColors.blue, googleColors.red, googleColors.yellow,
      googleColors.green, googleColors.blue, googleColors.red,
      googleColors.yellow, googleColors.green, googleColors.blue // Inauguration
    ];

    const eventLetters = eventTitle.split('').map((char, i) => ({
      char,
      color: eventColorPattern[i] || '#3c4043'
    }));

    return (
      <div className="carousel-card welcome-card">
        <div className="sparkle-container">
          <span className="sparkle">✨</span>
          <span className="sparkle">💫</span>
        </div>

        <h2 className="welcome-text typing-subtitle">
          {'Welcome to'.split('').map((char, i) => (
            <span
              key={i}
              className="letter-animated"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              {char}
            </span>
          ))}
        </h2>

        {/* All letters get Google colors with typing effect */}
        <h1 className="event-title typing-title">
          {eventLetters.map((item, i) => (
            <span
              key={i}
              className="letter-animated"
              style={{
                color: item.color,
                animationDelay: `${(10 * 0.05) + (i * 0.05)}s`
              }}
            >
              {item.char}
            </span>
          ))}
        </h1>

        <div className="quote-container">
          <div className="quote-mark">"</div>
          <p className="quote-text">{quote}</p>
          <p className="quote-author">{author}</p>
        </div>
      </div>
    );
  };

  return (
    <Slide id="gdg-intro" backgroundColor="#000000">
      <div className={`gdg-intro-root ${isVisible ? 'slide-visible' : ''}`} ref={slideRef}>
        {/* Subtle decorative dots - minimal and clean */}
        <div className="decorations" ref={decorationsRef}>
          <div className="floating-dot dot-blue"></div>
          <div className="floating-dot dot-green"></div>
        </div>

        {/* Main bordered container - the focal point */}
        <div className="main-container">
          {/* Cool animated border */}
          <div className="border-decoration">
            <div className="corner-dot corner-tl" style={{ backgroundColor: googleColors.blue }}></div>
            <div className="corner-dot corner-tr" style={{ backgroundColor: googleColors.red }}></div>
            <div className="corner-dot corner-bl" style={{ backgroundColor: googleColors.yellow }}></div>
            <div className="corner-dot corner-br" style={{ backgroundColor: googleColors.green }}></div>
          </div>

          {/* Carousel Container */}
          <div className="intro-carousel">
            <div
              className="carousel-track"
              style={{ transform: `translateX(-${activeCard * 100}%)` }}
            >
              {renderCollegeCard()}
              {renderWelcomeCard()}
            </div>
          </div>

          {/* Carousel indicators */}
          <div className="carousel-indicators">
            <button
              className={`indicator ${activeCard === 0 ? 'active' : ''}`}
              onClick={() => setActiveCard(0)}
              aria-label="Show college info"
            ></button>
            <button
              className={`indicator ${activeCard === 1 ? 'active' : ''}`}
              onClick={() => setActiveCard(1)}
              aria-label="Show welcome message"
            ></button>
          </div>
        </div>

      </div>
    </Slide>
  );
};

export default GDGIntroSlide;
