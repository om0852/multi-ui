"use client"

import React from 'react';
import MinimalistClock from '../_components/Clock_11';
import { FaClock } from 'react-icons/fa6';

const Example_11: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-6 sm:py-8">
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold mb-2 flex items-center">
            <FaClock className="mr-2 text-gray-600" />
            Minimalist Clock Collection
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {/* Simple Style */}
          <div className="p-4 sm:p-6 rounded-lg bg-white shadow-lg">
            <h2 className="text-lg sm:text-xl font-semibold mb-4">Simple Style</h2>
            <div className="h-48 sm:h-64 flex items-center justify-center">
              <MinimalistClock 
                size={180}
                hourHandColor="bg-gray-600"
                minuteHandColor="bg-gray-500"
                secondHandColor="bg-gray-400"
                backgroundColor="bg-white"
                borderColor="border-gray-300"
              />
            </div>
          </div>

          {/* Modern Style */}
          <div className="p-4 sm:p-6 rounded-lg bg-white shadow-lg">
            <h2 className="text-lg sm:text-xl font-semibold mb-4">Modern Style</h2>
            <div className="h-48 sm:h-64 flex items-center justify-center">
              <MinimalistClock 
                size={180}
                hourHandColor="bg-gray-700"
                minuteHandColor="bg-gray-600"
                secondHandColor="bg-gray-500"
                backgroundColor="bg-gray-50"
                numberColor="text-gray-400"
              />
            </div>
          </div>

          {/* Elegant Style */}
          <div className="p-4 sm:p-6 rounded-lg bg-white shadow-lg">
            <h2 className="text-lg sm:text-xl font-semibold mb-4">Elegant Style</h2>
            <div className="h-48 sm:h-64 flex items-center justify-center">
              <MinimalistClock 
                size={180}
                hourHandColor="bg-gray-800"
                minuteHandColor="bg-gray-700"
                secondHandColor="bg-gray-600"
                backgroundColor="bg-white"
                numberColor="text-gray-300"
              />
            </div>
          </div>

          {/* Classic Style */}
          <div className="p-4 sm:p-6 rounded-lg bg-white shadow-lg">
            <h2 className="text-lg sm:text-xl font-semibold mb-4">Classic Style</h2>
            <div className="h-48 sm:h-64 flex items-center justify-center">
              <MinimalistClock 
                size={180}
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