import React, { useState } from 'react';
import Link from 'next/link';

const NeonTrailNavbar = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const menuItems = ['Glow', 'Trail', 'Path', 'Light'];

  return (
    <nav className="bg-gray-950 p-4 rounded-lg mx-4 mt-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-green-500 font-bold text-xl">Trail</div>
        <div className="flex gap-6">
          {menuItems.map((item) => (
            <Link
              href="#"
              key={item}
              onMouseEnter={() => setHoveredItem(item)}
              onMouseLeave={() => setHoveredItem(null)}
              className="group relative px-4 py-2 text-green-500"
            >
              <span className="relative z-10">{item}</span>
              {hoveredItem === item && (
                <>
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute inset-0 bg-green-500/10 rounded-lg"
                      style={{
                        animation: `neonTrail 1s ease-out forwards`,
                        animationDelay: `${i * 0.1}s`,
                        transform: `translateX(${i * 2}px)`,
                      }}
                    />
                  ))}
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/0 via-green-500/20 to-green-500/0 
                    rounded-lg blur-sm animate-pulse" />
                </>
              )}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NeonTrailNavbar; 