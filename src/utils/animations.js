import { animate } from 'animejs';

/* ============================================
   ANIME.JS ADVANCED ANIMATION UTILITIES
   Showcasing the true power of anime.js
   ============================================ */

// ========== ENTRANCE ANIMATIONS ==========

/**
 * Explosive logo entrance with elastic bounce (Showcases: Elastic easing, Transform combinations)
 * @param {HTMLElement} element - The element to animate
 * @returns {Object} - The animation instance
 */
export const animateLogoEntrance = (element) => {
  if (!element) return null;

  return animate(element, {
    scale: [0, 1],
    rotate: ['-180deg', '0deg'],
    opacity: [0, 1],
    duration: 1800,
    easing: 'outElastic(1, .8)',
  });
};

/**
 * Gentle logo pulse animation (Showcases: Infinite loops, Sine easing)
 * @param {HTMLElement} element - The element to animate
 * @returns {Object} - The animation instance
 */
export const animateLogoPulse = (element) => {
  if (!element) return null;

  return animate(element, {
    scale: [1, 1.05, 1],
    duration: 2500,
    easing: 'inOutSine',
    loop: true,
  });
};

/**
 * Staggered text reveal (Showcases: Stagger effect, Timeline control)
 * @param {NodeList|Array} elements - Array of elements (letters/words)
 * @param {number} staggerDelay - Delay between each element (ms)
 * @returns {Object} - The animation instance
 */
export const staggerTextReveal = (elements, staggerDelay = 50) => {
  if (!elements || elements.length === 0) return null;

  return animate(elements, {
    opacity: [0, 1],
    translateY: [20, 0],
    scale: [0.5, 1],
    duration: 800,
    delay: (_, i) => i * staggerDelay,
    easing: 'outExpo',
  });
};

/**
 * Morphing entrance (Showcases: Complex transform morphing)
 * @param {HTMLElement} element - The element to animate
 * @returns {Object} - The animation instance
 */
export const morphingEntrance = (element) => {
  if (!element) return null;

  return animate(element, {
    scale: [0.3, 1],
    rotate: ['45deg', '0deg'],
    borderRadius: ['50%', '12px'],
    opacity: [0, 1],
    duration: 1200,
    easing: 'outElastic(1, .7)',
  });
};

// ========== CARD ANIMATIONS ==========

/**
 * Material Design card lift on hover (Showcases: Smooth transforms, Shadow animation)
 * @param {HTMLElement} element - The card element
 * @param {boolean} lifted - Whether to lift or return to normal
 * @returns {Object} - The animation instance
 */
export const cardLift = (element, lifted = true) => {
  if (!element) return null;

  return animate(element, {
    translateY: lifted ? -8 : 0,
    scale: lifted ? 1.02 : 1,
    duration: 300,
    easing: 'outCubic',
  });
};

/**
 * Staggered cards entrance (Showcases: Stagger with rotation)
 * @param {NodeList|Array} cards - Array of card elements
 * @returns {Object} - The animation instance
 */
export const staggerCardsEntrance = (cards) => {
  if (!cards || cards.length === 0) return null;

  return animate(cards, {
    opacity: [0, 1],
    translateY: [60, 0],
    rotate: ['10deg', '0deg'],
    scale: [0.8, 1],
    duration: 1000,
    delay: (_, i) => i * 150,
    easing: 'outExpo',
  });
};

/**
 * Card flip animation (Showcases: 3D rotation with perspective)
 * @param {HTMLElement} element - The card element
 * @param {boolean} flipped - Whether to flip or unflip
 * @returns {Object} - The animation instance
 */
export const cardFlip = (element, flipped = true) => {
  if (!element) return null;

  return animate(element, {
    rotateY: flipped ? '180deg' : '0deg',
    duration: 600,
    easing: 'outBack(1.7)',
  });
};

// ========== MODAL & OVERLAY ANIMATIONS ==========

/**
 * Modal scale-in with spring physics (Showcases: Spring easing)
 * @param {HTMLElement} element - The modal element
 * @returns {Object} - The animation instance
 */
export const modalScaleIn = (element) => {
  if (!element) return null;

  return animate(element, {
    scale: [0.7, 1],
    opacity: [0, 1],
    duration: 400,
    easing: 'outBack(1.7)',
  });
};

/**
 * Modal scale-out (Showcases: Reverse spring animation)
 * @param {HTMLElement} element - The modal element
 * @returns {Object} - The animation instance
 */
export const modalScaleOut = (element) => {
  if (!element) return null;

  return animate(element, {
    scale: [1, 0.7],
    opacity: [1, 0],
    duration: 300,
    easing: 'inBack(1.7)',
  });
};

/**
 * Backdrop fade (Showcases: Simple opacity transitions)
 * @param {HTMLElement} element - The backdrop element
 * @param {boolean} fadeIn - Whether to fade in or out
 * @returns {Object} - The animation instance
 */
export const backdropFade = (element, fadeIn = true) => {
  if (!element) return null;

  return animate(element, {
    opacity: fadeIn ? [0, 1] : [1, 0],
    duration: fadeIn ? 300 : 200,
    easing: fadeIn ? 'outCubic' : 'inCubic',
  });
};

// ========== FLOATING & CONTINUOUS ANIMATIONS ==========

