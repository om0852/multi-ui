"use client"

import React from 'react';
import MinimalistClock from '../_components/Clock_15';
import { FaClock } from 'react-icons/fa6';

const Example_15: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-6 sm:py-8">
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold mb-2 flex items-center">
            <FaClock className="mr-2 text-gray-600" />
            Minimalist Digital Clock
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {/* Light Theme */}
          <div className="p-4 sm:p-6 rounded-lg bg-white shadow-lg">
            <h2 className="text-lg sm:text-xl font-semibold mb-4">Light Theme</h2>
            <div className="h-48 sm:h-64 flex items-center justify-center">
              <MinimalistClock 
                className="text-gray-800 font-light text-4xl sm:text-6xl"
              />
            </div>
          </div>

          {/* Dark Theme */}
          <div className="p-4 sm:p-6 rounded-lg bg-gray-900 shadow-lg">
            <h2 className="text-lg sm:text-xl font-semibold mb-4 text-white">Dark Theme</h2>
            <div className="h-48 sm:h-64 flex items-center justify-center">
              <MinimalistClock 
                className="text-white font-light text-4xl sm:text-6xl"
              />
            </div>
          </div>

          {/* Monochrome Theme */}
          <div className="p-4 sm:p-6 rounded-lg bg-white shadow-lg">
            <h2 className="text-lg sm:text-xl font-semibold mb-4">Monochrome Theme</h2>
            <div className="h-48 sm:h-64 flex items-center justify-center">
              <MinimalistClock 
                className="text-gray-600 font-light text-4xl sm:text-6xl"
              />
            </div>
          </div>

          {/* Subtle Theme */}
          <div className="p-4 sm:p-6 rounded-lg bg-gray-50 shadow-lg">
            <h2 className="text-lg sm:text-xl font-semibold mb-4">Subtle Theme</h2>
            <div className="h-48 sm:h-64 flex items-center justify-center">
              <MinimalistClock 
                className="text-gray-500 font-light text-4xl sm:text-6xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Example_15; 