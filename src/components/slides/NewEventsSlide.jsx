import { useEffect, useRef } from 'react';
import { animate } from 'animejs';
import Slide from '../Slide';
import './NewEventsSlide.css';

/**
 * Events Slide - Fresh Redesign
 * Large white container with events inside
 * Inspired by slides 1, 2, 3 design language
 */
const NewEventsSlide = () => {
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const eventsRef = useRef(null);

  const googleColors = {
    blue: '#4285F4',
    red: '#EA4335',
    yellow: '#FBBC04',
    green: '#34A853'
  };

  const upcomingEvents = [
    {
      id: 1,
      name: 'GDGoC Kickoff',
      date: 'Dec 20, 2024',
      time: '10:00 AM',
      venue: 'Main Auditorium',
      color: googleColors.blue
    },
    {
      id: 2,
      name: 'Tech Talk: AI & ML',
      date: 'Dec 27, 2024',
      time: '5:00 PM',
      venue: 'Smart Classroom',
      color: googleColors.red
    },
    {
      id: 3,
      name: 'Workshop: Web Dev',
      date: 'Jan 3, 2025',
      time: '2:00 PM',
      venue: 'Lab 101',
      color: googleColors.yellow
    },
    {
      id: 4,
      name: 'Hackathon 2025',
      date: 'Jan 15-16, 2025',
      time: '24 Hours',
      venue: 'Campus Wide',
      color: googleColors.green
    },
    {
      id: 5,
      name: 'Code & Coffee',
      date: 'Every Friday',
      time: '4:00 PM',
      venue: 'Cafeteria',
      color: googleColors.blue
    },
    {
      id: 6,
      name: 'Study Jam',
      date: 'Weekly',
      time: '6:00 PM',
      venue: 'Library',
      color: googleColors.red
    }
  ];

  useEffect(() => {
    // Container entrance
    if (containerRef.current) {
      animate(containerRef.current, {
        scale: [0.95, 1],
        opacity: [0, 1]
      }, {
        duration: 800,
        ease: 'out(3)'
      });
    }

    // Header animation
    if (headerRef.current) {
      const title = headerRef.current.querySelector('.events-heading');
      if (title) {
        animate(title, {
          translateY: [-30, 0],
          opacity: [0, 1]
        }, {
          duration: 600,
          delay: 300
        });
      }

      const divider = headerRef.current.querySelector('.events-divider');
      if (divider) {
        const bars = divider.querySelectorAll('.divider-bar');
        bars.forEach((bar, i) => {
          animate(bar, {
            scaleX: [0, 1]
          }, {
            duration: 500,
            delay: 600 + i * 100,
            ease: 'out(2)'
          });
        });
      }
    }

    // Events cascade
    if (eventsRef.current) {
      const eventItems = eventsRef.current.querySelectorAll('.event-item');
      eventItems.forEach((item, i) => {
        animate(item, {
          translateX: [40, 0],
          opacity: [0, 1]
        }, {
          duration: 600,
          delay: 900 + i * 100,
          ease: 'out(2)'
        });
      });
    }
  }, []);

  return (
    <Slide id="events" backgroundColor="#000000">
      <div className="events-redesign-root">
        {/* Background Glow */}
        <div className="events-glow-bg">
          <div className="glow-circle glow-blue"></div>
          <div className="glow-circle glow-red"></div>
          <div className="glow-circle glow-yellow"></div>
        </div>

        {/* Main White Container */}
        <div className="events-white-container" ref={containerRef}>
          {/* Header Section */}
          <div className="events-container-header" ref={headerRef}>
            <h2 className="events-heading">Upcoming Events</h2>
            <div className="events-divider">
              <span className="divider-bar" style={{ background: googleColors.blue }}></span>
              <span className="divider-bar" style={{ background: googleColors.red }}></span>
              <span className="divider-bar" style={{ background: googleColors.yellow }}></span>
              <span className="divider-bar" style={{ background: googleColors.green }}></span>
            </div>
            <p className="events-tagline">Join us for amazing learning experiences</p>
          </div>

          {/* Events List */}
          <div className="events-list-container" ref={eventsRef}>
            {upcomingEvents.map((event) => (
              <div key={event.id} className="event-item" style={{ '--accent-color': event.color }}>
                <div className="event-color-dot" style={{ background: event.color }}></div>
                <div className="event-details">
                  <h3 className="event-name">{event.name}</h3>
                  <div className="event-meta">
                    <span className="event-meta-item">
                      <span className="meta-icon">📅</span>
                      {event.date}
                    </span>
                    <span className="event-meta-separator">•</span>
                    <span className="event-meta-item">
                      <span className="meta-icon">🕐</span>
                      {event.time}
                    </span>
                    <span className="event-meta-separator">•</span>
                    <span className="event-meta-item">
                      <span className="meta-icon">📍</span>
                      {event.venue}
                    </span>
                  </div>
                </div>
                <div className="event-action">
                  <span className="action-text" style={{ color: event.color }}>Learn More →</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default NewEventsSlide;
