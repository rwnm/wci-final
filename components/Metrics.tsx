"use client"

import { useEffect, useRef, useState } from "react"

export default function Metrics() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            entry.target.classList.add("animate-fade-in-up")
          }
        })
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const stats = [
    { label: "Countries", value: 60, suffix: "+", desc: "Global Presence" },
    { label: "Projects", value: 150, suffix: "+", desc: "Completed Successfully" },
    { label: "Years", value: 30, suffix: "+", desc: "Industry Experience" },
    { label: "Clients", value: 500, suffix: "+", desc: "Trusted Partners" },
  ];

  // Animated counter component
  const AnimatedCounter = ({ value, suffix, delay }: { value: number; suffix: string; delay: number }) => {
    const [count, setCount] = useState(0)
    
    useEffect(() => {
      if (!isVisible) return
      
      const timer = setTimeout(() => {
        const duration = 2000
        const steps = 60
        const stepValue = value / steps
        let current = 0
        
        const interval = setInterval(() => {
          current += stepValue
          if (current >= value) {
            setCount(value)
            clearInterval(interval)
          } else {
            setCount(Math.floor(current))
          }
        }, duration / steps)
        
        return () => clearInterval(interval)
      }, delay)
      
      return () => clearTimeout(timer)
    }, [isVisible, value, delay])
    
    return <span>{count}{suffix}</span>
  }

  return (
    <section ref={sectionRef} id="about" className="py-24 lg:py-32 bg-slate-900 text-white relative overflow-hidden opacity-0">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Grid */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ 
          backgroundImage: `linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)`, 
          backgroundSize: '80px 80px' 
        }} />
        
        {/* Gradient Orbs */}
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-sky-500 rounded-full blur-[200px] opacity-10" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-cyan-500 rounded-full blur-[150px] opacity-10" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-sky-300 text-xs font-semibold uppercase tracking-wider mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
            By The Numbers
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            Proven <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-400">Excellence</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Three decades of delivering world-class infrastructure solutions across the globe.
          </p>
        </div>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, i) => (
            <div 
              key={i} 
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-sky-500/30 transition-all duration-500 hover:bg-white/10"
            >
              <div className="text-xs font-semibold uppercase tracking-widest text-sky-400 mb-4">
                {stat.label}
              </div>
              <div className="text-5xl lg:text-6xl font-bold tracking-tight text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-sky-400 group-hover:to-cyan-400 transition-all duration-500">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} delay={i * 200} />
              </div>
              <div className="h-px w-12 bg-sky-500/50 group-hover:w-full transition-all duration-700 mb-4" />
              <p className="text-sm text-slate-400">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="mt-16 lg:mt-20 text-center">
          <a 
            href="#contact" 
            className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-sky-500 to-cyan-500 text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-sky-500/25 transition-all duration-300"
          >
            <span>Start Your Project</span>
            <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
