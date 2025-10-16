import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { createDraggable } from 'animejs';
import { animateLogoEntrance, animateLogoPulse } from '../../../utils/animations';
import { typeText, GOOGLE_COLORS } from '../../../utils/typeText';
import CarouselCard from '../../carousel/CarouselCard';
import gdgLogo from '../../../assets/logos/gdg_logo.svg';
import './LogoCard.css';

const LogoCard = ({ isActive = true }) => {
  const logoRef = useRef(null);
  const logoContainerRef = useRef(null);
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const line3Ref = useRef(null);
  const line4Ref = useRef(null);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    if (hasAnimatedRef.current) return;
    hasAnimatedRef.current = true;

    if (logoContainerRef.current) {
      createDraggable(logoContainerRef.current, {
        container: '.carousel-card-content',
      });
    }

    if (logoRef.current) {
      animateLogoEntrance(logoRef.current);
      setTimeout(() => {
        if (logoRef.current) {
          animateLogoPulse(logoRef.current);
        }
      }, 2000);
    }

    const line1Text = 'Google Developer Groups';
    typeText(line1Ref.current, line1Text, null, 1000, 80);

    const line2Text = 'on Campus';
    const line2Colors = {
      0: GOOGLE_COLORS.BLUE,
      1: GOOGLE_COLORS.BLUE,
      2: GOOGLE_COLORS.WHITE,
      3: GOOGLE_COLORS.RED,
      4: GOOGLE_COLORS.GREEN,
      5: GOOGLE_COLORS.YELLOW,
      6: GOOGLE_COLORS.BLUE,
      7: GOOGLE_COLORS.GREEN,
      8: GOOGLE_COLORS.RED,
    };
    const line1Length = line1Text.length;
    typeText(line2Ref.current, line2Text, line2Colors, 500 + line1Length * 80 + 250, 100);

    const line3Text = 'Gayatri Vidya Parishad';
    const line2Length = line2Text.length;
    typeText(
      line3Ref.current,
      line3Text,
      null,
      500 + line1Length * 80 + 250 + line2Length * 100 + 250,
      60
    );

    const line4Text = 'College of Engineering for Women (A)';
    const line3Length = line3Text.length;
    typeText(
      line4Ref.current,
      line4Text,
      null,
      500 + line1Length * 80 + 250 + line2Length * 100 + 250 + line3Length * 60 + 250,
      60
    );
  }, []);

  return (
    <CarouselCard className="logo-card">
      <div className="logo-card-container">
        <div ref={logoContainerRef} className="logo-section draggable">
          <div className="logo-glow"></div>
          <div className="logo-circle">
            <img ref={logoRef} src={gdgLogo} alt="GDG Logo" className="gdg-logo" />
          </div>
        </div>
        <div className="text-section">
          <h1 ref={line1Ref} className="text-line1"></h1>
          <h2 ref={line2Ref} className="text-line2"></h2>
          <h3 ref={line3Ref} className="text-line3"></h3>
          <h3 ref={line4Ref} className="text-line3"></h3>
        </div>
      </div>
    </CarouselCard>
  );
};

LogoCard.propTypes = {
  isActive: PropTypes.bool,
};

export default LogoCard;
