import { useState, useEffect, useRef } from 'react';
import Slide from '../Slide';
import { animate } from 'animejs';
import './GDGAboutSlide.css';

/**
 * GDG About Slide - Google Carousel Design
 * Features:
 * - Horizontal sliding carousel
 * - 4 colorful cards with Google aesthetics
 * - Swipe/click navigation
 * - Auto-advance with pause on hover
 * - Progress indicators
 */
const GDGAboutSlide = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef(null);
  const prevBtnRef = useRef(null);
  const nextBtnRef = useRef(null);
  const cardRefs = useRef([]);

  const cards = [
    {
      id: 1,
      title: 'About GDGoC',
      icon: '🌐',
      description: 'Google Developer Groups on Campus is a community of students passionate about Google technologies and development.',
      detail: 'We organize workshops, hackathons, and tech talks to empower students with cutting-edge skills and industry connections.',
      accentColor: 'var(--google-blue)',
      bgColor: '#F5F7FF',
      iconBg: 'var(--google-blue)'
    },
    {
      id: 2,
      title: 'Our Mission',
      icon: '🚀',
      description: 'To foster a vibrant community of developers, innovators, and learners through hands-on projects.',
      detail: 'We aim to bridge the gap between academic learning and real-world development through collaborative coding sessions and mentorship programs.',
      accentColor: 'var(--google-green)',
      bgColor: '#F5FFF7',
      iconBg: 'var(--google-green)'
    },
    {
      id: 3,
      title: 'What We Do',
      icon: '💡',
      description: 'Host workshops, hackathons, study jams, and tech talks on Google technologies and modern development practices.',
      detail: 'From beginner-friendly sessions to advanced technical deep-dives, we create opportunities for students to learn, build, and showcase their skills through hands-on projects.',
      accentColor: 'var(--google-red)',
      bgColor: '#FFF5F5',
      iconBg: 'var(--google-red)'
    },
    {
      id: 4,
      title: 'Global Community',
      icon: '🌍',
      description: '1,000+ campus chapters across 100+ countries worldwide.',
      detail: 'Connecting over 500,000 student developers. Join a thriving global community passionate about learning, sharing, and building with Google technologies.',
      accentColor: 'var(--google-yellow)',
      bgColor: '#FFFDF5',
      iconBg: 'var(--google-yellow)'
    }
  ];

  // Auto-advance carousel
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % cards.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused, cards.length]);

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  const goToPrevious = () => {
    setActiveIndex((prev) => (prev - 1 + cards.length) % cards.length);

    // Crazy anime.js animation on click
    if (prevBtnRef.current) {
      animate(prevBtnRef.current, {
        scale: [1, 0.7, 1.3, 1],
        rotate: ['0deg', '-180deg', '-360deg'],
        duration: 600,
        easing: 'outElastic(1, .8)',
      });
    }
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % cards.length);

    // Crazy anime.js animation on click
    if (nextBtnRef.current) {
      animate(nextBtnRef.current, {
        scale: [1, 0.7, 1.3, 1],
        rotate: ['0deg', '180deg', '360deg'],
        duration: 600,
        easing: 'outElastic(1, .8)',
      });
    }
  };

  // Animate arrows on mount
  useEffect(() => {
    const animateArrows = () => {
      if (prevBtnRef.current && nextBtnRef.current) {
        // Continuous pulsing animation for arrows
        animate([prevBtnRef.current, nextBtnRef.current], {
          scale: [1, 1.15, 1],
          duration: 2000,
          easing: 'inOutSine',
          loop: true,
        });
      }
    };

    const timer = setTimeout(animateArrows, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Slide id="gdg-about" backgroundColor="#000000">
      <div className="gdg-about-root">
        {/* Vibrant decorations */}
        <div className="decorations-about">
          <div className="floating-dot-about dot-blue-about"></div>
          <div className="floating-dot-about dot-green-about"></div>
        </div>

        {/* Header Section */}
        <div className="about-header">
          <h2 className="about-main-title">
            About{' '}
            <span className="gdg-letters">
              <span style={{ color: 'var(--google-blue)' }}>G</span>
              <span style={{ color: 'var(--google-red)' }}>D</span>
              <span style={{ color: 'var(--google-yellow)' }}>G</span>
              <span style={{ color: 'var(--google-green)' }}>o</span>
              <span style={{ color: 'var(--google-red)' }}>C</span>
            </span>
          </h2>
          <p className="about-subtitle">Empowering developers to build amazing things</p>
        </div>

        {/* Carousel Container */}
        <div
          className="carousel-container"
          ref={carouselRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Navigation Arrows - SUPER VISIBLE */}
          <button
            ref={prevBtnRef}
            className="carousel-nav-btn nav-prev super-arrow"
            onClick={goToPrevious}
            aria-label="Previous slide"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="arrow-icon">
              <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Cards Track */}
          <div className="carousel-track-wrapper">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${activeIndex * 100}%)`
              }}
            >
              {cards.map((card, index) => (
                <div
                  key={card.id}
                  className={`carousel-card-about ${index === activeIndex ? 'active' : ''}`}
                  style={{
                    background: card.bgColor,
                    color: card.accentColor
                  }}
                >
                  {/* Card Content */}
                  <div className="card-content-about">
                    {/* Icon Circle */}
                    <div
                      className="card-icon-circle"
                      style={{
                        backgroundColor: card.iconBg,
                        boxShadow: `0 8px 24px ${card.iconBg}40`
                      }}
                    >
                      <span className="card-icon-large">{card.icon}</span>
                    </div>

                    {/* Title */}
                    <h3
                      className="card-title-about"
                      style={{ color: card.accentColor }}
                    >
                      {card.title}
                    </h3>

                    {/* Description */}
                    <p className="card-description-about">
                      {card.description}
                    </p>

                    {/* Detail Text */}
                    <p className="card-detail-about">
                      {card.detail}
                    </p>

                    {/* Decorative line */}
                    <div
                      className="card-decorative-line"
                      style={{ backgroundColor: card.accentColor }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows - SUPER VISIBLE */}
          <button
            ref={nextBtnRef}
            className="carousel-nav-btn nav-next super-arrow"
            onClick={goToNext}
            aria-label="Next slide"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="arrow-icon">
              <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Progress Indicators */}
        <div className="carousel-indicators-about">
          {cards.map((card, index) => (
            <button
              key={card.id}
              className={`indicator-about ${index === activeIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              style={{
                backgroundColor: index === activeIndex ? card.accentColor : 'rgba(0,0,0,0.2)'
              }}
            ></button>
          ))}
        </div>

        {/* Interaction hint */}
        <div className="interaction-hint-about">
          <span>{isPaused ? '⏸ Paused' : '▶ Auto-playing'} • Click arrows or dots to navigate</span>
        </div>
      </div>
    </Slide>
  );
};

export default GDGAboutSlide;
