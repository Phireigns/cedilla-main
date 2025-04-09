import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { menuItems } from '../data/menuItems';

// Register GSAP plugins outside of component to avoid re-registration
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const MenuSection = () => {
  const [isMounted, setIsMounted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const menuRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'center center',
        },
      });

      tl.from(titleRef.current, {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      }).from(
        menuRefs.current,
        {
          y: 60,
          opacity: 0,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
        },
        '-=0.5',
      );
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, [isMounted]);

  // Set initial opacity to 0 and fade in when mounted
  const initialStyle = !isMounted ? { opacity: 0 } : { opacity: 1 };

  return (
    <section
      ref={sectionRef}
      className="relative py-12 bg-white overflow-hidden transition-opacity duration-500"
      style={initialStyle}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <div ref={titleRef} className="relative mb-16 text-center">
            <h2 className="text-5xl md:text-7xl font-serif text-[#76162a] mb-6 relative">
              Our Menus
              <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#ee8080]"></span>
            </h2>
            <p className="md:text-2xl text-[#76162a]/90 max-w-3xl mx-auto font-sans">
              Discover our carefully curated selection of French-inspired dishes and fine wines
            </p>
          </div>

          {/* Menu Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8">
            {menuItems.map((item, index) => (
              <div
                key={item.title}
                ref={(el) => {
                  menuRefs.current[index] = el;
                }}
                className="group relative"
              >
                <div className="relative aspect-[3/4] overflow-hidden mb-8 border-2 border-[#76162a]/10">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#76162a]/40 to-transparent">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                        <h3 className="text-3xl font-serif mb-2">
                          {item.title}
                        </h3>
                        <p className="text-lg">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection; 