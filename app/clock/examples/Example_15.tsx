"use client"

import React from 'react';
import MinimalistClock from '../tsx/Clock_15';
import { FaClock } from 'react-icons/fa6';

const Example_15: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-3 py-4 sm:px-4 sm:py-6">
        <div className="mb-4 sm:mb-6">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 flex items-center">
            <FaClock className="mr-2 text-gray-600" />
            Minimalist Digital Clock
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
          {/* Light Theme */}
          <div className="p-3 sm:p-4 md:p-6 rounded-lg bg-white shadow-lg">
            <h2 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-4">Light Theme</h2>
            <div className="h-36 sm:h-48 md:h-64 flex items-center justify-center transform scale-90 sm:scale-100">
              <MinimalistClock 
                className="text-gray-800 font-light text-3xl sm:text-4xl md:text-5xl"
              />
            </div>
          </div>

          {/* Dark Theme */}
          <div className="p-3 sm:p-4 md:p-6 rounded-lg bg-gray-900 shadow-lg">
            <h2 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-4 text-white">Dark Theme</h2>
            <div className="h-36 sm:h-48 md:h-64 flex items-center justify-center transform scale-90 sm:scale-100">
              <MinimalistClock 
                className="text-white font-light text-3xl sm:text-4xl md:text-5xl"
              />
            </div>
          </div>

          {/* Monochrome Theme */}
          <div className="p-3 sm:p-4 md:p-6 rounded-lg bg-white shadow-lg">
            <h2 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-4">Monochrome Theme</h2>
            <div className="h-36 sm:h-48 md:h-64 flex items-center justify-center transform scale-90 sm:scale-100">
              <MinimalistClock 
                className="text-gray-600 font-light text-3xl sm:text-4xl md:text-5xl"
              />
            </div>
          </div>

          {/* Subtle Theme */}
          <div className="p-3 sm:p-4 md:p-6 rounded-lg bg-white shadow-lg">
            <h2 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-4">Subtle Theme</h2>
            <div className="h-36 sm:h-48 md:h-64 flex items-center justify-center transform scale-90 sm:scale-100">
              <MinimalistClock 
                className="text-gray-400 font-light text-3xl sm:text-4xl md:text-5xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Example_15; 