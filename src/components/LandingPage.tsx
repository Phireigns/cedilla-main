import OurStory from './OurStory';
import ParallexSection from './ParallexSection';
import GallerySection from './GallerySection';
import Contact from './Contact';
import MenuSection from './MenuSection';
import LoadingScreen from './LoadingScreen';
import HeroSection2 from './HeroSection2';

const LandingPage = () => {
  return (
    <div>
      <LoadingScreen />
      <HeroSection2 />
      <OurStory />
      <ParallexSection />
      <MenuSection />
      <GallerySection />
      <Contact />
    </div>
  );
};

export default LandingPage; 