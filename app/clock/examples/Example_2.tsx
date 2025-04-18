"use client"

import React from 'react';
import NumericClock from '../_components/Clock_2';
import { FaClock } from 'react-icons/fa6';

const Example_2: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-3 py-4 sm:px-4 sm:py-6">
        <div className="mb-4 sm:mb-6">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 flex items-center">
            <FaClock className="mr-2 text-purple-500" />
            Animated Numeric Clock
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
          {/* Gradient Style */}
          <div className="p-3 sm:p-4 md:p-6 rounded-lg bg-white shadow-lg">
            <h2 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-4">Gradient Style</h2>
            <div className="h-24 sm:h-32 md:h-40 overflow-hidden rounded-lg">
              <NumericClock 
                containerClassName="flex justify-center items-center h-full bg-gradient-to-r from-blue-500 to-purple-700" 
                digitClassName="text-xl sm:text-2xl md:text-4xl font-extrabold text-white mx-0.5 sm:mx-1"
              />
            </div>
          </div>

          {/* 12-Hour Format */}
          <div className="p-3 sm:p-4 md:p-6 rounded-lg bg-white shadow-lg">
            <h2 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-4">12-Hour Format</h2>
            <div className="h-24 sm:h-32 md:h-40 overflow-hidden rounded-lg">
              <NumericClock 
                containerClassName="flex justify-center items-center h-full bg-gradient-to-r from-pink-500 to-orange-500" 
                digitClassName="text-xl sm:text-2xl md:text-4xl font-extrabold text-white mx-0.5 sm:mx-1"
                is12HourFormat={true}
              />
            </div>
          </div>

          {/* Dark Theme */}
          <div className="p-3 sm:p-4 md:p-6 rounded-lg bg-white shadow-lg">
            <h2 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-4">Dark Theme</h2>
            <div className="h-24 sm:h-32 md:h-40 overflow-hidden rounded-lg">
              <NumericClock 
                containerClassName="flex justify-center items-center h-full bg-gray-900" 
                digitClassName="text-xl sm:text-2xl md:text-4xl font-extrabold text-green-400 mx-0.5 sm:mx-1"
                interval={500}
              />
            </div>
          </div>

          {/* Custom Formatter */}
          <div className="p-3 sm:p-4 md:p-6 rounded-lg bg-white shadow-lg">
            <h2 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-4">Custom Formatter</h2>
            <div className="h-24 sm:h-32 md:h-40 overflow-hidden rounded-lg">
              <NumericClock 
                containerClassName="flex justify-center items-center h-full bg-gradient-to-r from-indigo-500 to-cyan-400" 
                digitClassName="text-xl sm:text-2xl md:text-4xl font-extrabold text-white mx-0.5 sm:mx-1"
                formatter={(value) => value.toString().padStart(2, '•')}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Example_2; 