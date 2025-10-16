/**
 * Modular slide transition orchestration utilities
 * Provides reusable transition sequences for consistent slide changes
 */

/**
 * Executes a logo-based transition between slides
 * @param {Object} config - Transition configuration
 * @param {Object} config.carouselRef - Ref to carousel component
 * @param {Function} config.setHideCarousel - Function to hide carousel
 * @param {Function} config.setShowTransition - Function to show logo transition
 * @param {Object} config.containerRef - Ref to slides container
 * @param {number} config.targetSlideIndex - Index of target slide
 * @param {number} config.carouselTargetIndex - Index to navigate carousel to (default: 0 for LogoCard)
 */
export const executeLogoTransition = ({
  carouselRef,
  setHideCarousel,
  setShowTransition,
  containerRef,
  targetSlideIndex,
  carouselTargetIndex = 0,
}) => {
  const timings = {
    carouselNavigation: 0,
    hideCarousel: 700,
    showLogo: 1000,
    slideScroll: 1800,
    hideTransition: 3300, // Hide transition logo exactly when header logo appears
  };

  // Step 1: Navigate carousel to logo card
  if (carouselRef?.current) {
    carouselRef.current.goToSlide(carouselTargetIndex);
  }

  // Step 2: Hide carousel card, leaving logo visible
  setTimeout(() => {
    setHideCarousel(true);
  }, timings.hideCarousel);

  // Step 3: Start logo transition (position → center → target)
  setTimeout(() => {
    setShowTransition(true);
  }, timings.showLogo);

  // Step 4: Scroll to target slide while logo animates
  setTimeout(() => {
    if (containerRef?.current) {
      const slideHeight = window.innerHeight;
      containerRef.current.scrollTo({
        top: slideHeight * targetSlideIndex,
        behavior: 'smooth',
      });
    }
  }, timings.slideScroll);

  // Step 5: Complete transition
  setTimeout(() => {
    setShowTransition(false);
  }, timings.hideTransition);

  return timings;
};

/**
 * Executes reverse transition back to intro slide
 * @param {Object} config - Transition configuration
 * @param {Function} config.setHideCarousel - Function to show carousel
 * @param {Object} config.containerRef - Ref to slides container
 */
export const executeReverseTransition = ({
  setHideCarousel,
  containerRef,
}) => {
  setHideCarousel(false);

  if (containerRef?.current) {
    containerRef.current.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
};
