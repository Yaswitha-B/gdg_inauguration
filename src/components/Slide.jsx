import { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import './Slide.css';

const Slide = ({ id, children, backgroundColor = '#ffffff' }) => {
  const slideRef = useRef(null);

  useEffect(() => {
  }, []);

  return (
    <div 
      id={id} 
      className="slide" 
      ref={slideRef}
      style={{ backgroundColor }}
    >
      {children}
    </div>
  );
};

Slide.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  backgroundColor: PropTypes.string
};

export default Slide;
