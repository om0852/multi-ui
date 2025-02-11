import React, { useState } from 'react';
import Link from 'next/link';

const CrystalNavbar = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const menuItems = ['Crystal', 'Prism', 'Glass', 'Light'];

  return (
    <nav className="bg-gradient-to-r from-slate-900 to-slate-800 p-4 rounded-lg mx-4 mt-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">Crystal</div>
        <div className="flex gap-6">
          {menuItems.map((item) => (
            <Link
              href="#"
              key={item}
              onMouseEnter={() => setHoveredItem(item)}
              onMouseLeave={() => setHoveredItem(null)}
              className="group relative px-4 py-2 text-white overflow-hidden"
            >
              <span className="relative z-10">{item}</span>
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent 
                opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {hoveredItem === item && (
                <>
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute inset-0 bg-white/10 animate-shatter"
                      style={{
                        clipPath: `polygon(${50 + i * 10}% ${50 + i * 10}%, ${100 - i * 10}% ${i * 10}%, ${50 - i * 10}% ${100 - i * 10}%)`,
                        animationDelay: `${i * 0.1}s`
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

export default CrystalNavbar; 