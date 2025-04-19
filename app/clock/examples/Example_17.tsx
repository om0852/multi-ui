"use client"

import React from 'react';
import WorldClock from '../tsx/Clock_17';
import { FaEarthAmericas } from 'react-icons/fa6';

const Example_17: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-3 py-4 sm:px-4 sm:py-6">
        <div className="mb-4 sm:mb-6">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 flex items-center">
            <FaEarthAmericas className="mr-2 text-blue-500" />
            World Clock Collection
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
          {/* New York */}
          <div className="p-3 sm:p-4 md:p-6 rounded-lg bg-white shadow-lg">
            <h2 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-4">New York</h2>
            <div className="h-36 sm:h-48 md:h-64 flex items-center justify-center transform scale-90 sm:scale-100">
              <WorldClock 
              />
            </div>
          </div>

      
        </div>
      </div>
    </div>
  );
};

export default Example_17; 