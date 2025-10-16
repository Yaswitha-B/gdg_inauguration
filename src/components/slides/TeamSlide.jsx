import { useEffect, useRef } from 'react';
import Slide from '../Slide';
import './TeamSlide.css';

/**
 * Team Slide - GDGoC Lead + Core Team
 * Features:
 * - 1 Lead card (centered, larger)
 * - 8 Core Team member cards in grid
 * - Google Material Design styling
 * - Crazy anime.js animations
 * - No images yet (placeholders with initials)
 */
const TeamSlide = () => {
  const teamRef = useRef(null);

  const googleColors = [
    'var(--google-blue)',
    'var(--google-red)',
    'var(--google-yellow)',
    'var(--google-green)'
  ];

  const lead = {
    name: 'Lead Name',
    role: 'GDGoC Lead',
    initials: 'LN',
    color: googleColors[0]
  };

  const coreTeam = [
    { name: 'Core Member 1', role: 'Technical Lead', initials: 'CM1', color: googleColors[1] },
    { name: 'Core Member 2', role: 'Design Lead', initials: 'CM2', color: googleColors[2] },
    { name: 'Core Member 3', role: 'Content Lead', initials: 'CM3', color: googleColors[3] },
    { name: 'Core Member 4', role: 'Events Lead', initials: 'CM4', color: googleColors[0] },
    { name: 'Core Member 5', role: 'Marketing Lead', initials: 'CM5', color: googleColors[1] },
    { name: 'Core Member 6', role: 'Community Lead', initials: 'CM6', color: googleColors[2] },
    { name: 'Core Member 7', role: 'Operations Lead', initials: 'CM7', color: googleColors[3] },
    { name: 'Core Member 8', role: 'Outreach Lead', initials: 'CM8', color: googleColors[0] }
  ];

  useEffect(() => {
    // Trigger stagger animation
    if (teamRef.current) {
      const cards = teamRef.current.querySelectorAll('.team-card');
      cards.forEach((card, i) => {
        card.style.animationDelay = `${i * 0.1}s`;
      });
    }
  }, []);

  return (
    <Slide id="team" backgroundColor="#000000">
      <div className="team-root">
        {/* Vibrant decorations */}
        <div className="decorations-team">
          <div className="floating-dot-team dot-blue-team"></div>
          <div className="floating-dot-team dot-green-team"></div>
        </div>

        {/* Header */}
        <div className="team-header">
          <h2 className="team-title">
            Meet Our{' '}
            <span className="team-title-gdg">
              <span style={{ color: googleColors[0] }}>T</span>
              <span style={{ color: googleColors[1] }}>e</span>
              <span style={{ color: googleColors[2] }}>a</span>
              <span style={{ color: googleColors[3] }}>m</span>
            </span>
          </h2>
          <p className="team-subtitle">Passionate developers driving innovation</p>
        </div>

        <div className="team-container" ref={teamRef}>
          {/* Lead Card - Large and Centered */}
          <div className="team-lead-section">
            <div className="team-card team-lead-card" style={{ '--card-color': lead.color }}>
              <div className="card-badge">Lead</div>
              <div className="card-avatar lead-avatar" style={{ backgroundColor: lead.color }}>
                <span className="avatar-initials">{lead.initials}</span>
                <div className="avatar-ring"></div>
                <div className="avatar-ring ring-2"></div>
              </div>
              <h3 className="card-name">{lead.name}</h3>
              <p className="card-role" style={{ color: lead.color }}>{lead.role}</p>
              <div className="card-divider" style={{ backgroundColor: lead.color }}></div>
              <div className="card-sparkles">
                <span className="sparkle">✨</span>
                <span className="sparkle">💫</span>
                <span className="sparkle">⭐</span>
              </div>
            </div>
          </div>

          {/* Core Team Grid */}
          <div className="team-grid">
            {coreTeam.map((member, index) => (
              <div
                key={index}
                className="team-card core-card"
                style={{ '--card-color': member.color }}
              >
                <div className="card-avatar" style={{ backgroundColor: member.color }}>
                  <span className="avatar-initials">{member.initials}</span>
                  <div className="avatar-glow"></div>
                </div>
                <h3 className="card-name">{member.name}</h3>
                <p className="card-role" style={{ color: member.color }}>{member.role}</p>
                <div className="card-divider-small" style={{ backgroundColor: member.color }}></div>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative Google dots */}
        <div className="team-decorations">
          <div className="deco-dot dot-blue"></div>
          <div className="deco-dot dot-red"></div>
          <div className="deco-dot dot-yellow"></div>
          <div className="deco-dot dot-green"></div>
        </div>
      </div>
    </Slide>
  );
};

export default TeamSlide;
