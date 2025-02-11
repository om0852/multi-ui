import React, { useState } from 'react';
import Link from 'next/link';

const BubbleNavbar = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const menuItems = ['Float', 'Rise', 'Pop', 'Bubble'];

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-cyan-600 p-4 rounded-lg mx-4 mt-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">Bubble</div>
        <div className="flex gap-6">
          {menuItems.map((item) => (
            <Link
              href="#"
              key={item}
              onMouseEnter={() => setHoveredItem(item)}
              onMouseLeave={() => setHoveredItem(null)}
              className="group relative px-4 py-2 text-white"
            >
              <span className="relative z-10">{item}</span>
              {hoveredItem === item && (
                <div className="absolute inset-0 flex justify-center items-center">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-2 h-2 bg-white/30 rounded-full 
                        animate-[bubble_1s_ease-out_forwards]"
                      style={{
                        left: `${Math.random() * 100}%`,
                        animationDelay: `${i * 0.1}s`,
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

export default BubbleNavbar; 