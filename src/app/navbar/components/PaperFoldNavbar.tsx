import React, { useState } from 'react';
import Link from 'next/link';

const PaperFoldNavbar = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const menuItems = ['Notes', 'Pages', 'Docs', 'Files'];

  return (
    <nav className="bg-amber-50 p-4 rounded-lg mx-4 mt-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-amber-800 font-bold text-xl">Paper</div>
        <div className="flex gap-6">
          {menuItems.map((item) => (
            <Link
              href="#"
              key={item}
              onMouseEnter={() => setHoveredItem(item)}
              onMouseLeave={() => setHoveredItem(null)}
              className="group relative px-4 py-2 text-amber-800"
            >
              <span className="relative z-10">{item}</span>
              {hoveredItem === item && (
                <>
                  <div className="absolute inset-0 bg-amber-100 rounded shadow-md 
                    animate-[fold_0.3s_ease-out_forwards] origin-top" />
                  <div className="absolute inset-0 bg-gradient-to-b from-amber-200/50 to-transparent 
                    animate-[unfold_0.3s_ease-out_forwards] origin-bottom" />
                </>
              )}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default PaperFoldNavbar; 