import React, { useState } from 'react';
import Link from 'next/link';

const CosmicDustNavbar = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const menuItems = ['Stars', 'Dust', 'Space', 'Void'];

  return (
    <nav className="bg-gray-950 p-4 rounded-lg mx-4 mt-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-amber-300 font-bold text-xl">Cosmic</div>
        <div className="flex gap-6">
          {menuItems.map((item) => (
            <Link
              href="#"
              key={item}
              onMouseEnter={() => setHoveredItem(item)}
              onMouseLeave={() => setHoveredItem(null)}
              className="group relative px-4 py-2 text-amber-300"
            >
              <span className="relative z-10">{item}</span>
              {hoveredItem === item && (
                <div className="absolute inset-0 overflow-hidden">
                  {[...Array(20)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-0.5 h-0.5 bg-amber-300/50 rounded-full 
                        animate-[cosmicDust_2s_ease-out_infinite]"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 2}s`,
                        animationDuration: `${1 + Math.random() * 2}s`,
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

export default CosmicDustNavbar; 