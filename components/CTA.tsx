import React from 'react';
import Tooltip from './Tooltip';

const CTA: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 pb-12">
        <div className="rounded-[3rem] bg-gradient-to-r from-purple-600 via-pink-600 to-purple-800 p-12 md:p-20 text-center relative overflow-hidden">
            {/* Decorative circles */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-yellow-500/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 relative z-10">
                Start delivering better customer outcomes today.
            </h2>
            
            <Tooltip content="Get a free consultation">
                <button className="relative z-10 bg-[#fbbf24] hover:bg-yellow-400 text-black font-bold px-8 py-3 rounded-lg transition-all shadow-lg shadow-yellow-500/20 hover:scale-105 hover:shadow-xl hover:shadow-yellow-500/40">
                    Start Your Project
                </button>
            </Tooltip>
        </div>
    </section>
  );
};

export default CTA;