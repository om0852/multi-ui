"use client"

import React from 'react';
import ModernClock from '../_components/Clock_14';
import { FaClock } from 'react-icons/fa6';

const Example_14: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-6 sm:py-8">
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold mb-2 flex items-center">
            <FaClock className="mr-2 text-indigo-500" />
            Modern Digital Clock
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {/* Gradient Theme */}
          <div className="p-4 sm:p-6 rounded-lg bg-white shadow-lg">
            <h2 className="text-lg sm:text-xl font-semibold mb-4">Gradient Theme</h2>
            <div className="h-48 sm:h-64 flex items-center justify-center">
              <ModernClock 
                size="large"
                containerClassName="flex justify-center items-center"
                digitClassName="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500"
                labelClassName="text-indigo-400"
              />
            </div>
          </div>

          {/* Minimal Theme */}
          <div className="p-4 sm:p-6 rounded-lg bg-white shadow-lg">
            <h2 className="text-lg sm:text-xl font-semibold mb-4">Minimal Theme</h2>
            <div className="h-48 sm:h-64 flex items-center justify-center">
              <ModernClock 
                size="large"
                containerClassName="flex justify-center items-center"
                digitClassName="text-gray-800"
                labelClassName="text-gray-400"
              />
            </div>
          </div>

          {/* Dark Theme */}
          <div className="p-4 sm:p-6 rounded-lg bg-gray-900 shadow-lg">
            <h2 className="text-lg sm:text-xl font-semibold mb-4 text-white">Dark Theme</h2>
            <div className="h-48 sm:h-64 flex items-center justify-center">
              <ModernClock 
                size="large"
                containerClassName="flex justify-center items-center"
                digitClassName="text-white"
                labelClassName="text-gray-400"
              />
            </div>
          </div>

          {/* Colorful Theme */}
          <div className="p-4 sm:p-6 rounded-lg bg-white shadow-lg">
            <h2 className="text-lg sm:text-xl font-semibold mb-4">Colorful Theme</h2>
            <div className="h-48 sm:h-64 flex items-center justify-center">
              <ModernClock 
                size="large"
                containerClassName="flex justify-center items-center"
                digitClassName="text-teal-500"
                labelClassName="text-pink-500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Example_14; 