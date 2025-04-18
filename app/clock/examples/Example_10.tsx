"use client"

import React from 'react';
import EnhancedAnalogClock from '../_components/Clock_10';
import { FaClock } from 'react-icons/fa6';

const Example_10: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-6 sm:py-8">
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold mb-2 flex items-center">
            <FaClock className="mr-2 text-indigo-500" />
            Digital Analog Clock
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {/* Modern Style */}
          <div className="p-4 sm:p-6 rounded-lg bg-white shadow-lg">
            <h2 className="text-lg sm:text-xl font-semibold mb-4">Modern Style</h2>
            <div className="h-48 sm:h-64 flex items-center justify-center">
              <EnhancedAnalogClock 
                size={180}
                borderColor="border-gray-400"
                hourHandColor="bg-gray-800"
                minuteHandColor="bg-gray-600"
                secondHandColor="bg-red-500"
                backgroundColor="bg-white"
                numberColor="text-gray-800"
                digitalTimeColor="text-gray-600"
              />
            </div>
          </div>

          {/* Dark Theme */}
          <div className="p-4 sm:p-6 rounded-lg bg-white shadow-lg">
            <h2 className="text-lg sm:text-xl font-semibold mb-4">Dark Theme</h2>
            <div className="h-48 sm:h-64 flex items-center justify-center">
              <EnhancedAnalogClock 
                size={180}
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
          <div className="p-4 sm:p-6 rounded-lg bg-white shadow-lg">
            <h2 className="text-lg sm:text-xl font-semibold mb-4">Colorful Theme</h2>
            <div className="h-48 sm:h-64 flex items-center justify-center">
              <EnhancedAnalogClock 
                size={180}
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
          <div className="p-4 sm:p-6 rounded-lg bg-white shadow-lg">
            <h2 className="text-lg sm:text-xl font-semibold mb-4">Minimalist</h2>
            <div className="h-48 sm:h-64 flex items-center justify-center">
              <EnhancedAnalogClock 
                size={180}
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