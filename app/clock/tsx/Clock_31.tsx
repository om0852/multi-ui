'use client';
import React, { useEffect, useState } from 'react';

const NumberSlide = ({ number, prevNumber }: { number: string; prevNumber: string }) => {
  return (
    <div className="relative w-16 h-24 overflow-hidden bg-gradient-to-br from-rose-500 to-pink-600 rounded-lg">
      {/* Previous number sliding up */}
      <div 
        className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-white transition-transform duration-500"
        style={{ transform: `translateY(-100%)` }}
      >
        {prevNumber}
      </div>
      
      {/* Current number sliding up */}
      <div 
        className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-white transition-transform duration-500"
        style={{ transform: `translateY(0)` }}
      >
        {number}
      </div>
      
      {/* Glass reflection effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent"></div>
    </div>
  );
};

const Clock_31 = () => {
  const [time, setTime] = useState(new Date());
  const [prevTime, setPrevTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setPrevTime(time);
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, [time]);

  const hours = time.getHours().toString().padStart(2, '0');
  const minutes = time.getMinutes().toString().padStart(2, '0');
  const seconds = time.getSeconds().toString().padStart(2, '0');

  const prevHours = prevTime.getHours().toString().padStart(2, '0');
  const prevMinutes = prevTime.getMinutes().toString().padStart(2, '0');
  const prevSeconds = prevTime.getSeconds().toString().padStart(2, '0');

  return (
    <div className="bg-gradient-to-br from-rose-900 to-pink-900 p-8 rounded-xl shadow-2xl">
      <div className="flex items-center space-x-4">
        <div className="flex space-x-2">
          <NumberSlide number={hours[0]} prevNumber={prevHours[0]} />
          <NumberSlide number={hours[1]} prevNumber={prevHours[1]} />
        </div>
        
        <div className="text-4xl font-bold text-white">:</div>
        
        <div className="flex space-x-2">
          <NumberSlide number={minutes[0]} prevNumber={prevMinutes[0]} />
          <NumberSlide number={minutes[1]} prevNumber={prevMinutes[1]} />
        </div>
        
        <div className="text-4xl font-bold text-white">:</div>
        
        <div className="flex space-x-2">
          <NumberSlide number={seconds[0]} prevNumber={prevSeconds[0]} />
          <NumberSlide number={seconds[1]} prevNumber={prevSeconds[1]} />
        </div>
      </div>
    </div>
  );
};

export default Clock_31; 