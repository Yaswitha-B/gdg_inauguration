import { useState, useEffect, useRef, cloneElement } from 'react';
import PropTypes from 'prop-types';
import './Carousel.css';

/**
 * Carousel component that rotates through children with modern animations
 * @param {Object} props
 * @param {Array} props.children - Array of React elements to display in carousel
 * @param {number} props.duration - Duration each slide is displayed (ms)
 * @param {boolean} props.autoPlay - Whether to auto-rotate slides
 */
const Carousel = ({ children, duration = 5000, autoPlay = true }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timeoutRef = useRef(null);

  const slides = Array.isArray(children) ? children : [children];

  useEffect(() => {
    if (!autoPlay || slides.length <= 1) return;

    const startCarousel = () => {
      timeoutRef.current = setTimeout(() => {
        goToNext();
      }, duration);
    };

    startCarousel();

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [activeIndex, autoPlay, duration, slides.length]);

  const goToNext = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setTimeout(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
      setIsTransitioning(false);
    }, 600);
  };

  const goToPrevious = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setTimeout(() => {
      setActiveIndex((current) => (current - 1 + slides.length) % slides.length);
      setIsTransitioning(false);
    }, 600);
  };

  const goToSlide = (index) => {
    if (isTransitioning || index === activeIndex) return;

    setIsTransitioning(true);
    setTimeout(() => {
      setActiveIndex(index);
      setIsTransitioning(false);
    }, 600);
  };

  return (
    <div className="carousel-container">
      <div className="carousel-slides">
        {slides.map((slide, index) => {
          const isActive = index === activeIndex;
          return (
            <div
              key={index}
              className={`carousel-slide ${isActive ? 'active' : ''} ${
                isTransitioning ? 'transitioning' : ''
              }`}
            >
              {cloneElement(slide, { isActive })}
            </div>
          );
        })}
      </div>

      {slides.length > 1 && (
        <div className="carousel-indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`carousel-indicator ${index === activeIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

Carousel.propTypes = {
  children: PropTypes.node.isRequired,
  duration: PropTypes.number,
  autoPlay: PropTypes.bool,
};

export default Carousel;
