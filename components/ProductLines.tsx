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
      title: "Extended Life",
      desc: "Drain intervals up to 8x longer than mineral oils, significantly reducing maintenance downtime.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      id: "B01"
    },
    {
      title: "Energy Efficiency",
      desc: "Low friction coefficients reduce energy consumption and operating temperatures.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      id: "B02"
    },
    {
      title: "System Protection",
      desc: "Superior thermal and oxidation stability with excellent anti-wear properties.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      id: "B03"
    },
    {
      title: "Sustainability",
      desc: "Biodegradable options with minimized environmental impact and low volatility.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      id: "B04"
    },
  ];

  return (
    <section ref={sectionRef} id="benefits" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 pb-8 border-b border-slate-200">
           <div className="max-w-xl">
              <div className="reveal opacity-0 flex items-center gap-3 mb-4">
                 <div className="w-8 h-[1px] bg-sky-500"></div>
                 <span className="text-xs font-mono text-sky-600 uppercase tracking-widest">Key Advantages</span>
              </div>
              <h2 className="reveal opacity-0 delay-100 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900">
                Performance <span className="text-slate-500">Benefits</span>
              </h2>
           </div>
           <div className="reveal opacity-0 delay-200 mt-6 md:mt-0">
             <a href="#contact" className="group inline-flex items-center gap-2 text-sm font-semibold text-sky-600 uppercase tracking-wider hover:text-sky-500 transition-colors">
               <span>Request Data Sheet</span>
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
