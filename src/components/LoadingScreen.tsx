import { useEffect, useState } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.set('body', { overflow: 'hidden' })
    gsap.set('.loading-circle', { strokeDashoffset: 1000 })

    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to('.loading-screen', {
          yPercent: -100,
          duration: 0.8,
          ease: 'power3.inOut',
          onComplete: () => {
            setIsLoading(false)
            gsap.set('body', { overflow: 'auto' })
            ScrollTrigger.refresh()
          },
        })
      },
    })

    tl.to('.loading-circle', {
      strokeDashoffset: 0,
      duration: 1.2,
      ease: 'power2.inOut',
    })
  }, [])

  if (!isLoading) return null

  return (
    <div className="loading-screen fixed inset-0 bg-[#76162A] z-[9999] flex flex-col items-center justify-center">
      <div className="text-rose-100 text-2xl font-light tracking-[0.3em] mb-8">CEDILLA</div>

      <svg className="w-24 h-24" viewBox="0 0 100 100">
        <circle
          className="loading-circle"
          cx="50"
          cy="50"
          r="48"
          fill="none"
          stroke="rgba(254, 226, 226, 0.3)"
          strokeWidth="0.5"
          strokeDasharray="302"
          strokeDashoffset="1000"
          strokeLinecap="butt"
        />
      </svg>
    </div>
  )
} 