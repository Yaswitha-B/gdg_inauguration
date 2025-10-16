import { useEffect, useRef } from 'react';
import Slide from '../Slide';
import './ChiefGuestSlide.css';

/**
 * Chief Guest Slide - Welcome Message
 * Features:
 * - Large welcome message
 * - Chief Guest details with placeholder
 * - Google Material Design styling
 * - Elegant animations
 */
const ChiefGuestSlide = () => {
  const contentRef = useRef(null);

  const googleColors = {
    blue: 'var(--google-blue)',
    red: 'var(--google-red)',
    yellow: 'var(--google-yellow)',
    green: 'var(--google-green)'
  };

  // Placeholder chief guest data
  const chiefGuest = {
    name: 'Dr. Chief Guest Name',
    title: 'Chief Technology Officer',
    organization: 'Google India',
    credentials: 'Ph.D. in Computer Science, IIT Delhi',
    initials: 'CG'
  };

  useEffect(() => {
    if (contentRef.current) {
      // Trigger animations
      const elements = contentRef.current.querySelectorAll('.animate-in');
      elements.forEach((el, i) => {
        el.style.animationDelay = `${i * 0.2}s`;
      });
    }
  }, []);

  return (
    <Slide id="chief-guest" backgroundColor="#000000">
      <div className="chief-guest-root">
        {/* Vibrant decorations */}
        <div className="decorations-chief">
          <div className="floating-dot-chief dot-blue-chief"></div>
          <div className="floating-dot-chief dot-green-chief"></div>
        </div>

        {/* Welcome Banner */}
        <div className="welcome-banner animate-in">
          <div className="banner-decoration">
            <div className="deco-line line-blue"></div>
            <div className="deco-line line-red"></div>
            <div className="deco-line line-yellow"></div>
            <div className="deco-line line-green"></div>
          </div>
          <h1 className="welcome-title">
            {'Welcome'.split('').map((char, i) => (
              <span
                key={i}
                className="welcome-letter"
                style={{
                  color: [
                    googleColors.blue,
                    googleColors.red,
                    googleColors.yellow,
                    googleColors.green,
                    googleColors.blue,
                    googleColors.red,
                    googleColors.yellow
                  ][i],
                  animationDelay: `${i * 0.1}s`
                }}
              >
                {char}
              </span>
            ))}
          </h1>
          <p className="welcome-subtitle">Chief Guest</p>
        </div>

        {/* Chief Guest Card */}
        <div className="chief-guest-content" ref={contentRef}>
          <div className="guest-card animate-in">
            {/* Placeholder Avatar */}
            <div className="guest-avatar-container">
              <div className="guest-avatar" style={{ backgroundColor: googleColors.blue }}>
                <span className="guest-initials">{chiefGuest.initials}</span>
                <div className="avatar-ring-outer"></div>
                <div className="avatar-ring-inner"></div>
              </div>
              <div className="avatar-badge">
                <span>🎤</span>
              </div>
            </div>

            {/* Guest Info */}
            <div className="guest-info">
              <h2 className="guest-name animate-in">{chiefGuest.name}</h2>
              <p className="guest-title animate-in" style={{ color: googleColors.blue }}>
                {chiefGuest.title}
              </p>
              <p className="guest-organization animate-in">{chiefGuest.organization}</p>

              <div className="guest-divider animate-in">
                <div className="divider-segment" style={{ backgroundColor: googleColors.blue }}></div>
                <div className="divider-segment" style={{ backgroundColor: googleColors.red }}></div>
                <div className="divider-segment" style={{ backgroundColor: googleColors.yellow }}></div>
                <div className="divider-segment" style={{ backgroundColor: googleColors.green }}></div>
              </div>

              <p className="guest-credentials animate-in">{chiefGuest.credentials}</p>

              {/* Welcome Message */}
              <div className="welcome-message animate-in">
                <div className="message-icon">✨</div>
                <p className="message-text">
                  Welcome to GVPCEW! We are honored to have you grace our GDGoC Inauguration ceremony.
                  Your insights and experience will inspire our community of aspiring developers.
                </p>
              </div>
            </div>
          </div>

          {/* Institution Banner */}
          <div className="institution-banner animate-in">
            <p className="institution-text">
              Gayatri Vidya Parishad College Of Engineering For Women (A)
            </p>
          </div>
        </div>

        {/* Decorative Background */}
        <div className="bg-decorations">
          <div className="bg-circle circle-1"></div>
          <div className="bg-circle circle-2"></div>
          <div className="bg-circle circle-3"></div>
          <div className="bg-circle circle-4"></div>
        </div>
      </div>
    </Slide>
  );
};

export default ChiefGuestSlide;
