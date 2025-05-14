import { Link } from 'react-router-dom'; // Assuming View Menu links internally

const HeroSection2 = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden text-white">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/bg.jpg" // Using the same background, can be changed
          alt="Restaurant Ambiance"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Overlay for contrast */}
        <div className="absolute inset-0 bg-black/60"></div> 
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="flex flex-col items-center">
          {/* Logo with larger size and enhanced glow effect */}
          <img 
            src="/c-logo.png" 
            alt="Cedilla Logo" 
            className="w-32 h-32 mb-8 filter drop-shadow-[0_0_15px_#ffdbdb] hover:scale-110 transition-transform duration-300" 
          />
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif mb-4 leading-tight tracking-tighter">
            Cedilla
          </h1>
          <p className="text-xl md:text-2xl font-light tracking-widest text-white mb-8">
          French Classics, Local Freshness.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          {/* Reserve Button - Styling similar to Header's highlighted button */}
          <a
            href="https://inline.app/booking/cedilla/tst"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-10 py-4 bg-[#8b2c3a] text-white font-medium inline-flex items-center justify-center transition-all duration-500 overflow-hidden shadow-lg hover:shadow-xl min-w-[200px] text-center"
          >
            <span className="relative z-10 text-base tracking-[0.15em] uppercase">
              Reserve a Table
            </span>
            {/* Hover effects */}
            <div className="absolute inset-0 bg-[#980000] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
            <div className="absolute inset-0 border border-[#ffdbdb] transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
            <div className="absolute inset-0 border border-[#ffdbdb] transform translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
            <div className="absolute inset-0 border border-[#ffdbdb] transform translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
          </a>

          {/* View Menu Button - Styling similar to Header's standard link */}
          <Link
            to="/menu"
            className="group relative px-10 py-4 text-white/90 font-medium inline-flex items-center justify-center transition-all duration-300 hover:text-white min-w-[200px] text-center"
          >
            <span className="relative z-10 text-base tracking-[0.15em] uppercase">View Menu</span>
            {/* Hover effect */}
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#ffdbdb] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection2;
