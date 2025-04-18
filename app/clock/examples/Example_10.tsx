"use client"

import React from 'react';
import EnhancedAnalogClock from '../_components/Clock_10';
import { FaClock } from 'react-icons/fa6';

const Example_10: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-3 py-4 sm:px-4 sm:py-6">
        <div className="mb-4 sm:mb-6">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 flex items-center">
            <FaClock className="mr-2 text-indigo-500" />
            Digital Analog Clock
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
          {/* Modern Style */}
          <div className="p-3 sm:p-4 md:p-6 rounded-lg bg-white shadow-lg">
            <h2 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-4">Modern Style</h2>
            <div className="h-36 sm:h-48 md:h-64 flex items-center justify-center transform scale-90 sm:scale-100">
              <EnhancedAnalogClock 
                size={120}
                className="scale-75 sm:scale-100"
                borderColor="border-gray-700"
                hourHandColor="bg-black"
                minuteHandColor="bg-blue-700"
                secondHandColor="bg-red-500"
                backgroundColor="bg-gray-900"
                numberColor="text-white"
                digitalTimeColor="text-white"
              />
            </div>
          </div>

          {/* Dark Theme */}
          <div className="p-3 sm:p-4 md:p-6 rounded-lg bg-white shadow-lg">
            <h2 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-4">Dark Theme</h2>
            <div className="h-36 sm:h-48 md:h-64 flex items-center justify-center transform scale-90 sm:scale-100">
              <EnhancedAnalogClock 
                size={120}
                borderColor="border-gray-600"
                hourHandColor="bg-gray-300"
                minuteHandColor="bg-gray-400"
                secondHandColor="bg-red-400"
                backgroundColor="bg-gray-900"
                numberColor="text-gray-300"
                digitalTimeColor="text-gray-400"
              />
            </div>
          </div>

          {/* Colorful Theme */}
          <div className="p-3 sm:p-4 md:p-6 rounded-lg bg-white shadow-lg">
            <h2 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-4">Colorful Theme</h2>
            <div className="h-36 sm:h-48 md:h-64 flex items-center justify-center transform scale-90 sm:scale-100">
              <EnhancedAnalogClock 
                size={120}
                borderColor="border-purple-400"
                hourHandColor="bg-blue-500"
                minuteHandColor="bg-green-500"
                secondHandColor="bg-pink-500"
                backgroundColor="bg-gradient-to-br from-indigo-100 to-purple-100"
                numberColor="text-indigo-600"
                digitalTimeColor="text-purple-600"
              />
            </div>
          </div>

          {/* Minimalist */}
          <div className="p-3 sm:p-4 md:p-6 rounded-lg bg-white shadow-lg">
            <h2 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-4">Minimalist</h2>
            <div className="h-36 sm:h-48 md:h-64 flex items-center justify-center transform scale-90 sm:scale-100">
              <EnhancedAnalogClock 
                size={120}
                borderColor="border-gray-200"
                hourHandColor="bg-gray-400"
                minuteHandColor="bg-gray-400"
                secondHandColor="bg-gray-400"
                backgroundColor="bg-gray-50"
                numberColor="text-gray-400"
                digitalTimeColor="text-gray-500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Example_10; 