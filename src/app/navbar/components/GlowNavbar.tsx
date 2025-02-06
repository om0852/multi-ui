import React from 'react';
import Link from 'next/link';

const GlowNavbar = () => {
  return (
    <nav className="bg-slate-900 p-4 rounded-lg mx-4 mt-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-emerald-500 font-bold text-2xl hover:text-emerald-400 
        transition-colors duration-300">
          <span className="hover:animate-pulse">Glow</span>
        </div>
        
        <div className="flex gap-8">
          {['Home', 'Features', 'Pricing', 'Contact'].map((item) => (
            <Link
              href="#"
              key={item}
              className="relative text-gray-400 hover:text-emerald-400 transition-all duration-300
              hover:scale-110 group"
            >
              {item}
              <div className="absolute -inset-2 bg-emerald-500/20 rounded-lg opacity-0 
              group-hover:opacity-100 blur transition-all duration-300" />
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default GlowNavbar; 