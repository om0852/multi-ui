import React, { useState } from 'react';
import Link from 'next/link';

const LiquidMetalNavbar = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const menuItems = ['Mercury', 'Chrome', 'Silver', 'Steel'];

  return (
    <nav className="bg-gradient-to-r from-zinc-900 to-zinc-800 p-4 rounded-lg mx-4 mt-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-zinc-300 font-bold text-xl">Metal</div>
        <div className="flex gap-6">
          {menuItems.map((item) => (
            <Link
              href="#"
              key={item}
              onMouseEnter={() => setHoveredItem(item)}
              onMouseLeave={() => setHoveredItem(null)}
              className="group relative px-4 py-2 text-zinc-300"
            >
              <span className="relative z-10">{item}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-zinc-600 via-zinc-400 to-zinc-600 
                opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg blur-[1px]" />
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-zinc-500/20 to-black/20 
                opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
              <div className="absolute -inset-[1px] bg-gradient-to-r from-zinc-400 via-zinc-300 to-zinc-400 
                opacity-0 group-hover:opacity-20 rounded-lg blur-sm group-hover:animate-pulse" />
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default LiquidMetalNavbar; 