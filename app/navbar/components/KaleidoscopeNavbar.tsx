import React, { useState } from 'react';
import Link from 'next/link';

const KaleidoscopeNavbar = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const menuItems = ['Mirror', 'Prism', 'Pattern', 'View'];

  return (
    <nav className="bg-fuchsia-950 p-4 rounded-lg mx-4 mt-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-fuchsia-400 font-bold text-xl">Kaleidoscope</div>
        <div className="flex gap-6">
          {menuItems.map((item) => (
            <Link
              href="#"
              key={item}
              onMouseEnter={() => setHoveredItem(item)}
              onMouseLeave={() => setHoveredItem(null)}
              className="group relative px-4 py-2 text-fuchsia-400"
            >
              <span className="relative z-10">{item}</span>
              {hoveredItem === item && (
                <div className="absolute inset-0 overflow-hidden">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute inset-0 bg-gradient-to-r from-fuchsia-500/20 via-purple-500/20 to-pink-500/20 
                        animate-[kaleidoscope_3s_linear_infinite]"
                      style={{
                        transform: `rotate(${60 * i}deg)`,
                        transformOrigin: 'center',
                        animationDelay: `${i * 0.5}s`,
                      }}
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

export default KaleidoscopeNavbar; 