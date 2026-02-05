"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? "py-4 bg-white/80 backdrop-blur-xl border-b border-slate-200/50 shadow-sm" : "py-8 bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center text-white font-bold text-xs italic transition-transform group-hover:rotate-12">
            WCI
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-black tracking-[0.2em] text-slate-900 uppercase leading-none">Wipa Chemicals</span>
            <span className="text-[10px] font-medium text-blue-600 uppercase tracking-widest mt-1">International</span>
          </div>
        </Link>
        
        <div className="hidden md:flex items-center gap-10">
          {["Products", "Services", "Industries", "About"].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500 hover:text-slate-900 transition-colors"
            >
              {item}
            </a>
          ))}
          <button className="px-6 py-3 bg-slate-900 text-white text-[11px] font-bold uppercase tracking-[0.2em] rounded-lg hover:bg-blue-600 hover:-translate-y-0.5 transition-all shadow-lg shadow-slate-200">
            Contact
          </button>
        </div>
      </div>
    </nav>
  )
}
