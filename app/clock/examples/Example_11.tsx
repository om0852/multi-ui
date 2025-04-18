"use client"

import React from 'react';
import MinimalistClock from '../_components/Clock_11';
import { FaClock } from 'react-icons/fa6';

const Example_11: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-3 py-4 sm:px-4 sm:py-6">
        <div className="mb-4 sm:mb-6">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 flex items-center">
            <FaClock className="mr-2 text-gray-600" />
            Minimalist Clock Collection
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
          {/* Simple Style */}
          <div className="p-3 sm:p-4 md:p-6 rounded-lg bg-white shadow-lg">
            <h2 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-4">Simple Style</h2>
            <div className="h-36 sm:h-48 md:h-64 flex items-center justify-center transform scale-90 sm:scale-100">
              <MinimalistClock 
                size={120}
                hourHandColor="bg-gray-600"
                minuteHandColor="bg-gray-500"
                secondHandColor="bg-gray-400"
                backgroundColor="bg-white"
                borderColor="border-gray-300"
              />
            </div>
          </div>

          {/* Modern Style */}
          <div className="p-3 sm:p-4 md:p-6 rounded-lg bg-white shadow-lg">
            <h2 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-4">Modern Style</h2>
            <div className="h-36 sm:h-48 md:h-64 flex items-center justify-center transform scale-90 sm:scale-100">
              <MinimalistClock 
                size={120}
                hourHandColor="bg-gray-700"
                minuteHandColor="bg-gray-600"
                secondHandColor="bg-gray-500"
                backgroundColor="bg-gray-50"
                numberColor="text-gray-400"
              />
            </div>
          </div>

          {/* Elegant Style */}
          <div className="p-3 sm:p-4 md:p-6 rounded-lg bg-white shadow-lg">
            <h2 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-4">Elegant Style</h2>
            <div className="h-36 sm:h-48 md:h-64 flex items-center justify-center transform scale-90 sm:scale-100">
              <MinimalistClock 
                size={120}
                hourHandColor="bg-gray-800"
                minuteHandColor="bg-gray-700"
                secondHandColor="bg-gray-600"
                backgroundColor="bg-white"
                numberColor="text-gray-300"
              />
            </div>
          </div>

          {/* Classic Style */}
          <div className="p-3 sm:p-4 md:p-6 rounded-lg bg-white shadow-lg">
            <h2 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-4">Classic Style</h2>
            <div className="h-36 sm:h-48 md:h-64 flex items-center justify-center transform scale-90 sm:scale-100">
              <MinimalistClock 
                size={120}
                hourHandColor="bg-gray-500"
                minuteHandColor="bg-gray-400"
                secondHandColor="bg-gray-300"
                backgroundColor="bg-gray-50"
                borderColor="border-gray-200"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Example_11; 