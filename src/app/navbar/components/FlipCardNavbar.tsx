import React, { useState } from 'react';
import Link from 'next/link';

const FlipCardNavbar = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const menuItems = ['Dashboard', 'Statistics', 'Projects', 'Settings'];

  return (
    <nav className="bg-gradient-to-br from-slate-800 to-slate-900 p-4 rounded-lg mx-4 mt-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">Flip3D</div>
        <div className="flex gap-6">
          {menuItems.map((item) => (
            <div key={item} className="perspective">
              <div
                className={`relative transition-all duration-500 preserve-3d cursor-pointer
                ${hoveredItem === item ? '[transform:rotateX(180deg)]' : ''}`}
                onMouseEnter={() => setHoveredItem(item)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <Link href="#" 
                  className="block px-4 py-2 text-white backface-hidden bg-transparent">
                  {item}
                </Link>
                <div className="absolute inset-0 [transform:rotateX(180deg)] backface-hidden 
                  bg-blue-500 rounded px-4 py-2 text-white flex items-center justify-center">
                  Go →
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default FlipCardNavbar; 