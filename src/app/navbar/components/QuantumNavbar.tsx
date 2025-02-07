import React, { useState } from 'react';
import Link from 'next/link';

const QuantumNavbar = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const menuItems = ['Qubit', 'State', 'Wave', 'Spin'];

  return (
    <nav className="bg-blue-950 p-4 rounded-lg mx-4 mt-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-blue-400 font-bold text-xl">Quantum</div>
        <div className="flex gap-6">
          {menuItems.map((item) => (
            <Link
              href="#"
              key={item}
              onMouseEnter={() => setHoveredItem(item)}
              onMouseLeave={() => setHoveredItem(null)}
              className="group relative px-4 py-2 text-blue-400"
            >
              <span className="relative z-10">{item}</span>
              {hoveredItem === item && (
                <>
                  <div className="absolute inset-0 bg-blue-400/10 rounded-lg animate-[quantumPulse_2s_ease-in-out_infinite]" />
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute inset-0 border border-blue-400/30 rounded-full 
                        animate-[quantumOrbit_4s_linear_infinite]"
                      style={{
                        animationDelay: `${i * -1.33}s`,
                      }}
                    >
                      <div
                        className="absolute w-1 h-1 bg-blue-400 rounded-full 
                          animate-[quantumParticle_4s_linear_infinite]"
                        style={{
                          animationDelay: `${i * -1.33}s`,
                        }}
                      />
                    </div>
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

export default QuantumNavbar; 