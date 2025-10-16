import { useRef, useEffect } from 'react';
import GDGIntroSlide from './components/slides/GDGIntroSlide';
import './App.css';

function App() {
  const containerRef = useRef(null);

  useEffect(() => {
    // Add smooth scrolling behavior
    const handleScroll = (event) => {
      // Optional: Add custom scroll behavior here if needed
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <div className="slides-container" ref={containerRef}>
      <GDGIntroSlide />
      {/* Additional slides can be added here */}
    </div>
  )
}

export default App
