import React, { useState } from 'react';
import Link from 'next/link';

const CyberCircuitNavbar = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const menuItems = ['Node', 'Link', 'Data', 'Core'];

  return (
    <nav className="bg-slate-900 p-4 rounded-lg mx-4 mt-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-blue-400 font-bold text-xl">Cyber</div>
        <div className="flex gap-6">
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
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute inset-0"
                      style={{
                        background: `linear-gradient(${90 * i}deg, transparent 45%, rgba(59,130,246,0.2) 48%, rgba(59,130,246,0.2) 52%, transparent 55%)`,
                        animation: 'cyberPulse 1.5s ease-in-out infinite',
                        animationDelay: `${i * 0.2}s`,
                      }}
                    />
                  ))}
                  <div className="absolute inset-0 border border-blue-400/30 rounded" />
                </>
              )}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default CyberCircuitNavbar; 