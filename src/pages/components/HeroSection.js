'use client'

import { useState, useEffect } from 'react'

const words = ['Weddings', 'Events', 'Fashion', 'Films']

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [wordIndex, setWordIndex] = useState(0)

  useEffect(() => {
    setIsLoaded(true)
    
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length)
    }, 2800) // Slightly slower rotation for improved readability

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full min-h-screen bg-[#060608] overflow-hidden flex items-center justify-center" id="home">
      
      {/* Background Media & Cinematic Overlay Gradients */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/focusvideo.gif"
          alt="Showreel Trailer"
          className="w-full h-full object-cover opacity-45 mix-blend-lighten"
        />
        {/* Multidirectional Vignettes for Complete Typography Isolation */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-[#060608]" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50" />
        <div className="absolute inset-0 bg-black/10 backdrop-blur-[2px]" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-8 text-center flex flex-col items-center justify-center">
        
        {/* Studio Badge */}
        <span 
          className={`text-[10px] sm:text-xs font-medium tracking-[0.4em] text-zinc-400 uppercase mb-8 transform transition-all duration-1000 ease-out ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
        >
          Premium Cinema & Photography Studio
        </span>

        {/* Master Headline */}
        <h1 
          className={`tracking-tight w-full text-white font-light transition-all duration-1000 delay-150 text-4xl sm:text-6xl md:text-7xl lg:text-8xl flex flex-col items-center select-none ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
          style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
        >
          <span className="font-extralight text-zinc-300 tracking-wide">We Capture</span>
          
          {/* Animated Dynamic Text Wrapper */}
          <span className="relative inline-block h-[1.25em] w-full mt-2 overflow-hidden">
            {words.map((word, i) => (
              <span
                key={word}
                className={`absolute left-0 right-0 top-0 font-serif italic uppercase tracking-wider transition-all duration-1000 cubic-bezier(0.16, 1, 0.3, 1) text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-amber-200 to-slate-400 ${
                  i === wordIndex 
                    ? 'opacity-100 translate-y-0 scale-100 filter blur-0' 
                    : 'opacity-0 -translate-y-6 scale-95 pointer-events-none filter blur-sm'
                }`}
              >
                {word}
              </span>
            ))}
          </span>
        </h1>

        {/* Studio Description */}
        <p 
          className={`max-w-md sm:max-w-xl text-sm sm:text-base text-zinc-400 font-light tracking-wide leading-relaxed mt-6 mb-12 transition-all duration-1000 delay-300 ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
        >
          Crafting high-end visual legacies for global milestones. Tailored frames, masterfully directed compositions, and archival production value.
        </p>

        {/* Balanced CTA Controls */}
        <div
          className={`flex flex-col items-center justify-center gap-4 transition-all duration-1000 delay-450 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <div className="flex items-center gap-1 border border-zinc-800/80 bg-black/60 backdrop-blur-xl p-1.5 rounded-full shadow-3xl">
            <a
              href="tel:+919910553381"
              className="px-6 py-3 text-xs font-medium tracking-widest text-zinc-300 hover:text-white uppercase transition-all duration-300 rounded-full hover:bg-zinc-900/50"
            >
              Call Us
            </a>

            <a
              href="https://wa.me/919910553381?text=I%20would%20like%20to%20get%20a%20quote%20for%20my%20event."
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden px-6 py-3 text-xs font-semibold tracking-widest text-zinc-950 bg-white uppercase transition-transform duration-300 group rounded-full"
            >
              <span className="absolute inset-0 w-full h-full bg-zinc-100 transition-transform duration-300 transform translate-y-full group-hover:translate-y-0" />
              <span className="relative z-10 flex items-center gap-2">
                Get a Quote <span className="text-[10px] transform transition-transform duration-300 group-hover:translate-x-0.5">→</span>
              </span>
            </a>
          </div>
          
          <span className="text-[9px] tracking-[0.25em] text-zinc-500 uppercase font-medium">
            Now Booking Nationwide
          </span>
        </div>

      </div>

      {/* Decorative Interactive Scroll Prompt */}
      <div
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-700 hidden sm:block ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}
      >
        <div className="flex flex-col items-center space-y-3 opacity-70 hover:opacity-100 transition-opacity duration-300 cursor-pointer">
          <span className="text-zinc-500 text-[9px] tracking-[0.35em] uppercase font-medium">
            Explore Portfolio
          </span>
          <div className="w-[1px] h-14 bg-gradient-to-b from-zinc-700 via-zinc-400 to-transparent relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-amber-200/80 animate-scroll-line" />
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes scrollLine {
          0% { transform: translateY(-100%); }
          80%, 100% { transform: translateY(200%); }
        }
        .animate-scroll-line {
          animation: scrollLine 2.2s cubic-bezier(0.16, 1, 0.3, 1) infinite;
        }
      `}</style>
    </div>
  )
}

export default HeroSection