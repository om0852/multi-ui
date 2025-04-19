"use client"

import React, { useState, useRef, useEffect } from 'react';
import Counter_8 from '../_components/Counter_8';

const Example_8: React.FC = () => {
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
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">Font Size Adjuster</h1>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 transition-all duration-300">
          <div className="mb-4 sm:mb-6 text-center">
            <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-gray-800">Text Scaling</h2>
            <Counter_8 
              from={12}
              to={24}
              duration={4}
              interval={0.25}
              formatter={(value) => `${value}px`}
              className={`text-xl sm:text-2xl md:text-3xl font-bold text-purple-600 transition-all duration-300 ${
                isCompact ? 'scale-90' : 'scale-100'
              }`}
              onComplete={() => setIsComplete(true)}
            />
          </div>
          
          <div className="mt-4 sm:mt-8 text-center text-gray-600 text-xs sm:text-sm">
            <p className="mb-1">This counter demonstrates font size scaling from 12px to 24px.</p>
            <p>The animation runs for 4 seconds with smooth transitions.</p>
            {isComplete && (
              <p className="text-green-500 font-medium mt-2">Font size animation complete!</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Example_8; 