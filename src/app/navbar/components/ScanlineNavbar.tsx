import React, { useState } from 'react';
import Link from 'next/link';

const ScanlineNavbar = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const menuItems = ['Terminal', 'Network', 'System', 'Debug'];

  return (
    <nav className="bg-gray-950 p-4 rounded-lg mx-4 mt-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(transparent_0%,#0f0_2%,transparent_5%)] animate-scan opacity-30" />
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-green-500 font-mono text-xl">Scan</div>
        <div className="flex gap-6">
          {menuItems.map((item) => (
            <Link
              href="#"
              key={item}
              onMouseEnter={() => setHoveredItem(item)}
              onMouseLeave={() => setHoveredItem(null)}
              className="group relative px-4 py-2 text-green-500 font-mono"
            >
              <span className="relative z-10">{item}</span>
              {hoveredItem === item && (
                <div className="absolute inset-0 bg-green-500/10 animate-pulse" />
              )}
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-green-500 
                scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default ScanlineNavbar; 