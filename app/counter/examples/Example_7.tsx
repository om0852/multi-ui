"use client"

import React, { useState, useRef, useEffect } from 'react';
import Counter_7 from '../tsx/Counter_7';

const Example_7: React.FC = () => {
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
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">Rating System</h1>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 transition-all duration-300">
          <div className="mb-4 sm:mb-6 text-center">
            <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-gray-800">Customer Satisfaction</h2>
            <Counter_7 
              from={0}
              to={5}
              duration={3}
              interval={0.3}
              formatter={(value) => `${value} ★`}
              className={`text-xl sm:text-2xl md:text-4xl font-bold text-yellow-500 transition-all duration-300 ${
                isCompact ? 'scale-90' : 'scale-100'
              }`}
              onComplete={() => setIsComplete(true)}
            />
          </div>
          
          <div className="mt-4 sm:mt-8 text-center text-gray-600 text-xs sm:text-sm">
            <p className="mb-1">This counter displays a 5-star rating animation.</p>
            <p>Watch as the rating increases from 0 to 5 stars.</p>
            {isComplete && (
              <p className="text-green-500 font-medium mt-2">Perfect 5-star rating achieved!</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Example_7; 