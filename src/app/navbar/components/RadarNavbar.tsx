import React, { useState } from 'react';
import Link from 'next/link';

const RadarNavbar = () => {
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const menuItems = ['Search', 'Discover', 'Connect', 'Profile'];

  return (
    <nav className="bg-gray-950 p-4 rounded-lg mx-4 mt-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">Radar</div>
        <div className="flex gap-6">
          {menuItems.map((item) => (
            <Link
              href="#"
              key={item}
              onMouseEnter={() => setActiveItem(item)}
              onMouseLeave={() => setActiveItem(null)}
              className="relative px-4 py-2 text-white"
            >
              <span className="relative z-10">{item}</span>
              {activeItem === item && (
                <div className="absolute inset-0 rounded-full animate-radar-scan">
                  <div className="absolute inset-0 rounded-full border-2 border-cyan-500/50" />
                  <div className="absolute inset-0 rounded-full border border-cyan-500/20 animate-ping" />
                </div>
              )}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default RadarNavbar; 