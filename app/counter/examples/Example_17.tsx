"use client"

import React, { useState, useRef, useEffect } from 'react';
import Counter_17 from '../_components/Counter_17';

const Example_17: React.FC = () => {
  const [isComplete, setIsComplete] = useState(false);
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
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">3D Flip Counter</h1>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 transition-all duration-300">
          <div className="mb-4 sm:mb-6 text-center">
            <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-gray-800">Stock Price</h2>
            <Counter_17 
              from={100}
              to={500}
              duration={7}
              interval={0.3}
              formatter={(value) => `$${value.toFixed(2)}`}
              className={`text-xl sm:text-2xl md:text-3xl font-bold text-green-600 transition-all duration-300 ${
                isCompact ? 'scale-90' : 'scale-100'
              }`}
              onComplete={() => setIsComplete(true)}
            />
          </div>
          
          <div className="mt-4 sm:mt-8 text-center text-gray-600 text-xs sm:text-sm">
            <p className="mb-1">This counter simulates rising stock price from $100 to $500.</p>
            <p>The animation uses a 3D flip effect for dramatic presentation.</p>
            {isComplete && (
              <p className="text-green-500 font-medium mt-2">Stock price target reached!</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Example_17; 