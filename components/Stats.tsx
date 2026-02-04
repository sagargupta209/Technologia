import React from 'react';
import { Globe } from 'lucide-react';
import Tooltip from './Tooltip';

const Stats: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-6">
       <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          
          {/* Text Column */}
          <div className="lg:col-span-1 p-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-white/10 text-xs text-gray-300 mb-4">
                 <Globe className="w-3 h-3 text-blue-400" /> Working History
              </div>
              <h3 className="text-3xl font-bold mb-4">
                  A little about <span className="text-pink-500">our Story</span>
              </h3>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  With our expertise and dedication, we are committed to delivering exceptional services that meet your unique needs.
              </p>
              <Tooltip content="Contact us to start">
                  <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-2.5 rounded-lg text-sm font-medium hover:opacity-90 transition-all shadow-lg shadow-purple-500/20 hover:scale-105 hover:shadow-purple-500/40">
                      Start Your Project
                  </button>
              </Tooltip>
          </div>

          {/* Stats Grid */}
          <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="glass-card rounded-2xl p-6 flex flex-col items-center justify-center text-center border border-white/5 bg-slate-900/40 hover:bg-slate-900/60 transition-colors">
                  <div className="text-3xl font-bold text-purple-400 mb-2">200+</div>
                  <div className="text-xs text-gray-400">Products is Build</div>
              </div>
              <div className="glass-card rounded-2xl p-6 flex flex-col items-center justify-center text-center border border-white/5 bg-slate-900/40 hover:bg-slate-900/60 transition-colors">
                  <div className="text-3xl font-bold text-pink-400 mb-2">14+</div>
                  <div className="text-xs text-gray-400">Happy Clients</div>
              </div>
              <div className="glass-card rounded-2xl p-6 flex flex-col items-center justify-center text-center border border-white/5 bg-slate-900/40 hover:bg-slate-900/60 transition-colors">
                  <div className="text-3xl font-bold text-purple-400 mb-2">10+</div>
                  <div className="text-xs text-gray-400">Creative People</div>
              </div>
              <div className="glass-card rounded-2xl p-6 flex flex-col items-center justify-center text-center border border-white/5 bg-slate-900/40 hover:bg-slate-900/60 transition-colors">
                  <div className="text-3xl font-bold text-pink-400 mb-2">9+</div>
                  <div className="text-xs text-gray-400">Years of Experience</div>
              </div>
          </div>
       </div>
    </section>
  );
};

export default Stats;