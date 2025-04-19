"use client"

import React from 'react';
import Clock5 from '../tsx/Clock_5';
import { FaClock } from 'react-icons/fa6';

const Example_5: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-3 py-4 sm:px-4 sm:py-6">
        <div className="mb-4 sm:mb-6">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 flex items-center">
            <FaClock className="mr-2 text-indigo-500" />
            LED Digital Clock
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
          {/* Classic LED */}
          <div className="p-3 sm:p-4 md:p-6 rounded-lg bg-white shadow-lg">
            <h2 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-4">Classic LED</h2>
            <div className="h-24 sm:h-32 md:h-40 overflow-hidden rounded-lg">
              <Clock5 
                containerClassName="flex justify-center items-center h-full bg-black" 
                digitClassName="text-xl sm:text-2xl md:text-4xl font-bold text-red-500 mx-0.5 sm:mx-1"
              />
            </div>
          </div>

          {/* Blue LED */}
          <div className="p-3 sm:p-4 md:p-6 rounded-lg bg-white shadow-lg">
            <h2 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-4">Blue LED</h2>
            <div className="h-24 sm:h-32 md:h-40 overflow-hidden rounded-lg">
              <Clock5 
                containerClassName="flex justify-center items-center h-full bg-gray-900" 
                digitClassName="text-xl sm:text-2xl md:text-4xl font-bold text-blue-400 mx-0.5 sm:mx-1"
                is12HourFormat={true}
              />
            </div>
          </div>

          {/* Green LED */}
          <div className="p-3 sm:p-4 md:p-6 rounded-lg bg-white shadow-lg">
            <h2 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-4">Green LED</h2>
            <div className="h-24 sm:h-32 md:h-40 overflow-hidden rounded-lg">
              <Clock5 
                containerClassName="flex justify-center items-center h-full bg-gray-900" 
                digitClassName="text-xl sm:text-2xl md:text-4xl font-bold text-green-400 mx-0.5 sm:mx-1"
                formatter={(value) => value.toString().padStart(2, '0')}
              />
            </div>
          </div>

          {/* Amber LED */}
          <div className="p-3 sm:p-4 md:p-6 rounded-lg bg-white shadow-lg">
            <h2 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-4">Amber LED</h2>
            <div className="h-24 sm:h-32 md:h-40 overflow-hidden rounded-lg">
              <Clock5 
                containerClassName="flex justify-center items-center h-full bg-gray-900" 
                digitClassName="text-xl sm:text-2xl md:text-4xl font-bold text-amber-400 mx-0.5 sm:mx-1"
                interval={500}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Example_5; 