import React from 'react';
import { CircuitBoard } from 'lucide-react';
import Tooltip from './Tooltip';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/5 bg-slate-950 pt-16 pb-8">
       <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="space-y-4">
                <div className="flex items-center gap-2">
                    <div className="bg-gradient-to-tr from-purple-500 to-pink-500 p-1.5 rounded-lg">
                        <CircuitBoard className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-lg font-bold tracking-tight">Technologia</span>
                </div>
                <p className="text-gray-500 text-sm">
                    We bring your business to online. Best solutions for your growth.
                </p>
            </div>
            
            <div>
                <h5 className="font-bold mb-4">Services</h5>
                <ul className="space-y-2 text-sm text-gray-400">
                    <li><Tooltip content="Custom web solutions" position="right"><a href="#" className="hover:text-purple-400">Web Development</a></Tooltip></li>
                    <li><Tooltip content="Mobile & UI Design" position="right"><a href="#" className="hover:text-purple-400">App Design</a></Tooltip></li>
                    <li><Tooltip content="Secure AWS Hosting" position="right"><a href="#" className="hover:text-purple-400">Cloud Hosting</a></Tooltip></li>
                </ul>
            </div>

            <div>
                <h5 className="font-bold mb-4">Company</h5>
                <ul className="space-y-2 text-sm text-gray-400">
                    <li><Tooltip content="Our story" position="right"><a href="#" className="hover:text-purple-400">About Us</a></Tooltip></li>
                    <li><Tooltip content="Join the team" position="right"><a href="#" className="hover:text-purple-400">Careers</a></Tooltip></li>
                    <li><Tooltip content="Get in touch" position="right"><a href="#" className="hover:text-purple-400">Contact</a></Tooltip></li>
                </ul>
            </div>

            <div>
                <h5 className="font-bold mb-4">Follow Us</h5>
                <div className="flex gap-4">
                    <Tooltip content="Follow on X">
                        <a href="#" className="w-8 h-8 rounded bg-white/5 flex items-center justify-center hover:bg-purple-600 transition-colors">𝕏</a>
                    </Tooltip>
                    <Tooltip content="Connect on LinkedIn">
                        <a href="#" className="w-8 h-8 rounded bg-white/5 flex items-center justify-center hover:bg-purple-600 transition-colors">in</a>
                    </Tooltip>
                    <Tooltip content="Like on Facebook">
                        <a href="#" className="w-8 h-8 rounded bg-white/5 flex items-center justify-center hover:bg-purple-600 transition-colors">fb</a>
                    </Tooltip>
                </div>
            </div>
       </div>
       
       <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/5 text-center text-gray-600 text-sm">
           © 2024 Technologia Inc. All rights reserved.
       </div>
    </footer>
  );
};

export default Footer;