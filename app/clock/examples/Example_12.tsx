"use client"

import React from 'react';
import GradientClock from '../_components/Clock_12';
import { FaClock } from 'react-icons/fa6';

const Example_12: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-6 sm:py-8">
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold mb-2 flex items-center">
            <FaClock className="mr-2 text-blue-500" />
            Gradient Clock Collection
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {/* Ocean Theme */}
          <div className="p-4 sm:p-6 rounded-lg bg-white shadow-lg">
            <h2 className="text-lg sm:text-xl font-semibold mb-4">Ocean Theme</h2>
            <div className="h-48 sm:h-64 flex items-center justify-center">
              <GradientClock 
                size={180}
                hourHandColor="bg-blue-600"
                minuteHandColor="bg-blue-500"
                secondHandColor="bg-blue-400"
                backgroundColor="bg-gradient-to-br from-blue-100 to-cyan-200"
                numberColor="text-blue-800"
              />
            </div>
          </div>

          {/* Sunset Theme */}
          <div className="p-4 sm:p-6 rounded-lg bg-white shadow-lg">
            <h2 className="text-lg sm:text-xl font-semibold mb-4">Sunset Theme</h2>
            <div className="h-48 sm:h-64 flex items-center justify-center">
              <GradientClock 
                size={180}
                hourHandColor="bg-orange-600"
                minuteHandColor="bg-orange-500"
                secondHandColor="bg-orange-400"
                backgroundColor="bg-gradient-to-br from-orange-100 to-pink-200"
                numberColor="text-orange-800"
              />
            </div>
          </div>

          {/* Forest Theme */}
          <div className="p-4 sm:p-6 rounded-lg bg-white shadow-lg">
            <h2 className="text-lg sm:text-xl font-semibold mb-4">Forest Theme</h2>
            <div className="h-48 sm:h-64 flex items-center justify-center">
              <GradientClock 
                size={180}
                hourHandColor="bg-green-600"
                minuteHandColor="bg-green-500"
                secondHandColor="bg-green-400"
                backgroundColor="bg-gradient-to-br from-green-100 to-emerald-200"
                numberColor="text-green-800"
              />
            </div>
          </div>

          {/* Lavender Theme */}
          <div className="p-4 sm:p-6 rounded-lg bg-white shadow-lg">
            <h2 className="text-lg sm:text-xl font-semibold mb-4">Lavender Theme</h2>
            <div className="h-48 sm:h-64 flex items-center justify-center">
              <GradientClock 
                size={180}
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