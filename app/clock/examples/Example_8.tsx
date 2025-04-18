"use client"

import React from 'react';
import AnalogClock from '../_components/Clock_8';
import { FaClock } from 'react-icons/fa6';

const Example_8: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-3 py-4 sm:px-4 sm:py-6">
        <div className="mb-4 sm:mb-6">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 flex items-center">
            <FaClock className="mr-2 text-purple-500" />
            Analog Clock Collection
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
          {/* Classic Style */}
          <div className="p-3 sm:p-4 md:p-6 rounded-lg bg-white shadow-lg">
            <h2 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-4">Classic Style</h2>
            <div className="h-36 sm:h-48 md:h-64 flex items-center justify-center">
              <AnalogClock 
                size={140}
                borderColor="border-gray-400"
                hourColor="bg-gray-800"
                minuteColor="bg-gray-600"
                secondColor="bg-red-500"
                backgroundColor="bg-white"
              />
            </div>
          </div>

          {/* Dark Theme */}
          <div className="p-3 sm:p-4 md:p-6 rounded-lg bg-white shadow-lg">
            <h2 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-4">Dark Theme</h2>
            <div className="h-36 sm:h-48 md:h-64 flex items-center justify-center">
              <AnalogClock 
                size={140}
                borderColor="border-gray-600"
                hourColor="bg-gray-300"
                minuteColor="bg-gray-400"
                secondColor="bg-red-400"
                backgroundColor="bg-gray-900"
              />
            </div>
          </div>

          {/* Colorful Theme */}
          <div className="p-3 sm:p-4 md:p-6 rounded-lg bg-white shadow-lg">
            <h2 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-4">Colorful Theme</h2>
            <div className="h-36 sm:h-48 md:h-64 flex items-center justify-center">
              <AnalogClock 
                size={140}
                borderColor="border-purple-400"
                hourColor="bg-blue-500"
                minuteColor="bg-green-500"
                secondColor="bg-red-500"
                backgroundColor="bg-gradient-to-br from-indigo-50 to-purple-50"
              />
            </div>
          </div>

          {/* Minimalist */}
          <div className="p-3 sm:p-4 md:p-6 rounded-lg bg-white shadow-lg">
            <h2 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-4">Minimalist</h2>
            <div className="h-36 sm:h-48 md:h-64 flex items-center justify-center">
              <AnalogClock 
                size={140}
                borderColor="border-gray-200"
                hourColor="bg-gray-400"
                minuteColor="bg-gray-400"
                secondColor="bg-gray-400"
                backgroundColor="bg-gray-50"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Example_8; 