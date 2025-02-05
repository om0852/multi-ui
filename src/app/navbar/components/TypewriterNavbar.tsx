import React, { useState } from 'react';
import Link from 'next/link';

const TypewriterNavbar = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const menuItems = ['Portfolio', 'Blog', 'Projects', 'About'];

  return (
    <nav className="bg-zinc-900 p-4 rounded-lg mx-4 mt-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-mono text-xl">Terminal</div>
        <div className="flex gap-6 font-mono">
          {menuItems.map((item) => (
            <Link
              href="#"
              key={item}
              onMouseEnter={() => setHoveredItem(item)}
              onMouseLeave={() => setHoveredItem(null)}
              className="group relative px-4 py-2 text-green-500 hover:text-green-400 
              transition-colors duration-300"
            >
              <span className={`${hoveredItem === item ? 'animate-typing' : ''}`}>
                {hoveredItem === item ? '> ' : ''}{item}
              </span>
              <span className={`${hoveredItem === item ? 'animate-blink' : 'opacity-0'}`}>_</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default TypewriterNavbar; 