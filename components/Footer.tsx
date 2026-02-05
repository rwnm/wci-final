export default function Footer() {
  return (
    <footer className="bg-white pt-40 pb-20 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-20 mb-32">
          <div className="space-y-10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-slate-950 rounded-xl flex items-center justify-center text-white font-bold text-xs italic">
                WCI
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-black tracking-widest text-slate-900 uppercase">WCI Global</span>
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest leading-none">Water · Power · Infra</span>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed font-light max-w-xs uppercase tracking-wider">
              Leading the development of sustainable water, power, and infrastructure projects worldwide. Engineering a better tomorrow.
            </p>
          </div>

          <div>
            <h4 className="text-[10px] font-black text-slate-900 mb-10 uppercase tracking-[0.4em]">Sectors</h4>
            <ul className="space-y-4">
              {["Water Management", "Power Generation", "Infrastructure", "Sustainability"].map(item => (
                <li key={item}><a href="#sectors" className="text-[11px] font-bold text-slate-500 hover:text-blue-600 uppercase tracking-widest transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-black text-slate-900 mb-10 uppercase tracking-[0.4em]">Corporate</h4>
            <ul className="space-y-4">
              {["About Us", "Our Projects", "Investor Relations", "Careers"].map(item => (
                <li key={item}><a href="#about" className="text-[11px] font-bold text-slate-500 hover:text-blue-600 uppercase tracking-widest transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-black text-slate-900 mb-10 uppercase tracking-[0.4em]">Contact</h4>
            <p className="text-sm text-slate-400 leading-relaxed font-light mb-8 uppercase tracking-widest">
              Get in touch with our global headquarters for project inquiries.
            </p>
            <button className="text-blue-600 text-[11px] font-black uppercase tracking-[0.3em] hover:text-slate-900 transition-colors">
              Contact Us ↗
            </button>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-10">
          <p className="text-[10px] font-bold text-slate-300 uppercase tracking-widest italic">
            © {new Date().getFullYear()} WCI Global. All rights reserved.
          </p>
          <div className="flex gap-10">
            {["Privacy Policy", "Terms of Service", "Legal"].map(item => (
              <a key={item} href="#" className="text-[10px] font-bold text-slate-300 hover:text-slate-900 uppercase tracking-widest transition-colors">{item}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
