import { useRef } from 'react';
import StartSlide from './components/slides/StartSlide';
import GDGIntroSlide from './components/slides/GDGIntroSlide';
import GDGAboutSlide from './components/slides/GDGAboutSlide';
import TeamSlide from './components/slides/TeamSlide';
import LogoSlide from './components/slides/LogoSlide';
import ChiefGuestSlide from './components/slides/ChiefGuestSlide';
import NewEventsSlide from './components/slides/NewEventsSlide';
import './App.css';

/**
 * Main App Component
 * Slide Order:
 * 1. Start Slide - Opening slide with scroll indicator at bottom
 * 2. GDG Intro Slide - Welcome with logo animation
 * 3. GDG About Slide - Information carousel with super visible arrows
 * 4. Chief Guest Slide - Welcome message for chief guest
 * 5. Team Slide - Lead + 8 Core Team members
 * 6. Logo Slide - Clean GDG logo centered (Final slide)
 */
function App() {
  const containerRef = useRef(null);

  return (
    <div className="slides-container" ref={containerRef}>
      <StartSlide />
      <GDGIntroSlide />
      <GDGAboutSlide />
      <ChiefGuestSlide />
      <TeamSlide />
      <LogoSlide />
    </div>
  );
}

export default App;
