"use client"

import React from 'react';
import ModernClock from '../_components/Clock_14';
import { FaClock } from 'react-icons/fa6';

const Example_14: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-3 py-4 sm:px-4 sm:py-6">
        <div className="mb-4 sm:mb-6">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 flex items-center">
            <FaClock className="mr-2 text-indigo-500" />
            Modern Clock Collection
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
          {/* Light Theme */}
          <div className="p-3 sm:p-4 md:p-6 rounded-lg bg-white shadow-lg">
            <h2 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-4">Light Theme</h2>
            <div className="h-36 sm:h-48 md:h-64 flex items-center justify-center transform scale-90 sm:scale-100">
              <ModernClock 
                size="medium"
                containerClassName="flex justify-center items-center"
                digitClassName="text-gray-800 text-2xl sm:text-3xl md:text-4xl"
                labelClassName="text-gray-500 text-xs sm:text-sm"
              />
            </div>
          </div>

          {/* Dark Theme */}
          <div className="p-3 sm:p-4 md:p-6 rounded-lg bg-gray-900 shadow-lg">
            <h2 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-4 text-white">Dark Theme</h2>
            <div className="h-36 sm:h-48 md:h-64 flex items-center justify-center transform scale-90 sm:scale-100">
              <ModernClock 
                size="medium"
                containerClassName="flex justify-center items-center"
                digitClassName="text-white text-2xl sm:text-3xl md:text-4xl"
                labelClassName="text-gray-400 text-xs sm:text-sm"
              />
            </div>
          </div>

          {/* Colorful Theme */}
          <div className="p-3 sm:p-4 md:p-6 rounded-lg bg-white shadow-lg">
            <h2 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-4">Colorful Theme</h2>
            <div className="h-36 sm:h-48 md:h-64 flex items-center justify-center transform scale-90 sm:scale-100">
              <ModernClock 
                size="medium"
                containerClassName="flex justify-center items-center"
                digitClassName="text-teal-500 text-2xl sm:text-3xl md:text-4xl"
                labelClassName="text-pink-500 text-xs sm:text-sm"
              />
            </div>
          </div>

          {/* Minimal Theme */}
          <div className="p-3 sm:p-4 md:p-6 rounded-lg bg-white shadow-lg">
            <h2 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-4">Minimal Theme</h2>
            <div className="h-36 sm:h-48 md:h-64 flex items-center justify-center transform scale-90 sm:scale-100">
              <ModernClock 
                size="medium"
                containerClassName="flex justify-center items-center"
                digitClassName="text-gray-600 text-2xl sm:text-3xl md:text-4xl"
                labelClassName="text-gray-400 text-xs sm:text-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Example_14; 