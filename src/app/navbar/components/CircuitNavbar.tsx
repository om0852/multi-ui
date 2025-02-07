import React, { useState } from 'react';
import Link from 'next/link';

const CircuitNavbar = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const menuItems = ['Circuit', 'Network', 'Data', 'Flow'];

  return (
    <nav className="bg-gray-950 p-4 rounded-lg mx-4 mt-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-cyan-400 font-bold text-xl">Circuit</div>
        <div className="flex gap-6">
          {menuItems.map((item) => (
            <Link
              href="#"
              key={item}
              onMouseEnter={() => setHoveredItem(item)}
              onMouseLeave={() => setHoveredItem(null)}
              className="group relative px-4 py-2 text-cyan-400"
            >
              <span className="relative z-10">{item}</span>
              {hoveredItem === item && (
                <>
                  <div className="absolute inset-0 border border-cyan-400/50 rounded">
                    <div className="absolute h-1 w-1 bg-cyan-400 rounded-full 
                      animate-[circuit_2s_linear_infinite]" />
                  </div>
                  <div className="absolute inset-0 bg-cyan-400/10 rounded" />
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-cyan-400/20 to-cyan-400/0 
                    animate-[pulse_2s_ease-in-out_infinite]" />
                </>
              )}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default CircuitNavbar; 