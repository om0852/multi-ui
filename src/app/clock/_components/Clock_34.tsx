'use client';
import React, { useEffect, useState } from 'react';

const BounceNumber = ({ number, prevNumber }: { number: string; prevNumber: string }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (number !== prevNumber) {
      setIsAnimating(true);
      const timer = setTimeout(() => setIsAnimating(false), 300);
      return () => clearTimeout(timer);
    }
  }, [number, prevNumber]);

  return (
    <div className="relative w-16 h-24 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <div 
          className={`text-4xl font-bold text-white transition-transform duration-300 ${
            isAnimating ? 'scale-150 -translate-y-2' : 'scale-100 translate-y-0'
          }`}
          style={{
            transitionTimingFunction: isAnimating ? 'cubic-bezier(0.34, 1.56, 0.64, 1)' : 'ease'
          }}
        >
          {number}
        </div>
      </div>
      
      {/* Shine effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent opacity-75"></div>
      
      {/* Shadow at bottom */}
      <div className={`absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-black/20 to-transparent transition-opacity duration-300 ${
        isAnimating ? 'opacity-30' : 'opacity-10'
      }`}></div>
    </div>
  );
};

const Clock_34 = () => {
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
    <div className="bg-gradient-to-br from-amber-900 to-orange-900 p-8 rounded-xl shadow-2xl">
      <div className="flex items-center space-x-4">
        <div className="flex space-x-2">
          <BounceNumber number={hours[0]} prevNumber={prevHours[0]} />
          <BounceNumber number={hours[1]} prevNumber={prevHours[1]} />
        </div>
        
        <div className="text-4xl font-bold text-amber-400">:</div>
        
        <div className="flex space-x-2">
          <BounceNumber number={minutes[0]} prevNumber={prevMinutes[0]} />
          <BounceNumber number={minutes[1]} prevNumber={prevMinutes[1]} />
        </div>
        
        <div className="text-4xl font-bold text-amber-400">:</div>
        
        <div className="flex space-x-2">
          <BounceNumber number={seconds[0]} prevNumber={prevSeconds[0]} />
          <BounceNumber number={seconds[1]} prevNumber={prevSeconds[1]} />
        </div>
      </div>
    </div>
  );
};

export default Clock_34; 