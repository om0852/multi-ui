import React, { useState } from 'react';
import Link from 'next/link';

const GlassNavbar = () => {
  const [activeItem, setActiveItem] = useState('Home');
  
  const menuItems = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Services', href: '#' },
    { name: 'Contact', href: '#' }
  ];

  return (
    <nav className="backdrop-blur-md bg-white/30 shadow-lg rounded-lg mx-4 mt-4 p-4 
    animate-slideDown">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold text-gray-800">Logo</div>
        <div className="flex gap-8">
          {menuItems.map((item) => (
            <Link 
              href={item.href} 
              key={item.name}
              onClick={() => setActiveItem(item.name)}
              className={`relative px-2 py-1 text-gray-700 hover:text-gray-900 transition-colors
              ${activeItem === item.name ? 'text-blue-600' : ''}
              after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 
              after:bg-blue-600 after:transition-all hover:after:w-full`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default GlassNavbar; 