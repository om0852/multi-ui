import React, { useState } from 'react';
import Link from 'next/link';

const MagneticDistortNavbar = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const menuItems = ['Attract', 'Repel', 'Field', 'Force'];

  return (
    <nav className="bg-gradient-to-r from-violet-950 to-purple-950 p-4 rounded-lg mx-4 mt-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-violet-400 font-bold text-xl">Distort</div>
        <div className="flex gap-6">
          {menuItems.map((item) => (
            <Link
              href="#"
              key={item}
              onMouseEnter={() => setHoveredItem(item)}
              onMouseLeave={() => setHoveredItem(null)}
              className="group relative px-4 py-2 text-violet-400"
            >
              <span className="relative z-10">{item}</span>
              {hoveredItem === item && (
                <>
                  <div className="absolute inset-0 bg-violet-400/10 rounded-lg" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    {[...Array(4)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-full h-full border border-violet-400/30 rounded-lg"
                        style={{
                          animation: `magneticDistort 2s ease-in-out infinite`,
                          animationDelay: `${i * 0.2}s`,
                          transform: `scale(${1 + i * 0.1})`,
                        }}
                      />
                    ))}
                  </div>
                </>
              )}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default MagneticDistortNavbar; 