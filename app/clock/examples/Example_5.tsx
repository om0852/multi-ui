"use client"

import React from 'react';
import Clock5 from '../_components/Clock_5';
import { FaClock } from 'react-icons/fa6';

const Example_5: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-6 sm:py-8">
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold mb-2 flex items-center">
            <FaClock className="mr-2 text-indigo-500" />
            LED Digital Clock
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {/* Classic LED */}
          <div className="p-4 sm:p-6 rounded-lg bg-white shadow-lg">
            <h2 className="text-lg sm:text-xl font-semibold mb-4">Classic LED</h2>
            <div className="h-32 sm:h-40 overflow-hidden rounded-lg">
              <Clock5 
                containerClassName="flex justify-center items-center h-full bg-black" 
                digitClassName="text-2xl sm:text-4xl font-bold text-red-500 mx-1"
              />
            </div>
          </div>

          {/* Blue LED */}
          <div className="p-4 sm:p-6 rounded-lg bg-white shadow-lg">
            <h2 className="text-lg sm:text-xl font-semibold mb-4">Blue LED</h2>
            <div className="h-32 sm:h-40 overflow-hidden rounded-lg">
              <Clock5 
                containerClassName="flex justify-center items-center h-full bg-gray-900" 
                digitClassName="text-2xl sm:text-4xl font-bold text-blue-400 mx-1"
                is12HourFormat={true}
              />
            </div>
          </div>

          {/* Green LED */}
          <div className="p-4 sm:p-6 rounded-lg bg-white shadow-lg">
            <h2 className="text-lg sm:text-xl font-semibold mb-4">Green LED</h2>
            <div className="h-32 sm:h-40 overflow-hidden rounded-lg">
              <Clock5 
                containerClassName="flex justify-center items-center h-full bg-gray-900" 
                digitClassName="text-2xl sm:text-4xl font-bold text-green-400 mx-1"
                formatter={(value) => value.toString().padStart(2, '0')}
              />
            </div>
          </div>

          {/* Amber LED */}
          <div className="p-4 sm:p-6 rounded-lg bg-white shadow-lg">
            <h2 className="text-lg sm:text-xl font-semibold mb-4">Amber LED</h2>
            <div className="h-32 sm:h-40 overflow-hidden rounded-lg">
              <Clock5 
                containerClassName="flex justify-center items-center h-full bg-gray-900" 
                digitClassName="text-2xl sm:text-4xl font-bold text-amber-400 mx-1"
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