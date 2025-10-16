import { useRef } from 'react';
import GDGIntroSlide from './components/slides/GDGIntroSlide';
import GDGAboutSlide from './components/slides/GDGAboutSlide';
import TeamSlide from './components/slides/TeamSlide';
import ChiefGuestSlide from './components/slides/ChiefGuestSlide';
import NewEventsSlide from './components/slides/NewEventsSlide';
import './App.css';

/**
 * Main App Component
 * Slide Order:
 * 1. GDG Intro Slide - Welcome with logo animation
 * 2. GDG About Slide - Information carousel with super visible arrows
 * 3. Team Slide - Lead + 8 Core Team members
 * 4. Chief Guest Slide - Welcome message for chief guest
 * 5. Events Slide - 6 events in creative 3D carousel
 */
function App() {
  const containerRef = useRef(null);

  return (
    <div className="slides-container" ref={containerRef}>
      <GDGIntroSlide />
      <GDGAboutSlide />
      <TeamSlide />
      <ChiefGuestSlide />
      <NewEventsSlide />
    </div>
  );
}

export default App;
