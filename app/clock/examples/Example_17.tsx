"use client"

import React from 'react';
import WorldClock from '../_components/Clock_17';
import { FaEarthAmericas } from 'react-icons/fa6';

const Example_17: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-6 sm:py-8">
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold mb-2 flex items-center">
            <FaEarthAmericas className="mr-2 text-blue-500" />
            World Clock Collection
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {/* New York */}
          <div className="p-4 sm:p-6 rounded-lg bg-white shadow-lg">
            <h2 className="text-lg sm:text-xl font-semibold mb-4">New York</h2>
            <div className="h-48 sm:h-64 flex items-center justify-center">
              <WorldClock 
                timezone="America/New_York"
                containerClassName="flex flex-col items-center"
                timeClassName="text-3xl sm:text-4xl font-bold text-blue-600"
                dateClassName="text-sm sm:text-base text-gray-500 mt-2"
              />
            </div>
          </div>

          {/* London */}
          <div className="p-4 sm:p-6 rounded-lg bg-white shadow-lg">
            <h2 className="text-lg sm:text-xl font-semibold mb-4">London</h2>
            <div className="h-48 sm:h-64 flex items-center justify-center">
              <WorldClock 
                timezone="Europe/London"
                containerClassName="flex flex-col items-center"
                timeClassName="text-3xl sm:text-4xl font-bold text-indigo-600"
                dateClassName="text-sm sm:text-base text-gray-500 mt-2"
              />
            </div>
          </div>

          {/* Tokyo */}
          <div className="p-4 sm:p-6 rounded-lg bg-white shadow-lg">
            <h2 className="text-lg sm:text-xl font-semibold mb-4">Tokyo</h2>
            <div className="h-48 sm:h-64 flex items-center justify-center">
              <WorldClock 
                timezone="Asia/Tokyo"
                containerClassName="flex flex-col items-center"
                timeClassName="text-3xl sm:text-4xl font-bold text-purple-600"
                dateClassName="text-sm sm:text-base text-gray-500 mt-2"
              />
            </div>
          </div>

          {/* Sydney */}
          <div className="p-4 sm:p-6 rounded-lg bg-white shadow-lg">
            <h2 className="text-lg sm:text-xl font-semibold mb-4">Sydney</h2>
            <div className="h-48 sm:h-64 flex items-center justify-center">
              <WorldClock 
                timezone="Australia/Sydney"
                containerClassName="flex flex-col items-center"
                timeClassName="text-3xl sm:text-4xl font-bold text-teal-600"
                dateClassName="text-sm sm:text-base text-gray-500 mt-2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Example_17; 