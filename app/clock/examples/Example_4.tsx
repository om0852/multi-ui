"use client"

import React from 'react';
import DigitalClock from '../_components/Clock_4';
import { FaClock } from 'react-icons/fa6';

const Example_4: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-3 py-4 sm:px-4 sm:py-6">
        <div className="mb-4 sm:mb-6">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 flex items-center">
            <FaClock className="mr-2 text-teal-500" />
            Digital Clock with Date
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
          {/* Default Style */}
          <div className="p-3 sm:p-4 md:p-6 rounded-lg bg-white shadow-lg">
            <h2 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-4">Default Style</h2>
            <div className="h-24 sm:h-32 md:h-40 overflow-hidden rounded-lg">
              <DigitalClock 
                containerClassName="flex justify-center items-center h-full bg-gradient-to-br from-teal-500 to-blue-600" 
                digitClassName="text-xl sm:text-2xl md:text-4xl font-bold text-white mx-0.5 sm:mx-1"
              />
            </div>
          </div>

          {/* 12-Hour Format */}
          <div className="p-3 sm:p-4 md:p-6 rounded-lg bg-white shadow-lg">
            <h2 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-4">12-Hour Format</h2>
            <div className="h-24 sm:h-32 md:h-40 overflow-hidden rounded-lg">
              <DigitalClock 
                containerClassName="flex justify-center items-center h-full bg-gradient-to-br from-purple-500 to-pink-600" 
                digitClassName="text-xl sm:text-2xl md:text-4xl font-bold text-white mx-0.5 sm:mx-1"
                is12HourFormat={true}
              />
            </div>
          </div>

          {/* Modern Style */}
          <div className="p-3 sm:p-4 md:p-6 rounded-lg bg-white shadow-lg">
            <h2 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-4">Modern Style</h2>
            <div className="h-24 sm:h-32 md:h-40 overflow-hidden rounded-lg">
              <DigitalClock 
                containerClassName="flex justify-center items-center h-full bg-gradient-to-br from-indigo-500 to-violet-600" 
                digitClassName="text-xl sm:text-2xl md:text-4xl font-bold text-white mx-0.5 sm:mx-1"
                formatter={(value) => value.toString().padStart(2, '0')}
              />
            </div>
          </div>

          {/* Fast Update */}
          <div className="p-3 sm:p-4 md:p-6 rounded-lg bg-white shadow-lg">
            <h2 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-4">Fast Update</h2>
            <div className="h-24 sm:h-32 md:h-40 overflow-hidden rounded-lg">
              <DigitalClock 
                containerClassName="flex justify-center items-center h-full bg-gradient-to-br from-emerald-500 to-green-600" 
                digitClassName="text-xl sm:text-2xl md:text-4xl font-bold text-white mx-0.5 sm:mx-1"
                interval={500}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Example_4; 