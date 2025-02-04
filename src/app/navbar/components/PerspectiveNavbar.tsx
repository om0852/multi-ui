import React, { useState } from 'react';
import Link from 'next/link';

const PerspectiveNavbar = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  const menuItems = ['Dashboard', 'Portfolio', 'Blog', 'Contact'];

  return (
    <nav className="bg-gradient-to-br from-indigo-900 to-purple-900 p-4 rounded-lg mx-4 mt-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-2xl perspective-text">3D Nav</div>
        <div className="flex gap-6">
          {menuItems.map((item, index) => (
            <Link
              href="#"
              key={item}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group perspective"
            >
              <div className={`px-4 py-2 text-white transition-all duration-300 transform
                ${hoveredIndex === index ? 'translate-z-12 -translate-y-1 scale-110' : ''}
                hover:text-purple-200`}
              >
                {item}
                <div className="h-0.5 w-0 group-hover:w-full bg-purple-300 
                  transition-all duration-300" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default PerspectiveNavbar; 