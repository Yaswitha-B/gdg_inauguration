import { useState, useEffect } from 'react';
import Slide from '../Slide';
import './GDGAboutSlide.css';

/**
 * GDG About Slide with large logo header and bigger content boxes
 * - Keyboard arrow support for navigation
 */
const GDGAboutSlide = () => {
  const [activeBox, setActiveBox] = useState(0);

  const contentBoxes = [
    {
      id: 1,
      title: 'About GDGOC',
      content: 'Google Developer Groups on Campus is a community of students passionate about Google technologies and development. We organize workshops, hackathons, and tech talks to empower students with cutting-edge skills and industry connections.',
      color: '#4285F4', // Google Blue
      bgColor: 'rgba(66, 133, 244, 0.08)'
    },
    {
      id: 2,
      title: 'Our Mission',
      content: 'To foster a vibrant community of developers, innovators, and learners. We aim to bridge the gap between academic learning and real-world development through hands-on projects, collaborative coding sessions, and mentorship programs.',
      color: '#34A853', // Google Green
      bgColor: 'rgba(52, 168, 83, 0.08)'
    },
    {
      id: 3,
      title: 'Why Join Us?',
      content: 'Connect with fellow developers, gain hands-on experience with cutting-edge technologies, and build projects that matter. Access exclusive workshops, networking opportunities, and mentorship from industry professionals. Be part of a global community driving innovation.',
      color: '#EA4335', // Google Red
      bgColor: 'rgba(234, 67, 53, 0.08)'
    },
    {
      id: 4,
      title: 'GDG Global Reach',
      content: '1,000+ campus chapters across 100+ countries worldwide, connecting over 500,000 student developers. Join a thriving global community passionate about learning, sharing, and building with Google technologies.',
      color: '#FBBC04', // Google Yellow
      bgColor: 'rgba(251, 188, 4, 0.08)'
    }
  ];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        setActiveBox((prev) => (prev === 0 ? contentBoxes.length - 1 : prev - 1));
      } else if (e.key === 'ArrowRight') {
        setActiveBox((prev) => (prev === contentBoxes.length - 1 ? 0 : prev + 1));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [contentBoxes.length]);

  return (
    <Slide id="gdg-about" backgroundColor="#0a0a0a">
      <div className="gdg-about-root">
        {/* Bigger Content Boxes */}
        <div className="about-content-large">
          <div className="content-boxes-container-large">
            {contentBoxes.map((box, index) => (
              <div
                key={box.id}
                className={`content-box-large ${index === activeBox ? 'active' : ''} ${
                  index < activeBox ? 'left' : index > activeBox ? 'right' : ''
                }`}
                style={{
                  backgroundColor: box.bgColor,
                  borderColor: box.color,
                  boxShadow: index === activeBox ? `0 0 60px ${box.color}30, 0 10px 40px rgba(0,0,0,0.3)` : 'none'
                }}
              >
                <div className="content-box-inner-large">
                  <h2 className="content-box-title-large" style={{ color: box.color }}>
                    {box.title}
                  </h2>
                  <p className="content-box-text-large">{box.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="carousel-dots-large">
          {contentBoxes.map((_, index) => (
            <button
              key={index}
              className={`dot-large ${index === activeBox ? 'active' : ''}`}
              onClick={() => setActiveBox(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Keyboard hint */}
        <div className="keyboard-hint">Use ← → arrow keys to navigate</div>
      </div>
    </Slide>
  );
};

export default GDGAboutSlide;
