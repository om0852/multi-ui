import React, { useState } from 'react';
import Link from 'next/link';

const SoundwaveNavbar = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const menuItems = ['Music', 'Audio', 'Sound', 'Wave'];

  return (
    <nav className="bg-purple-950 p-4 rounded-lg mx-4 mt-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-purple-400 font-bold text-xl">Wave</div>
        <div className="flex gap-6">
          {menuItems.map((item) => (
            <Link
              href="#"
              key={item}
              onMouseEnter={() => setHoveredItem(item)}
              onMouseLeave={() => setHoveredItem(null)}
              className="group relative px-4 py-2 text-purple-400"
            >
              <span className="relative z-10">{item}</span>
              {hoveredItem === item && (
                <div className="absolute inset-x-0 bottom-0 h-8 flex items-center justify-around overflow-hidden">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="w-0.5 h-full bg-purple-400/50 animate-soundwave"
                      style={{ 
                        animationDelay: `${i * 0.1}s`,
                        height: `${Math.sin((i / 8) * Math.PI) * 100}%`
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

export default SoundwaveNavbar; 