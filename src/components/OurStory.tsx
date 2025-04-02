import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register GSAP plugins outside of component to avoid re-registration
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const OurStory = () => {
  const [isMounted, setIsMounted] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const chefRef = useRef<HTMLDivElement>(null)
  const sommelierRef = useRef<HTMLDivElement>(null)
  const decorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted) return

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'center center',
        },
      })

      tl.from(titleRef.current, {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      }).from(
        [chefRef.current, sommelierRef.current],
        {
          y: 60,
          opacity: 0,
          duration: 1,
          stagger: 0.3,
          ease: 'power3.out',
        },
        '-=0.5',
      )

      gsap.to(decorRef.current, {
        y: '20%',
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.5,
        },
      })
    }, sectionRef)

    return () => {
      ctx.revert()
    }
  }, [isMounted])

  return (
    <section
      ref={sectionRef}
      className="relative py-24 overflow-hidden bg-[#76162a]"
      style={{ opacity: isMounted ? 1 : 0 }}
    >
      {/* Decorative Elements */}
      <div ref={decorRef} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#8b2c3a] rounded-full blur-3xl opacity-30 transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#980000] rounded-full blur-3xl opacity-30 transform translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <div ref={titleRef} className="relative mb-16 text-center">
            <h2 className="text-5xl md:text-7xl font-serif text-[#ffdbdb] mb-6 relative">
              Our Story
              <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#ee8080]"></span>
            </h2>
            <p className="md:text-2xl text-[#ffdbdb]/90 max-w-3xl mx-auto font-sans">
              Cedilla is a restaurant offering authentic, classic French dishes fused with organic
              and local Hong Kong produce, where culinary expertise meets exceptional wine service.
            </p>
          </div>

          {/* Team Members */}
          <div className="grid md:grid-cols-2 gap-16 max-w-7xl mx-auto">
            {/* Chef */}
            <div ref={chefRef} className="group relative">
              <div className="relative aspect-[4/3] overflow-hidden mb-8">
                <div className="absolute inset-0 bg-[#980000] mix-blend-multiply z-10 opacity-40 group-hover:opacity-20 transition-opacity duration-500"></div>
                <img
                  src="/images/chef.jpg"
                  alt="Chef Nihonyanagi Makoto"
                  className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[#76162a] to-transparent z-20"></div>
              </div>
              <div className="relative z-30">
                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-[#ee8080] to-[#980000]"></div>
                <div className="ml-4 space-y-4">
                  <h3 className="text-3xl font-serif text-[#ffdbdb]">
                    Nihonyanagi Makoto
                    <span className="block text-xl font-normal text-[#ee8080] mt-1">Head Chef</span>
                  </h3>
                  <p className="md:text-xl text-[#ffdbdb]/90 leading-relaxed">
                    With 25 years of French culinary experience in Japan, Chef Nihonyanagi learned
                    from the renowned &ldquo;Grand Chef MIKUNI KIYOMI&rdquo;. His culinary
                    philosophy is deeply rooted in respect for local ingredients and cultural
                    fusion.
                  </p>
                  <p className="md:text-xl text-[#ffdbdb]/90 leading-relaxed">
                    His cuisine artfully blends Japanese precision, French techniques, and Hong
                    Kong&apos;s vibrant flavors, embodying the true spirit of &ldquo;Terroir&rdquo;
                    in every dish.
                  </p>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#8b2c3a] -z-10"></div>
              <div className="absolute -top-6 -left-6 w-48 h-48 border-2 border-[#ee8080] -z-10"></div>
            </div>

            {/* Sommelier */}
            <div ref={sommelierRef} className="group relative">
              <div className="relative aspect-[4/3] overflow-hidden mb-8">
                <div className="absolute inset-0 bg-[#980000] mix-blend-multiply z-10 opacity-40 group-hover:opacity-20 transition-opacity duration-500"></div>
                <img
                  src="/images/vitor.jpg"
                  alt="Victor, Head Sommelier"
                  className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[#76162a] to-transparent z-20"></div>
              </div>
              <div className="relative z-30">
                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-[#ee8080] to-[#980000]"></div>
                <div className="ml-4 space-y-4">
                  <h3 className="text-3xl font-serif text-[#ffdbdb]">
                    Victor
                    <span className="block text-xl font-normal text-[#ee8080] mt-1">
                      Head Sommelier
                    </span>
                  </h3>
                  <p className="md:text-xl text-[#ffdbdb]/90 leading-relaxed">
                    Victor&apos;s passion for wine and spirits was cultivated in prestigious 5-star
                    establishments across the French Alps and the South of France, before his
                    journey took him to Greece and California.
                  </p>
                  <p className="md:text-xl text-[#ffdbdb]/90 leading-relaxed">
                    Today, he brings his wealth of experience to Cedilla, offering expert wine
                    pairing recommendations and embodying the finest traditions of French service.
                  </p>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#8b2c3a] -z-10"></div>
              <div className="absolute -top-6 -left-6 w-48 h-48 border-2 border-[#ee8080] -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurStory;
