'use client';
import React, { useEffect, useState } from 'react';

const RotatingNumber = ({ number, prevNumber }: { number: string; prevNumber: string }) => {
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (number !== prevNumber) {
      setIsTransitioning(true);
      const timer = setTimeout(() => setIsTransitioning(false), 500);
      return () => clearTimeout(timer);
    }
  }, [number, prevNumber]);

  return (
    <div className="relative w-16 h-24 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-lg overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <div 
          className={`text-4xl font-bold text-white transition-all duration-500 ${
            isTransitioning ? 'opacity-0 scale-50 rotate-180' : 'opacity-100 scale-100 rotate-0'
          }`}
        >
          {number}
        </div>
      </div>
      
      {/* Shiny edge effect */}
      <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-white/30 via-white/5 to-white/30"></div>
      <div className="absolute inset-y-0 right-0 w-1 bg-gradient-to-b from-black/30 via-black/5 to-black/30"></div>
    </div>
  );
};

const Clock_32 = () => {
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
    <div className="bg-gradient-to-br from-violet-900 to-indigo-900 p-8 rounded-xl shadow-2xl">
      <div className="flex items-center space-x-4">
        <div className="flex space-x-2">
          <RotatingNumber number={hours[0]} prevNumber={prevHours[0]} />
          <RotatingNumber number={hours[1]} prevNumber={prevHours[1]} />
        </div>
        
        <div className="text-4xl font-bold text-white/80">:</div>
        
        <div className="flex space-x-2">
          <RotatingNumber number={minutes[0]} prevNumber={prevMinutes[0]} />
          <RotatingNumber number={minutes[1]} prevNumber={prevMinutes[1]} />
        </div>
        
        <div className="text-4xl font-bold text-white/80">:</div>
        
        <div className="flex space-x-2">
          <RotatingNumber number={seconds[0]} prevNumber={prevSeconds[0]} />
          <RotatingNumber number={seconds[1]} prevNumber={prevSeconds[1]} />
        </div>
      </div>
    </div>
  );
};

export default Clock_32; 