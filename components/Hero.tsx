"use client"

import { useEffect, useRef } from "react"

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = heroRef.current?.querySelectorAll(".reveal")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#0F172A] text-white">
      {/* Blueprint Grid Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#38bdf8" strokeWidth="0.5" />
            </pattern>
            <pattern id="large-grid-pattern" width="200" height="200" patternUnits="userSpaceOnUse">
              <rect width="200" height="200" fill="url(#grid-pattern)" />
              <path d="M 200 0 L 0 0 0 200" fill="none" stroke="#38bdf8" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#large-grid-pattern)" />
        </svg>
      </div>

      {/* Radial Gradient Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-tr from-[#0F172A] via-transparent to-[#1e293b]/50" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full py-16 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Content - Asymmetric Layout (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Architectural Badge */}
            <div className="reveal opacity-0 w-fit mb-8 border border-sky-500/30 bg-sky-500/10 backdrop-blur-sm px-4 py-1.5 flex items-center gap-3">
              <div className="w-2 h-2 bg-sky-400 rounded-sm animate-pulse" />
              <span className="text-xs font-mono text-sky-300 tracking-[0.2em] uppercase">System Status: Optimal</span>
            </div>
            
            {/* Headline */}
            <h1 className="reveal opacity-0 delay-100 text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-8 leading-[0.9]">
              GLOBAL <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-white">INFRA</span><br />
              STRUCTURE
            </h1>
            
            {/* Technical Subheadline */}
            <div className="reveal opacity-0 delay-200 border-l-2 border-sky-500/50 pl-6 mb-12 max-w-xl">
              <p className="text-lg text-slate-400 font-light leading-relaxed">
                Engineering precision for critical systems. Water management, power generation, and industrial fabrication executed with military-grade standards.
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="reveal opacity-0 delay-300 flex flex-wrap gap-6">
              <a 
                href="#sectors" 
                className="group relative px-8 py-4 bg-sky-600 hover:bg-sky-500 text-white transition-all duration-300 flex items-center gap-4 overflow-hidden"
              >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shimmer" />
                <span className="font-mono text-sm tracking-widest uppercase">Explore Sectors</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              <a 
                href="#contact" 
                className="group px-8 py-4 border border-slate-600 hover:border-sky-400 text-slate-300 hover:text-white transition-all duration-300 flex items-center gap-4"
              >
                <span className="font-mono text-sm tracking-widest uppercase">Initiate Contact</span>
              </a>
            </div>
          </div>

          {/* Visual - Blueprint Schematic (5 cols) */}
          <div className="lg:col-span-5 relative lg:h-[600px] flex items-center justify-center lg:justify-end reveal opacity-0 delay-200">
             {/* Technical Drawing Graphic */}
             <div className="relative w-full aspect-square max-w-lg">
                {/* Rotating Rings */}
                <div className="absolute inset-0 border border-sky-500/20 rounded-full animate-[spin_60s_linear_infinite]" />
                <div className="absolute inset-4 border border-dashed border-slate-600/50 rounded-full animate-[spin_40s_linear_infinite_reverse]" />
                
                {/* Central Hexagon/Geometry */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-2/3 h-2/3 border border-sky-500/30 bg-[#0F172A]/80 backdrop-blur-md flex items-center justify-center transform rotate-45 hover:rotate-0 transition-all duration-700">
                    <div className="absolute inset-2 border border-sky-500/10" />
                    <div className="w-16 h-16 bg-sky-500/10 flex items-center justify-center -rotate-45 group-hover:rotate-0 transition-all duration-700">
                       <svg className="w-8 h-8 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                       </svg>
                    </div>
                  </div>
                </div>

                {/* Data Points */}
                <div className="absolute top-1/4 right-0 flex items-center gap-2 animate-pulse">
                   <div className="w-2 h-2 bg-sky-500 rounded-full" />
                   <div className="h-px w-12 bg-sky-500/50" />
                   <span className="text-[10px] font-mono text-sky-400">SECURE.01</span>
                </div>
                <div className="absolute bottom-1/4 left-0 flex items-center gap-2 flex-row-reverse animate-pulse delay-75">
                   <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                   <div className="h-px w-12 bg-emerald-500/50" />
                   <span className="text-[10px] font-mono text-emerald-400">ACTIVE.04</span>
                </div>
             </div>
          </div>

        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="absolute bottom-0 w-full border-t border-slate-800 bg-[#0F172A]/90 backdrop-blur-sm py-4">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center text-xs font-mono text-slate-500">
           <span>COORD: 34.0522° N, 118.2437° W</span>
           <div className="flex gap-8">
             <span>LATENCY: 12ms</span>
             <span>UPTIME: 99.99%</span>
           </div>
        </div>
      </div>
    </section>
  )
}
