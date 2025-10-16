/**
 * Utility function for typewriter text effect with optional character coloring
 * @param {HTMLElement} element - The DOM element to type text into
 * @param {string} text - The text to type
 * @param {Object|null} colors - Optional object mapping character indices to color values
 * @param {number} startDelay - Delay before starting typing (ms)
 * @param {number} charDelay - Delay between each character (ms)
 * @param {boolean} showCursor - Whether to show typing cursor (default: true)
 * @returns {Promise} - Resolves when typing is complete
 */
export const typeText = (
  element,
  text,
  colors = null,
  startDelay = 0,
  charDelay = 80,
  showCursor = true
) => {
  return new Promise((resolve) => {
    if (!element) {
      resolve();
      return;
    }

    element.innerHTML = '';

    let currentIndex = 0;
    const timeout = setTimeout(() => {
      let cursor = null;

      if (showCursor) {
        cursor = document.createElement('span');
        cursor.className = 'typing-cursor';
        cursor.textContent = '|';
        element.appendChild(cursor);
      }

      const typeInterval = setInterval(() => {
        if (currentIndex < text.length) {
          const char = text[currentIndex];
          const span = document.createElement('span');
          span.textContent = char === ' ' ? '\u00A0' : char;
          span.className = 'char';

          if (colors && colors[currentIndex]) {
            span.style.color = colors[currentIndex];
          }

          if (cursor) {
            element.insertBefore(span, cursor);
          } else {
            element.appendChild(span);
          }

          currentIndex++;
        } else {
          clearInterval(typeInterval);

          if (cursor) {
            setTimeout(() => {
              cursor.remove();
              resolve();
            }, 300);
          } else {
            resolve();
          }
        }
      }, charDelay);
    }, startDelay);
  });
};

/**
 * Google brand colors for text styling
 */
export const GOOGLE_COLORS = {
  BLUE: '#4285F4',
  RED: '#EA4335',
  YELLOW: '#FBBC04',
  GREEN: '#34A853',
  WHITE: '#ffffff',
};
