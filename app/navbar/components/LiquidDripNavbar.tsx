import React, { useState } from 'react';
import Link from 'next/link';

const LiquidDripNavbar = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const menuItems = ['Drop', 'Flow', 'Drip', 'Pour'];

  return (
    <nav className="bg-cyan-950 p-4 rounded-lg mx-4 mt-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-cyan-400 font-bold text-xl">Liquid</div>
        <div className="flex gap-6">
          {menuItems.map((item) => (
            <Link
              href="#"
              key={item}
              onMouseEnter={() => setHoveredItem(item)}
              onMouseLeave={() => setHoveredItem(null)}
              className="group relative px-4 py-2 text-cyan-400"
            >
              <span className="relative z-10">{item}</span>
              {hoveredItem === item && (
                <>
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute bottom-0 left-1/2 w-0.5 bg-cyan-400/50"
                      style={{
                        height: '0',
                        animation: `liquidDrip 1s ease-in infinite`,
                        animationDelay: `${i * 0.2}s`,
                        transform: `translateX(${(i - 2) * 4}px)`,
                      }}
                    />
                  ))}
                  <div className="absolute inset-0 bg-cyan-400/10 rounded-lg" />
                </>
              )}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default LiquidDripNavbar; 