"use client"

import React, { useState, useRef, useEffect } from 'react';
import Counter_19 from '../tsx/Counter_19';

const Example_19: React.FC = () => {
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
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">Pulse Counter</h1>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 transition-all duration-300">
          <div className="mb-4 sm:mb-6 text-center">
            <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-gray-800">Followers Count</h2>
            <Counter_19 
              from={1000}
              to={10000}
              duration={6}
              interval={0.15}
              formatter={(value) => `${value.toLocaleString()}`}
              className={`text-xl sm:text-2xl md:text-3xl font-bold text-purple-600 transition-all duration-300 ${
                isCompact ? 'scale-90' : 'scale-100'
              }`}
              onComplete={() => setIsComplete(true)}
            />
          </div>
          
          <div className="mt-4 sm:mt-8 text-center text-gray-600 text-xs sm:text-sm">
            <p className="mb-1">This counter shows social media followers growing from 1K to 10K.</p>
            <p>The animation uses a pulse effect for attention-grabbing display.</p>
            {isComplete && (
              <p className="text-purple-500 font-medium mt-2">10K followers milestone reached!</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Example_19; 