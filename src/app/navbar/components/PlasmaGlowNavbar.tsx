import React, { useState } from 'react';
import Link from 'next/link';

const PlasmaGlowNavbar = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const menuItems = ['Energy', 'Plasma', 'Fusion', 'Glow'];

  return (
    <nav className="bg-purple-950 p-4 rounded-lg mx-4 mt-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-fuchsia-400 font-bold text-xl">Plasma</div>
        <div className="flex gap-6">
          {menuItems.map((item) => (
            <Link
              href="#"
              key={item}
              onMouseEnter={() => setHoveredItem(item)}
              onMouseLeave={() => setHoveredItem(null)}
              className="group relative px-4 py-2 text-fuchsia-400"
            >
              <span className="relative z-10">{item}</span>
              {hoveredItem === item && (
                <>
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute inset-0 rounded-lg opacity-75 blur-md"
                      style={{
                        background: 'radial-gradient(circle, rgba(232,121,249,0.3) 0%, transparent 70%)',
                        animation: 'plasmaGlow 2s ease-in-out infinite',
                        animationDelay: `${i * 0.3}s`,
                        transform: `scale(${1 + i * 0.2})`,
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

export default PlasmaGlowNavbar; 