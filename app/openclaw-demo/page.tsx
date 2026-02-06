import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function OpenClawDemo() {
  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-red-500/30 font-sans overflow-hidden">
      <Navbar />

      {/* Background Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-[128px] animate-pulse-glow" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-[128px] animate-pulse-glow delay-1000" />
      </div>

      <main className="relative z-10 max-w-7xl mx-auto px-6 py-32">

        {/* Hero Section */}
        <header className="mb-40 text-center animate-fade-in-up">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-8">
            <span className="text-white">OpenClaw</span>
            <span className="block mt-2 bg-gradient-to-r from-red-500 via-orange-500 to-rose-500 bg-clip-text text-transparent">
              Intelligence Node
            </span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            A next-generation agentic framework orchestrated by the OpenClaw Gateway.
            Hosted on high-performance Google Cloud infrastructure to deliver multi-tiered AI capabilities.
          </p>
        </header>

        {/* Architecture Visualization */}
        <section className="mb-40 animate-fade-in delay-200">
          <h2 className="text-3xl font-bold text-center mb-20 text-slate-200">System Architecture Flow</h2>

          <div className="relative p-12 rounded-3xl bg-slate-900/40 border border-slate-800 backdrop-blur-xl overflow-hidden group hover:border-slate-700 transition-all duration-500">
            {/* Connecting Lines */}
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-slate-700 to-transparent -translate-y-1/2 hidden md:block" />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">

              {/* Node 1: User */}
              <div className="flex flex-col items-center group/node">
                <div className="w-20 h-20 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center shadow-lg shadow-black/50 group-hover/node:scale-110 group-hover/node:border-red-500/50 group-hover/node:shadow-red-500/20 transition-all duration-300">
                  <svg className="w-10 h-10 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div className="mt-6 text-center">
                  <h3 className="text-lg font-semibold text-white">Operator</h3>
                  <p className="text-sm text-slate-500">Input Command</p>
                </div>
              </div>

              {/* Node 2: Gateway */}
              <div className="flex flex-col items-center group/node">
                <div className="w-20 h-20 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center shadow-lg shadow-black/50 relative overflow-hidden group-hover/node:scale-110 group-hover/node:border-orange-500/50 group-hover/node:shadow-orange-500/20 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent" />
                  <svg className="w-10 h-10 text-orange-400 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <div className="mt-6 text-center">
                  <h3 className="text-lg font-semibold text-white">OpenClaw Gateway</h3>
                  <p className="text-sm text-slate-500">Orchestrator</p>
                </div>
              </div>

              {/* Node 3: Router */}
              <div className="flex flex-col items-center group/node">
                <div className="w-20 h-20 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center shadow-lg shadow-black/50 group-hover/node:scale-110 group-hover/node:border-red-500/50 group-hover/node:shadow-red-500/20 transition-all duration-300">
                  <svg className="w-10 h-10 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="mt-6 text-center">
                  <h3 className="text-lg font-semibold text-white">Model Router</h3>
                  <p className="text-sm text-slate-500">Logic & Routing</p>
                </div>
              </div>

              {/* Node 4: Infrastructure */}
              <div className="flex flex-col items-center group/node">
                <div className="w-20 h-20 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center shadow-lg shadow-black/50 relative overflow-hidden group-hover/node:scale-110 group-hover/node:border-rose-500/50 group-hover/node:shadow-rose-500/20 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-rose-500/10 to-transparent" />
                  <svg className="w-10 h-10 text-rose-400 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <div className="mt-6 text-center">
                  <h3 className="text-lg font-semibold text-white">GCP Infrastructure</h3>
                  <p className="text-sm text-slate-500">e2-standard VM</p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Model Tier Hierarchy */}
        <section className="mb-40">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-4">Model Routing Hierarchy</h2>
            <p className="text-slate-400">Advanced multi-tier dispatch system for optimal cognitive performance.</p>
          </div>

          <div className="space-y-24">

            {/* Tier Group 1: Primary */}
            <div className="relative">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent to-red-500/50"></div>
                <h3 className="text-2xl font-bold text-red-100 tracking-tight">Primary Tiers</h3>
                <div className="h-px flex-1 bg-gradient-to-l from-transparent to-red-500/50"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Gemini 3 Flash */}
                <div className="group p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-red-500/50 transition-all duration-300 hover:bg-slate-900 hover:shadow-lg hover:shadow-red-500/10">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-xl font-semibold text-white group-hover:text-red-400 transition-colors">Gemini 3 Flash</h4>
                    <span className="px-3 py-1 rounded text-xs font-medium bg-red-500/10 text-red-400 border border-red-500/20">Day-to-day</span>
                  </div>
                  <p className="text-base text-slate-400">High-speed inference for routine interactions, summarization, and quick queries.</p>
                </div>

                {/* Gemini 3 Pro */}
                <div className="group p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-red-500/50 transition-all duration-300 hover:bg-slate-900 hover:shadow-lg hover:shadow-red-500/10">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-xl font-semibold text-white group-hover:text-red-400 transition-colors">Gemini 3 Pro</h4>
                    <span className="px-3 py-1 rounded text-xs font-medium bg-red-500/10 text-red-400 border border-red-500/20">Complex Reasoning</span>
                  </div>
                  <p className="text-base text-slate-400">Balanced performance for nuanced tasks requiring logical deduction and context handling.</p>
                </div>
              </div>
            </div>

            {/* Tier Group 2: Specialized / Antigravity */}
            <div className="relative">
              <div className="absolute inset-0 bg-red-500/5 rounded-3xl -m-4 blur-2xl pointer-events-none"></div>
              <div className="flex items-center gap-4 mb-8 relative z-10">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent to-red-500/50"></div>
                <h3 className="text-2xl font-bold text-red-100 tracking-tight">Specialized / Antigravity Tier</h3>
                <div className="h-px flex-1 bg-gradient-to-l from-transparent to-red-500/50"></div>
              </div>
              <p className="text-center text-red-300/60 mb-8 -mt-4 text-sm font-mono tracking-wide relative z-10">ADVANCED LOGIC & ORCHESTRATION</p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
                {[
                  { name: "Flash 3", role: "Speed Logic" },
                  { name: "Pro 3", role: "Reasoning" },
                  { name: "Sonnet 4.5", role: "Code/Creative" },
                  { name: "Opus 4.5", role: "Deep Thought" },
                  { name: "Open Source OpenAI", role: "Flexibility" }
                ].map((model, i) => (
                  <div key={i} className="group p-5 rounded-xl bg-slate-900/80 border border-red-500/20 hover:border-red-500 hover:bg-slate-900 transition-all duration-300 flex flex-col items-center text-center">
                    <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                      <span className="text-sm text-red-400 font-bold">{i + 1}</span>
                    </div>
                    <h4 className="text-sm font-semibold text-white mb-1">{model.name}</h4>
                    <p className="text-xs text-red-300/70">{model.role}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tier Group 3: Sub-Agent Fallback */}
            <div className="relative">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent to-slate-700"></div>
                <h3 className="text-xl font-bold text-slate-400 tracking-tight">Sub-Agent Fallback Tier</h3>
                <div className="h-px flex-1 bg-gradient-to-l from-transparent to-slate-700"></div>
              </div>

              <div className="max-w-3xl mx-auto p-8 rounded-2xl bg-slate-900/30 border border-slate-800 border-dashed flex items-center gap-8 justify-center hover:border-slate-600 transition-colors">
                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center shrink-0">
                   <svg className="w-6 h-6 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-semibold text-slate-300">Gemini CLI Models</h4>
                  <p className="text-base text-slate-500">Robust fallback for terminal-based operations and system-level tasks.</p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Skill Ecosystem - NEW SECTION */}
        <section className="mb-40">
           <h2 className="text-4xl font-bold text-center mb-20 text-white">Skill Ecosystem</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Browser Control", icon: "🌐", desc: "Full browser automation via OpenClaw Browser Relay." },
                { title: "Shell Execution", icon: "💻", desc: "Secure command-line execution and process management." },
                { title: "Web Search", icon: "🔍", desc: "Real-time information retrieval using Brave Search API." },
                { title: "TTS", icon: "🗣️", desc: "High-quality text-to-speech synthesis for vocal interaction." },
                { title: "GitHub Integration", icon: "🐙", desc: "Seamless repository management and code collaboration." },
                { title: "File Operations", icon: "📂", desc: "Advanced file system manipulation and analysis." }
              ].map((skill, i) => (
                <div key={i} className="p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-red-500/50 hover:bg-slate-800/50 transition-all duration-300">
                  <div className="text-4xl mb-6">{skill.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{skill.title}</h3>
                  <p className="text-slate-400">{skill.desc}</p>
                </div>
              ))}
           </div>
        </section>

        {/* Privacy & Security - NEW SECTION */}
        <section className="mb-40 relative overflow-hidden rounded-3xl bg-slate-900 border border-slate-800 p-12 md:p-20 text-center">
            <div className="absolute inset-0 bg-gradient-to-b from-red-900/10 to-transparent pointer-events-none" />
            <div className="relative z-10 max-w-4xl mx-auto">
               <div className="w-20 h-20 mx-auto bg-slate-800 rounded-full flex items-center justify-center mb-8 border border-slate-700">
                  <svg className="w-10 h-10 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
               </div>
               <h2 className="text-4xl font-bold mb-6 text-white">Privacy & Security First</h2>
               <p className="text-xl text-slate-400 leading-relaxed">
                  Your data stays yours. OpenClaw operates with a local-first memory architecture, ensuring that sensitive information and workspace data remain securely stored within your environment. No external data leaks, just pure, secure intelligence.
               </p>
            </div>
        </section>

        {/* Cross-Platform Orchestration - NEW SECTION */}
        <section className="mb-40">
           <h2 className="text-4xl font-bold text-center mb-20 text-white">Cross-Platform Orchestration</h2>
           <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-80">
              {/* Telegram */}
              <div className="flex flex-col items-center gap-4">
                 <div className="w-24 h-24 bg-[#0088cc]/10 rounded-2xl flex items-center justify-center border border-[#0088cc]/20">
                    <svg className="w-12 h-12 text-[#0088cc]" fill="currentColor" viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
                 </div>
                 <span className="font-semibold text-slate-300">Telegram</span>
              </div>
              
              {/* Discord */}
              <div className="flex flex-col items-center gap-4">
                 <div className="w-24 h-24 bg-[#5865F2]/10 rounded-2xl flex items-center justify-center border border-[#5865F2]/20">
                    <svg className="w-12 h-12 text-[#5865F2]" fill="currentColor" viewBox="0 0 24 24"><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.419-2.1568 2.419zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.419-2.1568 2.419z"/></svg>
                 </div>
                 <span className="font-semibold text-slate-300">Discord</span>
              </div>

               {/* Slack */}
               <div className="flex flex-col items-center gap-4">
                 <div className="w-24 h-24 bg-[#4A154B]/10 rounded-2xl flex items-center justify-center border border-[#4A154B]/20">
                     <svg className="w-12 h-12 text-[#E01E5A]" fill="currentColor" viewBox="0 0 24 24"><path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-3.793h-.001zm8.834-5.042a2.528 2.528 0 0 1 2.521-2.521A2.528 2.528 0 0 1 20.19 10.123a2.528 2.528 0 0 1-2.522 2.52h-2.52V10.123zm-1.263 0a2.527 2.527 0 0 1-2.52-2.521 2.527 2.527 0 0 1-2.521-2.52V1.27A2.528 2.528 0 0 1 11.363 0a2.528 2.528 0 0 1 2.52 2.522v3.793h.001zm-5.05 0a2.528 2.528 0 0 1-2.522 2.521 2.528 2.528 0 0 1-2.522-2.521 2.528 2.528 0 0 1 2.522-2.52H6.313V7.601h-.001zm1.262 0a2.527 2.527 0 0 1 2.521 2.521 2.527 2.527 0 0 1 2.521 2.52v-2.52a2.528 2.528 0 0 1 2.521-2.523 2.528 2.528 0 0 1 2.521 2.522v3.793h-7.564v-.001zm7.574 5.043a2.528 2.528 0 0 1 2.522-2.521 2.528 2.528 0 0 1 2.522 2.521 2.528 2.528 0 0 1-2.522 2.521h-2.522v-2.52h.001zM16.422 13.9a2.527 2.527 0 0 1-2.522 2.521 2.527 2.527 0 0 1-2.52-2.52V7.587a2.528 2.528 0 0 1 2.52-2.522 2.528 2.528 0 0 1 2.522 2.522v3.793h-.001z"/></svg>
                 </div>
                 <span className="font-semibold text-slate-300">Slack</span>
              </div>
           </div>
        </section>

        {/* Autonomous Workflow - NEW SECTION */}
        <section className="mb-40">
           <h2 className="text-4xl font-bold text-center mb-20 text-white">Autonomous Workflow</h2>
           <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              
              {/* Step 1 */}
              <div className="w-full md:w-1/3 p-8 rounded-2xl bg-slate-900 border border-slate-800 relative group">
                 <div className="absolute top-0 right-0 p-4 opacity-10 text-6xl font-black">1</div>
                 <h3 className="text-xl font-bold text-white mb-4">Task Analysis</h3>
                 <p className="text-slate-400">Main agent analyzes the user request and determines if it requires complex, multi-step execution.</p>
              </div>

              {/* Arrow */}
               <div className="hidden md:block text-slate-600">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
               </div>
               <div className="md:hidden text-slate-600 rotate-90">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
               </div>

              {/* Step 2 */}
              <div className="w-full md:w-1/3 p-8 rounded-2xl bg-red-900/10 border border-red-500/30 relative group">
                 <div className="absolute top-0 right-0 p-4 opacity-10 text-6xl font-black text-red-500">2</div>
                 <h3 className="text-xl font-bold text-red-100 mb-4">Sub-Agent Spawn</h3>
                 <p className="text-red-200/60">An ephemeral sub-agent is instantiated with a specific goal, specialized context, and a limited lifespan.</p>
                 <div className="mt-4 flex gap-2">
                    <span className="px-2 py-1 bg-red-500/20 text-red-400 text-xs rounded border border-red-500/20">Focused</span>
                    <span className="px-2 py-1 bg-red-500/20 text-red-400 text-xs rounded border border-red-500/20">Isolated</span>
                 </div>
              </div>

               {/* Arrow */}
               <div className="hidden md:block text-slate-600">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
               </div>
               <div className="md:hidden text-slate-600 rotate-90">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
               </div>

              {/* Step 3 */}
              <div className="w-full md:w-1/3 p-8 rounded-2xl bg-slate-900 border border-slate-800 relative group">
                 <div className="absolute top-0 right-0 p-4 opacity-10 text-6xl font-black">3</div>
                 <h3 className="text-xl font-bold text-white mb-4">Execution & Report</h3>
                 <p className="text-slate-400">The sub-agent completes the task, reports findings back to the main agent, and terminates self-destruct sequence.</p>
              </div>

           </div>
        </section>

        {/* Technical Specs Footer-ish */}
        <div className="border-t border-slate-800 pt-16 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            <span>OpenClaw Core Active</span>
          </div>
          <div className="font-mono">
            Host: <span className="text-slate-300">gcp-e2-standard</span> | Region: <span className="text-slate-300">us-central1</span>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}
