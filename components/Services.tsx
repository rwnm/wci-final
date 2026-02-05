export default function Services() {
  const services = [
    {
      title: "Molecular Strategy",
      desc: "Our senior tribologists engineer custom fluid strategies for hardware commissioning and development.",
      details: ["Application Mapping", "Hardware Compatibility", "Performance Stress Tests"]
    },
    {
      title: "Precision Blending",
      desc: "Custom chemical formulations engineered for unique extreme-temp or zero-pressure environments.",
      details: ["Private Label Ops", "Custom Viscosity Tuning", "Advanced Additive Logic"]
    },
    {
      title: "Digital Oil Analysis",
      desc: "Comprehensive diagnostic programs powered by data to predict maintenance and extend life.",
      details: ["Wear Meta-Tracking", "Contamination Analysis", "Predictive Diagnostics"]
    }
  ];

  return (
    <section id="services" className="py-40 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 p-24 text-[20vw] font-black text-slate-100/50 -z-10 leading-none select-none">
        SERVICE
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-32 space-y-8">
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-600">Expertise on Demand</span>
          <h2 className="text-6xl lg:text-7xl font-black tracking-tight text-slate-900 leading-[0.95]">
            Engineering<br />Beyond the Fluid.
          </h2>
          <p className="text-xl text-slate-500 font-light max-w-xl leading-relaxed italic border-l-2 border-blue-600 pl-8">
            "Hardware is only as resilient as the chemistry protecting it."
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-16 lg:gap-8">
          {services.map((service, i) => (
            <div key={i} className="flex flex-col bg-white p-12 rounded-[40px] shadow-sm border border-slate-100 group hover:shadow-2xl hover:border-blue-100 transition-all duration-700">
              <div className="flex items-center gap-6 mb-12">
                 <div className="w-16 h-16 rounded-full bg-slate-950 flex items-center justify-center font-bold text-white text-xl italic group-hover:rotate-[360deg] transition-transform duration-1000">
                    0{i+1}
                 </div>
                 <h3 className="text-3xl font-black text-slate-900 tracking-tight leading-none uppercase">{service.title}</h3>
              </div>
              <p className="text-slate-500 mb-12 font-light leading-relaxed text-lg">
                {service.desc}
              </p>
              <div className="mt-auto space-y-6">
                <div className="h-px w-full bg-slate-100" />
                <ul className="space-y-4">
                  {service.details.map((detail, j) => (
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
