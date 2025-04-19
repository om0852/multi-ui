"use client"

import React from 'react';
import NumericClock from '../tsx/Clock_6';
import { FaClock } from 'react-icons/fa6';

const Example_6: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-3 py-4 sm:px-4 sm:py-6">
        <div className="mb-4 sm:mb-6">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 flex items-center">
            <FaClock className="mr-2 text-gray-700" />
            Retro Digital Clock
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
          {/* Classic Style */}
          <div className="p-3 sm:p-4 md:p-6 rounded-lg bg-white shadow-lg">
            <h2 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-4">Classic Style</h2>
            <div className="h-24 sm:h-32 md:h-40 overflow-hidden rounded-lg">
              <NumericClock 
                containerClassName="flex justify-center items-center h-full bg-gray-900" 
                digitClassName="w-8 sm:w-12 md:w-16 h-16 sm:h-20 md:h-32 border-2 border-gray-500 text-xl sm:text-2xl md:text-4xl font-mono text-white mx-0.5 sm:mx-1 flex items-center justify-center bg-gray-800 rounded-lg"
              />
            </div>
          </div>

          {/* 12-Hour Format */}
          <div className="p-3 sm:p-4 md:p-6 rounded-lg bg-white shadow-lg">
            <h2 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-4">12-Hour Format</h2>
            <div className="h-24 sm:h-32 md:h-40 overflow-hidden rounded-lg">
              <NumericClock 
                containerClassName="flex justify-center items-center h-full bg-gray-900" 
                digitClassName="w-8 sm:w-12 md:w-16 h-16 sm:h-20 md:h-32 border-2 border-amber-500 text-xl sm:text-2xl md:text-4xl font-mono text-amber-400 mx-0.5 sm:mx-1 flex items-center justify-center bg-gray-800 rounded-lg"
                is12HourFormat={true}
              />
            </div>
          </div>

          {/* Red LED */}
          <div className="p-3 sm:p-4 md:p-6 rounded-lg bg-white shadow-lg">
            <h2 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-4">Red LED</h2>
            <div className="h-24 sm:h-32 md:h-40 overflow-hidden rounded-lg">
              <NumericClock 
                containerClassName="flex justify-center items-center h-full bg-gray-900" 
                digitClassName="w-8 sm:w-12 md:w-16 h-16 sm:h-20 md:h-32 border-2 border-red-500 text-xl sm:text-2xl md:text-4xl font-mono text-red-500 mx-0.5 sm:mx-1 flex items-center justify-center bg-gray-800 rounded-lg"
                formatter={(value) => value.toString().padStart(2, '0')}
              />
            </div>
          </div>

          {/* Blue LED */}
          <div className="p-3 sm:p-4 md:p-6 rounded-lg bg-white shadow-lg">
            <h2 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-4">Blue LED</h2>
            <div className="h-24 sm:h-32 md:h-40 overflow-hidden rounded-lg">
              <NumericClock 
                containerClassName="flex justify-center items-center h-full bg-gray-900" 
                digitClassName="w-8 sm:w-12 md:w-16 h-16 sm:h-20 md:h-32 border-2 border-blue-500 text-xl sm:text-2xl md:text-4xl font-mono text-blue-400 mx-0.5 sm:mx-1 flex items-center justify-center bg-gray-800 rounded-lg"
                interval={500}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Example_6; 