import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins outside of component to avoid re-registration
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const Menu = () => {
  const [isMounted, setIsMounted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const menuRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
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

    return () => {
      if (tl.scrollTrigger) {
        tl.scrollTrigger.kill();
      }
      tl.kill();
    };
  }, [isMounted]);

  const initialStyle = !isMounted ? { opacity: 0 } : { opacity: 1 };

  const menuItems = [
    {
      image: '/images/alacarte.jpg',
      title: 'A La Carte Menu',
      description: 'Our signature dishes and seasonal specialties',
    },
    {
      image: '/images/barmenu.jpg',
      title: 'Bar Menu',
      description: 'Craft cocktails and bar bites',
    },
    {
      image: '/images/prix.jpg',
      title: 'Prix Fixe Menu',
      description: 'Curated multi-course dining experience',
    },
    {
      image: '/images/winemenu.jpg',
      title: 'Wine List',
      description: 'Carefully selected wines from around the world',
    },
  ];

  return (
    <div>
      {/* Hero Section with Preloaded Image */}
      <section
        className={`h-[60vh] bg-cover bg-center flex priority items-center justify-center relative text-white text-center transition-opacity duration-1000 ${
          isImageLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ backgroundImage: "url('/images/bg.jpg')" }}
      >
        <img
          src="/images/bg.jpg"
          alt=""
          className="hidden"
          onLoad={() => setIsImageLoaded(true)}
        />
        <div className="absolute inset-0 bg-[#76162a]/40"></div>
        <div className="relative z-10 max-w-3xl p-8">
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-4">Our Menu</h1>
          <p className="text-xl md:text-2xl text-[#ffdbdb]">
            A fusion of French tradition and Hong Kong innovation
          </p>
        </div>
      </section>

      {/* Menu Grid Section */}
      <section
        ref={sectionRef}
        className="relative py-24 bg-white overflow-hidden transition-opacity duration-500"
        style={initialStyle}
      >

        <div className="container mx-auto px-4">

          {/* Menu Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {menuItems.map((item, index) => (
              <div
                key={item.title}
                ref={(el) => {
                  menuRefs.current[index] = el;
                }}
                className="group relative overflow-hidden rounded-xl shadow-lg"
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <div className="text-center p-6">
                      <h3 className="text-2xl md:text-3xl font-serif text-white mb-2">{item.title}</h3>
                      <p className="text-lg text-white/90">{item.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Dietary Requirements */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-serif text-[#76162a] mb-6 relative inline-block">
              Special Dietary Requirements
              <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#ee8080]"></span>
            </h2>
          </div>
          <div className="max-w-3xl mx-auto text-center text-[#76162a]/80">
            <p className="text-lg md:text-xl mb-4">
              We are happy to accommodate any dietary requirements or allergies. Please inform our
              staff when making your reservation or upon arrival, and our chefs will prepare
              suitable alternatives without compromising on flavor or presentation.
            </p>
            <p className="text-lg md:text-xl">Vegetarian and vegan options are available upon request.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu; 