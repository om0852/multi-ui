import React, { useState } from 'react';
import Link from 'next/link';

const ConstellationNavbar = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const menuItems = ['Stars', 'Planets', 'Galaxies', 'Universe'];

  return (
    <nav className="bg-slate-950 p-4 rounded-lg mx-4 mt-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">Cosmos</div>
        <div className="flex gap-8">
          {menuItems.map((item) => (
            <Link
              href="#"
              key={item}
              onMouseEnter={() => setHoveredItem(item)}
              onMouseLeave={() => setHoveredItem(null)}
              className="relative px-4 py-2 text-white"
            >
              <span className="relative z-10">{item}</span>
              {hoveredItem === item && (
                <>
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-white rounded-full animate-[twinkle_1s_ease-in-out_infinite]"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${i * 0.2}s`,
                      }}
                    />
                  ))}
                  <div className="absolute inset-0 bg-blue-500/10 rounded-lg animate-pulse" />
                </>
              )}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default ConstellationNavbar; 