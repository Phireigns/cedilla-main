import HeroSection from './HeroSection';
import OurStory from './OurStory';
import ParallexSection from './ParallexSection';
import GallerySection from './GallerySection';
import Contact from './Contact';
import MenuSection from './MenuSection';
import LoadingScreen from './LoadingScreen';
    

const LandingPage = () => {
  return (
    <div>
      <LoadingScreen />
      <HeroSection />
      <OurStory />
      <ParallexSection />
      <MenuSection />
      <GallerySection />
      <Contact />
    </div>
  );
};

export default LandingPage; 