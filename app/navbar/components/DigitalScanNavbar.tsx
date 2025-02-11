import React, { useState } from 'react';
import Link from 'next/link';

const DigitalScanNavbar = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const menuItems = ['Scan', 'Code', 'Data', 'Sync'];

  return (
    <nav className="bg-zinc-900 p-4 rounded-lg mx-4 mt-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-emerald-400 font-mono text-xl">Digital</div>
        <div className="flex gap-6">
          {menuItems.map((item) => (
            <Link
              href="#"
              key={item}
              onMouseEnter={() => setHoveredItem(item)}
              onMouseLeave={() => setHoveredItem(null)}
              className="group relative px-4 py-2 text-emerald-400 font-mono"
            >
              <span className="relative z-10">{item}</span>
              {hoveredItem === item && (
                <>
                  <div className="absolute inset-0 bg-emerald-400/10" />
                  <div className="absolute inset-0 bg-gradient-to-b from-emerald-400/20 via-transparent to-emerald-400/20 
                    animate-[digitalScan_1s_linear_infinite]" />
                  <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute inset-0 animate-[digitalNoise_0.2s_steps(3)_infinite]">
                      {item.split('').map((char, i) => (
                        <span
                          key={i}
                          className="absolute"
                          style={{
                            left: `${i * 0.7}em`,
                            animation: `digitalGlitch 0.1s steps(2) infinite ${i * 0.1}s`,
                          }}
                        >
                          {char}
                        </span>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default DigitalScanNavbar; 