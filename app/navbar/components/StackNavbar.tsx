import React, { useState } from 'react';
import Link from 'next/link';

const StackNavbar = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const menuItems = ['Dashboard', 'Analytics', 'Reports', 'Settings'];

  return (
    <nav className="bg-gradient-to-br from-emerald-800 to-teal-900 p-4 rounded-lg mx-4 mt-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">Stack</div>
        <div className="flex gap-8">
          {menuItems.map((item) => (
            <div key={item} className="perspective-[1000px]">
              <Link
                href="#"
                onMouseEnter={() => setHoveredItem(item)}
                onMouseLeave={() => setHoveredItem(null)}
                className="relative block px-4 py-2 text-white"
              >
                <span className="relative z-10">{item}</span>
                {hoveredItem === item && (
                  <>
                    <div className="absolute inset-0 bg-emerald-500/20 rounded transform -translate-y-2 
                      transition-transform duration-300" />
                    <div className="absolute inset-0 bg-emerald-500/20 rounded transform -translate-y-1 
                      transition-transform duration-300" />
                    <div className="absolute inset-0 bg-emerald-500/20 rounded transform translate-y-0 
                      transition-transform duration-300" />
                  </>
                )}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default StackNavbar; 