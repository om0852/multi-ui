import React, { useState } from 'react';
import Link from 'next/link';

const FireTrailNavbar = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const menuItems = ['Home', 'Gallery', 'Shop', 'Contact'];

  return (
    <nav className="bg-gradient-to-r from-gray-900 to-black p-4 rounded-lg mx-4 mt-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-orange-500 font-bold text-xl">Fire</div>
        <div className="flex gap-6">
          {menuItems.map((item) => (
            <Link
              href="#"
              key={item}
              onMouseEnter={() => setHoveredItem(item)}
              onMouseLeave={() => setHoveredItem(null)}
              className="group relative px-4 py-2 text-gray-300 hover:text-white transition-colors"
            >
              <span className="relative z-10">{item}</span>
              <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 bg-gradient-to-t from-orange-600/80 via-orange-500/50 to-yellow-500/30 
                  animate-pulse rounded-lg" />
                <div className="absolute inset-x-0 -bottom-1 h-1 bg-orange-500 animate-pulse" />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-500/20 to-transparent blur-sm" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default FireTrailNavbar; 