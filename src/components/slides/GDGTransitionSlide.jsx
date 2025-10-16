import Slide from '../Slide';
import gdgLogo from '../../assets/logos/gdg_logo.svg';
import './GDGTransitionSlide.css';

/**
 * Clean transition slide - only logo flowing from center to top-left
 */
const GDGTransitionSlide = () => {
  return (
    <Slide id="gdg-transition" backgroundColor="#0a0a0a">
      <div className="transition-slide-root">
        <div className="flowing-logo-container">
          <img src={gdgLogo} alt="GDG Logo" className="flowing-logo" />
        </div>
      </div>
    </Slide>
  );
};

export default GDGTransitionSlide;
