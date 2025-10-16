import { animate } from 'animejs';

/**
 * Logo entrance animation with rotation and scale
 * @param {HTMLElement} element - The element to animate
 * @returns {Object} - The animation instance
 */
export const animateLogoEntrance = (element) => {
  if (!element) return null;

  return animate(element, {
    scale: [0, 1],
    rotate: ['360deg', '0deg'],
    opacity: [0, 1],
    duration: 2000,
    easing: 'outElastic(1, .6)',
  });
};

/**
 * Logo breathing/pulsing animation
 * @param {HTMLElement} element - The element to animate
 * @returns {Object} - The animation instance
 */
export const animateLogoPulse = (element) => {
  if (!element) return null;

  return animate(element, {
    scale: [1, 1.08, 1],
    duration: 3000,
    easing: 'inOutSine',
    loop: true,
  });
};

/**
 * Fade in animation for elements
 * @param {HTMLElement} element - The element to animate
 * @param {number} duration - Animation duration in ms
 * @param {number} delay - Animation delay in ms
 * @returns {Object} - The animation instance
 */
export const fadeIn = (element, duration = 1000, delay = 0) => {
  if (!element) return null;

  return animate(element, {
    opacity: [0, 1],
    translateY: [20, 0],
    duration,
    delay,
    easing: 'outCubic',
  });
};

/**
 * Fade out animation for elements
 * @param {HTMLElement} element - The element to animate
 * @param {number} duration - Animation duration in ms
 * @returns {Promise} - Resolves when animation completes
 */
export const fadeOut = (element, duration = 800) => {
  return new Promise((resolve) => {
    if (!element) {
      resolve();
      return;
    }

    const animation = animate(element, {
      opacity: [1, 0],
      translateY: [0, -20],
      duration,
      easing: 'inCubic',
    });

    setTimeout(resolve, duration);
  });
};

/**
 * Slide in from right animation
 * @param {HTMLElement} element - The element to animate
 * @param {number} duration - Animation duration in ms
 * @param {number} delay - Animation delay in ms
 * @returns {Object} - The animation instance
 */
export const slideInFromRight = (element, duration = 1000, delay = 0) => {
  if (!element) return null;

  return animate(element, {
    translateX: [100, 0],
    opacity: [0, 1],
    duration,
    delay,
    easing: 'outCubic',
  });
};

/**
 * Slide in from left animation
 * @param {HTMLElement} element - The element to animate
 * @param {number} duration - Animation duration in ms
 * @param {number} delay - Animation delay in ms
 * @returns {Object} - The animation instance
 */
export const slideInFromLeft = (element, duration = 1000, delay = 0) => {
  if (!element) return null;

  return animate(element, {
    translateX: [-100, 0],
    opacity: [0, 1],
    duration,
    delay,
    easing: 'outCubic',
  });
};
