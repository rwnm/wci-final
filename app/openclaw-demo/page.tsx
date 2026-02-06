import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function OpenClawDemo() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-purple-500/30">
      <Navbar />
      
      <main className="max-w-6xl mx-auto px-6 py-20">
        <header className="mb-16 text-center">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            OpenClaw Infrastructure
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            A high-performance agentic setup powered by OpenClaw, hosted on Google Cloud, and orchestrating multi-model intelligence.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Hosting Section */}
          <div className="p-8 rounded-3xl bg-zinc-900/50 border border-zinc-800 backdrop-blur-sm">
            <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold mb-4 text-white">Cloud Hosting</h2>
            <div className="space-y-2">
              <p className="text-zinc-400">Environment: <span className="text-blue-400 font-mono">Google Cloud Platform</span></p>
              <p className="text-zinc-400">Instance: <span className="text-blue-400 font-mono">e2-standard</span></p>
              <p className="text-zinc-400 text-sm mt-4 leading-relaxed">
                Optimized for sustained workloads with balanced compute and memory, providing the stability required for continuous agent operations.
              </p>
            </div>
          </div>

          {/* Model Hierarchy Section */}
          <div className="p-8 rounded-3xl bg-zinc-900/50 border border-zinc-800 backdrop-blur-sm">
            <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold mb-4 text-white">Intelligence Hierarchy</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" />
                <div>
                  <p className="font-medium text-zinc-200">Tier 1: Fast & Efficient</p>
                  <p className="text-sm text-zinc-500">gemini-3-flash-preview (Day-to-day chat)</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-yellow-500 shrink-0" />
                <div>
                  <p className="font-medium text-zinc-200">Tier 2: Reasoning</p>
                  <p className="text-sm text-zinc-500">gemini-3-pro-preview (Complex tasks)</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
                <div>
                  <p className="font-medium text-zinc-200">Tier 3: Specialized Sub-Agents</p>
                  <p className="text-sm text-zinc-500">gemini-3-pro-high (Antigravity / Coding)</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Visual Flow Diagram (Simple) */}
        <section className="p-12 rounded-3xl bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 text-center">
          <h2 className="text-2xl font-semibold mb-12">System Architecture</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <div className="px-6 py-3 rounded-xl bg-zinc-800 border border-zinc-700 font-mono text-sm">User Trigger</div>
            <div className="text-zinc-600">→</div>
            <div className="px-6 py-3 rounded-xl bg-purple-900/30 border border-purple-500/50 font-mono text-sm text-purple-300">OpenClaw Gateway</div>
            <div className="text-zinc-600">→</div>
            <div className="px-6 py-3 rounded-xl bg-zinc-800 border border-zinc-700 font-mono text-sm">Model Router</div>
            <div className="text-zinc-600">→</div>
            <div className="px-6 py-3 rounded-xl bg-blue-900/30 border border-blue-500/50 font-mono text-sm text-blue-300">GCP e2-standard</div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
