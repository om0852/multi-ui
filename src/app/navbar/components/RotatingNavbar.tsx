import React from 'react';
import Link from 'next/link';

const RotatingNavbar = () => {
  const menuItems = [
    { name: 'Home', icon: '🏠' },
    { name: 'Messages', icon: '✉️' },
    { name: 'Settings', icon: '⚙️' },
    { name: 'Profile', icon: '👤' }
  ];

  return (
    <nav className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-4 
    rounded-lg mx-4 mt-4">
      <div className="container mx-auto flex justify-between items-center">
        <span className="text-white font-bold text-xl">Rotate</span>
        
        <div className="flex gap-6">
          {menuItems.map((item) => (
            <Link
              href="#"
              key={item.name}
              className="group flex items-center gap-2 text-white px-4 py-2 rounded-lg
              hover:bg-white/20 transition-all duration-300"
            >
              <span className="group-hover:rotate-180 transition-transform duration-500">
                {item.icon}
              </span>
              <span className="translate-x-0 opacity-0 group-hover:opacity-100 
              group-hover:translate-x-1 transition-all duration-300">
                {item.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default RotatingNavbar; 