import React, { useState } from 'react';
import Link from 'next/link';

const PixelNavbar = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const menuItems = ['Start', 'Level', 'Score', 'Exit'];

  return (
    <nav className="bg-indigo-950 p-4 rounded-lg mx-4 mt-4 font-mono">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-indigo-400 font-bold text-xl">8-Bit</div>
        <div className="flex gap-6">
          {menuItems.map((item) => (
            <Link
              href="#"
              key={item}
              onMouseEnter={() => setHoveredItem(item)}
              onMouseLeave={() => setHoveredItem(null)}
              className="group relative px-4 py-2"
            >
              <span className="relative z-10 text-indigo-400 group-hover:text-white 
                transition-colors duration-300 [image-rendering:pixelated]">
                {item}
              </span>
              {hoveredItem === item && (
                <div className="absolute inset-0 grid grid-cols-4 gap-px">
                  {[...Array(16)].map((_, i) => (
                    <div
                      key={i}
                      className="bg-indigo-400/30 animate-[pixelate_0.5s_ease-out_forwards]"
                      style={{ animationDelay: `${Math.random() * 0.2}s` }}
                    />
                  ))}
                </div>
              )}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default PixelNavbar; 