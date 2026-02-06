import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function OpenClawDemo() {
  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-cyan-500/30 font-sans overflow-hidden">
      <Navbar />
      
      {/* Background Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[128px] animate-pulse-glow" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[128px] animate-pulse-glow delay-1000" />
      </div>

      <main className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        
        {/* Hero Section */}
        <header className="mb-24 text-center animate-fade-in-up">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-slate-700 bg-slate-900/50 backdrop-blur-md">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent text-sm font-semibold tracking-wide uppercase">
              System Status: Operational
            </span>
          </div>
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

        {/* Model Tier Grid */}
        <section className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Intelligence Tiers</h2>
            <p className="text-slate-400">Adaptive model selection based on task complexity.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Tier 1 */}
            <div className="group relative p-8 rounded-3xl bg-slate-900 border border-slate-800 hover:border-green-500/50 transition-all duration-300 hover:-translate-y-2">
              <div className="absolute inset-0 bg-green-500/5 opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-300" />
              <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Tier 1: Speed</h3>
              <p className="text-sm text-green-400 font-mono mb-4">gemini-3-flash-preview</p>
              <p className="text-slate-400 leading-relaxed text-sm">
                Optimized for day-to-day interactions, quick queries, and simple automation tasks. Ultra-low latency and high efficiency.
              </p>
            </div>

            {/* Tier 2 */}
            <div className="group relative p-8 rounded-3xl bg-slate-900 border border-slate-800 hover:border-yellow-500/50 transition-all duration-300 hover:-translate-y-2">
              <div className="absolute inset-0 bg-yellow-500/5 opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-300" />
              <div className="w-12 h-12 rounded-xl bg-yellow-500/10 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Tier 2: Reasoning</h3>
              <p className="text-sm text-yellow-400 font-mono mb-4">gemini-3-pro-preview</p>
              <p className="text-slate-400 leading-relaxed text-sm">
                Balances performance and cost for complex manual tasks requiring nuanced understanding and logical deduction.
              </p>
            </div>

            {/* Tier 3 */}
            <div className="group relative p-8 rounded-3xl bg-slate-900 border border-slate-800 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-2">
              <div className="absolute inset-0 bg-purple-500/5 opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-300" />
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-3xl opacity-20 group-hover:opacity-40 blur transition duration-300 -z-10" />
              
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Tier 3: Deep Logic</h3>
              <p className="text-sm text-purple-400 font-mono mb-4 break-words">claude-3-opus-4-5-thinking</p>
              <p className="text-slate-400 leading-relaxed text-sm">
                Deployed for heavy coding, sub-agent orchestration, and deep reasoning tasks where precision is paramount.
              </p>
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
