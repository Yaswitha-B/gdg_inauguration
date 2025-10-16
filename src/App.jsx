import { useRef } from 'react';
import GDGIntroSlide from './components/slides/GDGIntroSlide';
import GDGTransitionSlide from './components/slides/GDGTransitionSlide';
import GDGAboutSlide from './components/slides/GDGAboutSlide';
import './App.css';

function App() {
  const containerRef = useRef(null);

  return (
    <div className="slides-container" ref={containerRef}>
      <GDGIntroSlide />
      <GDGAboutSlide />
    </div>
  );
}

export default App;
