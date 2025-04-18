"use client"

import React from 'react';
import DigitalClock from '../_components/Clock_4';
import { FaClock } from 'react-icons/fa6';

const Example_4: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-6 sm:py-8">
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold mb-2 flex items-center">
            <FaClock className="mr-2 text-teal-500" />
            Digital Clock with Date
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {/* Default Style */}
          <div className="p-4 sm:p-6 rounded-lg bg-white shadow-lg">
            <h2 className="text-lg sm:text-xl font-semibold mb-4">Default Style</h2>
            <div className="h-32 sm:h-40 overflow-hidden rounded-lg">
              <DigitalClock 
                containerClassName="flex justify-center items-center h-full bg-gradient-to-br from-teal-500 to-blue-600" 
                digitClassName="text-2xl sm:text-4xl font-bold text-white mx-1"
              />
            </div>
          </div>

          {/* 12-Hour Format */}
          <div className="p-4 sm:p-6 rounded-lg bg-white shadow-lg">
            <h2 className="text-lg sm:text-xl font-semibold mb-4">12-Hour Format</h2>
            <div className="h-32 sm:h-40 overflow-hidden rounded-lg">
              <DigitalClock 
                containerClassName="flex justify-center items-center h-full bg-gradient-to-br from-purple-500 to-pink-600" 
                digitClassName="text-2xl sm:text-4xl font-bold text-white mx-1"
                is12HourFormat={true}
              />
            </div>
          </div>

          {/* Modern Style */}
          <div className="p-4 sm:p-6 rounded-lg bg-white shadow-lg">
            <h2 className="text-lg sm:text-xl font-semibold mb-4">Modern Style</h2>
            <div className="h-32 sm:h-40 overflow-hidden rounded-lg">
              <DigitalClock 
                containerClassName="flex justify-center items-center h-full bg-gradient-to-br from-indigo-500 to-violet-600" 
                digitClassName="text-2xl sm:text-4xl font-bold text-white mx-1"
                formatter={(value) => value.toString().padStart(2, '0')}
              />
            </div>
          </div>

          {/* Fast Update */}
          <div className="p-4 sm:p-6 rounded-lg bg-white shadow-lg">
            <h2 className="text-lg sm:text-xl font-semibold mb-4">Fast Update</h2>
            <div className="h-32 sm:h-40 overflow-hidden rounded-lg">
              <DigitalClock 
                containerClassName="flex justify-center items-center h-full bg-gradient-to-br from-emerald-500 to-green-600" 
                digitClassName="text-2xl sm:text-4xl font-bold text-white mx-1"
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