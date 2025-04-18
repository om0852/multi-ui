"use client"

import React from 'react';
import AnalogClock from '../_components/Clock_8';
import { FaClock } from 'react-icons/fa6';

const Example_8: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-6 sm:py-8">
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold mb-2 flex items-center">
            <FaClock className="mr-2 text-purple-500" />
            Analog Clock Collection
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {/* Classic Style */}
          <div className="p-4 sm:p-6 rounded-lg bg-white shadow-lg">
            <h2 className="text-lg sm:text-xl font-semibold mb-4">Classic Style</h2>
            <div className="h-48 sm:h-64 flex items-center justify-center">
              <AnalogClock 
                size={180}
                borderColor="border-gray-400"
                hourColor="bg-gray-800"
                minuteColor="bg-gray-600"
                secondColor="bg-red-500"
                backgroundColor="bg-white"
              />
            </div>
          </div>

          {/* Dark Theme */}
          <div className="p-4 sm:p-6 rounded-lg bg-white shadow-lg">
            <h2 className="text-lg sm:text-xl font-semibold mb-4">Dark Theme</h2>
            <div className="h-48 sm:h-64 flex items-center justify-center">
              <AnalogClock 
                size={180}
                borderColor="border-gray-600"
                hourColor="bg-gray-300"
                minuteColor="bg-gray-400"
                secondColor="bg-red-400"
                backgroundColor="bg-gray-900"
              />
            </div>
          </div>

          {/* Colorful Theme */}
          <div className="p-4 sm:p-6 rounded-lg bg-white shadow-lg">
            <h2 className="text-lg sm:text-xl font-semibold mb-4">Colorful Theme</h2>
            <div className="h-48 sm:h-64 flex items-center justify-center">
              <AnalogClock 
                size={180}
                borderColor="border-purple-400"
                hourColor="bg-blue-500"
                minuteColor="bg-green-500"
                secondColor="bg-pink-500"
                backgroundColor="bg-gradient-to-br from-indigo-100 to-purple-100"
              />
            </div>
          </div>

          {/* Minimalist */}
          <div className="p-4 sm:p-6 rounded-lg bg-white shadow-lg">
            <h2 className="text-lg sm:text-xl font-semibold mb-4">Minimalist</h2>
            <div className="h-48 sm:h-64 flex items-center justify-center">
              <AnalogClock 
                size={180}
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