import { useRef } from 'react';
import GDGIntroSlide from './components/slides/GDGIntroSlide';
import GDGTransitionSlide from './components/slides/GDGTransitionSlide';
import GDGAboutSlide from './components/slides/GDGAboutSlide';
import EventsSlide from './components/slides/EventsSlide';
import './App.css';

function App() {
  const containerRef = useRef(null);

  return (
    <div className="slides-container" ref={containerRef}>
      <GDGIntroSlide />
      <GDGAboutSlide />
      <EventsSlide />
    </div>
  );
}

export default App;
