import React, { useState } from 'react';
import Link from 'next/link';

const MorphingNavbar = () => {
  const [activeItem, setActiveItem] = useState('Home');
  
  const menuItems = ['Home', 'Products', 'Services', 'Contact'];

  return (
    <nav className="bg-gradient-to-r from-blue-900 to-purple-900 p-4 rounded-lg mx-4 mt-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">Morph</div>
        <div className="flex gap-6 relative">
          {menuItems.map((item) => (
            <Link
              href="#"
              key={item}
              onClick={() => setActiveItem(item)}
              className={`px-4 py-2 text-white rounded-lg transition-all duration-500 relative
              ${activeItem === item ? 'bg-white/20 backdrop-blur-sm' : 'hover:bg-white/10'}
              before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-r 
              before:from-blue-500/0 before:via-purple-500/0 before:to-pink-500/0
              before:hover:from-blue-500/20 before:hover:via-purple-500/20 before:hover:to-pink-500/20
              before:transition-all before:duration-500`}
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default MorphingNavbar; 
 