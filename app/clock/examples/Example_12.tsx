"use client"

import React from 'react';
import GradientClock from '../tsx/Clock_12';
import { FaClock } from 'react-icons/fa6';

const Example_12: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-3 py-4 sm:px-4 sm:py-6">
        <div className="mb-4 sm:mb-6">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 flex items-center">
            <FaClock className="mr-2 text-blue-500" />
            Gradient Clock Collection
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
          {/* Ocean Theme */}
          <div className="p-3 sm:p-4 md:p-6 rounded-lg bg-white shadow-lg">
            <h2 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-4">Ocean Theme</h2>
            <div className="h-36 sm:h-48 md:h-64 flex items-center justify-center transform scale-90 sm:scale-100">
              <GradientClock 
                size={120}
                hourHandColor="bg-blue-600"
                minuteHandColor="bg-blue-500"
                secondHandColor="bg-blue-400"
                backgroundColor="bg-gradient-to-br from-blue-100 to-cyan-200"
                numberColor="text-blue-800"
              />
            </div>
          </div>

          {/* Sunset Theme */}
          <div className="p-3 sm:p-4 md:p-6 rounded-lg bg-white shadow-lg">
            <h2 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-4">Sunset Theme</h2>
            <div className="h-36 sm:h-48 md:h-64 flex items-center justify-center transform scale-90 sm:scale-100">
              <GradientClock 
                size={120}
                hourHandColor="bg-orange-600"
                minuteHandColor="bg-orange-500"
                secondHandColor="bg-orange-400"
                backgroundColor="bg-gradient-to-br from-orange-100 to-pink-200"
                numberColor="text-orange-800"
              />
            </div>
          </div>

          {/* Forest Theme */}
          <div className="p-3 sm:p-4 md:p-6 rounded-lg bg-white shadow-lg">
            <h2 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-4">Forest Theme</h2>
            <div className="h-36 sm:h-48 md:h-64 flex items-center justify-center transform scale-90 sm:scale-100">
              <GradientClock 
                size={120}
                hourHandColor="bg-green-600"
                minuteHandColor="bg-green-500"
                secondHandColor="bg-green-400"
                backgroundColor="bg-gradient-to-br from-green-100 to-emerald-200"
                numberColor="text-green-800"
              />
            </div>
          </div>

          {/* Purple Theme */}
          <div className="p-3 sm:p-4 md:p-6 rounded-lg bg-white shadow-lg">
            <h2 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-4">Purple Theme</h2>
            <div className="h-36 sm:h-48 md:h-64 flex items-center justify-center transform scale-90 sm:scale-100">
              <GradientClock 
                size={120}
                hourHandColor="bg-purple-600"
                minuteHandColor="bg-purple-500"
                secondHandColor="bg-purple-400"
                backgroundColor="bg-gradient-to-br from-purple-100 to-violet-200"
                numberColor="text-purple-800"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Example_12; 