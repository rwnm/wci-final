"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
        ? "py-3 bg-white/95 backdrop-blur-xl shadow-[0_1px_0_0_rgba(0,0,0,0.05)]"
        : "py-4 sm:py-5 bg-transparent"
        }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-4 group">
              <div className="relative">
                <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center transition-all duration-300 ${isScrolled ? "bg-slate-900" : "bg-slate-900"
                  }`}>
                  <span className="text-white font-bold text-xs sm:text-sm tracking-tight">WCI</span>
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-sky-500 to-cyan-500 rounded-xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-300" />
              </div>
              <div className="hidden sm:flex flex-col">
                <span className={`text-base font-bold tracking-tight transition-colors duration-300 ${isScrolled ? "text-slate-900" : "text-slate-900"
                  }`}>WIPA Chemicals</span>
                <span className="text-[10px] font-medium text-sky-600 uppercase tracking-[0.2em]">Advanced Synthetic Lubricants</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {["Products", "Applications", "Benefits"].map((item) => (
                <Link
                  key={item}
                  href={`/#${item.toLowerCase()}`}
                  className={`px-5 py-2.5 text-sm font-medium transition-all duration-300 rounded-lg hover:bg-slate-100 ${isScrolled ? "text-slate-600 hover:text-slate-900" : "text-slate-600 hover:text-slate-900"
                    }`}
                >
                  {item}
                </Link>
              ))}
              <Link
                href="/contact"
                className={`px-5 py-2.5 text-sm font-medium transition-all duration-300 rounded-lg hover:bg-slate-100 ${isScrolled ? "text-slate-600 hover:text-slate-900" : "text-slate-600 hover:text-slate-900"
                  }`}
              >
                Contact
              </Link>
              <div className="w-px h-6 bg-slate-200 mx-4" />
              <Link
                href="/contact"
                className="group relative px-6 py-2.5 bg-slate-900 text-white text-sm font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-slate-900/20"
              >
                <span className="relative z-10">Get Started</span>
                <div className="absolute inset-0 bg-gradient-to-r from-sky-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-3 rounded-lg hover:bg-slate-100 transition-colors active:scale-95"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span className={`block h-0.5 bg-slate-900 transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
                <span className={`block h-0.5 bg-slate-900 transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`} />
                <span className={`block h-0.5 bg-slate-900 transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}>
        <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
        <div className={`absolute top-0 right-0 w-[85%] max-w-sm h-full bg-white shadow-2xl transition-transform duration-500 ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}>
          <div className="flex flex-col h-full p-8 pt-24">
            <nav className="space-y-4 flex-1">
              {["Products", "Applications", "Benefits"].map((item, i) => (
                <Link
                  key={item}
                  href={`/#${item.toLowerCase()}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-4 text-xl font-medium text-slate-900 hover:bg-slate-50 rounded-xl transition-colors border-b border-slate-100 last:border-0"
                  style={{ animationDelay: `${i * 50}ms` }}
                >
                  {item}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-4 text-xl font-medium text-slate-900 hover:bg-slate-50 rounded-xl transition-colors border-b border-slate-100 last:border-0"
                style={{ animationDelay: `150ms` }}
              >
                Contact
              </Link>
            </nav>
            <div className="mt-auto pt-8 border-t border-slate-100 pb-8">
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="group relative block w-full py-4 bg-slate-900 text-white text-center font-semibold rounded-xl overflow-hidden transition-all active:scale-[0.98]"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Get Started
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-sky-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
