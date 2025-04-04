'use client'
import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register GSAP plugins outside of component to avoid re-registration
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

interface LeafAnimation {
  ref: React.RefObject<HTMLDivElement | null>
  x: number
  y: number
  rotation: number
  initialRotation: number
  scrub: number
}

const HeroSection = () => {
  const [isMounted, setIsMounted] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const leaf1Ref = useRef<HTMLDivElement>(null)
  const leaf2Ref = useRef<HTMLDivElement>(null)
  const leaf3Ref = useRef<HTMLDivElement>(null)
  const leaf4Ref = useRef<HTMLDivElement>(null)
  const leaf5Ref = useRef<HTMLDivElement>(null)
  const leaf6Ref = useRef<HTMLDivElement>(null)
  const leaf7Ref = useRef<HTMLDivElement>(null)
  const lemon1Ref = useRef<HTMLDivElement>(null)
  const lemon2Ref = useRef<HTMLDivElement>(null)
  const lemon3Ref = useRef<HTMLDivElement>(null)
  const marqueeRef = useRef<HTMLDivElement>(null)
  const heroImageRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted) return

    const ctx = gsap.context(() => {
      // Leaves animations configuration
      const frontLeavesAnimation = [
        { ref: leaf1Ref, x: 30, y: -20, rotation: 8, initialRotation: 45, scrub: 2 },
        { ref: leaf2Ref, x: -35, y: -25, rotation: -10, initialRotation: -30, scrub: 2.5 },
        { ref: leaf3Ref, x: 25, y: -30, rotation: 12, initialRotation: 90, scrub: 1.8 },
      ]

      const backLeavesAnimation = [
        { ref: leaf4Ref, x: -20, y: -35, rotation: -15, initialRotation: 60, scrub: 1.5 },
        { ref: leaf5Ref, x: 35, y: -25, rotation: 10, initialRotation: -75, scrub: 3 },
        { ref: leaf6Ref, x: -25, y: -20, rotation: -8, initialRotation: 120, scrub: 2.2 },
        { ref: leaf7Ref, x: 30, y: -30, rotation: 15, initialRotation: -150, scrub: 2.8 },
      ]

      // Apply leaf animations
      const applyAnimation = (animations: LeafAnimation[]) => {
        animations.forEach(({ ref, x, y, rotation, initialRotation, scrub }) => {
          gsap.set(ref.current, { rotation: initialRotation })
          gsap.to(ref.current, {
            x,
            y,
            rotation: rotation + initialRotation,
            scrollTrigger: {
              trigger: ref.current,
              start: 'top center',
              end: 'bottom top',
              scrub,
            },
          })
        })
      }

      applyAnimation(frontLeavesAnimation)
      applyAnimation(backLeavesAnimation)

      // Lemon animations
      const lemonAnimations = [
        { ref: lemon1Ref, x: -25, y: -30, rotation: 10, initialRotation: -30, scrub: 2.3 },
        { ref: lemon2Ref, x: 30, y: -35, rotation: -12, initialRotation: 45, scrub: 1.8 },
        { ref: lemon3Ref, x: -20, y: -25, rotation: 15, initialRotation: -60, scrub: 2.6 },
      ]

      applyAnimation(lemonAnimations)

      // Marquee animation
      gsap.to(marqueeRef.current, {
        xPercent: -50,
        repeat: -1,
        duration: 15,
        ease: 'none',
      })

      // Hero image and content animations
      gsap.fromTo(
        heroImageRef.current,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 1.5, ease: 'power2.out' },
      )

      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, delay: 0.5, ease: 'power2.out' },
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [isMounted])

  const initialStyle = !isMounted ? { opacity: 0 } : { opacity: 1 }

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#1A1A1A]"
      style={initialStyle}
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/images/bg.jpg"
          alt="Restaurant Interior"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
      </div>

      {/* Marquee text */}
      <div className="absolute inset-0 flex items-center overflow-hidden pointer-events-none">
        <div ref={marqueeRef} className="flex whitespace-nowrap font-['Playfair']">
          <h1 className="text-[clamp(3rem,15vw,10rem)] text-white px-4">CEDILLA</h1>
          <h1 className="text-[clamp(3rem,15vw,10rem)] text-white px-4">CEDILLA</h1>
          <h1 className="text-[clamp(3rem,15vw,10rem)] text-white px-4">CEDILLA</h1>
          <h1 className="text-[clamp(3rem,15vw,10rem)] text-white px-4">CEDILLA</h1>
          <h1 className="text-[clamp(3rem,15vw,10rem)] text-white px-4">CEDILLA</h1>
          <h1 className="text-[clamp(3rem,15vw,10rem)] text-white px-4">CEDILLA</h1>
          <h1 className="text-[clamp(3rem,15vw,10rem)] text-white px-4">CEDILLA</h1>
          <h1 className="text-[clamp(3rem,15vw,10rem)] text-white px-4">CEDILLA</h1>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Back leaves */}
        <div
          ref={leaf4Ref}
          className="absolute w-[clamp(3rem,8vw,9rem)] h-[clamp(3rem,8vw,9rem)] left-[35%] top-[40%] z-20"
        >
          <img src="/images/leaf.png" alt="Leaf" className="w-full h-full object-contain" />
        </div>
        <div
          ref={leaf5Ref}
          className="absolute w-[clamp(3rem,8vw,9rem)] h-[clamp(3rem,8vw,9rem)] right-[25%] top-[30%] z-20"
        >
          <img src="/images/leaf.png" alt="Leaf" className="w-full h-full object-contain" />
        </div>

        {/* Lemons */}
        <div
          ref={lemon1Ref}
          className="absolute w-[clamp(2rem,7vw,8rem)] h-[clamp(2rem,7vw,8rem)] left-[20%] top-[30%] z-30"
        >
          <img src="/images/lemon.png" alt="Lemon" className="w-full h-full object-contain" />
        </div>
        <div
          ref={lemon2Ref}
          className="absolute w-[clamp(2rem,7vw,8rem)] h-[clamp(2rem,7vw,8rem)] right-[25%] top-[40%] z-35"
        >
          <img src="/images/lemon.png" alt="Lemon" className="w-full h-full object-contain" />
        </div>
        <div
          ref={lemon3Ref}
          className="absolute w-[clamp(2rem,7vw,8rem)] h-[clamp(2rem,7vw,8rem)] left-[40%] top-[50%] z-25"
        >
          <img src="/images/lemon.png" alt="Lemon" className="w-full h-full object-contain" />
        </div>

        {/* Front leaves */}
        <div
          ref={leaf1Ref}
          className="absolute w-[clamp(4rem,10vw,12rem)] h-[clamp(4rem,10vw,12rem)] left-[10%] top-[20%] z-[45] blur-[2px]"
        >
          <img src="/images/leaf.png" alt="Leaf" className="w-full h-full object-contain" />
        </div>
        <div
          ref={leaf2Ref}
          className="absolute w-[clamp(4rem,10vw,12rem)] h-[clamp(4rem,10vw,12rem)] right-[15%] top-[40%] z-[42] blur-[1.5px]"
        >
          <img src="/images/leaf.png" alt="Leaf" className="w-full h-full object-contain" />
        </div>
        <div
          ref={leaf3Ref}
          className="absolute w-[clamp(4rem,10vw,12rem)] h-[clamp(4rem,10vw,12rem)] left-[25%] top-[35%] z-[48] blur-[2.5px]"
        >
          <img src="/images/leaf.png" alt="Leaf" className="w-full h-full object-contain" />
        </div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 relative z-2">
        <div className="flex flex-col items-center text-center">
          {/* Hero Image */}
          <div
            ref={heroImageRef}
            className="relative w-[clamp(300px,80vw,600px)] h-[clamp(300px,80vw,600px)] mt-40 md:mt-12"
          >
            <img
              src="/images/hero-dish.png"
              alt="Featured Dish"
              className="w-full h-full object-contain drop-shadow-2xl"
            />
          </div>

          {/* Buttons */}
          <div ref={contentRef} className="flex flex-col sm:flex-row gap-8 mt-8">
            <a
              href="https://app.eats365pos.com/hk/en/cedilla_tsimshatsui/reservation?referrer=https%3A%2F%2Flinktr.ee%2F" 
              target="_blank"
              className="group relative px-12 py-4 bg-[#8b2c3a] text-white font-medium inline-flex items-center justify-center transition-all duration-500 rounded-none overflow-hidden shadow-lg hover:shadow-xl"
            >
              <span className="relative z-10 text-lg tracking-[0.2em] uppercase">
                Reserve a Table
              </span>
              <div className="absolute inset-0 bg-[#980000] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
              <div className="absolute inset-0 border border-[#ffdbdb] transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
              <div className="absolute inset-0 border border-[#ffdbdb] transform translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
              <div className="absolute inset-0 border border-[#ffdbdb] transform translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
            </a>
            <a
              href="/menu"
              className="group relative px-12 py-4 text-white/90 font-medium inline-flex items-center justify-center transition-all duration-300 hover:text-white"
            >
              <span className="relative z-10 text-lg tracking-[0.2em] uppercase">View Menu</span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#ffdbdb] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection;
