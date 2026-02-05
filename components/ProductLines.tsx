export default function ProductLines() {
  const services = [
    {
      title: "Strategic Planning",
      desc: "Comprehensive feasibility studies and master planning for large-scale development projects.",
      icon: "📊",
      tag: "Planning"
    },
    {
      title: "Engineering",
      desc: "Cutting-edge civil, structural, and electrical engineering design solutions.",
      icon: "📐",
      tag: "Design"
    },
    {
      title: "Construction",
      desc: "End-to-end construction management ensuring quality, safety, and timely delivery.",
      icon: "🏗️",
      tag: "Build"
    },
    {
      title: "Operations",
      desc: "Lifecycle asset management and maintenance optimization for critical infrastructure.",
      icon: "⚙️",
      tag: "Manage"
    },
  ];

  return (
    <section id="services" className="py-40 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-32 gap-12">
          <div className="max-w-3xl space-y-10">
            <div className="w-20 h-1 bg-blue-600" />
            <h2 className="text-6xl lg:text-7xl font-black tracking-tighter text-slate-900 leading-[0.9]">
              Comprehensive <br /><span className="text-blue-600">Services.</span>
            </h2>
            <p className="text-xl text-slate-500 font-light max-w-xl leading-relaxed">
              From concept to commissioning, we deliver integrated services that ensure the success of complex global projects.
            </p>
          </div>
          <div className="flex flex-col items-start gap-4">
             <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Expertise</span>
             <button className="px-10 py-5 bg-slate-950 text-white font-bold text-xs uppercase tracking-widest hover:bg-blue-600 transition-colors">
               View Capabilities <span>→</span>
             </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-6">
          {services.map((service, i) => (
            <div key={i} className="group relative pt-12 pb-16 px-10 bg-slate-50 border border-slate-100 transition-all duration-500 hover:bg-white hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] hover:-translate-y-4">
              <div className="absolute top-0 right-0 p-6 text-[10px] font-black uppercase tracking-widest text-slate-300 group-hover:text-blue-600 transition-colors">
                {service.tag}
              </div>
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-3xl mb-10 shadow-sm border border-slate-100 group-hover:bg-slate-900 transition-colors duration-500">
                {service.icon}
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-6 tracking-tight group-hover:text-blue-600 transition-colors">{service.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed font-light mb-10 group-hover:text-slate-600 transition-colors">
                {service.desc}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-6 h-px bg-slate-200 group-hover:w-12 group-hover:bg-blue-600 transition-all duration-500" />
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-slate-900 transition-colors">Explore</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
