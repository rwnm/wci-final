"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null)

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

    const elements = footerRef.current?.querySelectorAll(".reveal")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const footerLinks = {
    sectors: ["Compressors", "Engines", "Hydraulics", "Specialty"],
    company: [
      { name: "About WIPA", href: "#about" },
      { name: "Our Heritage", href: "#about" },
      { name: "Contact", href: "/contact" },
      { name: "Distributors", href: "#distributors" }
    ],
    resources: ["TDS/SDS Sheets", "Case Studies", "Technical Papers", "FAQ"],
    internal: ["OpenClaw Demo"]
  }

  const socialLinks = [
    { name: "LinkedIn", icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
      </svg>
    )},
    { name: "Twitter", icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    )},
  ]

  return (
    <footer ref={footerRef} className="bg-slate-950 text-white pt-24 lg:pt-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.02]" style={{ 
          backgroundImage: `radial-gradient(#fff 1px, transparent 1px)`, 
          backgroundSize: '32px 32px' 
        }} />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-sky-500 rounded-full blur-[250px] opacity-5" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* CTA Section */}
        <div className="reveal opacity-0 bg-gradient-to-r from-sky-600 to-cyan-600 rounded-3xl p-10 lg:p-16 mb-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{ 
            backgroundImage: `linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)`, 
            backgroundSize: '40px 40px' 
          }} />
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div>
              <h3 className="text-3xl lg:text-4xl font-bold mb-4">Optimize Your Performance</h3>
              <p className="text-lg text-white/80 max-w-xl">
                Contact our experts to find the right ECOSYN solution for your application.
              </p>
            </div>
            <Link 
              href="/contact" 
              className="shrink-0 inline-flex items-center gap-3 px-8 py-4 bg-white text-slate-900 font-semibold rounded-xl hover:bg-slate-100 transition-colors duration-300 shadow-lg"
            >
              <span>Get in Touch</span>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Footer Grid */}
        <div className="reveal opacity-0 delay-100 grid md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8 pb-16 border-b border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 bg-gradient-to-br from-sky-500 to-cyan-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-sm">WCI</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-white">WIPA Chemicals</span>
                <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">Advanced Synthetic Lubricants</span>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Belgian engineering excellence in synthetic lubricants. Delivering superior protection and efficiency worldwide.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a 
                  key={social.name}
                  href="#" 
                  className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-slate-400 hover:bg-white/10 hover:text-white transition-all duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Sectors */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-6 uppercase tracking-wider">Applications</h4>
            <ul className="space-y-4">
              {footerLinks.sectors.map(item => (
                <li key={item}>
                  <a href="#applications" className="text-sm text-slate-400 hover:text-white transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-6 uppercase tracking-wider">Company</h4>
            <ul className="space-y-4">
              {footerLinks.company.map(item => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-slate-400 hover:text-white transition-colors duration-300">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-6 uppercase tracking-wider">Resources</h4>
            <ul className="space-y-4">
              {footerLinks.resources.map(item => (
                <li key={item}>
                  <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Internal */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-6 uppercase tracking-wider">Internal</h4>
            <ul className="space-y-4">
              {footerLinks.internal.map(item => (
                <li key={item}>
                  <a href="/openclaw-demo" className="text-sm text-slate-400 hover:text-white transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="reveal opacity-0 delay-200 py-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} WIPA Chemicals International. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(item => (
              <a key={item} href="#" className="text-sm text-slate-500 hover:text-white transition-colors duration-300">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
