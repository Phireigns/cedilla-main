import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Contact from './Contact';

// Register GSAP plugins outside of component to avoid re-registration
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const Reservation = () => {

  return (
    <div>
      {/* Hero Section */}
      <section
        className="h-[60vh] bg-cover bg-center flex items-center justify-center relative text-white text-center"
        style={{ backgroundImage: "url('/images/bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-[#76162a]/40"></div>
        <div className="relative z-10 max-w-3xl p-8">
          <h1 className="text-5xl font-serif text-white mb-4 md:text-7xl">Make a Reservation</h1>
          <p className="text-2xl text-[#ffdbdb]">Join us for an unforgettable dining experience</p>
        </div>
      </section>

      <Contact />
    </div>
  );
};

export default Reservation; 