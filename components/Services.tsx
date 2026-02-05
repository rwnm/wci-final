"use client"

import { useEffect, useRef } from "react"

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null)

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

    const elements = sectionRef.current?.querySelectorAll(".reveal")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const sectors = [
    {
      title: "Water Management",
      id: "01",
      desc: "Sustainable treatment, purification, and global distribution systems.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      details: ["Desalination", "Wastewater", "Distribution"]
    },
    {
      title: "Power Generation",
      id: "02",
      desc: "Renewable and conventional energy solutions for industrial scale.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      details: ["Solar Arrays", "Grid Systems", "Storage"]
    },
    {
      title: "Infrastructure",
      id: "03",
      desc: "Critical transport and urban development driving economic connectivity.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      details: ["Transit Hubs", "Smart Cities", "Industrial"]
    }
  ];

  return (
    <section ref={sectionRef} id="sectors" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - Precision Layout */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 pb-8 border-b border-slate-200">
          <div className="max-w-xl">
             <div className="reveal opacity-0 flex items-center gap-3 mb-4">
               <div className="w-8 h-[1px] bg-slate-400"></div>
               <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">Core Sectors</span>
             </div>
             <h2 className="reveal opacity-0 delay-100 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
               Operating <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-sky-400">Divisions</span>
             </h2>
          </div>
          <div className="reveal opacity-0 delay-200 mt-6 md:mt-0">
            <p className="text-slate-500 max-w-sm text-sm leading-relaxed border-l border-slate-200 pl-6">
              Delivering robust solutions across the three pillars of modern civilization—water, power, and infrastructure.
            </p>
          </div>
        </div>

        {/* Precision Grid */}
        <div className="grid lg:grid-cols-3 border border-slate-200 divide-y lg:divide-y-0 lg:divide-x divide-slate-200 bg-slate-50/50">
          {sectors.map((sector, i) => (
            <div 
              key={i} 
              className="reveal opacity-0 group relative p-6 lg:p-10 hover:bg-white hover:z-10 transition-all duration-500"
              style={{ animationDelay: `${(i + 1) * 100}ms` }}
            >
              {/* Hover Effect Border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-sky-500 transition-all duration-300 pointer-events-none" />
              
              {/* ID & Icon */}
              <div className="flex justify-between items-start mb-8 lg:mb-12">
                 <span className="font-mono text-sm text-slate-400 group-hover:text-sky-500 transition-colors">/{sector.id}</span>
                 <div className="w-12 h-12 bg-white border border-slate-200 flex items-center justify-center text-slate-600 group-hover:scale-110 group-hover:border-sky-500 group-hover:text-sky-500 transition-all duration-500 shadow-sm">
                    {sector.icon}
                 </div>
              </div>

              {/* Content */}
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-4 tracking-tight group-hover:translate-x-1 transition-transform duration-300">{sector.title}</h3>
              <p className="text-sm text-slate-500 mb-8 leading-relaxed h-auto sm:h-12">
                {sector.desc}
              </p>

              {/* List */}
              <ul className="space-y-3 pt-6 border-t border-slate-200/50">
                {sector.details.map((item, j) => (
                   <li key={j} className="flex items-center gap-3 text-xs font-medium text-slate-500 uppercase tracking-wide">
                     <div className="w-1 h-1 bg-slate-400 group-hover:bg-sky-500 transition-colors" />
                     {item}
                   </li>
                ))}
              </ul>

              {/* Corner Accent */}
              <div className="absolute bottom-0 right-0 w-0 h-0 border-b-[20px] border-r-[20px] border-b-sky-500 border-r-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
