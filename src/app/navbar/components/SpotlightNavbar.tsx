import React, { useState } from 'react';
import Link from 'next/link';

const SpotlightNavbar = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const menuItems = ['Features', 'Pricing', 'Resources', 'Company'];

  return (
    <nav className="bg-slate-950 p-4 rounded-lg mx-4 mt-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">Spotlight</div>
        <div className="flex gap-6">
          {menuItems.map((item, index) => (
            <Link
              href="#"
              key={item}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`relative px-4 py-2 text-white rounded-lg transition-all duration-300
              ${hoveredIndex === index ? 'text-yellow-300' : 'hover:text-yellow-200'}`}
            >
              {hoveredIndex === index && (
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/0 via-yellow-500/20 
                to-yellow-500/0 animate-spotlight rounded-lg" />
              )}
              <span className="relative z-10">{item}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default SpotlightNavbar; 