export default function Services() {
  const sectors = [
    {
      title: "Water Management",
      desc: "Sustainable water treatment, purification, and distribution systems for a thirsty world.",
      details: ["Desalination", "Wastewater Treatment", "Distribution Networks"]
    },
    {
      title: "Power Generation",
      desc: "Renewable and conventional energy solutions powering industries and communities.",
      details: ["Renewable Energy", "Grid Modernization", "Power Plants"]
    },
    {
      title: "Infrastructure",
      desc: "Critical transport and urban infrastructure driving economic growth and connectivity.",
      details: ["Transportation", "Urban Development", "Industrial Facilities"]
    }
  ];

  return (
    <section id="sectors" className="py-40 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 p-24 text-[20vw] font-black text-slate-100/50 -z-10 leading-none select-none">
        SECTORS
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-32 space-y-8">
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-600">Global Impact</span>
          <h2 className="text-6xl lg:text-7xl font-black tracking-tight text-slate-900 leading-[0.95]">
            Building<br />The Future.
          </h2>
          <p className="text-xl text-slate-500 font-light max-w-xl leading-relaxed italic border-l-2 border-blue-600 pl-8">
            "Delivering robust solutions across the three pillars of modern civilization."
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-16 lg:gap-8">
          {sectors.map((sector, i) => (
            <div key={i} className="flex flex-col bg-white p-12 rounded-[40px] shadow-sm border border-slate-100 group hover:shadow-2xl hover:border-blue-100 transition-all duration-700">
              <div className="flex items-center gap-6 mb-12">
                 <div className="w-16 h-16 rounded-full bg-slate-950 flex items-center justify-center font-bold text-white text-xl italic group-hover:rotate-[360deg] transition-transform duration-1000">
                    0{i+1}
                 </div>
                 <h3 className="text-3xl font-black text-slate-900 tracking-tight leading-none uppercase">{sector.title}</h3>
              </div>
              <p className="text-slate-500 mb-12 font-light leading-relaxed text-lg">
                {sector.desc}
              </p>
              <div className="mt-auto space-y-6">
                <div className="h-px w-full bg-slate-100" />
                <ul className="space-y-4">
                  {sector.details.map((detail, j) => (
                    <li key={j} className="flex items-center gap-4 text-[11px] font-black uppercase tracking-widest text-slate-400 group-hover:text-slate-900 transition-colors">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
