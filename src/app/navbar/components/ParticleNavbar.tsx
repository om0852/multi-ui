import React, { useState } from 'react';
import Link from 'next/link';

const ParticleNavbar = () => {
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const menuItems = ['Explore', 'Create', 'Connect', 'Learn'];

  return (
    <nav className="bg-black p-4 rounded-lg mx-4 mt-4 overflow-hidden">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">Particles</div>
        <div className="flex gap-6">
          {menuItems.map((item) => (
            <Link
              href="#"
              key={item}
              onMouseEnter={() => setActiveItem(item)}
              onMouseLeave={() => setActiveItem(null)}
              className="group relative px-4 py-2"
            >
              <span className="relative z-10 text-white">{item}</span>
              {activeItem === item && (
                <>
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute inset-0 rounded-full bg-blue-500/30
                      animate-[particle_1s_ease-in-out_forwards] scale-0"
                      style={{
                        animationDelay: `${i * 0.1}s`,
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                    />
                  ))}
                </>
              )}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default ParticleNavbar; 