/**
 * Floating animation for decorative elements (Showcases: Infinite loop, Sine wave)
 * @param {HTMLElement|NodeList} elements - Element(s) to float
 * @param {number} distance - Float distance in px
 * @param {number} duration - Duration of one cycle
 * @returns {Object} - The animation instance
 */
export const floatingAnimation = (elements, distance = 20, duration = 3000) => {
  if (!elements) return null;

  return animate(elements, {
    translateY: [-distance, distance],
    duration,
    easing: 'inOutSine',
    direction: 'alternate',
    loop: true,
  });
};

/**
 * Rotating animation (Showcases: Continuous rotation)
 * @param {HTMLElement} element - Element to rotate
 * @param {number} duration - Duration of one rotation
 * @returns {Object} - The animation instance
 */
export const rotateAnimation = (element, duration = 4000) => {
  if (!element) return null;

  return animate(element, {
    rotate: '360deg',
    duration,
    easing: 'linear',
    loop: true,
  });
};

// ========== TIMELINE ANIMATIONS (Showcases: Timeline orchestration) ==========

/**
 * Complex timeline animation sequence
 * @param {Object} targets - Object containing all target elements
 * @returns {Promise} - Resolves when all animations complete
 */
export const createIntroTimeline = async (targets) => {
  if (!targets) return null;

  // Step 1: Logo entrance
  if (targets.logo) {
    animate(targets.logo, {
      scale: [0, 1],
      rotate: ['-180deg', '0deg'],
      opacity: [0, 1],
      duration: 1500,
      easing: 'outElastic(1, .8)',
    });
  }

  // Step 2: Title reveal (staggered) - starts 700ms after logo
  await new Promise(resolve => setTimeout(resolve, 700));
  if (targets.title) {
    animate(targets.title, {
      opacity: [0, 1],
      translateY: [30, 0],
      duration: 800,
      delay: (_, i) => i * 100,
      easing: 'outExpo',
    });
  }

  // Step 3: Subtitle slide in - starts 400ms after title
  await new Promise(resolve => setTimeout(resolve, 400));
  if (targets.subtitle) {
    animate(targets.subtitle, {
      opacity: [0, 1],
      translateX: [-50, 0],
      duration: 600,
      easing: 'outExpo',
    });
  }

  // Step 4: Floating decorations - starts 200ms after subtitle
  await new Promise(resolve => setTimeout(resolve, 200));
  if (targets.decorations) {
    animate(targets.decorations, {
      opacity: [0, 1],
      scale: [0.5, 1],
      duration: 800,
      delay: (_, i) => i * 150,
      easing: 'outBack(1.7)',
    });
  }
};

// ========== RIPPLE EFFECT (Showcases: Dynamic DOM manipulation) ==========

/**
 * Create ripple effect on click (Material Design)
 * @param {MouseEvent} event - Click event
 * @param {HTMLElement} container - Container element
 */
export const createRipple = (event, container) => {
  if (!container) return;

  const ripple = document.createElement('span');
  const rect = container.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  const x = event.clientX - rect.left - size / 2;
  const y = event.clientY - rect.top - size / 2;

  ripple.style.cssText = `
    position: absolute;
    width: ${size}px;
    height: ${size}px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.5);
    left: ${x}px;
    top: ${y}px;
    pointer-events: none;
  `;

  container.appendChild(ripple);

  animate(ripple, {
    scale: [0, 2],
    opacity: [1, 0],
    duration: 600,
    easing: 'outCubic',
    complete: () => ripple.remove(),
  });
};

// ========== BASIC UTILITY ANIMATIONS ==========

/**
 * Fade in animation
 * @param {HTMLElement} element - Element to fade in
 * @param {number} duration - Duration in ms
 * @param {number} delay - Delay in ms
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
 * Fade out animation
 * @param {HTMLElement} element - Element to fade out
 * @param {number} duration - Duration in ms
 * @returns {Promise} - Resolves when animation completes
 */
export const fadeOut = (element, duration = 800) => {
  return new Promise((resolve) => {
    if (!element) {
      resolve();
      return;
    }

    animate(element, {
      opacity: [1, 0],
      translateY: [0, -20],
      duration,
      easing: 'inCubic',
      complete: resolve,
    });
  });
};

/**
 * Slide in from right
 * @param {HTMLElement} element - Element to slide in
 * @param {number} duration - Duration in ms
 * @param {number} delay - Delay in ms
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
 * Slide in from left
 * @param {HTMLElement} element - Element to slide in
 * @param {number} duration - Duration in ms
 * @param {number} delay - Delay in ms
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

// ========== HOVER INTERACTIONS ==========

/**
 * Bounce hover effect (Showcases: Quick spring animation)
 * @param {HTMLElement} element - Element to bounce
 * @returns {Object} - The animation instance
 */
export const bounceHover = (element) => {
  if (!element) return null;

  return animate(element, {
    translateY: [-5, 0],
    duration: 400,
    easing: 'outElastic(1, .5)',
  });
};

/**
 * Scale pulse on interaction (Showcases: Quick scale feedback)
 * @param {HTMLElement} element - Element to pulse
 * @returns {Object} - The animation instance
 */
export const scalePulse = (element) => {
  if (!element) return null;

  return animate(element, {
    scale: [1, 1.1, 1],
    duration: 400,
    easing: 'inOutCubic',
  });
};
