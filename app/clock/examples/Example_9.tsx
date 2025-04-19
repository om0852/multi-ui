"use client"

import React from 'react';
import EnhancedAnalogClock from '../tsx/Clock_9';
import { FaClock } from 'react-icons/fa6';

const Example_9: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-3 py-4 sm:px-4 sm:py-6">
        <div className="mb-4 sm:mb-6">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 flex items-center">
            <FaClock className="mr-2 text-blue-500" />
            Enhanced Analog Clock
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
          {/* Modern Style */}
          <div className="p-3 sm:p-4 md:p-6 rounded-lg bg-white shadow-lg">
            <h2 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-4">Modern Style</h2>
            <div className="h-36 sm:h-48 md:h-64 flex items-center justify-center">
              <EnhancedAnalogClock 
                size={140}
                borderColor="border-gray-400"
                hourHandColor="bg-gray-800"
                minuteHandColor="bg-gray-600"
                secondHandColor="bg-red-500"
                backgroundColor="bg-white"
                numberColor="text-gray-800"
              />
            </div>
          </div>

          {/* Dark Theme */}
          <div className="p-3 sm:p-4 md:p-6 rounded-lg bg-white shadow-lg">
            <h2 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-4">Dark Theme</h2>
            <div className="h-36 sm:h-48 md:h-64 flex items-center justify-center">
              <EnhancedAnalogClock 
                size={140}
                borderColor="border-gray-600"
                hourHandColor="bg-gray-300"
                minuteHandColor="bg-gray-400"
                secondHandColor="bg-red-400"
                backgroundColor="bg-gray-900"
                numberColor="text-gray-300"
              />
            </div>
          </div>

          {/* Colorful Theme */}
          <div className="p-3 sm:p-4 md:p-6 rounded-lg bg-white shadow-lg">
            <h2 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-4">Colorful Theme</h2>
            <div className="h-36 sm:h-48 md:h-64 flex items-center justify-center">
              <EnhancedAnalogClock 
                size={140}
                borderColor="border-purple-400"
                hourHandColor="bg-blue-500"
                minuteHandColor="bg-green-500"
                secondHandColor="bg-red-500"
                backgroundColor="bg-gradient-to-br from-indigo-50 to-purple-50"
                numberColor="text-indigo-800"
              />
            </div>
          </div>

          {/* Minimalist */}
          <div className="p-3 sm:p-4 md:p-6 rounded-lg bg-white shadow-lg">
            <h2 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-4">Minimalist</h2>
            <div className="h-36 sm:h-48 md:h-64 flex items-center justify-center">
              <EnhancedAnalogClock 
                size={140}
                borderColor="border-gray-200"
                hourHandColor="bg-gray-400"
                minuteHandColor="bg-gray-400"
                secondHandColor="bg-gray-400"
                backgroundColor="bg-gray-50"
                numberColor="text-gray-400"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Example_9; 