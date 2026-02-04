import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Brands from './components/Brands';
import Features from './components/Features';
import Services from './components/Services';
import Stats from './components/Stats';
import WhyUs from './components/WhyUs';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-purple-500 selection:text-white overflow-x-hidden">
      {/* Ambient Background Glows */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-purple-900/20 rounded-full blur-[120px] pointer-events-none -z-10" />
      
      <Navbar />
      
      <main className="space-y-24 pb-24">
        <Hero />
        <Brands />
        <Features />
        <Services />
        <Stats />
        <WhyUs />
        <Testimonials />
        <CTA />
      </main>

      <Footer />
    </div>
  );
};

export default App;