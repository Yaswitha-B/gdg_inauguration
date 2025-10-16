import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { typeText, GOOGLE_COLORS } from '../../../utils/typeText';
import CarouselCard from '../../carousel/CarouselCard';
import './WelcomeCard.css';

const WelcomeCard = ({ isActive = false }) => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const descriptionRef = useRef(null);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    if (!isActive || hasAnimatedRef.current) return;
    hasAnimatedRef.current = true;

    const titleText = 'Welcome To';
    typeText(titleRef.current, titleText, null, 500, 120);

    const subtitleText = "GDGoC Inauguration";
    const subTitleColors = {
      0: GOOGLE_COLORS.BLUE,    // G
      1: GOOGLE_COLORS.RED,     // D
      2: GOOGLE_COLORS.YELLOW,  // G
      3: GOOGLE_COLORS.BLUE,    // o
      4: GOOGLE_COLORS.GREEN,   // C
      5: GOOGLE_COLORS.RED,     // (space)
      6: GOOGLE_COLORS.YELLOW,  // I
      7: GOOGLE_COLORS.BLUE,    // n
      8: GOOGLE_COLORS.GREEN,   // a
      9: GOOGLE_COLORS.RED,     // u
      10: GOOGLE_COLORS.YELLOW, // g
      11: GOOGLE_COLORS.BLUE,   // u
      12: GOOGLE_COLORS.GREEN,  // r
      13: GOOGLE_COLORS.RED,    // a
      14: GOOGLE_COLORS.YELLOW, // t
      15: GOOGLE_COLORS.BLUE,   // i
      16: GOOGLE_COLORS.GREEN,  // o
      17: GOOGLE_COLORS.RED,    // n
    };
    typeText(subtitleRef.current, subtitleText, subTitleColors, 500 + titleText.length * 120 + 400, 60);

    const descriptionText = '   Join us for an exciting journey into technology,    innovation, and community building.';
    typeText(
      descriptionRef.current,
      descriptionText,
      null,
      500 + titleText.length * 120 + 400 + subtitleText.length * 60 + 600,
      40
    );
  }, [isActive]);

  return (
    <CarouselCard className="welcome-card">
      <div className="welcome-card-container">
        <div className="welcome-content">
          <h2 ref={titleRef} className="welcome-subtitle"></h2>
          <h1 ref={subtitleRef} className="welcome-title"></h1>
          <p ref={descriptionRef} className="welcome-description"></p>
        </div>
        <div className="welcome-decoration">
          <div className="decoration-circle circle-1"></div>
          <div className="decoration-circle circle-2"></div>
          <div className="decoration-circle circle-3"></div>
          <div className="decoration-circle circle-4"></div>
        </div>
      </div>
    </CarouselCard>
  );
};

WelcomeCard.propTypes = {
  isActive: PropTypes.bool,
};

export default WelcomeCard;
