import { useState, useEffect, useCallback, useRef } from 'react';

/**
 * Custom hook for managing slide navigation with keyboard and scroll controls
 * Supports logo transition animations in both directions
 * @param {number} totalSlides - Total number of slides
 * @param {Function} onSlideChange - Callback when slide changes
 * @returns {Object} - Current slide index, navigation functions, and transition state
 */
export const useSlideNavigation = (totalSlides, onSlideChange = null) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionDirection, setTransitionDirection] = useState(null); // 'down' or 'up'
  const scrollTimeout = useRef(null);
  const touchStartY = useRef(0);

  const goToSlide = useCallback((index, direction = 'down') => {
    if (index >= 0 && index < totalSlides && !isTransitioning) {
      setIsTransitioning(true);
      setTransitionDirection(direction);

      // Small delay before changing slide to start logo animation
      setTimeout(() => {
        setCurrentSlide(index);
        if (onSlideChange) onSlideChange(index, direction);
      }, 100);

      // Complete transition after logo animation duration
      setTimeout(() => {
        setIsTransitioning(false);
        setTransitionDirection(null);
      }, 2600); // Logo animation is 2.5s, add buffer
    }
  }, [totalSlides, isTransitioning, onSlideChange]);

  const nextSlide = useCallback(() => {
    if (currentSlide < totalSlides - 1) {
      goToSlide(currentSlide + 1, 'down');
    }
  }, [currentSlide, totalSlides, goToSlide]);

  const previousSlide = useCallback(() => {
    if (currentSlide > 0) {
      goToSlide(currentSlide - 1, 'up');
    }
  }, [currentSlide, goToSlide]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isTransitioning) return;

      switch(e.key) {
        case 'ArrowDown':
        case 'PageDown':
        case ' ': // Space key
          e.preventDefault();
          nextSlide();
          break;
        case 'ArrowUp':
        case 'PageUp':
          e.preventDefault();
          previousSlide();
          break;
        case 'Home':
          e.preventDefault();
          goToSlide(0, 'up');
          break;
        case 'End':
          e.preventDefault();
          goToSlide(totalSlides - 1, 'down');
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, previousSlide, goToSlide, isTransitioning, totalSlides]);

  // Handle mouse wheel navigation with debouncing
  useEffect(() => {
    const handleWheel = (e) => {
      if (isTransitioning) {
        e.preventDefault();
        return;
      }

      // Clear previous timeout
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }

      // Debounce scroll events to prevent multiple rapid transitions
      scrollTimeout.current = setTimeout(() => {
        if (e.deltaY > 0) {
          nextSlide();
        } else if (e.deltaY < 0) {
          previousSlide();
        }
      }, 50);
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => {
      window.removeEventListener('wheel', handleWheel);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, [nextSlide, previousSlide, isTransitioning]);

  // Handle touch swipe navigation for mobile
  useEffect(() => {
    const handleTouchStart = (e) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e) => {
      if (isTransitioning) return;

      const touchEndY = e.changedTouches[0].clientY;
      const deltaY = touchStartY.current - touchEndY;

      // Minimum swipe distance to trigger navigation (50px)
      if (Math.abs(deltaY) > 50) {
        if (deltaY > 0) {
          nextSlide();
        } else {
          previousSlide();
        }
      }
    };

    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchend', handleTouchEnd);
    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [nextSlide, previousSlide, isTransitioning]);

  return {
    currentSlide,
    isTransitioning,
    transitionDirection,
    goToSlide,
    nextSlide,
    previousSlide
  };
};
