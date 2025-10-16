import { useState, useEffect, useRef } from 'react';
import Slide from '../Slide';
import gdgLogo from '../../assets/logos/gdg_logo.svg';
import './EventsSlide.css';

const EventsSlide = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [currentItem, setCurrentItem] = useState(0);
  const pathRef = useRef(null);

  const events = [
    {
      id: 1,
      name: 'Workshops',
      color: '#4285F4',
      description: 'Hands-on technical workshops covering the latest Google technologies, frameworks, and development tools. Learn from industry experts and build real-world projects.',
      frequency: 'Monthly Events'
    },
    {
      id: 2,
      name: 'Hackathons',
      color: '#EA4335',
      description: 'Collaborative coding marathons where teams compete to build innovative solutions. Network with developers and showcase your skills.',
      frequency: 'Quarterly Events'
    },
    {
      id: 3,
      name: 'Tech Talks',
      color: '#FBBC04',
      description: 'Inspiring sessions with industry leaders sharing insights on emerging technologies, career guidance, and software development best practices.',
      frequency: 'Bi-weekly Sessions'
    },
    {
      id: 4,
      name: 'Study Jams',
      color: '#34A853',
      description: 'Structured learning sessions focusing on specific technologies or certifications. Study together and earn badges and certificates.',
      frequency: 'Weekly Sessions'
    },
    {
      id: 5,
      name: 'Networking',
      color: '#4285F4',
      description: 'Connect with fellow developers, alumni, and industry professionals. Build lasting relationships and explore collaboration opportunities.',
      frequency: 'Monthly Meetups'
    }
  ];

  useEffect(() => {
    const animate = () => {
      const path = pathRef.current;
      if (!path) return;

      const items = document.querySelectorAll('.path-menu-item');
      const pathLength = path.getTotalLength();
      const step = pathLength / events.length;

      items.forEach((item, index) => {
        const distance = ((currentItem + index) * step) % pathLength;
        const point = path.getPointAtLength(distance);

        item.style.left = `${point.x}px`;
        item.style.top = `${point.y}px`;

        // Scale based on position
        const centerY = 250;
        const distanceFromCenter = Math.abs(point.y - centerY);
        const scale = 1 - (distanceFromCenter / 500);
        const opacity = 0.3 + (scale * 0.7);

        item.style.transform = `translate(-50%, -50%) scale(${Math.max(0.6, scale)})`;
        item.style.opacity = opacity;
        item.style.zIndex = Math.floor(scale * 100);
      });
    };

    animate();
    const interval = setInterval(() => {
      setCurrentItem((prev) => (prev + 0.01) % events.length);
    }, 50);

    return () => clearInterval(interval);
  }, [currentItem, events.length]);

  const handleEventClick = (event) => {
    setSelectedEvent(event);
  };

  return (
    <Slide id="gdg-events" backgroundColor="#0a0a0a">
      <div className="events-slide-root">
        {/* Header */}
        <div className="events-page-header">
          <img src={gdgLogo} alt="GDG Logo" className="events-page-logo" />
          <h1 className="events-page-title">Events Held Till Now</h1>
        </div>

        {/* Main Content */}
        <div className="events-main-content">
          {!selectedEvent ? (
            <div className="events-text-section">
              <h2 className="events-main-title">Our Event Categories</h2>
              <p className="events-main-description">
                GDG on Campus hosts a variety of events throughout the year, designed to enhance your technical skills,
                foster collaboration, and connect you with the developer community. Click on any event from the rotating menu to learn more.
              </p>
            </div>
          ) : (
            <div className="event-detail-section">
              <h2 className="event-detail-title" style={{ color: selectedEvent.color }}>
                {selectedEvent.name}
              </h2>
              <p className="event-detail-frequency">{selectedEvent.frequency}</p>
              <div className="event-image-placeholder">
                <span>Event Image Placeholder</span>
              </div>
              <p className="event-detail-description">{selectedEvent.description}</p>
            </div>
          )}
        </div>

        {/* Path Menu in Bottom Right Corner */}
        <div className="path-menu-container">
          <svg className="path-menu-svg" width="400" height="400" viewBox="0 0 400 400">
            <path
              ref={pathRef}
              d="M 200,40 C -40,40 -40,360 200,360 440,360 440,40 200,40 Z"
              className="path-menu-path"
            />
          </svg>
          {events.map((event, index) => (
            <button
              key={event.id}
              className={`path-menu-item ${selectedEvent?.id === event.id ? 'active' : ''}`}
              onClick={() => handleEventClick(event)}
              style={{ '--item-color': event.color }}
            >
              <div className="menu-item-content">
                <span className="menu-item-name">{event.name}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </Slide>
  );
};

export default EventsSlide;
