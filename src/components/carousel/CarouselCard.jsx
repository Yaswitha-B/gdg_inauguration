import PropTypes from 'prop-types';
import './CarouselCard.css';

/**
 * Card component for carousel slides with modern border styling
 * @param {Object} props
 * @param {React.ReactNode} props.children - Content to display in the card
 * @param {string} props.className - Additional CSS classes
 */
const CarouselCard = ({ children, className = '' }) => {
  return (
    <div className={`carousel-card ${className}`}>
      <div className="carousel-card-glow"></div>
      <div className="carousel-card-content">
        {children}
      </div>
    </div>
  );
};

CarouselCard.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default CarouselCard;
