import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiClock, FiMapPin, FiPhone, FiMail, FiCalendar } from 'react-icons/fi';

// Register GSAP plugins outside of component to avoid re-registration
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const Contact = () => {
  const [isMounted, setIsMounted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    guests: '',
    date: '',
    time: '',
    message: '',
  });
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({
    type: null,
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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
      )
      .from(
        formRef.current,
        {
          y: 60,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
        },
        '-=0.7',
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form data before submission
    if (!formData.name || !formData.email || !formData.phone || !formData.guests || !formData.date || !formData.time) {
      setSubmitStatus({
        type: 'error',
        message: 'Please fill in all required fields',
      });
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });
    
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (response.ok && data.success) {
        // Reset form on successful submission
        setFormData({
          name: '',
          email: '',
          phone: '',
          guests: '',
          date: '',
          time: '',
          message: '',
        });
        
        setSubmitStatus({
          type: 'success',
          message: data.message || 'Reservation request received! We will confirm your booking shortly.',
        });
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.error || 'Something went wrong. Please try again later.',
        });
      }
    } catch (error) {
      console.error('Error submitting reservation form:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Connection error. Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-24 bg-white overflow-hidden transition-opacity duration-500"
      style={initialStyle}
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#ffdbdb] rounded-full blur-3xl opacity-20 transform -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#ee8080] rounded-full blur-3xl opacity-20 transform translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div ref={titleRef} className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-serif text-[#76162a] mb-6 relative inline-block">
            Make a Reservation
            <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#ee8080]"></span>
          </h2>
          <p className="md:text-2xl text-[#76162a]/90 max-w-3xl mx-auto font-sans">
            Join us for an unforgettable dining experience.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">

{/* Reservation Form */}
<form
            ref={formRef}
            className="bg-white shadow-lg rounded-xl p-8 border border-[#76162a]/10"
            onSubmit={handleSubmit}
          >
            <div className="flex items-center gap-3 mb-6">
              <FiCalendar className="w-6 h-6 text-[#ee8080]" />
              <h3 className="text-2xl font-playfair text-[#76162a]">Make a Reservation</h3>
            </div>
            
            {/* Status messages */}
            {submitStatus.type && (
              <div 
                className={`mb-6 p-4 rounded-lg ${
                  submitStatus.type === 'success' 
                    ? 'bg-green-50 text-green-800 border border-green-200' 
                    : 'bg-red-50 text-red-800 border border-red-200'
                }`}
              >
                {submitStatus.message}
              </div>
            )}

            <div className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#76162a] mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-[#76162a]/20 rounded-lg text-[#76162a] placeholder-[#76162a]/40 focus:outline-none focus:border-[#76162a] focus:ring-1 focus:ring-[#76162a] transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[#76162a] mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-[#76162a]/20 rounded-lg text-[#76162a] placeholder-[#76162a]/40 focus:outline-none focus:border-[#76162a] focus:ring-1 focus:ring-[#76162a] transition-colors"
                    placeholder="Your phone number"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#76162a] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-[#76162a]/20 rounded-lg text-[#76162a] placeholder-[#76162a]/40 focus:outline-none focus:border-[#76162a] focus:ring-1 focus:ring-[#76162a] transition-colors"
                  placeholder="Your email"
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-[#76162a] mb-2">
                    Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-[#76162a]/20 rounded-lg text-[#76162a] placeholder-[#76162a]/40 focus:outline-none focus:border-[#76162a] focus:ring-1 focus:ring-[#76162a] transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="time" className="block text-sm font-medium text-[#76162a] mb-2">
                    Time
                  </label>
                  <select
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-[#76162a]/20 rounded-lg text-[#76162a] placeholder-[#76162a]/40 focus:outline-none focus:border-[#76162a] focus:ring-1 focus:ring-[#76162a] transition-colors"
                  >
                      <option value="">Select time</option>
                      <option value="18:00">18:00</option>
                      <option value="18:30">18:30</option>
                      <option value="19:00">19:00</option>
                      <option value="19:30">19:30</option>
                      <option value="20:00">20:00</option>
                      <option value="20:30">20:30</option>
                      <option value="21:00">21:00</option>
                      <option value="21:30">21:30</option>
                      <option value="22:00">22:00</option>
                      <option value="22:30">22:30</option>
                      <option value="23:00">23:00</option>
                      <option value="23:30">23:30</option>
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="guests" className="block text-sm font-medium text-[#76162a] mb-2">
                  Number of Guests
                </label>
                <select
                  id="guests"
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-[#76162a]/20 rounded-lg text-[#76162a] placeholder-[#76162a]/40 focus:outline-none focus:border-[#76162a] focus:ring-1 focus:ring-[#76162a] transition-colors"
                >
                  <option value="">Select number of guests</option>
                  {[...Array(8)].map((_, i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1} {i === 0 ? 'Guest' : 'Guests'}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#76162a] mb-2">
                  Special Requests
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-white border border-[#76162a]/20 rounded-lg text-[#76162a] placeholder-[#76162a]/40 focus:outline-none focus:border-[#76162a] focus:ring-1 focus:ring-[#76162a] transition-colors resize-none"
                  placeholder="Any special requests or dietary requirements?"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-8 py-4 bg-[#76162a] text-white rounded-full font-medium hover:bg-[#8b2c3a] transition-colors ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? 'Processing...' : 'Reserve a Table'}
              </button>
            </div>
          </form>

          {/* Contact Info & Hours */}
          <div ref={contentRef} className="space-y-8">
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

        </div>
      </div>
    </section>
  );
};

export default Contact; 