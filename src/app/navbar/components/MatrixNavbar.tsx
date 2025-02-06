import React, { useState } from 'react';
import Link from 'next/link';

const MatrixNavbar = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const menuItems = ['Enter', 'System', 'Matrix', 'Exit'];

  return (
    <nav className="bg-black p-4 rounded-lg mx-4 mt-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-green-500 font-mono text-xl">Matrix</div>
        <div className="flex gap-6 font-mono">
          {menuItems.map((item) => (
            <Link
              href="#"
              key={item}
              onMouseEnter={() => setHoveredItem(item)}
              onMouseLeave={() => setHoveredItem(null)}
              className="group relative px-4 py-2 text-green-500"
            >
              <span className={`relative z-10 transition-all duration-300
                ${hoveredItem === item ? 'text-white' : ''}`}>
                {hoveredItem === item ? 
                  item.split('').map((char, i) => (
                    <span 
                      key={i}
                      className="inline-block animate-[matrix_0.5s_ease-out_forwards]"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    >
                      {char}
                    </span>
                  )) : 
                  item
                }
              </span>
              <div className={`absolute inset-0 bg-green-500/10 scale-x-0 group-hover:scale-x-100
                transition-transform duration-300`} />
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default MatrixNavbar; 