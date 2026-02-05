export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
      {/* Background Architectural Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Large Gradient Blur */}
        <div className="absolute -top-24 -right-24 w-[600px] h-[600px] bg-blue-50 rounded-full blur-[120px] opacity-60" />
        {/* Technical Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ 
          backgroundImage: `radial-gradient(#0f172a 1px, transparent 1px)`, 
          backgroundSize: '40px 40px' 
        }} />
        {/* Vertical Accent Line */}
        <div className="absolute top-0 left-1/2 w-px h-full bg-slate-100 hidden lg:block" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-8">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-700">Precision Engineering</span>
            </div>
            
            <h1 className="text-7xl lg:text-8xl font-black leading-[0.9] tracking-tighter text-slate-900 mb-8">
              Advanced <br />
              <span className="text-blue-600">Synthetic</span> <br />
              Excellence.
            </h1>
            
            <p className="text-xl text-slate-500 leading-relaxed max-w-lg font-light mb-12 border-l-4 border-slate-100 pl-8 italic">
              "We don't just supply fluids; we engineer molecular stability for the world's most critical industrial infrastructure."
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <button className="group relative px-8 py-5 bg-slate-900 text-white rounded-xl overflow-hidden transition-all hover:scale-[1.02]">
                <div className="absolute inset-0 bg-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative z-10 font-bold tracking-widest text-xs uppercase">The ECOSYN™ Portfolio</span>
              </button>
              <button className="px-8 py-5 border-2 border-slate-100 text-slate-900 font-bold rounded-xl hover:bg-slate-50 transition-all text-xs uppercase tracking-widest">
                Technical Consultancy
              </button>
            </div>
          </div>

          <div className="relative lg:h-[700px] flex items-center justify-center">
            {/* Main Visual Component: The "Molecule/Blueprint" Graphic */}
            <div className="relative w-full aspect-square max-w-lg">
              {/* Outer Decorative Circles */}
              <div className="absolute inset-0 border border-slate-100 rounded-full scale-[1.1] animate-[spin_20s_linear_infinite]" />
              <div className="absolute inset-0 border border-dashed border-slate-200 rounded-full animate-[spin_30s_linear_infinite_reverse]" />
              
              {/* Core Image Container */}
              <div className="relative z-10 w-full h-full bg-slate-50 rounded-[60px] shadow-2xl overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-950 flex items-center justify-center p-12">
                   {/* This placeholder represents the high-end industrial photo */}
                   <div className="relative w-full h-full flex items-center justify-center">
                      <div className="text-white opacity-5 text-9xl font-black italic tracking-tighter absolute -rotate-12">WCI</div>
                      <div className="w-48 h-px bg-white/20 absolute rotate-45" />
                      <div className="w-48 h-px bg-white/20 absolute -rotate-45" />
                      <div className="w-32 h-32 border border-blue-500/50 rounded-full flex items-center justify-center">
                        <div className="w-16 h-16 bg-blue-600 rounded-2xl shadow-[0_0_50px_rgba(37,99,235,0.5)] animate-pulse" />
                      </div>
                   </div>
                </div>
                
                {/* Information Overlay */}
                <div className="absolute top-8 right-8 flex flex-col gap-2">
                  <div className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-lg border border-white/10 text-[10px] text-white font-bold tracking-widest uppercase">E-Series 2026</div>
                  <div className="px-4 py-2 bg-blue-600/90 backdrop-blur-md rounded-lg text-[10px] text-white font-bold tracking-widest uppercase shadow-xl">Optimized Flow</div>
                </div>
              </div>

              {/* Floating Technical Card */}
              <div className="absolute -bottom-10 -left-10 z-20 bg-white p-10 rounded-3xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] border border-slate-100 max-w-[320px] hover:-translate-y-2 transition-transform duration-500">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-slate-900 rounded-2xl flex items-center justify-center text-white text-2xl font-bold italic">E</div>
                  <div>
                    <h4 className="font-black text-slate-900 tracking-tight uppercase">ECOSYN™ POE</h4>
                    <p className="text-[10px] text-blue-600 uppercase tracking-widest font-black">Performance Grade</p>
                  </div>
                </div>
                <p className="text-sm text-slate-500 leading-relaxed font-light">
                  Proprietary synthetic ester technology designed for ultra-low volatility and superior thermal conductivity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
