import React, { useState } from 'react';
import Link from 'next/link';

const HologramNavbar = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const menuItems = ['Holo', 'Vision', 'Future', 'Tech'];

  return (
    <nav className="bg-slate-950 p-4 rounded-lg mx-4 mt-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-cyan-400 font-bold text-xl relative">
          <span className="relative">Holo</span>
          <div className="absolute inset-0 animate-flicker bg-cyan-400/20 blur-sm" />
        </div>
        <div className="flex gap-6">
          {menuItems.map((item) => (
            <Link
              href="#"
              key={item}
              onMouseEnter={() => setHoveredItem(item)}
              onMouseLeave={() => setHoveredItem(null)}
              className="group relative px-4 py-2"
            >
              <span className="relative z-10 text-cyan-400">{item}</span>
              <div className="absolute inset-0 bg-cyan-400/10 scale-y-0 group-hover:scale-y-100 
                transition-transform duration-300 origin-bottom" />
              <div className="absolute inset-0 bg-cyan-400/5 group-hover:animate-hologram" />
              <div className="absolute -inset-1 bg-[linear-gradient(45deg,transparent_25%,cyan_50%,transparent_75%)] 
                opacity-0 group-hover:opacity-20 blur" />
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default HologramNavbar; 