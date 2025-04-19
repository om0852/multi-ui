"use client"

import React, { useRef, useEffect, useState } from 'react';
import Counter_2 from '../_components/Counter_2';

const Example_2: React.FC = () => {
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  // Determine if we should use compact layout
  const isCompact = containerWidth < 480;
  
  return (
    <div className="min-h-screen p-4 sm:p-6 md:p-8 bg-gray-50" ref={containerRef}>
      <div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto">
        <div className="mb-4 sm:mb-6 md:mb-8">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">Animated Counter</h1>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 transition-all duration-300">
          <div className="mb-4 sm:mb-6 text-center">
            <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-gray-800">Sales Growth</h2>
            <Counter_2 
              from={0}
              to={5000}
              duration={3}
              easing="easeInOut"
              formatter={(value) => `$${value.toFixed(0)}`}
              className={`text-2xl sm:text-3xl md:text-4xl font-bold text-green-600 transition-all duration-300 ${
                isCompact ? 'scale-90' : 'scale-100'
              }`}
              onComplete={(finalValue) => console.log(`Counter reached ${finalValue}`)}
            />
          </div>
          
          <div className="mt-4 sm:mt-8 text-center text-gray-600 text-xs sm:text-sm">
            <p className="mb-1">This counter animates from 0 to 5,000 over 3 seconds.</p>
            <p>Uses easeInOut animation with dollar formatting.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Example_2; 