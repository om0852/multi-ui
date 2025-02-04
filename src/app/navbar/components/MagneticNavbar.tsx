import React, { useState } from 'react';
import Link from 'next/link';

const MagneticNavbar = () => {
  const menuItems = ['Products', 'Solutions', 'Resources', 'Enterprise'];

  return (
    <nav className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 p-6 rounded-lg mx-4 mt-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">Magnetic</div>
        <div className="flex gap-8">
          {menuItems.map((item) => (
            <Link
              href="#"
              key={item}
              className="group relative text-gray-400 hover:text-white transition-colors duration-300"
            >
              <span className="relative z-10">{item}</span>
              <div className="absolute -inset-3 rounded-lg bg-gray-700/50 scale-0 
                group-hover:scale-100 transition-transform duration-300 ease-out" />
              <div className="absolute -inset-3 rounded-lg bg-gray-700/30 scale-0 delay-100
                group-hover:scale-100 transition-transform duration-300 ease-out" />
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default MagneticNavbar; 