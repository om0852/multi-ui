"use client"

import React from 'react';
import NumericClock from '../_components/Clock_7';
import { FaClock } from 'react-icons/fa6';

const Example_7: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-6 sm:py-8">
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold mb-2 flex items-center">
            <FaClock className="mr-2 text-blue-500" />
            Animated LED Clock
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {/* Neon Blue */}
          <div className="p-4 sm:p-6 rounded-lg bg-white shadow-lg">
            <h2 className="text-lg sm:text-xl font-semibold mb-4">Neon Blue</h2>
            <div className="h-32 sm:h-40 overflow-hidden rounded-lg">
              <NumericClock 
                containerClassName="flex justify-center items-center h-full bg-black" 
                digitClassName="text-2xl sm:text-4xl font-bold text-blue-400 mx-1 glow-blue"
              />
            </div>
          </div>

          {/* Neon Pink */}
          <div className="p-4 sm:p-6 rounded-lg bg-white shadow-lg">
            <h2 className="text-lg sm:text-xl font-semibold mb-4">Neon Pink</h2>
            <div className="h-32 sm:h-40 overflow-hidden rounded-lg">
              <NumericClock 
                containerClassName="flex justify-center items-center h-full bg-black" 
                digitClassName="text-2xl sm:text-4xl font-bold text-pink-400 mx-1 glow-pink"
                is12HourFormat={true}
              />
            </div>
          </div>

          {/* Neon Green */}
          <div className="p-4 sm:p-6 rounded-lg bg-white shadow-lg">
            <h2 className="text-lg sm:text-xl font-semibold mb-4">Neon Green</h2>
            <div className="h-32 sm:h-40 overflow-hidden rounded-lg">
              <NumericClock 
                containerClassName="flex justify-center items-center h-full bg-black" 
                digitClassName="text-2xl sm:text-4xl font-bold text-green-400 mx-1 glow-green"
                formatter={(value) => value.toString().padStart(2, '0')}
              />
            </div>
          </div>

          {/* Neon Purple */}
          <div className="p-4 sm:p-6 rounded-lg bg-white shadow-lg">
            <h2 className="text-lg sm:text-xl font-semibold mb-4">Neon Purple</h2>
            <div className="h-32 sm:h-40 overflow-hidden rounded-lg">
              <NumericClock 
                containerClassName="flex justify-center items-center h-full bg-black" 
                digitClassName="text-2xl sm:text-4xl font-bold text-purple-400 mx-1 glow-purple"
                interval={500}
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .glow-blue {
          text-shadow: 0 0 5px #60a5fa, 0 0 10px #60a5fa, 0 0 15px #60a5fa;
        }
        .glow-pink {
          text-shadow: 0 0 5px #f472b6, 0 0 10px #f472b6, 0 0 15px #f472b6;
        }
        .glow-green {
          text-shadow: 0 0 5px #4ade80, 0 0 10px #4ade80, 0 0 15px #4ade80;
        }
        .glow-purple {
          text-shadow: 0 0 5px #c084fc, 0 0 10px #c084fc, 0 0 15px #c084fc;
        }
      `}</style>
    </div>
  );
};

export default Example_7; 