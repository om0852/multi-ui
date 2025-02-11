import React from 'react';
import Link from 'next/link';

const ShimmerNavbar = () => {
  const menuItems = ['Discover', 'Learn', 'Create', 'Share'];

  return (
    <nav className="bg-gradient-to-r from-gray-900 to-black p-4 rounded-lg mx-4 mt-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">Shimmer</div>
        <div className="flex gap-6">
          {menuItems.map((item) => (
            <Link
              href="#"
              key={item}
              className="group relative px-4 py-2 text-white overflow-hidden rounded-lg
              hover:bg-white/5 transition-colors duration-300"
            >
              <span className="relative z-10">{item}</span>
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full 
                transition-transform duration-1000 bg-gradient-to-r from-transparent 
                via-white/20 to-transparent" />
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default ShimmerNavbar; 