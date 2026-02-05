export default function Metrics() {
  const stats = [
    { label: "Market Distribution", value: "60+", sub: "Global Economies" },
    { label: "Fluid Formulations", value: "150+", sub: "Technical Spec Lines" },
    { label: "Engineering Heritage", value: "30+", sub: "Years of Research" },
    { label: "Operational Model", value: "100%", sub: "Independent Ownership" },
  ];

  return (
    <section className="py-32 bg-slate-950 text-white relative overflow-hidden">
      {/* Decorative Blueprint Lines */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-white" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-white" />
        <div className="absolute top-0 left-1/4 w-px h-full bg-white" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-white" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-12">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col gap-4 group">
              <div className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-400 mb-2">{stat.label}</div>
              <div className="text-7xl font-black tracking-tighter text-white group-hover:text-blue-400 transition-colors duration-700">
                {stat.value}
              </div>
              <div className="h-px w-12 bg-blue-600 group-hover:w-full transition-all duration-700" />
              <p className="text-xs text-slate-400 font-medium tracking-widest uppercase italic italic">
                {stat.sub}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
