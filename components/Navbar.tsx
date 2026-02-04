import React from 'react';
import { CircuitBoard } from 'lucide-react';
import Tooltip from './Tooltip';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-slate-950/80 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-gradient-to-tr from-purple-500 to-pink-500 p-1.5 rounded-lg">
            <CircuitBoard className="w-6 h-6 text-white" aria-hidden="true" />
          </div>
          <span className="text-xl font-bold tracking-tight">Technologia</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <Tooltip content="Explore our services">
            <a href="#" className="hover:text-purple-400 hover:scale-105 transition-all duration-300" aria-label="Explore our services">Our Service</a>
          </Tooltip>
          <Tooltip content="Why we are the best">
            <a href="#" className="hover:text-purple-400 hover:scale-105 transition-all duration-300" aria-label="Why choose us">Why Choose Us</a>
          </Tooltip>
          <Tooltip content="See who we work with">
            <a href="#" className="hover:text-purple-400 hover:scale-105 transition-all duration-300" aria-label="View our clients">Our Clients</a>
          </Tooltip>
          <Tooltip content="Read customer reviews">
            <a href="#" className="hover:text-purple-400 hover:scale-105 transition-all duration-300" aria-label="Read testimonials">Testimonials</a>
          </Tooltip>
        </div>

        <Tooltip content="Launch your next big idea" position="bottom">
          <button 
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all shadow-lg shadow-purple-500/20 hover:scale-105 hover:shadow-purple-500/40"
            aria-label="Start a new project"
          >
            Start a Project?
          </button>
        </Tooltip>
      </div>
    </nav>
  );
};

export default Navbar;