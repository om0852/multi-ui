'use client';
import React, { useEffect, useState } from 'react';

const NumberBlock = ({ number }: { number: string }) => {
  return (
    <div className="relative w-16 h-20 bg-gradient-to-br from-indigo-600 to-indigo-700 
                    rounded-lg shadow-lg transform transition-transform hover:scale-105">
      {/* Top face */}
      <div className="absolute inset-x-0 -top-2 h-2 bg-indigo-500 transform skew-x-[45deg] origin-left"></div>
      {/* Right face */}
      <div className="absolute -right-2 inset-y-0 w-2 bg-indigo-800 transform skew-y-[45deg] origin-top"></div>
      {/* Main face */}
      <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-white">
        {number}
      </div>
    </div>
  );
};

const Clock_30 = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const hours = time.getHours().toString().padStart(2, '0');
  const minutes = time.getMinutes().toString().padStart(2, '0');
  const seconds = time.getSeconds().toString().padStart(2, '0');

  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-12 rounded-xl shadow-2xl 
                    transform perspective-1000 rotate-x-10">
      <div className="flex items-center justify-center space-x-4">
        {/* Hours */}
        <div className="flex space-x-2">
          <NumberBlock number={hours[0]} />
          <NumberBlock number={hours[1]} />
        </div>

        {/* Separator */}
        <div className="flex flex-col justify-center space-y-2">
          <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
          <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
        </div>

        {/* Minutes */}
        <div className="flex space-x-2">
          <NumberBlock number={minutes[0]} />
          <NumberBlock number={minutes[1]} />
        </div>

        {/* Separator */}
        <div className="flex flex-col justify-center space-y-2">
          <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
          <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
        </div>

        {/* Seconds */}
        <div className="flex space-x-2">
          <NumberBlock number={seconds[0]} />
          <NumberBlock number={seconds[1]} />
        </div>
      </div>

      {/* Reflection effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent rounded-xl pointer-events-none"></div>
    </div>
  );
};

export default Clock_30; 