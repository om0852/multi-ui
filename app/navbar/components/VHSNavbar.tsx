import React, { useState } from 'react';
import Link from 'next/link';

const VHSNavbar = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const menuItems = ['Rewind', 'Play', 'Stop', 'Record'];

  return (
    <nav className="bg-black p-4 rounded-lg mx-4 mt-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-red-500 font-bold text-xl font-mono">VHS</div>
        <div className="flex gap-6">
          {menuItems.map((item) => (
            <Link
              href="#"
              key={item}
              onMouseEnter={() => setHoveredItem(item)}
              onMouseLeave={() => setHoveredItem(null)}
              className="group relative px-4 py-2 text-white font-mono"
            >
              <span className="relative z-10 mix-blend-screen">{item}</span>
              {hoveredItem === item && (
                <>
                  <div className="absolute inset-0 bg-red-500/30 animate-[vhsNoise_0.2s_steps(2)_infinite]" />
                  <div className="absolute inset-0 bg-blue-500/30 animate-[vhsOffset_0.2s_ease-out_infinite]" />
                  <div className="absolute inset-0 bg-green-500/30 animate-[vhsGlitch_0.2s_ease-out_infinite]" />
                </>
              )}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default VHSNavbar; 