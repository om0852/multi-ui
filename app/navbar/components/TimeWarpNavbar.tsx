import React, { useState } from 'react';
import Link from 'next/link';

const TimeWarpNavbar = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const menuItems = ['Past', 'Present', 'Future', 'Time'];

  return (
    <nav className="bg-gradient-to-r from-amber-950 to-orange-950 p-4 rounded-lg mx-4 mt-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-amber-400 font-bold text-xl">Warp</div>
        <div className="flex gap-6">
          {menuItems.map((item) => (
            <Link
              href="#"
              key={item}
              onMouseEnter={() => setHoveredItem(item)}
              onMouseLeave={() => setHoveredItem(null)}
              className="group relative px-4 py-2 text-amber-400"
            >
              <span className="relative z-10">{item}</span>
              {hoveredItem === item && (
                <>
                  <div className="absolute inset-0 rounded-lg overflow-hidden">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute inset-0 border border-amber-400/30"
                        style={{
                          animation: 'timeWarp 2s linear infinite',
                          animationDelay: `${i * 0.2}s`,
                          transform: `rotate(${i * 15}deg) scale(${1 + i * 0.2})`,
                        }}
                      />
                    ))}
                  </div>
                  <div className="absolute inset-0 bg-amber-400/10 rounded-lg animate-pulse" />
                </>
              )}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default TimeWarpNavbar; 