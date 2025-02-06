import React, { useState } from 'react';
import Link from 'next/link';

const RainbowTrailNavbar = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const menuItems = ['Explore', 'Create', 'Share', 'Profile'];

  return (
    <nav className="bg-gray-950 p-4 rounded-lg mx-4 mt-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">Rainbow</div>
        <div className="flex gap-6">
          {menuItems.map((item) => (
            <Link
              href="#"
              key={item}
              onMouseEnter={() => setHoveredItem(item)}
              onMouseLeave={() => setHoveredItem(null)}
              className="group relative px-4 py-2 text-white overflow-hidden rounded-lg"
            >
              <span className="relative z-10">{item}</span>
              <div 
                className="absolute inset-0 -z-10 bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-600 
                opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              <div 
                className="absolute inset-0 -z-10 bg-gradient-to-r from-fuchsia-500 via-red-600 to-orange-400
                opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"
              />
              <div 
                className="absolute inset-0 -z-10 bg-[conic-gradient(from_0deg,theme(colors.blue.500),theme(colors.purple.500),theme(colors.pink.500),theme(colors.orange.500),theme(colors.blue.500))]
                opacity-0 group-hover:opacity-70 transition-opacity duration-300 animate-spin-slow"
              />
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default RainbowTrailNavbar; 