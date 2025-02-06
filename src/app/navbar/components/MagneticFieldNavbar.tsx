import React, { useState } from 'react';
import Link from 'next/link';

const MagneticFieldNavbar = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const menuItems = ['Attract', 'Connect', 'Field', 'Force'];

  return (
    <nav className="bg-indigo-950 p-4 rounded-lg mx-4 mt-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-blue-400 font-bold text-xl">Field</div>
        <div className="flex gap-8">
          {menuItems.map((item) => (
            <Link
              href="#"
              key={item}
              onMouseEnter={() => setHoveredItem(item)}
              onMouseLeave={() => setHoveredItem(null)}
              className="group relative px-4 py-2 text-blue-400"
            >
              <span className="relative z-10">{item}</span>
              {hoveredItem === item && (
                <>
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute inset-0 border border-blue-400/30 rounded-lg"
                      style={{
                        transform: `scale(${1 + i * 0.15})`,
                        opacity: 1 - i * 0.15,
                        animation: `magnetic 1s ease-out infinite ${i * 0.1}s`,
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

export default MagneticFieldNavbar; 