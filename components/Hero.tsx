import React from 'react';
import { Code2, Bug, Zap, LayoutTemplate, Terminal } from 'lucide-react';
import Tooltip from './Tooltip';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 px-6 max-w-7xl mx-auto flex flex-col items-center text-center">
      {/* Floating Icons Decoration */}
      <div className="absolute top-32 left-10 md:left-20 animate-float-organic">
        <Tooltip content="We fix bugs instantly">
            <div className="p-3 bg-slate-800/50 backdrop-blur-md border border-white/10 rounded-2xl hover:rotate-[360deg] transition-all duration-700 cursor-pointer hover:bg-slate-700/50">
               <Bug className="w-6 h-6 text-pink-500" />
            </div>
        </Tooltip>
      </div>
      <div className="absolute top-40 right-10 md:right-20 animate-float-organic-slow" style={{ animationDelay: '1.5s' }}>
        <Tooltip content="Clean & Efficient Code">
            <div className="p-3 bg-slate-800/50 backdrop-blur-md border border-white/10 rounded-2xl hover:rotate-12 transition-all duration-500 cursor-pointer hover:bg-slate-700/50">
               <Code2 className="w-6 h-6 text-purple-500" />
            </div>
        </Tooltip>
      </div>

      <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight max-w-4xl mb-6 opacity-0 animate-fade-in-smooth">
        We bring your <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 animate-pulse">business</span> <br />
        to online
      </h1>
      
      <p className="text-gray-400 max-w-xl mb-10 leading-relaxed opacity-0 animate-fade-in-smooth delay-100">
        Partner with us to leverage the latest technologies and stay ahead in the ever-evolving digital landscape.
      </p>

      <div className="flex items-center gap-4 mb-20 opacity-0 animate-fade-in-smooth delay-200">
         <Tooltip content="Meet our developers">
            <button className="bg-[#fbbf24] hover:bg-yellow-400 text-black font-semibold px-6 py-3 rounded-full text-sm transition-all hover:scale-105 active:scale-95 shadow-lg shadow-yellow-500/20 hover:shadow-yellow-500/40">
                Technologia dev
            </button>
         </Tooltip>
         <Tooltip content="Begin your journey">
            <button className="bg-purple-600 hover:bg-purple-500 text-white font-semibold px-6 py-3 rounded-md text-sm transition-all shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/50 hover:scale-105">
                Start Your Project
            </button>
         </Tooltip>
      </div>

      {/* Main Visual - Simulated IDE/Dashboard Composition */}
      <div className="relative w-full max-w-5xl aspect-[16/9] md:aspect-[21/9] lg:aspect-[16/7] opacity-0 animate-fade-in-smooth delay-300">
        
        {/* Central Dashboard Mockup */}
        <div className="absolute inset-0 bg-[#0f172a] rounded-t-3xl border border-white/10 shadow-2xl overflow-hidden flex flex-col mx-auto w-[90%] z-10 hover:shadow-purple-500/10 transition-shadow duration-500">
          {/* Mock Header */}
          <div className="h-8 bg-slate-900 border-b border-white/5 flex items-center px-4 gap-2">
            <Tooltip content="Close">
                <div className="w-3 h-3 rounded-full bg-red-500/50 cursor-pointer hover:bg-red-500"></div>
            </Tooltip>
            <Tooltip content="Minimize">
                <div className="w-3 h-3 rounded-full bg-yellow-500/50 cursor-pointer hover:bg-yellow-500"></div>
            </Tooltip>
            <Tooltip content="Maximize">
                <div className="w-3 h-3 rounded-full bg-green-500/50 cursor-pointer hover:bg-green-500"></div>
            </Tooltip>
          </div>
          {/* Mock Body */}
          <div className="flex-1 p-6 grid grid-cols-12 gap-6 relative">
             <div className="col-span-4 space-y-4">
                 <div className="h-32 bg-slate-800/50 rounded-xl border border-white/5 p-4 hover:border-white/20 transition-colors">
                    <div className="text-xs text-gray-500 mb-2">Statistics</div>
                    <div className="flex items-end gap-2 h-16 mt-4">
                        <div className="w-2 bg-purple-500 h-10 rounded-t animate-[pulse_2s_ease-in-out_infinite]"></div>
                        <div className="w-2 bg-pink-500 h-14 rounded-t animate-[pulse_2s_ease-in-out_0.2s_infinite]"></div>
                        <div className="w-2 bg-purple-500 h-8 rounded-t animate-[pulse_2s_ease-in-out_0.4s_infinite]"></div>
                        <div className="w-2 bg-slate-600 h-12 rounded-t"></div>
                        <div className="w-2 bg-purple-500 h-16 rounded-t animate-[pulse_2s_ease-in-out_0.6s_infinite]"></div>
                    </div>
                 </div>
                 <div className="h-24 bg-slate-800/50 rounded-xl border border-white/5 p-4 space-y-2 hover:border-white/20 transition-colors">
                    <div className="text-xs text-gray-500">Typography</div>
                    <div className="h-2 w-full bg-slate-700 rounded"></div>
                    <div className="h-2 w-2/3 bg-slate-700 rounded"></div>
                 </div>
             </div>
             <div className="col-span-8 bg-gradient-to-br from-slate-900 to-black rounded-xl border border-white/5 p-8 flex flex-col justify-center items-center text-center group hover:border-purple-500/30 transition-colors cursor-default">
                <div className="w-16 h-16 mb-4 rounded-full bg-gradient-to-tr from-purple-500 to-yellow-500 flex items-center justify-center blur-sm opacity-50 absolute group-hover:opacity-70 transition-opacity duration-500"></div>
                <div className="relative z-10">
                    <h3 className="text-xl font-bold text-yellow-500 mb-2 group-hover:scale-105 transition-transform duration-300">PROFESSIONAL THROUGH</h3>
                    <p className="text-sm text-gray-400">COACHING AND LEADERSHIP DEVELOPMENT</p>
                </div>
             </div>
          </div>
        </div>

        {/* Floating Code Snippet Card - Right */}
        <div className="hidden md:block absolute -right-4 top-20 w-80 bg-[#1e1e1e] rounded-xl border border-white/10 shadow-2xl p-4 z-20 font-mono text-xs opacity-0 animate-fade-in-smooth delay-300 hover:rotate-0 hover:scale-105 transition-all duration-500 hover:shadow-xl hover:shadow-purple-500/20 cursor-pointer rotate-3" style={{ animationFillMode: 'forwards' }}>
           <Tooltip content="We write clean Python code" position="left">
               <div>
                   <div className="flex items-center gap-2 mb-3 border-b border-white/5 pb-2">
                     <Terminal className="w-3 h-3 text-green-400" />
                     <span className="text-gray-500">script.py</span>
                   </div>
                   <div className="text-green-400">input_name = <span className="text-yellow-300">input</span>("Enter Name")</div>
                   <div className="text-blue-400">def <span className="text-yellow-300">process</span>(name):</div>
                   <div className="pl-4 text-gray-300">print(<span className="text-orange-300">f"Hello {`{name}`}!"</span>)</div>
                   <div className="text-purple-400 mt-2">while <span className="text-blue-300">True</span>:</div>
                   <div className="pl-4 text-gray-300">process(input_name)</div>
                   <div className="pl-4 text-pink-400">break</div>
               </div>
           </Tooltip>
        </div>

        {/* Floating UI Config Card - Left */}
        <div className="hidden md:block absolute -left-4 top-32 w-64 bg-[#1e1e1e] rounded-xl border border-white/10 shadow-2xl p-4 z-20 font-sans text-xs opacity-0 animate-fade-in-smooth delay-500 hover:rotate-0 hover:scale-105 transition-all duration-500 hover:shadow-xl hover:shadow-purple-500/20 cursor-pointer -rotate-3" style={{ animationFillMode: 'forwards' }}>
             <Tooltip content="Pixel-perfect design controls" position="right">
                 <div>
                     <div className="flex justify-between items-center mb-4">
                        <span className="text-gray-400">Spacing</span>
                        <span className="text-gray-600">v</span>
                     </div>
                     <div className="grid grid-cols-3 gap-2 mb-4">
                         <div className="aspect-square bg-slate-800 rounded border border-white/5 hover:bg-slate-700 transition-colors"></div>
                         <div className="aspect-square bg-purple-900/30 rounded border border-purple-500/50 flex items-center justify-center text-purple-400 shadow-[0_0_10px_rgba(168,85,247,0.3)]">24</div>
                         <div className="aspect-square bg-slate-800 rounded border border-white/5 hover:bg-slate-700 transition-colors"></div>
                     </div>
                     <div className="space-y-2">
                         <div className="flex justify-between text-gray-500">
                             <span>Font Family</span>
                             <span className="text-white">Inter</span>
                         </div>
                         <div className="flex justify-between text-gray-500">
                             <span>Size</span>
                             <span className="text-white">16px</span>
                         </div>
                     </div>
                 </div>
             </Tooltip>
        </div>
      </div>
    </section>
  );
};

export default Hero;