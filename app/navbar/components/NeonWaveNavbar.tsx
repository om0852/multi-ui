import React, { useState } from 'react';
import Link from 'next/link';

const NeonWaveNavbar = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const menuItems = ['Signal', 'Wave', 'Pulse', 'Echo'];

  return (
    <nav className="bg-slate-950 p-4 rounded-lg mx-4 mt-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-pink-500 font-bold text-xl">Wave</div>
        <div className="flex gap-6">
          {menuItems.map((item) => (
            <Link
              href="#"
              key={item}
              onMouseEnter={() => setHoveredItem(item)}
              onMouseLeave={() => setHoveredItem(null)}
              className="group relative px-4 py-2 text-pink-500"
            >
              <span className="relative z-10">{item}</span>
              {hoveredItem === item && (
                <>
                  <div className="absolute inset-0 flex items-center justify-center">
                    {[...Array(3)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-full h-0.5 bg-pink-500/50 rounded-full"
                        style={{
                          animation: `neonWave 1.5s ease-in-out infinite`,
                          animationDelay: `${i * 0.2}s`,
                          transform: `translateY(${i * 4}px)`,
                        }}
                      />
                    ))}
                  </div>
                  <div className="absolute inset-0 bg-pink-500/10 rounded-lg blur-sm" />
                </>
              )}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NeonWaveNavbar; 