import React from 'react';
import { LineChart, Line, ResponsiveContainer, BarChart, Bar, Cell, Tooltip } from 'recharts';
import { Eye, ShieldCheck, TrendingUp, Users } from 'lucide-react';

const Features: React.FC = () => {
  
  const lineData = [
    { name: 'Mon', value: 10 }, 
    { name: 'Tue', value: 15 }, 
    { name: 'Wed', value: 12 }, 
    { name: 'Thu', value: 25 }, 
    { name: 'Fri', value: 40 }, 
    { name: 'Sat', value: 35 }, 
    { name: 'Sun', value: 50 }
  ];

  const barData = [
    { name: 'Prod A', value: 30 },
    { name: 'Prod B', value: 45 },
    { name: 'Prod C', value: 25 },
    { name: 'Prod D', value: 60 },
    { name: 'Prod E', value: 35 },
  ];

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-slate-900/90 backdrop-blur-md border border-white/10 p-3 rounded-xl shadow-2xl text-xs">
          <p className="text-gray-400 mb-1 font-medium">{label}</p>
          <p className="text-white font-bold text-sm">
            {payload[0].value} <span className="text-purple-400 text-xs font-normal">Views</span>
          </p>
        </div>
      );
    }
    return null;
  };

  const CustomBarTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-slate-900/90 backdrop-blur-md border border-white/10 p-3 rounded-xl shadow-2xl text-xs">
          <p className="text-gray-400 mb-1 font-medium">{label}</p>
          <p className="text-white font-bold text-sm">
            {payload[0].value} <span className="text-indigo-400 text-xs font-normal">Sales</span>
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <section className="max-w-7xl mx-auto px-6">
       <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-white/10 text-xs text-gray-300 mb-4">
             <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span> The Benefits of Having a Website
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
             <span className="text-purple-500">Unleash</span> Your Business Potential
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm">
             It's the first point of contact for potential customers, providing them with valuable information and creating a lasting impression
          </p>
       </div>

       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Feature 1: Increase Visibility (Line Chart) */}
          <div className="glass-card rounded-3xl p-8 relative overflow-hidden group hover:border-purple-500/30 transition-colors">
             <div className="flex justify-between items-start mb-6 relative z-10">
                <div>
                    <h3 className="text-2xl font-semibold mb-2">Increase Visibility</h3>
                    <p className="text-gray-400 text-sm max-w-xs">
                        Having a website makes it easier for people to find you online.
                    </p>
                </div>
                <div className="bg-slate-800 px-3 py-1 rounded-full text-xs font-mono border border-white/10">2000 Views</div>
             </div>
             
             <div className="h-48 -mx-4 -mb-4">
                <ResponsiveContainer width="100%" height="100%">
                   <LineChart data={lineData} margin={{ top: 10, right: 10, left: 10, bottom: 0 }}>
                      <defs>
                        <linearGradient id="colorValue" x1="0" y1="0" x2="1" y2="0">
                          <stop offset="0%" stopColor="#a855f7" />
                          <stop offset="100%" stopColor="#ec4899" />
                        </linearGradient>
                      </defs>
                      <Tooltip content={<CustomTooltip />} cursor={{ stroke: 'rgba(255,255,255,0.1)', strokeWidth: 1, strokeDasharray: '4 4' }} />
                      <Line 
                        type="monotone" 
                        dataKey="value" 
                        stroke="url(#colorValue)" 
                        strokeWidth={4} 
                        dot={{ r: 4, fill: "#fff", strokeWidth: 0 }}
                        activeDot={{ r: 6, stroke: "rgba(168,85,247,0.5)", strokeWidth: 4 }}
                        animationDuration={1500}
                      />
                   </LineChart>
                </ResponsiveContainer>
             </div>
             
             {/* Floating Badge */}
             <div className="absolute bottom-10 left-10 bg-slate-900/80 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/10 text-xs shadow-lg">
                <span className="w-2 h-2 inline-block rounded-full bg-purple-500 mr-2"></span>
                20 Views
             </div>
          </div>

          {/* Feature 2: Credibility (Icon) */}
          <div className="glass-card rounded-3xl p-8 relative overflow-hidden flex flex-col justify-between group hover:border-purple-500/30 transition-colors">
             <div className="relative z-10">
                <h3 className="text-2xl font-semibold mb-2">Credibility and professionalism</h3>
                <p className="text-gray-400 text-sm max-w-sm">
                    A well-designed website can make you look more professional and credible. It can provide potential customers with a positive impression.
                </p>
             </div>
             <div className="absolute right-0 bottom-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                <ShieldCheck className="w-64 h-64 -mb-10 -mr-10 text-purple-500" />
             </div>
             <div className="self-end mt-10">
                <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-purple-500/20 to-pink-500/20 flex items-center justify-center border border-purple-500/30 group-hover:scale-110 transition-transform duration-500">
                     <ShieldCheck className="w-10 h-10 text-purple-400" />
                </div>
             </div>
          </div>

          {/* Feature 3: Marketing (Bar Chart) */}
          <div className="glass-card rounded-3xl p-8 relative overflow-hidden group hover:border-purple-500/30 transition-colors">
             <div className="mb-6 relative z-10">
                <h3 className="text-2xl font-semibold mb-2">Marketing and sales</h3>
                <p className="text-gray-400 text-sm max-w-sm">
                    A website can be an effective tool for marketing and sales. Showcase products and sell online.
                </p>
             </div>
             
             <div className="h-40 flex items-end justify-between gap-4 relative z-10 px-4">
                 <div className="w-full h-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={barData}>
                            <Tooltip content={<CustomBarTooltip />} cursor={{ fill: 'rgba(255,255,255,0.03)', radius: 4 }} />
                            <Bar dataKey="value" radius={[4, 4, 0, 0]} animationDuration={1500}>
                                {barData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={index % 2 === 0 ? '#6366f1' : '#a855f7'} />
                                ))}
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                 </div>
             </div>

             {/* Stats Row */}
             <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-white/5">
                <div>
                    <div className="text-xs text-gray-500">Total Selling</div>
                    <div className="text-sm font-bold flex items-center gap-1">
                        $ 88.3900 <span className="text-[10px] text-green-400 bg-green-400/10 px-1 rounded">12% ↑</span>
                    </div>
                </div>
                <div>
                    <div className="text-xs text-gray-500">Total Product</div>
                    <div className="text-sm font-bold flex items-center gap-1">
                        128.000 <span className="text-[10px] text-green-400 bg-green-400/10 px-1 rounded">12% ↑</span>
                    </div>
                </div>
                <div>
                    <div className="text-xs text-gray-500">Total Profit</div>
                    <div className="text-sm font-bold flex items-center gap-1">
                        $ 124.294 <span className="text-[10px] text-green-400 bg-green-400/10 px-1 rounded">31% ↑</span>
                    </div>
                </div>
             </div>
          </div>

          {/* Feature 4: Engagement (Bubbles) */}
          <div className="glass-card rounded-3xl p-8 relative overflow-hidden flex flex-col justify-between group hover:border-purple-500/30 transition-colors">
             <div className="relative z-10">
                <h3 className="text-2xl font-semibold mb-2">Customer engagement</h3>
                <p className="text-gray-400 text-sm max-w-sm">
                    A website can help you engage with your customers and build stronger relationships.
                </p>
             </div>

             <div className="relative h-48 mt-4 flex items-center justify-center">
                 {/* Bubble 1 */}
                 <div className="absolute left-10 top-4 w-20 h-20 rounded-full bg-slate-900 border border-white/10 flex flex-col items-center justify-center shadow-xl animate-[float-organic_6s_ease-in-out_infinite] group-hover:bg-slate-800 transition-colors">
                     <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 mb-1">$</div>
                     <span className="text-xs font-bold">15%</span>
                     <span className="text-[8px] text-gray-500 leading-none">Increase</span>
                 </div>
                 {/* Bubble 2 */}
                 <div className="absolute right-10 top-0 w-24 h-24 rounded-full bg-slate-900 border border-white/10 flex flex-col items-center justify-center shadow-xl animate-[float-organic-slow_7s_ease-in-out_infinite] group-hover:bg-slate-800 transition-colors">
                     <div className="w-8 h-8 rounded-full bg-pink-500/20 flex items-center justify-center text-pink-400 mb-1">
                        <Users className="w-4 h-4" />
                     </div>
                     <span className="text-xs font-bold text-pink-400">15%</span>
                     <span className="text-[8px] text-gray-500 leading-none">Relationship</span>
                 </div>
                 {/* Bubble 3 */}
                 <div className="absolute bottom-0 w-20 h-20 rounded-full bg-slate-900 border border-white/10 flex flex-col items-center justify-center shadow-xl animate-[float-organic_5s_ease-in-out_infinite] group-hover:bg-slate-800 transition-colors">
                     <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 mb-1">
                        <TrendingUp className="w-4 h-4" />
                     </div>
                     <span className="text-xs font-bold text-blue-400">15%</span>
                     <span className="text-[8px] text-gray-500 leading-none">Retention</span>
                 </div>
             </div>
          </div>

       </div>
    </section>
  );
};

export default Features;