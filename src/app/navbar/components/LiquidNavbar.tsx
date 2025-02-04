import React, { useState } from 'react';
import Link from 'next/link';

const LiquidNavbar = () => {
  const [activeItem, setActiveItem] = useState('Home');
  
  const menuItems = ['Home', 'Services', 'Products', 'Support'];

  return (
    <nav className="bg-gradient-to-r from-cyan-600 to-teal-600 p-4 rounded-lg mx-4 mt-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">Liquid</div>
        <div className="flex gap-6">
          {menuItems.map((item) => (
            <Link
              href="#"
              key={item}
              onClick={() => setActiveItem(item)}
              className="group relative px-4 py-2"
            >
              <span className={`relative z-10 text-white transition-colors duration-300
                ${activeItem === item ? 'text-teal-900' : ''}`}>
                {item}
              </span>
              <div className={`absolute inset-0 rounded-lg transition-all duration-500 ease-out
                ${activeItem === item 
                  ? 'bg-white scale-100 opacity-100' 
                  : 'bg-white/20 scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100'}
                origin-left`} 
              />
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default LiquidNavbar; 