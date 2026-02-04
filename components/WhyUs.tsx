import React from 'react';
import Tooltip from './Tooltip';

const WhyUs: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Main Box */}
            <div className="bg-gradient-to-br from-purple-900/20 to-slate-900 rounded-3xl p-8 border border-white/10 flex flex-col justify-center">
                <div className="inline-flex self-start items-center gap-2 px-3 py-1 rounded-full bg-slate-950 border border-white/10 text-xs text-gray-300 mb-6">
                   <div className="w-4 h-4 rounded-full bg-gradient-to-r from-red-500 to-yellow-500"></div> We are the best choice
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-4">
                    Why We <span className="text-purple-500">Stand Out</span> as a Leading Development Agency
                </h3>
                <p className="text-gray-400 text-sm mb-8 max-w-md">
                    We pride ourselves on being the go-to partner for businesses seeking top-notch development solutions.
                </p>
                <Tooltip content="Let's build something great">
                    <button className="self-start bg-purple-600 hover:bg-purple-500 text-white px-6 py-2.5 rounded-lg text-sm transition-all shadow-lg shadow-purple-500/20 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/40">
                        Start Your Project
                    </button>
                </Tooltip>
            </div>

            <div className="grid grid-cols-1 gap-6">
                {/* Feature Box 1 */}
                <div className="glass-card p-6 rounded-2xl border border-white/10 hover:bg-white/5 transition-colors group cursor-default">
                    <div className="text-xs border border-white/20 rounded-full px-2 py-1 inline-block mb-3 text-gray-400">Our Products is</div>
                    <h4 className="text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors">Quality and Attention to Detail</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">
                        Highlight the agency's expertise and experience in the field of development. Mention the number of years the agency has been operating.
                    </p>
                </div>

                 {/* Feature Box 2 & 3 */}
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="glass-card p-6 rounded-2xl border border-white/10 hover:bg-white/5 transition-colors group cursor-default">
                        <div className="text-xs border border-white/20 rounded-full px-2 py-1 inline-block mb-3 text-gray-400">Our Talents is</div>
                        <h4 className="text-lg font-bold mb-2 group-hover:text-purple-400 transition-colors">Expertise and Experienced</h4>
                        <p className="text-xs text-gray-400 leading-relaxed">
                            Highlight the agency's expertise and experience in the field of development. Mention the number of years.
                        </p>
                    </div>
                    <div className="glass-card p-6 rounded-2xl border border-white/10 hover:bg-white/5 transition-colors group cursor-default">
                        <div className="text-xs border border-white/20 rounded-full px-2 py-1 inline-block mb-3 text-gray-400">Our Spirit is</div>
                        <h4 className="text-lg font-bold mb-2 group-hover:text-purple-400 transition-colors">Communications and Support</h4>
                        <p className="text-xs text-gray-400 leading-relaxed">
                            Emphasize the agency's commitment to collaboration and transparent communication.
                        </p>
                    </div>
                 </div>
            </div>
        </div>
    </section>
  );
};

export default WhyUs;