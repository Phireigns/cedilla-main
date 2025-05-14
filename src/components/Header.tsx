import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { to: '/', label: 'HOME' },
  { to: '/about', label: 'ABOUT' },
  { to: '/menu', label: 'MENU' },
  { to: 'https://inline.app/booking/cedilla/tst', label: 'RESERVATION', isHighlighted: true, isExternal: true },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen || !isHome
          ? 'bg-[#76162A] shadow-[0_8px_30px_rgba(0,0,0,0.3)]'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-8 py-6 relative">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src="/c-logo.png" alt="Cedilla" className="w-16 h-16 mr-2 " />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                target={link.isExternal ? "_blank" : undefined}
                rel={link.isExternal ? "noopener noreferrer" : undefined}
                className={`text-sm tracking-widest transition-all duration-300 relative group ${
                  link.isHighlighted
                    ? 'px-6 py-2.5 bg-[#8b2c3a] text-white overflow-hidden'
                    : 'text-white/90 hover:text-[#ffdbdb]'
                } ${location.pathname === link.to && !link.isHighlighted ? 'text-[#ffdbdb]' : ''}`}
              >
                {link.isHighlighted ? (
                  <>
                    <span className="relative z-10 tracking-[0.2em] uppercase">{link.label}</span>
                    <div className="absolute inset-0 bg-[#980000] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                    <div className="absolute inset-0 border border-[#ffdbdb] transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                    <div className="absolute inset-0 border border-[#ffdbdb] transform translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                    <div className="absolute inset-0 border border-[#ffdbdb] transform translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                  </>
                ) : (
                  <>
                    {link.label}
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#ffdbdb] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                    {location.pathname === link.to && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#ffdbdb]"></span>
                    )}
                  </>
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white transition-colors relative w-6 h-6"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <div className="absolute inset-0 flex flex-col justify-center items-center">
              <span
                className={`block w-6 h-0.5 bg-white transform transition-all duration-300 ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-[2px]' : '-translate-y-2'
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-white transform transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-white transform transition-all duration-300 ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-[2px]' : 'translate-y-2'
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          style={{ top: '98px' }}
          className={`md:hidden fixed inset-x-0 bottom-0 bg-[#76162A] transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#76162A] to-[#8b2c3a]"></div>
          <div className="relative flex flex-col items-center justify-center mt-20 space-y-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                target={link.isExternal ? "_blank" : undefined}
                rel={link.isExternal ? "noopener noreferrer" : undefined}
                className={`text-base tracking-widest transition-all duration-300 relative group active:scale-95 ${
                  link.isHighlighted
                    ? 'px-8 py-3 bg-[#8b2c3a] text-white overflow-hidden'
                    : 'text-white/90 hover:text-[#ffdbdb]'
                } ${location.pathname === link.to && !link.isHighlighted ? 'text-[#ffdbdb]' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.isHighlighted ? (
                  <>
                    <span className="relative z-10 tracking-[0.2em] uppercase">{link.label}</span>
                    <div className="absolute inset-0 bg-[#980000] transform -translate-x-full group-hover:translate-x-0 group-active:translate-x-0 transition-transform duration-500"></div>
                    <div className="absolute inset-0 border border-[#ffdbdb] transform -translate-y-full group-hover:translate-y-0 group-active:translate-y-0 transition-transform duration-500"></div>
                    <div className="absolute inset-0 border border-[#ffdbdb] transform translate-y-full group-hover:translate-y-0 group-active:translate-y-0 transition-transform duration-500"></div>
                    <div className="absolute inset-0 border border-[#ffdbdb] transform translate-x-full group-hover:translate-x-0 group-active:translate-x-0 transition-transform duration-500"></div>
                  </>
                ) : (
                  <>
                    {link.label}
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#ffdbdb] transform scale-x-0 group-hover:scale-x-100 group-active:scale-x-100 transition-transform duration-300 origin-left"></span>
                    {location.pathname === link.to && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#ffdbdb]"></span>
                    )}
                  </>
                )}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header; 
