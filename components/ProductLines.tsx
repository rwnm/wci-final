"use client"

import { useEffect, useRef } from "react"

export default function ProductLines() {
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

  const services = [
    {
      title: "Strategic Planning",
      desc: "Comprehensive feasibility studies and master planning.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      id: "S01"
    },
    {
      title: "Engineering Design",
      desc: "Civil, structural, and electrical engineering solutions.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
        </svg>
      ),
      id: "S02"
    },
    {
      title: "Construction Mgmt",
      desc: "End-to-end management ensuring quality and safety.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      id: "S03"
    },
    {
      title: "Asset Operations",
      desc: "Lifecycle management and maintenance optimization.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      id: "S04"
    },
  ];

  return (
    <section ref={sectionRef} id="services" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 pb-8 border-b border-slate-200">
           <div className="max-w-xl">
              <div className="reveal opacity-0 flex items-center gap-3 mb-4">
                 <div className="w-8 h-[1px] bg-sky-500"></div>
                 <span className="text-xs font-mono text-sky-600 uppercase tracking-widest">Capabilities</span>
              </div>
              <h2 className="reveal opacity-0 delay-100 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900">
                Integrated <span className="text-slate-500">Service Matrix</span>
              </h2>
           </div>
           <div className="reveal opacity-0 delay-200 mt-6 md:mt-0">
             <a href="#contact" className="group inline-flex items-center gap-2 text-sm font-semibold text-sky-600 uppercase tracking-wider hover:text-sky-500 transition-colors">
               <span>Access Full Catalog</span>
               <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
               </svg>
             </a>
           </div>
        </div>

        {/* Precision Grid - 4 Columns */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 border-t border-l border-slate-200">
          {services.map((service, i) => (
            <div 
              key={i} 
              className="reveal opacity-0 group relative p-6 lg:p-8 border-r border-b border-slate-200 bg-white hover:bg-slate-50 transition-all duration-300 cursor-default"
              style={{ animationDelay: `${(i + 1) * 100}ms` }}
            >
              {/* Active Corner */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-sky-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

              {/* Icon & ID */}
              <div className="flex justify-between items-start mb-6 lg:mb-8">
                 <div className="text-slate-400 group-hover:text-sky-500 transition-colors duration-300">
                    {service.icon}
                 </div>
                 <span className="text-[10px] font-mono text-slate-300 group-hover:text-sky-500 transition-colors">{service.id}</span>
              </div>

              {/* Text */}
              <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 group-hover:text-sky-700 transition-colors">{service.title}</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                {service.desc}
              </p>

              {/* Plus Icon interaction */}
              <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                 <svg className="w-4 h-4 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                 </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
