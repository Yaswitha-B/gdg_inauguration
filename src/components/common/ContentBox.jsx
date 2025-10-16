import PropTypes from 'prop-types';
import './ContentBox.css';

/**
 * Reusable content box component for displaying information
 * with a clean, modern design
 */
const ContentBox = ({ children, className = '', variant = 'default' }) => {
  return (
    <div className={`content-box content-box-${variant} ${className}`}>
      <div className="content-box-inner">
        {children}
      </div>
    </div>
  );
};

ContentBox.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['default', 'highlight', 'minimal']),
};

export default ContentBox;
