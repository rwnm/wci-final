import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function OpenClawDemo() {
  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-cyan-500/30 font-sans overflow-hidden">
      <Navbar />
      
      {/* Background Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[128px] animate-pulse-glow" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[128px] animate-pulse-glow delay-1000" />
      </div>

      <main className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        
        {/* Hero Section */}
        <header className="mb-24 text-center animate-fade-in-up">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-8">
            <span className="text-white">OpenClaw</span>
            <span className="block mt-2 bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Intelligence Node
            </span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            A next-generation agentic framework orchestrated by the OpenClaw Gateway.
            Hosted on high-performance Google Cloud infrastructure to deliver multi-tiered AI capabilities.
          </p>
        </header>

        {/* Architecture Visualization */}
        <section className="mb-32 animate-fade-in delay-200">
          <h2 className="text-3xl font-bold text-center mb-16 text-slate-200">System Architecture Flow</h2>
          
          <div className="relative p-12 rounded-3xl bg-slate-900/40 border border-slate-800 backdrop-blur-xl overflow-hidden group hover:border-slate-700 transition-all duration-500">
            {/* Connecting Lines */}
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-slate-700 to-transparent -translate-y-1/2 hidden md:block" />
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
              
              {/* Node 1: User */}
              <div className="flex flex-col items-center group/node">
                <div className="w-20 h-20 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center shadow-lg shadow-black/50 group-hover/node:scale-110 group-hover/node:border-blue-500/50 group-hover/node:shadow-blue-500/20 transition-all duration-300">
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
                <div className="w-20 h-20 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center shadow-lg shadow-black/50 relative overflow-hidden group-hover/node:scale-110 group-hover/node:border-purple-500/50 group-hover/node:shadow-purple-500/20 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent" />
                  <svg className="w-10 h-10 text-purple-400 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                <div className="w-20 h-20 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center shadow-lg shadow-black/50 group-hover/node:scale-110 group-hover/node:border-cyan-500/50 group-hover/node:shadow-cyan-500/20 transition-all duration-300">
                  <svg className="w-10 h-10 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                <div className="w-20 h-20 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center shadow-lg shadow-black/50 relative overflow-hidden group-hover/node:scale-110 group-hover/node:border-blue-500/50 group-hover/node:shadow-blue-500/20 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent" />
                  <svg className="w-10 h-10 text-blue-400 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
        <section className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Model Routing Hierarchy</h2>
            <p className="text-slate-400">Advanced multi-tier dispatch system for optimal cognitive performance.</p>
          </div>

          <div className="space-y-16">
            
            {/* Tier Group 1: Primary */}
            <div className="relative">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent to-blue-500/50"></div>
                <h3 className="text-2xl font-bold text-blue-100 tracking-tight">Primary Tiers</h3>
                <div className="h-px flex-1 bg-gradient-to-l from-transparent to-blue-500/50"></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Gemini 3 Flash */}
                <div className="group p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-blue-500/50 transition-all duration-300 hover:bg-slate-900 hover:shadow-lg hover:shadow-blue-500/10">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">Gemini 3 Flash</h4>
                    <span className="px-2 py-1 rounded text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">Day-to-day</span>
                  </div>
                  <p className="text-sm text-slate-400">High-speed inference for routine interactions, summarization, and quick queries.</p>
                </div>

                {/* Gemini 3 Pro */}
                <div className="group p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-blue-500/50 transition-all duration-300 hover:bg-slate-900 hover:shadow-lg hover:shadow-blue-500/10">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">Gemini 3 Pro</h4>
                    <span className="px-2 py-1 rounded text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">Complex Reasoning</span>
                  </div>
                  <p className="text-sm text-slate-400">Balanced performance for nuanced tasks requiring logical deduction and context handling.</p>
                </div>
              </div>
            </div>

            {/* Tier Group 2: Specialized / Antigravity */}
            <div className="relative">
              <div className="absolute inset-0 bg-purple-500/5 rounded-3xl -m-4 blur-2xl pointer-events-none"></div>
              <div className="flex items-center gap-4 mb-8 relative z-10">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent to-purple-500/50"></div>
                <h3 className="text-2xl font-bold text-purple-100 tracking-tight">Specialized / Antigravity Tier</h3>
                <div className="h-px flex-1 bg-gradient-to-l from-transparent to-purple-500/50"></div>
              </div>
              <p className="text-center text-purple-300/60 mb-8 -mt-4 text-sm font-mono tracking-wide relative z-10">ADVANCED LOGIC & ORCHESTRATION</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 relative z-10">
                {[
                  { name: "Flash 3", role: "Speed Logic" },
                  { name: "Pro 3", role: "Reasoning" },
                  { name: "Sonnet 4.5", role: "Code/Creative" },
                  { name: "Opus 4.5", role: "Deep Thought" },
                  { name: "Open Source OpenAI", role: "Flexibility" }
                ].map((model, i) => (
                  <div key={i} className="group p-4 rounded-xl bg-slate-900/80 border border-purple-500/20 hover:border-purple-500 hover:bg-slate-900 transition-all duration-300 flex flex-col items-center text-center">
                    <div className="w-8 h-8 rounded-full bg-purple-500/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                      <span className="text-xs text-purple-400 font-bold">{i + 1}</span>
                    </div>
                    <h4 className="text-sm font-semibold text-white mb-1">{model.name}</h4>
                    <p className="text-xs text-purple-300/70">{model.role}</p>
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

              <div className="max-w-2xl mx-auto p-6 rounded-2xl bg-slate-900/30 border border-slate-800 border-dashed flex items-center gap-6 justify-center hover:border-slate-600 transition-colors">
                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center shrink-0">
                   <svg className="w-5 h-5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <div className="text-left">
                  <h4 className="text-base font-semibold text-slate-300">Gemini CLI Models</h4>
                  <p className="text-sm text-slate-500">Robust fallback for terminal-based operations and system-level tasks.</p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Technical Specs Footer-ish */}
        <div className="border-t border-slate-800 pt-16 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
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
