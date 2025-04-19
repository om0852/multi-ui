"use client"

import React, { useState, useRef, useEffect } from 'react';
import Counter_3 from '../tsx/Counter_3';

const Example_3: React.FC = () => {
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
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">Bouncy Counter</h1>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 transition-all duration-300">
          <div className="mb-4 sm:mb-6 text-center">
            <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-gray-800">Download Progress</h2>
            <Counter_3 
              from={0}
              to={100}
              duration={3.5}
              easing="easeOut"
              formatter={(value) => `${value.toFixed(0)}%`}
              className={`mx-auto transition-all duration-300 ${isCompact ? 'scale-90' : 'scale-100'}`}
              onStart={() => console.log('Animation started')}
              onEnd={() => setIsComplete(true)}
              onComplete={(finalValue) => console.log(`Reached ${finalValue}%`)}
            />
          </div>
          
          <div className="mt-4 sm:mt-8 text-center text-gray-600 text-xs sm:text-sm">
            {isComplete ? (
              <p className="text-green-600 font-medium">Download complete!</p>
            ) : (
              <p>Downloading... Please wait while the counter reaches 100%.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Example_3; 