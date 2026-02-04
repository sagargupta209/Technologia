import React, { useState } from 'react';
import { Layout, Lock, Server, Settings } from 'lucide-react';
import Tooltip from './Tooltip';

const Services: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Web Development');

  const tabs = [
    'Web Development', 'Domain & Hosting', 'Security & SSL Certificates', 'Wordpress Services', 'System Managements', 'SEO'
  ];

  return (
    <section className="max-w-7xl mx-auto px-6">
       <div className="text-center mb-12">
           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-white/10 text-xs text-gray-300 mb-4">
               <span className="w-4 h-4 rounded-full bg-yellow-500 flex items-center justify-center text-[10px] text-black font-bold">★</span> Experience Excellence
           </div>
           <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Transforming Ideas into <br/> <span className="text-purple-500">Powerful Solutions</span>
           </h2>
           <p className="text-gray-400 text-sm max-w-xl mx-auto">
              With our expertise and dedication, we are committed to delivering exceptional services that meet your unique needs.
           </p>
       </div>

       {/* Tabs */}
       <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab) => (
              <Tooltip key={tab} content={`View ${tab} solutions`}>
                  <button 
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-2 rounded-full text-xs md:text-sm transition-all hover:scale-105 border ${
                        activeTab === tab 
                        ? 'bg-purple-600 border-purple-500 text-white shadow-lg shadow-purple-500/25' 
                        : 'bg-transparent border-white/10 text-gray-400 hover:border-white/30'
                    }`}
                  >
                      {tab}
                  </button>
              </Tooltip>
          ))}
       </div>

       {/* Browser Content Area */}
       <div className="glass-card rounded-2xl border border-white/10 p-2 max-w-5xl mx-auto shadow-2xl bg-black/40">
           {/* Browser Toolbar */}
           <div className="bg-[#1e1e1e] rounded-t-xl p-3 flex items-center gap-4 border-b border-white/5">
                <div className="flex gap-1.5">
                    <Tooltip content="Close"><div className="w-3 h-3 rounded-full bg-red-500/80 cursor-pointer"></div></Tooltip>
                    <Tooltip content="Minimize"><div className="w-3 h-3 rounded-full bg-yellow-500/80 cursor-pointer"></div></Tooltip>
                    <Tooltip content="Expand"><div className="w-3 h-3 rounded-full bg-green-500/80 cursor-pointer"></div></Tooltip>
                </div>
                <div className="flex-1 bg-black/50 rounded-md py-1 px-4 text-xs text-gray-500 font-mono text-center flex items-center justify-center gap-2">
                    <Lock className="w-3 h-3" /> technologia.com/services/{activeTab.toLowerCase().replace(/ /g, '-')}
                </div>
           </div>

           {/* Content Canvas */}
           <div className="bg-white rounded-b-xl h-[400px] md:h-[500px] relative overflow-hidden text-slate-800">
               {/* This simulates a webpage inside the browser frame */}
               <div className="absolute inset-0 bg-slate-50 overflow-y-auto custom-scrollbar">
                   {/* Mock Navbar */}
                   <div className="h-12 border-b flex items-center px-8 justify-between bg-white">
                        <div className="font-bold text-lg">Design your own</div>
                        <div className="flex gap-4 text-xs text-gray-500">
                            <span className="cursor-pointer hover:text-blue-500">Features</span>
                            <span className="cursor-pointer hover:text-blue-500">Pricing</span>
                            <span className="cursor-pointer hover:text-blue-500">About</span>
                        </div>
                   </div>
                   
                   <div className="flex h-full">
                       {/* Sidebar */}
                       <div className="w-64 border-r bg-white p-4 hidden md:block">
                           <div className="text-xs font-bold uppercase text-gray-400 mb-4">Components</div>
                           <div className="space-y-2">
                               <Tooltip content="Add a Header section" position="right">
                                   <div className="flex items-center gap-2 p-2 hover:bg-slate-100 rounded cursor-pointer text-sm">
                                       <Layout className="w-4 h-4" /> Header
                                   </div>
                               </Tooltip>
                               <Tooltip content="Configure Settings" position="right">
                                   <div className="flex items-center gap-2 p-2 hover:bg-slate-100 rounded cursor-pointer text-sm">
                                       <Settings className="w-4 h-4" /> Settings
                                   </div>
                               </Tooltip>
                               <Tooltip content="Manage Database" position="right">
                                   <div className="flex items-center gap-2 p-2 hover:bg-slate-100 rounded cursor-pointer text-sm">
                                       <Server className="w-4 h-4" /> Database
                                   </div>
                               </Tooltip>
                           </div>
                       </div>
                       
                       {/* Main Content */}
                       <div className="flex-1 p-10 flex flex-col items-center justify-center text-center">
                           <h3 className="text-3xl font-bold mb-4">{activeTab}</h3>
                           <p className="text-gray-500 max-w-md mb-8">
                               Professional {activeTab} solutions customized for your specific business requirements. Drag and drop elements to build.
                           </p>
                           <div className="border-2 border-dashed border-slate-300 rounded-xl p-10 w-full max-w-lg bg-slate-50 flex flex-col items-center justify-center gap-4">
                               <Layout className="w-10 h-10 text-slate-300" />
                               <span className="text-sm text-slate-400">Welcome to your blank canvas.</span>
                               <Tooltip content="Click to initialize builder">
                                   <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm transition-all shadow-lg shadow-blue-500/20 hover:scale-105 hover:shadow-blue-500/40">Start Building</button>
                               </Tooltip>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
       </div>
    </section>
  );
};

export default Services;