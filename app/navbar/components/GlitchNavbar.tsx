import React from 'react';
import Link from 'next/link';

const GlitchNavbar = () => {
  const menuItems = ['Home', 'About', 'Work', 'Contact'];

  return (
    <nav className="bg-zinc-900 p-4 rounded-lg mx-4 mt-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">Glitch</div>
        <div className="flex gap-6">
          {menuItems.map((item) => (
            <Link
              href="#"
              key={item}
              className="group relative text-white px-4 py-2"
            >
              <span className="relative inline-block hover:text-transparent hover:animate-glitch-1">
                {item}
                <span className="absolute top-0 left-0 w-full h-full text-red-500 
                  opacity-0 group-hover:opacity-100 group-hover:animate-glitch-2">
                  {item}
                </span>
                <span className="absolute top-0 left-0 w-full h-full text-blue-500 
                  opacity-0 group-hover:opacity-100 group-hover:animate-glitch-3">
                  {item}
                </span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default GlitchNavbar; 