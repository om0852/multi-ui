import React, { useState } from 'react';
import Link from 'next/link';

const BinaryCodeNavbar = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const menuItems = ['Code', 'Data', 'Bits', 'Bytes'];

  return (
    <nav className="bg-zinc-900 p-4 rounded-lg mx-4 mt-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-green-400 font-mono text-xl">Binary</div>
        <div className="flex gap-6">
          {menuItems.map((item) => (
            <Link
              href="#"
              key={item}
              onMouseEnter={() => setHoveredItem(item)}
              onMouseLeave={() => setHoveredItem(null)}
              className="group relative px-4 py-2 text-green-400 font-mono"
            >
              <span className="relative z-10">{item}</span>
              {hoveredItem === item && (
                <div className="absolute inset-0 overflow-hidden">
                  {[...Array(20)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute text-[8px] text-green-400/30"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animation: 'binaryFall 1s linear infinite',
                        animationDelay: `${Math.random()}s`,
                      }}
                    >
                      {Math.random() > 0.5 ? '1' : '0'}
                    </div>
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

export default BinaryCodeNavbar; 