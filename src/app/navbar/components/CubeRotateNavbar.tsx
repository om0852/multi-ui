import React, { useState } from 'react';
import Link from 'next/link';

const CubeRotateNavbar = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const menuItems = ['Front', 'Back', 'Side', 'Top'];

  return (
    <nav className="bg-gray-900 p-4 rounded-lg mx-4 mt-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">Cube</div>
        <div className="flex gap-8">
          {menuItems.map((item) => (
            <div key={item} className="perspective">
              <Link
                href="#"
                onMouseEnter={() => setHoveredItem(item)}
                onMouseLeave={() => setHoveredItem(null)}
                className="relative block px-4 py-2 text-white preserve-3d"
              >
                <div className={`relative transition-transform duration-500
                  ${hoveredItem === item ? '[transform:rotateY(360deg)]' : ''}`}>
                  <span className="block">{item}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 
                    opacity-0 group-hover:opacity-100 transition-opacity rounded" />
                  {hoveredItem === item && (
                    <>
                      <div className="absolute inset-0 bg-white/10 rounded" />
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 
                        rounded animate-pulse" />
                    </>
                  )}
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default CubeRotateNavbar; 