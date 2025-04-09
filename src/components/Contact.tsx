import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiClock, FiMapPin, FiPhone, FiMail } from 'react-icons/fi';

// Register GSAP plugins outside of component to avoid re-registration
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const Contact = () => {
  const [isMounted, setIsMounted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

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
    })
      .from(
        contentRef.current,
        {
          y: 60,
          opacity: 0,
          duration: 1,
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

  // Set initial opacity to 0 and fade in when mounted
  const initialStyle = !isMounted ? { opacity: 0 } : { opacity: 1 };

  return (
    <section
      ref={sectionRef}
      className="relative bg-white overflow-hidden transition-opacity duration-500"
      style={initialStyle}
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#ffdbdb] rounded-full blur-3xl opacity-20 transform -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#ee8080] rounded-full blur-3xl opacity-20 transform translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 py-24">
        {/* Section Title */}
        <div ref={titleRef} className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-serif text-[#76162a] mb-6 relative inline-block">
            Contact Us
            <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#ee8080]"></span>
          </h2>
          <p className="md:text-2xl text-[#76162a]/90 max-w-3xl mx-auto font-sans">
            Get in touch with us for any inquiries.
          </p>
        </div>

        {/* Contact Info & Hours */}
        <div ref={contentRef} className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto mb-12">
          {/* Opening Hours */}
          <div className="bg-white shadow-lg rounded-xl p-8 border border-[#76162a]/10">
            <div className="flex items-center gap-3 mb-6">
              <FiClock className="w-6 h-6 text-[#ee8080]" />
              <h3 className="text-2xl font-playfair text-[#76162a]">Opening Hours</h3>
            </div>
            <div className="space-y-4 text-[#76162a]/70">
              <div className="flex justify-between items-center">
                <span>Tuesday - Sunday</span>
                <span>18:00 - 00:00</span>
              </div>
              <div className="text-sm italic text-[#76162a]/50">
                Closed on Mondays
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-white shadow-lg rounded-xl p-8 border border-[#76162a]/10">
            <div className="flex items-center gap-3 mb-6">
              <FiMapPin className="w-6 h-6 text-[#ee8080]" />
              <h3 className="text-2xl font-playfair text-[#76162a]">Contact Details</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <FiMapPin className="w-5 h-5 text-[#ee8080] mt-1" />
                <div className="text-[#76162a]/70">
                  <p>12/F, The Lamma Tower, 12-12A Hau Fook Street,</p>
                  <p>TST, Hong Kong</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <FiPhone className="w-5 h-5 text-[#ee8080]" />
                <a
                  href="tel:+85291650827"
                  className="text-[#76162a]/70 hover:text-[#76162a] transition-colors"
                >
                  +852 9165 0827
                </a>
              </div>
              <div className="flex items-center gap-3">
                <FiMail className="w-5 h-5 text-[#ee8080]" />
                <a
                  href="mailto:cedillahk@gmail.com"
                  className="text-[#76162a]/70 hover:text-[#76162a] transition-colors"
                >
                  cedillahk@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="max-w-7xl mx-auto">
          <div className="bg-white shadow-lg rounded-xl border border-[#76162a]/10">
            <div className="w-full h-[450px] rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.428902499712!2d114.1738698!3d22.2996133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3404011f872bccc9%3A0xcba17c311cbfb331!2sCedilla%20French%20Restaurant!5e0!3m2!1sen!2shk!4v1744191257977!5m2!1sen!2shk"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 