import { useEffect, useRef } from 'react';
import Slide from '../Slide';
import './NewEventsSlide.css';

/**
 * Events Slide - Clean Grid Layout
 * Features:
 * - 6 events in an organized 2x3 grid
 * - Hover animations
 * - Google Material Design with optimal space usage
 * - Vibrant background from Slide 1
 */
const NewEventsSlide = () => {
  const decorationsRef = useRef(null);

  const googleColors = [
    'var(--google-blue)',
    'var(--google-red)',
    'var(--google-yellow)',
    'var(--google-green)',
    'var(--google-blue)',
    'var(--google-red)'
  ];

  const events = [
    {
      id: 1,
      title: 'Web Development Workshop',
      date: 'January 2025',
      icon: '💻',
      description: 'Modern web dev with React & Node.js',
      attendees: '150+',
      duration: '4 hours',
      color: googleColors[0],
      bgGradient: 'linear-gradient(135deg, rgba(232, 240, 254, 0.6) 0%, rgba(255, 255, 255, 0.9) 100%)'
    },
    {
      id: 2,
      title: 'AI/ML Hackathon',
      date: 'February 2025',
      icon: '🤖',
      description: '24hr hackathon with AI & ML focus',
      attendees: '200+',
      duration: '24 hours',
      color: googleColors[1],
      bgGradient: 'linear-gradient(135deg, rgba(252, 232, 230, 0.6) 0%, rgba(255, 255, 255, 0.9) 100%)'
    },
    {
      id: 3,
      title: 'Cloud Computing Bootcamp',
      date: 'March 2025',
      icon: '☁️',
      description: 'GCP mastery with certification prep',
      attendees: '120+',
      duration: '2 days',
      color: googleColors[2],
      bgGradient: 'linear-gradient(135deg, rgba(254, 247, 224, 0.6) 0%, rgba(255, 255, 255, 0.9) 100%)'
    },
    {
      id: 4,
      title: 'Mobile App Development',
      date: 'April 2025',
      icon: '📱',
      description: 'Cross-platform apps with Flutter',
      attendees: '180+',
      duration: '6 hours',
      color: googleColors[3],
      bgGradient: 'linear-gradient(135deg, rgba(230, 244, 234, 0.6) 0%, rgba(255, 255, 255, 0.9) 100%)'
    },
    {
      id: 5,
      title: 'Tech Talk Series',
      date: 'Monthly',
      icon: '🎤',
      description: 'Industry experts & career guidance',
      attendees: '300+',
      duration: '2 hours',
      color: googleColors[4],
      bgGradient: 'linear-gradient(135deg, rgba(232, 240, 254, 0.6) 0%, rgba(255, 255, 255, 0.9) 100%)'
    },
    {
      id: 6,
      title: 'Open Source Contribution',
      date: 'Ongoing',
      icon: '🌟',
      description: 'Build your developer portfolio',
      attendees: '100+',
      duration: 'Continuous',
      color: googleColors[5],
      bgGradient: 'linear-gradient(135deg, rgba(252, 232, 230, 0.6) 0%, rgba(255, 255, 255, 0.9) 100%)'
    }
  ];

  useEffect(() => {
    // Animate decorations on mount
    if (decorationsRef.current) {
      const dots = decorationsRef.current.querySelectorAll('.floating-dot-events');
      dots.forEach((dot, i) => {
        dot.style.animationDelay = `${i * 1}s`;
      });
    }
  }, []);

  return (
    <Slide id="events" backgroundColor="#000000">
      <div className="events-root">
        {/* Vibrant decorations like Slide 1 */}
        <div className="decorations-events" ref={decorationsRef}>
          <div className="floating-dot-events dot-blue-events"></div>
          <div className="floating-dot-events dot-green-events"></div>
        </div>

        {/* Header */}
        <div className="events-header">
          <h2 className="events-title">
            Our{' '}
            <span className="events-title-colored">
              <span style={{ color: googleColors[0] }}>E</span>
              <span style={{ color: googleColors[1] }}>v</span>
              <span style={{ color: googleColors[2] }}>e</span>
              <span style={{ color: googleColors[3] }}>n</span>
              <span style={{ color: googleColors[4] }}>t</span>
              <span style={{ color: googleColors[5] }}>s</span>
            </span>
          </h2>
          <p className="events-subtitle">Empowering developers through hands-on learning</p>
        </div>

        {/* Events Grid - 2x3 layout */}
        <div className="events-grid">
          {events.map((event) => (
            <div
              key={event.id}
              className="event-card"
              style={{
                '--card-color': event.color,
                background: event.bgGradient
              }}
            >
              <div className="event-card-content">
                <div
                  className="event-icon-circle"
                  style={{ backgroundColor: event.color }}
                >
                  <span className="event-icon">{event.icon}</span>
                </div>
                <h3 className="event-title">{event.title}</h3>
                <p className="event-date" style={{ color: event.color }}>
                  {event.date}
                </p>
                <p className="event-description">{event.description}</p>
                <div className="event-stats">
                  <div className="stat">
                    <span className="stat-icon">👥</span>
                    <span className="stat-value">{event.attendees}</span>
                  </div>
                  <div className="stat">
                    <span className="stat-icon">⏱️</span>
                    <span className="stat-value">{event.duration}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Slide>
  );
};

export default NewEventsSlide;
