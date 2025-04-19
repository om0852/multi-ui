"use client"

import React, { useState, useRef, useEffect } from 'react';
import Counter_14 from '../tsx/Counter_14';

const Example_14: React.FC = () => {
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
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">Rotate Counter</h1>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 transition-all duration-300">
          <div className="mb-4 sm:mb-6 text-center">
            <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-gray-800">Speedometer</h2>
            <Counter_14 
              from={0}
              to={120}
              duration={4}
              interval={0.1}
              formatter={(value) => `${value} mph`}
              className={`text-xl sm:text-2xl md:text-3xl font-bold text-gray-700 transition-all duration-300 ${
                isCompact ? 'scale-90' : 'scale-100'
              }`}
              onComplete={() => setIsComplete(true)}
            />
          </div>
          
          <div className="mt-4 sm:mt-8 text-center text-gray-600 text-xs sm:text-sm">
            <p className="mb-1">This counter simulates a car speedometer from 0 to 120 mph.</p>
            <p>The animation uses a rotating effect with rapid updates.</p>
            {isComplete && (
              <p className="text-red-500 font-medium mt-2">Maximum speed reached!</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Example_14; 