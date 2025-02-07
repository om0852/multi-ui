import React, { useState } from 'react';
import Link from 'next/link';

const LightningNavbar = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const menuItems = ['Flash', 'Storm', 'Thunder', 'Bolt'];

  return (
    <nav className="bg-slate-950 p-4 rounded-lg mx-4 mt-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-yellow-400 font-bold text-xl">Lightning</div>
        <div className="flex gap-6">
          {menuItems.map((item) => (
            <Link
              href="#"
              key={item}
              onMouseEnter={() => setHoveredItem(item)}
              onMouseLeave={() => setHoveredItem(null)}
              className="group relative px-4 py-2 text-yellow-400"
            >
              <span className="relative z-10">{item}</span>
              {hoveredItem === item && (
                <>
                  <div className="absolute inset-0 bg-yellow-400/20 animate-[flash_0.3s_ease-out]" />
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/0 via-yellow-400/50 to-yellow-400/0 
                    animate-[lightning_0.5s_ease-out] blur-sm" />
                  <div className="absolute top-0 left-1/2 w-px h-full bg-yellow-400/50 
                    animate-[spark_0.2s_ease-out_infinite]" />
                </>
              )}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default LightningNavbar; 