import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { typeText, GOOGLE_COLORS } from '../../../utils/typeText';
import CarouselCard from '../../carousel/CarouselCard';
import './RedCard.css';

const RedCard = ({ isActive = false }) => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const descriptionRef = useRef(null);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    if (!isActive || hasAnimatedRef.current) return;
    hasAnimatedRef.current = true;

    const titleText = 'Connect';
    typeText(titleRef.current, titleText, { 0: GOOGLE_COLORS.RED }, 500, 120);

    const subtitleText = "Learn & Build Together";
    const subTitleColors = {
      0: GOOGLE_COLORS.RED,
      1: GOOGLE_COLORS.YELLOW,
      2: GOOGLE_COLORS.BLUE,
      3: GOOGLE_COLORS.GREEN,
      4: GOOGLE_COLORS.RED,
      5: GOOGLE_COLORS.YELLOW,
      6: GOOGLE_COLORS.BLUE,
      7: GOOGLE_COLORS.GREEN,
      8: GOOGLE_COLORS.RED,
      9: GOOGLE_COLORS.YELLOW,
      10: GOOGLE_COLORS.BLUE,
      11: GOOGLE_COLORS.GREEN,
      12: GOOGLE_COLORS.RED,
      13: GOOGLE_COLORS.YELLOW,
      14: GOOGLE_COLORS.BLUE,
      15: GOOGLE_COLORS.GREEN,
      16: GOOGLE_COLORS.RED,
      17: GOOGLE_COLORS.YELLOW,
      18: GOOGLE_COLORS.BLUE,
      19: GOOGLE_COLORS.GREEN,
      20: GOOGLE_COLORS.RED,
      21: GOOGLE_COLORS.YELLOW,
    };
    typeText(subtitleRef.current, subtitleText, subTitleColors, 500 + titleText.length * 120 + 400, 60);

    const descriptionText = 'Collaborate with fellow developers, share knowledge, and create amazing projects together.';
    typeText(
      descriptionRef.current,
      descriptionText,
      null,
      500 + titleText.length * 120 + 400 + subtitleText.length * 60 + 600,
      40
    );
  }, [isActive]);

  return (
    <CarouselCard className="red-card">
      <div className="red-card-container">
        <div className="red-content">
          <h2 ref={titleRef} className="red-title"></h2>
          <h1 ref={subtitleRef} className="red-subtitle"></h1>
          <p ref={descriptionRef} className="red-description"></p>
        </div>
        <div className="red-decoration">
          <div className="decoration-circle red-circle-1"></div>
          <div className="decoration-circle red-circle-2"></div>
          <div className="decoration-circle red-circle-3"></div>
          <div className="decoration-circle red-circle-4"></div>
        </div>
      </div>
    </CarouselCard>
  );
};

RedCard.propTypes = {
  isActive: PropTypes.bool,
};

export default RedCard;
