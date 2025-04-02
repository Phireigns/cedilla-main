import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins outside of component to avoid re-registration
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const GallerySection = () => {
  const [isMounted, setIsMounted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const galleryRefs = useRef<(HTMLDivElement | null)[]>([]);

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

      tl.from(
        galleryRefs.current,
        {
          y: 60,
          opacity: 0,
          duration: 1,
          stagger: 0.1,
          ease: 'power3.out',
        }
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
      className="relative bg-white overflow-hidden transition-opacity duration-500"
      style={initialStyle}
    >
      <div className="px-4 md:px-2">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {[...Array(8)].map((_, index) => (
            <div
              key={index}
              ref={(el) => {
                galleryRefs.current[index] = el;
              }}
              className="aspect-square overflow-hidden"
            >
              <img
                src={`/images/venue${index + 1}.jpg`}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;

