import React, { useState } from 'react';
import Link from 'next/link';

const MagneticRippleNavbar = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const menuItems = ['Field', 'Wave', 'Pulse', 'Flow'];

  return (
    <nav className="bg-gradient-to-r from-purple-900 to-indigo-900 p-4 rounded-lg mx-4 mt-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-purple-300 font-bold text-xl">Ripple</div>
        <div className="flex gap-6">
          {menuItems.map((item) => (
            <Link
              href="#"
              key={item}
              onMouseEnter={() => setHoveredItem(item)}
              onMouseLeave={() => setHoveredItem(null)}
              className="group relative px-4 py-2 text-purple-300"
            >
              <span className="relative z-10">{item}</span>
              {hoveredItem === item && (
                <>
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute inset-0 border-2 border-purple-400/30 rounded-lg 
                        animate-[magneticRipple_1.5s_ease-out_infinite]"
                      style={{
                        animationDelay: `${i * 0.3}s`,
                      }}
                    />
                  ))}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400/10 via-indigo-400/10 
                    to-purple-400/10 animate-[magneticGlow_1.5s_ease-out_infinite]" />
                </>
              )}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default MagneticRippleNavbar; 