import { useEffect, useRef } from 'react';
import { animate } from 'animejs';
import Slide from '../Slide';
import './TeamSlide.css';

/**
 * Team Slide - Compact Grid Design
 * Inspired by slides 1 & 2
 * All members fit without scrolling
 * Super Googly with vibrant colors
 */
const TeamSlide = () => {
  const headerRef = useRef(null);
  const gridRef = useRef(null);

  const googleColors = {
    blue: '#4285F4',
    red: '#EA4335',
    yellow: '#FBBC04',
    green: '#34A853'
  };

  // Lead member
  const lead = {
    name: 'Dharmala Teena Reddy',
    role: 'GDGoC Lead',
    rollNumber: '323103210050',
    initials: 'LN',
    color: googleColors.blue,
    isLead: true
  };

  // Core team members
  const coreTeam = [
    { name: 'Yaswitha Boppana', role: 'Cybersecurity Lead', rollNumber: '323103210032', initials: 'CM1', color: googleColors.red },
    { name: 'Yasaswini Chebolu', role: 'Machine Learning Lead', rollNumber: '323103282116', initials: 'CM2', color: googleColors.yellow },
    { name: 'Sita Sowmya', role: 'Cloud Engineer', rollNumber: '323103210058', initials: 'CM3', color: googleColors.green },
    { name: 'Keerthi Sri Reddy', role: 'Full Stack Developer', rollNumber: '323103210033', initials: 'CM4', color: googleColors.blue },
    { name: 'Mokshagna Reddy', role: 'Andriod Developer ', rollNumber: '323103282089', initials: 'CM5', color: googleColors.red },
    { name: 'Kanthija Annamreddi', role: 'Social Media Manager', rollNumber: '323103210015', initials: 'CM6', color: googleColors.yellow },
    { name: 'Susmitha Eluri', role: 'Content writer', rollNumber: '324103211014', initials: 'CM7', color: googleColors.green },
    { name: 'Udaya sri kandula', role: 'Event Manager', rollNumber: '323103210100 ', initials: 'CM8', color: googleColors.blue }
  ];

  const allMembers = [lead, ...coreTeam];

  useEffect(() => {
    // Header animation
    const title = headerRef.current?.querySelector('.team-main-title');
    if (title) {
      animate(title, {
        translateY: [-30, 0],
        opacity: [0, 1]
      }, {
        duration: 800,
        ease: 'out(3)'
      });
    }

    // Animate colored letters
    const letters = headerRef.current?.querySelectorAll('.team-letter');
    if (letters) {
      letters.forEach((letter, i) => {
        animate(letter, {
          scale: [0, 1],
          opacity: [0, 1],
          rotate: [Math.random() * 40 - 20, 0]
        }, {
          duration: 500,
          delay: 300 + i * 60
        });
      });
    }

    // Subtitle
    const subtitle = headerRef.current?.querySelector('.team-subtitle');
    if (subtitle) {
      animate(subtitle, {
        translateY: [20, 0],
        opacity: [0, 1]
      }, {
        duration: 600,
        delay: 500
      });
    }

    // Team cards - staggered entrance
    const cards = gridRef.current?.querySelectorAll('.member-card');
    if (cards) {
      cards.forEach((card, i) => {
        animate(card, {
          translateY: [40, 0],
          opacity: [0, 1],
          scale: [0.9, 1]
        }, {
          duration: 600,
          delay: 700 + i * 80,
          ease: 'out(2)'
        });
      });
    }

    // Continuous avatar pulse
    const avatars = document.querySelectorAll('.member-avatar');
    avatars.forEach((avatar, i) => {
      animate(avatar, {
        scale: [1, 1.05, 1]
      }, {
        duration: 2000,
        delay: i * 150,
        ease: 'inOut(2)',
        loop: true
      });
    });

  }, []);

  return (
    <Slide id="team" backgroundColor="#000000">
      <div className="team-slide-root">
        {/* Floating background dots */}
        <div className="team-decorations">
          <div className="team-dot team-dot-blue"></div>
          <div className="team-dot team-dot-green"></div>
        </div>

        {/* Header */}
        <div className="team-header" ref={headerRef}>
          <h2 className="team-main-title">
            Meet Our{' '}
            <span className="team-letters-colored">
              <span className="team-letter" style={{ color: googleColors.blue }}>T</span>
              <span className="team-letter" style={{ color: googleColors.red }}>e</span>
              <span className="team-letter" style={{ color: googleColors.yellow }}>a</span>
              <span className="team-letter" style={{ color: googleColors.green }}>m</span>
            </span>
          </h2>
          <p className="team-subtitle">The people making it happen</p>
        </div>

        {/* Compact Team Grid - 3 rows layout */}
        <div className="team-members-grid" ref={gridRef}>
          {allMembers.map((member, index) => (
            <div
              key={index}
              className="member-card"
              style={{ '--member-color': member.color }}
            >
              {/* Color accent bar */}
              <div className="member-accent" style={{ background: member.color }}></div>

              {/* Member info */}
              <h3 className="member-name">{member.name}</h3>
              <p className="member-role" style={{ color: member.color }}>
                {member.role}
              </p>
              <p className="member-roll">{member.rollNumber}</p>
            </div>
          ))}
        </div>
      </div>
    </Slide>
  );
};

export default TeamSlide;
