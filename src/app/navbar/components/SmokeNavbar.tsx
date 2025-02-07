import React, { useState } from 'react';
import Link from 'next/link';

const SmokeNavbar = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const menuItems = ['Fade', 'Drift', 'Float', 'Vanish'];

  return (
    <nav className="bg-gray-950 p-4 rounded-lg mx-4 mt-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-gray-400 font-bold text-xl">Smoke</div>
        <div className="flex gap-6">
          {menuItems.map((item) => (
            <Link
              href="#"
              key={item}
              onMouseEnter={() => setHoveredItem(item)}
              onMouseLeave={() => setHoveredItem(null)}
              className="group relative px-4 py-2 text-gray-400"
            >
              <span className="relative z-10 group-hover:opacity-0 transition-opacity duration-500">
                {item}
              </span>
              {hoveredItem === item && (
                <div className="absolute inset-0 flex justify-center items-center">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-full h-full bg-gradient-to-t from-gray-500/20 via-gray-400/10 to-transparent
                        animate-[smoke_1s_ease-out_forwards]"
                      style={{
                        animationDelay: `${i * 0.1}s`,
                        transform: `rotate(${(i - 2) * 15}deg)`,
                      }}
                    />
                  ))}
                  <span className="text-white opacity-0 animate-[fadeIn_0.3s_ease-out_forwards]">
                    {item}
                  </span>
                </div>
              )}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default SmokeNavbar; 