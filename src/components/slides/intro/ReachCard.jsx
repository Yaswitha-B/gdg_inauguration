import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { typeText, GOOGLE_COLORS } from '../../../utils/typeText';
import CarouselCard from '../../carousel/CarouselCard';
import './ReachCard.css';

const ReachCard = ({ isActive = false }) => {
  const titleRef = useRef(null);
  const stat1Ref = useRef(null);
  const stat2Ref = useRef(null);
  const stat3Ref = useRef(null);
  const descriptionRef = useRef(null);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    if (!isActive || hasAnimatedRef.current) return;
    hasAnimatedRef.current = true;

    const titleText = 'GDG Global Reach';
    const titleColors = {
      0: GOOGLE_COLORS.BLUE,
      1: GOOGLE_COLORS.RED,
      2: GOOGLE_COLORS.YELLOW,
      3: GOOGLE_COLORS.BLUE,
      4: GOOGLE_COLORS.GREEN,
      5: GOOGLE_COLORS.RED,
      6: GOOGLE_COLORS.YELLOW,
      7: GOOGLE_COLORS.BLUE,
      8: GOOGLE_COLORS.GREEN,
      9: GOOGLE_COLORS.RED,
      10: GOOGLE_COLORS.YELLOW,
      11: GOOGLE_COLORS.BLUE,
      12: GOOGLE_COLORS.GREEN,
      13: GOOGLE_COLORS.RED,
      14: GOOGLE_COLORS.YELLOW,
      15: GOOGLE_COLORS.BLUE,
      16: GOOGLE_COLORS.GREEN,
    };
    typeText(titleRef.current, titleText, titleColors, 500, 80);

    const stat1Text = '1000+ Campus Chapters';
    typeText(stat1Ref.current, stat1Text, { 0: GOOGLE_COLORS.BLUE }, 500 + titleText.length * 80 + 400, 50);

    const stat2Text = '100+ Countries Worldwide';
    typeText(stat2Ref.current, stat2Text, { 0: GOOGLE_COLORS.GREEN }, 500 + titleText.length * 80 + 400 + stat1Text.length * 50 + 300, 50);

    const stat3Text = '500,000+ Student Developers';
    typeText(stat3Ref.current, stat3Text, { 0: GOOGLE_COLORS.RED }, 500 + titleText.length * 80 + 400 + stat1Text.length * 50 + 300 + stat2Text.length * 50 + 300, 50);

    const descriptionText = 'Join a global community of student developers building the future with Google technologies.';
    typeText(
      descriptionRef.current,
      descriptionText,
      null,
      500 + titleText.length * 80 + 400 + stat1Text.length * 50 + 300 + stat2Text.length * 50 + 300 + stat3Text.length * 50 + 400,
      35
    );
  }, [isActive]);

  return (
    <CarouselCard className="reach-card">
      <div className="reach-card-container">
        <div className="reach-content">
          <h1 ref={titleRef} className="reach-title"></h1>
          <div className="stats-container">
            <div className="stat-item">
              <h2 ref={stat1Ref} className="stat-text stat-blue"></h2>
            </div>
            <div className="stat-item">
              <h2 ref={stat2Ref} className="stat-text stat-green"></h2>
            </div>
            <div className="stat-item">
              <h2 ref={stat3Ref} className="stat-text stat-red"></h2>
            </div>
          </div>
          <p ref={descriptionRef} className="reach-description"></p>
        </div>
        <div className="reach-decoration">
          <div className="stats-circle circle-1"></div>
          <div className="stats-circle circle-2"></div>
          <div className="stats-circle circle-3"></div>
        </div>
      </div>
    </CarouselCard>
  );
};

ReachCard.propTypes = {
  isActive: PropTypes.bool,
};

export default ReachCard;
