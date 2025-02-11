import React from 'react';
import Link from 'next/link';

const WaveNavbar = () => {
  const menuItems = ['Dashboard', 'Analytics', 'Reports', 'Settings'];

  return (
    <nav className="bg-gradient-to-br from-teal-600 to-emerald-600 p-4 rounded-lg mx-4 mt-4 relative overflow-hidden">
      <div className="absolute inset-0 opacity-50">
        <div className="absolute inset-0 animate-wave bg-[radial-gradient(circle,_transparent_20%,_#000_20%,_#000_80%,_transparent_80%,_transparent)] bg-[length:20px_20px]" />
      </div>
      <div className="container mx-auto flex justify-between items-center relative z-10">
        <div className="text-white font-bold text-xl">Wave</div>
        <div className="flex gap-6">
          {menuItems.map((item) => (
            <Link
              href="#"
              key={item}
              className="px-4 py-2 text-white hover:bg-white/20 rounded-lg transition-colors
              duration-300 backdrop-blur-sm"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default WaveNavbar; 