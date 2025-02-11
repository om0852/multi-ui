import React, { useState } from 'react';
import Link from 'next/link';

const FloatingNavbar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const menuItems = ['Dashboard', 'Analytics', 'Projects', 'Settings'];

  return (
    <nav className="bg-gray-900 p-6 rounded-xl mx-4 mt-4">
      <div className="container mx-auto flex justify-center">
        <div className="relative flex gap-8">
          {menuItems.map((item, index) => (
            <Link
              href="#"
              key={item}
              className={`px-4 py-2 text-gray-400 hover:text-white transition-colors z-10
              ${activeIndex === index ? 'text-white' : ''}`}
              onClick={() => setActiveIndex(index)}
            >
              {item}
            </Link>
          ))}
          
          {/* Floating Background Indicator */}
          <div
            className="absolute h-10 rounded-lg bg-gray-700 transition-all duration-300 ease-out"
            style={{
              width: '100px',
              transform: `translateX(${activeIndex * 128}px)`,
            }}
          />
        </div>
      </div>
    </nav>
  );
};

export default FloatingNavbar; 