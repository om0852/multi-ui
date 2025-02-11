import React, { useState } from 'react';
import Link from 'next/link';

const PaintNavbar = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const menuItems = ['Art', 'Design', 'Color', 'Style'];

  return (
    <nav className="bg-white p-4 rounded-lg mx-4 mt-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-pink-600 font-bold text-xl">Paint</div>
        <div className="flex gap-6">
          {menuItems.map((item) => (
            <Link
              href="#"
              key={item}
              onMouseEnter={() => setHoveredItem(item)}
              onMouseLeave={() => setHoveredItem(null)}
              className="group relative px-4 py-2 text-pink-600"
            >
              <span className="relative z-10">{item}</span>
              {hoveredItem === item && (
                <>
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute inset-0 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 
                        rounded-full animate-[splash_0.5s_ease-out_forwards] blur-sm"
                      style={{
                        transform: `rotate(${120 * i}deg)`,
                        animationDelay: `${i * 0.1}s`,
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

export default PaintNavbar; 