import React from 'react';
import Link from 'next/link';

const NeonBorderNavbar = () => {
  const menuItems = ['Home', 'Explore', 'Create', 'Profile'];

  return (
    <nav className="bg-gray-950 p-6 rounded-lg mx-4 mt-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 
        opacity-20 animate-gradient" />
      <div className="container mx-auto flex justify-between items-center relative z-10">
        <div className="text-white font-bold text-xl">Neon</div>
        <div className="flex gap-8">
          {menuItems.map((item) => (
            <Link
              href="#"
              key={item}
              className="group relative px-4 py-2 text-gray-300 hover:text-white 
              transition-colors duration-300"
            >
              {item}
              <div className="absolute inset-0 border border-transparent group-hover:border-purple-500/50 
                rounded-lg group-hover:shadow-[0_0_15px_rgba(168,85,247,0.5)] transition-all duration-300" />
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NeonBorderNavbar; 