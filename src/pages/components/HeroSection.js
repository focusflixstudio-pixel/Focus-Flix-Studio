'use client'

import { useState, useEffect } from 'react'

const words = ['Weddings', 'Events', 'Fashion', 'Films']

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [wordIndex, setWordIndex] = useState(0)

  useEffect(() => {
    setIsLoaded(true)
    
    // Smooth text loop interval
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length)
    }, 2500)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full min-h-screen bg-[#0a0a0a] overflow-hidden flex items-center justify-center" id="home">
      
      {/* Background Media & Cinematic Overlay Gradients */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/focusvideo.gif"
          alt="Showreel Trailer"
          className="w-full h-full object-cover opacity-60"
        />
        {/* Top & Bottom Soft Vignettes for Typography Legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#0a0a0a]" />
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px]" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-8 text-center flex flex-col items-center justify-center">
        
        <span 
          className={`text-[10px] sm:text-xs font-semibold tracking-[0.35em] text-zinc-400 uppercase mb-6 transform transition-all duration-1000 ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
          }`}
        >
          Premium Cinema & Photography Studio
        </span>

       <h1 
  className={`tracking-tight w-full text-white font-light transition-all duration-1000 delay-100 text-4xl sm:text-6xl md:text-8xl ${
    isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
  }`}
  style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
>
  <span className="block font-extralight text-zinc-300 text-4xl sm:text-6xl md:text-6xl">We Capture</span>
  
  <span className="relative inline-block h-[1.15em] w-full font-medium text-amber-400 overflow-hidden mt-1">
    {words.map((word, i) => (
      <span
        key={word}
        className={`absolute left-0 right-0 top-0 transition-all duration-700 ease-in-out salemore uppercase tracking-wider ${
          i === wordIndex 
            ? 'opacity-100 translate-y-0 scale-100' 
            : 'opacity-0 translate-y-4 scale-95 pointer-events-none'
        }`}
      >
        {word}
      </span>
    ))}
  </span>
</h1>

        <p 
          className={`max-w-md sm:max-w-xl text-sm sm:text-base text-zinc-400 font-normal tracking-wide leading-relaxed mb-12 transition-all duration-1000 delay-200 ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
        >
          Crafting high-end visual legacies for global milestones. Tailored frames, masterfully directed compositions, and archival production value.
        </p>

        <div
          className={`flex flex-col items-center justify-center gap-3 transition-all duration-1000 delay-300 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <div className="flex items-center divide-x divide-zinc-800 border border-zinc-800 bg-black/80 backdrop-blur-md p-1.5 rounded-md shadow-2xl">
            <a
              href="tel:+919910553381"
              className="px-6 py-3 text-xs font-semibold tracking-widest text-white uppercase transition-colors duration-200 hover:text-white"
            >
              Call Us
            </a>

            <a
              href="https://wa.me/919910553381?text=I%20would%20like%20to%20get%20a%20quote%20for%20my%20event."
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden px-6 py-3 text-xs font-semibold tracking-widest text-zinc-950 bg-white uppercase transition-colors duration-300 group rounded-sm"
            >
              <span className="absolute inset-0 w-full h-full bg-zinc-100 transition-transform duration-300 transform translate-y-full group-hover:translate-y-0" />
              <span className="relative z-10 flex items-center gap-2">
                Get a Quote <span className="text-[10px] opacity-60">→</span>
              </span>
            </a>
          </div>
          
          <span className="text-[9px] tracking-[0.2em] text-zinc-500 uppercase mt-1">
            Now Booking Nationwide
          </span>
        </div>

      </div>

      <div
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-500 hidden sm:block ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}
      >
        <div className="flex flex-col items-center space-y-3">
          <span className="text-zinc-500 text-[10px] tracking-[0.3em] uppercase font-medium">
            Explore Portfolio
          </span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-zinc-500 to-transparent relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-white animate-scroll-line" />
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes scrollLine {
          0% { transform: translateY(-100%); }
          80%, 100% { transform: translateY(200%); }
        }
        .animate-scroll-line {
          animation: scrollLine 2s cubic-bezier(0.16, 1, 0.3, 1) infinite;
        }
      `}</style>
    </div>
  )
}

export default HeroSection