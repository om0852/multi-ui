import React, { useState } from 'react';
import Link from 'next/link';

const ShatteredGlassNavbar = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const menuItems = ['Break', 'Shatter', 'Crack', 'Split'];

  return (
    <nav className="bg-gradient-to-r from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-4 rounded-lg mx-4 mt-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white/90 font-bold text-xl">Glass</div>
        <div className="flex gap-6">
          {menuItems.map((item) => (
            <Link
              href="#"
              key={item}
              onMouseEnter={() => setHoveredItem(item)}
              onMouseLeave={() => setHoveredItem(null)}
              className="group relative px-4 py-2 text-white/90"
            >
              <span className="relative z-10">{item}</span>
              {hoveredItem === item && (
                <>
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute inset-0 bg-white/10 backdrop-blur-sm"
                      style={{
                        clipPath: `polygon(${50 + Math.random() * 50}% ${Math.random() * 100}%, 
                          ${Math.random() * 100}% ${Math.random() * 100}%, 
                          ${Math.random() * 100}% ${Math.random() * 100}%)`,
                        animation: 'shatterAnim 0.5s ease-out forwards',
                        animationDelay: `${i * 0.05}s`,
                      }}
                    />
                  ))}
                </>
              )}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default ShatteredGlassNavbar; 