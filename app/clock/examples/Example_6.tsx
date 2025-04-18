"use client"

import React from 'react';
import NumericClock from '../_components/Clock_6';
import { FaClock } from 'react-icons/fa6';

const Example_6: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-6 sm:py-8">
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold mb-2 flex items-center">
            <FaClock className="mr-2 text-gray-700" />
            Retro Digital Clock
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {/* Classic Style */}
          <div className="p-4 sm:p-6 rounded-lg bg-white shadow-lg">
            <h2 className="text-lg sm:text-xl font-semibold mb-4">Classic Style</h2>
            <div className="h-32 sm:h-40 overflow-hidden rounded-lg">
              <NumericClock 
                containerClassName="flex justify-center items-center h-full bg-gray-900" 
                digitClassName="w-12 sm:w-16 h-20 sm:h-32 border-2 border-gray-500 text-2xl sm:text-4xl font-mono text-white mx-1 flex items-center justify-center bg-gray-800 rounded-lg"
              />
            </div>
          </div>

          {/* 12-Hour Format */}
          <div className="p-4 sm:p-6 rounded-lg bg-white shadow-lg">
            <h2 className="text-lg sm:text-xl font-semibold mb-4">12-Hour Format</h2>
            <div className="h-32 sm:h-40 overflow-hidden rounded-lg">
              <NumericClock 
                containerClassName="flex justify-center items-center h-full bg-gray-900" 
                digitClassName="w-12 sm:w-16 h-20 sm:h-32 border-2 border-amber-500 text-2xl sm:text-4xl font-mono text-amber-400 mx-1 flex items-center justify-center bg-gray-800 rounded-lg"
                is12HourFormat={true}
              />
            </div>
          </div>

          {/* Red LED */}
          <div className="p-4 sm:p-6 rounded-lg bg-white shadow-lg">
            <h2 className="text-lg sm:text-xl font-semibold mb-4">Red LED</h2>
            <div className="h-32 sm:h-40 overflow-hidden rounded-lg">
              <NumericClock 
                containerClassName="flex justify-center items-center h-full bg-gray-900" 
                digitClassName="w-12 sm:w-16 h-20 sm:h-32 border-2 border-red-500 text-2xl sm:text-4xl font-mono text-red-500 mx-1 flex items-center justify-center bg-gray-800 rounded-lg"
                formatter={(value) => value.toString().padStart(2, '0')}
              />
            </div>
          </div>

          {/* Green LED */}
          <div className="p-4 sm:p-6 rounded-lg bg-white shadow-lg">
            <h2 className="text-lg sm:text-xl font-semibold mb-4">Green LED</h2>
            <div className="h-32 sm:h-40 overflow-hidden rounded-lg">
              <NumericClock 
                containerClassName="flex justify-center items-center h-full bg-gray-900" 
                digitClassName="w-12 sm:w-16 h-20 sm:h-32 border-2 border-green-500 text-2xl sm:text-4xl font-mono text-green-500 mx-1 flex items-center justify-center bg-gray-800 rounded-lg"
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