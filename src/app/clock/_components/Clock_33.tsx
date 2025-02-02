'use client';
import React, { useEffect, useState } from 'react';

const FlipCard = ({ number, prevNumber }: { number: string; prevNumber: string }) => {
  const [isFlipping, setIsFlipping] = useState(false);

  useEffect(() => {
    if (number !== prevNumber) {
      setIsFlipping(true);
      const timer = setTimeout(() => setIsFlipping(false), 600);
      return () => clearTimeout(timer);
    }
  }, [number, prevNumber]);

  return (
    <div className="relative w-16 h-24 [perspective:1000px]">
      {/* Card */}
      <div className={`relative w-full h-full transition-transform duration-600 transform-style-3d ${
        isFlipping ? '[transform:rotateX(-180deg)]' : ''
      }`}>
        {/* Front face */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg 
                      flex items-center justify-center backface-hidden">
          <span className="text-4xl font-bold text-white">{prevNumber}</span>
          {/* Top shine */}
          <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-white/30 to-transparent"></div>
        </div>
        
        {/* Back face */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 to-teal-700 rounded-lg 
                      flex items-center justify-center backface-hidden [transform:rotateX(180deg)]">
          <span className="text-4xl font-bold text-white">{number}</span>
          {/* Bottom shine */}
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white/30 to-transparent"></div>
        </div>
      </div>

      {/* Shadow */}
      <div className={`absolute inset-x-0 bottom-0 h-1 bg-black/20 rounded-full transform transition-all duration-600 ${
        isFlipping ? 'scale-x-50 opacity-50' : 'scale-x-100 opacity-100'
      }`}></div>
    </div>
  );
};

const Clock_33 = () => {
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
    <div className="bg-gradient-to-br from-emerald-900 to-teal-900 p-8 rounded-xl shadow-2xl">
      <div className="flex items-center space-x-4">
        <div className="flex space-x-2">
          <FlipCard number={hours[0]} prevNumber={prevHours[0]} />
          <FlipCard number={hours[1]} prevNumber={prevHours[1]} />
        </div>
        
        <div className="text-4xl font-bold text-emerald-400">:</div>
        
        <div className="flex space-x-2">
          <FlipCard number={minutes[0]} prevNumber={prevMinutes[0]} />
          <FlipCard number={minutes[1]} prevNumber={prevMinutes[1]} />
        </div>
        
        <div className="text-4xl font-bold text-emerald-400">:</div>
        
        <div className="flex space-x-2">
          <FlipCard number={seconds[0]} prevNumber={prevSeconds[0]} />
          <FlipCard number={seconds[1]} prevNumber={prevSeconds[1]} />
        </div>
      </div>
    </div>
  );
};

export default Clock_33; 