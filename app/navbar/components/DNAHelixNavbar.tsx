import React, { useState } from 'react';
import Link from 'next/link';

const DNAHelixNavbar = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const menuItems = ['Gene', 'Helix', 'Strand', 'Code'];

  return (
    <nav className="bg-teal-950 p-4 rounded-lg mx-4 mt-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-teal-400 font-bold text-xl">DNA</div>
        <div className="flex gap-6">
          {menuItems.map((item) => (
            <Link
              href="#"
              key={item}
              onMouseEnter={() => setHoveredItem(item)}
              onMouseLeave={() => setHoveredItem(null)}
              className="group relative px-4 py-2 text-teal-400"
            >
              <span className="relative z-10">{item}</span>
              {hoveredItem === item && (
                <>
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-full h-0.5 bg-teal-400/30"
                      style={{
                        top: `${(i + 1) * 12.5}%`,
                        transform: `rotate(${i % 2 ? 30 : -30}deg)`,
                        animation: `dnaRotate 2s infinite ${i * 0.25}s`,
                      }}
                    >
                      <div className="absolute left-0 w-1 h-1 bg-teal-400 rounded-full" />
                      <div className="absolute right-0 w-1 h-1 bg-teal-400 rounded-full" />
                    </div>
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

export default DNAHelixNavbar; 