import React from 'react';
import Tooltip from './Tooltip';

const Brands: React.FC = () => {
  const brands = [
    { name: 'Microsoft', icon: '⊞', desc: 'Partner since 2019' },
    { name: 'Logitech', icon: '◉', desc: 'Hardware Supplier' },
    { name: 'Lenovo', icon: 'L', desc: 'Enterprise Solutions' },
    { name: 'YAMAHA', icon: 'Y', desc: 'Audio Tech Partner' },
    { name: 'ASUS', icon: 'A', desc: 'Global Tech Giant' },
  ];

  return (
    <section className="py-10 border-y border-white/5 bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-gray-500 text-sm mb-8">Trusted by the world's most innovative companies</p>
        <div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {brands.map((brand) => (
                <Tooltip key={brand.name} content={brand.desc}>
                    <div className="flex items-center gap-2 text-xl font-bold text-white cursor-default hover:text-purple-400 transition-colors">
                        <span className="text-2xl">{brand.icon}</span> {brand.name}
                    </div>
                </Tooltip>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;