import Slide from '../Slide';
import Carousel from '../carousel/Carousel';
import LogoCard from './intro/LogoCard';
import WelcomeCard from './intro/WelcomeCard';
import './GDGIntroSlide.css';

const GDGIntroSlide = () => {
  return (
    <Slide id="gdg-intro" backgroundColor="#0a0a0a">
      <div className="gdg-intro-root">
        <Carousel duration={10000} autoPlay={true}>
          <LogoCard />
          <WelcomeCard />
        </Carousel>
      </div>
    </Slide>
  );
};

export default GDGIntroSlide;
