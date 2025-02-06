import React, { useState } from 'react';
import Link from 'next/link';

const MagneticPullNavbar = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const menuItems = ['Features', 'Solutions', 'Pricing', 'Support'];

  return (
    <nav className="bg-gradient-to-r from-violet-900 to-purple-900 p-4 rounded-lg mx-4 mt-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">Magnetic</div>
        <div className="flex gap-8">
          {menuItems.map((item, index) => (
            <Link
              href="#"
              key={item}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative px-4 py-2 text-white transition-all duration-300"
            >
              <span className={`relative z-10 block transition-transform duration-300
                ${hoveredIndex === index ? 'scale-125' : ''}
                ${hoveredIndex === index - 1 ? 'translate-x-4' : ''}
                ${hoveredIndex === index + 1 ? '-translate-x-4' : ''}
                ${hoveredIndex !== null && hoveredIndex !== index && Math.abs(hoveredIndex - index) > 1 
                  ? 'opacity-50' : ''}`}
              >
                {item}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default MagneticPullNavbar; 