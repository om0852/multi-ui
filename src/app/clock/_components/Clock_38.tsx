 'use client';
import React, { useEffect, useState } from 'react';

const SplitFlapDigit = ({ digit, prevDigit }: { digit: string; prevDigit: string }) => {
  const [isFlipping, setIsFlipping] = useState(false);

  useEffect(() => {
    if (digit !== prevDigit) {
      setIsFlipping(true);
      const timer = setTimeout(() => setIsFlipping(false), 300);
      return () => clearTimeout(timer);
    }
  }, [digit, prevDigit]);

  return (
    <div className="relative w-16 h-24 [perspective:1000px]">
      {/* Container */}
      <div className="relative w-full h-full bg-gradient-to-b from-zinc-800 to-zinc-900 rounded-lg overflow-hidden shadow-xl">
        {/* Top half (static) */}
        <div className="absolute inset-x-0 top-0 h-[50%] bg-gradient-to-b from-zinc-700 to-zinc-800 flex items-end justify-center overflow-hidden">
          <span className="text-4xl font-bold text-zinc-100 mb-[-12px]">{isFlipping ? digit : prevDigit}</span>
        </div>

        {/* Bottom half (static) */}
        <div className="absolute inset-x-0 bottom-0 h-[50%] bg-gradient-to-b from-zinc-800 to-zinc-900 flex items-start justify-center overflow-hidden">
          <span className="text-4xl font-bold text-zinc-100 mt-[-12px]">{digit}</span>
        </div>

        {/* Flipping top half */}
        <div 
          className={`absolute inset-x-0 top-0 h-[50%] bg-gradient-to-b from-zinc-700 to-zinc-800 
                     origin-bottom transition-transform duration-300 rounded-t-lg flex items-end justify-center 
                     overflow-hidden backface-hidden`}
          style={{
            transform: isFlipping ? 'rotateX(-180deg)' : 'rotateX(0deg)',
            transformStyle: 'preserve-3d'
          }}
        >
          <span className="text-4xl font-bold text-zinc-100 mb-[-12px]">{prevDigit}</span>
        </div>

        {/* Flipping bottom half */}
        <div 
          className={`absolute inset-x-0 top-[50%] h-[50%] bg-gradient-to-b from-zinc-800 to-zinc-900 
                     origin-top transition-transform duration-300 rounded-b-lg flex items-start justify-center 
                     overflow-hidden backface-hidden`}
          style={{
            transform: isFlipping ? 'rotateX(0deg)' : 'rotateX(180deg)',
            transformStyle: 'preserve-3d'
          }}
        >
          <span className="text-4xl font-bold text-zinc-100 mt-[-12px]">{digit}</span>
        </div>

        {/* Center line */}
        <div className="absolute inset-x-0 top-[50%] h-[1px] bg-black/50"></div>

        {/* Shine effects */}
        <div className="absolute inset-x-0 top-0 h-full bg-gradient-to-b from-white/5 to-transparent pointer-events-none"></div>
        <div className="absolute inset-y-0 left-0 w-[1px] bg-white/10"></div>
        <div className="absolute inset-y-0 right-0 w-[1px] bg-black/40"></div>
      </div>
    </div>
  );
};

const Clock_38 = () => {
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
    <div className="bg-zinc-900 p-8 rounded-xl shadow-2xl">
      <div className="flex items-center space-x-4">
        <div className="flex space-x-2">
          <SplitFlapDigit digit={hours[0]} prevDigit={prevHours[0]} />
          <SplitFlapDigit digit={hours[1]} prevDigit={prevHours[1]} />
        </div>
        
        <div className="text-4xl font-bold text-zinc-500">:</div>
        
        <div className="flex space-x-2">
          <SplitFlapDigit digit={minutes[0]} prevDigit={prevMinutes[0]} />
          <SplitFlapDigit digit={minutes[1]} prevDigit={prevMinutes[1]} />
        </div>
        
        <div className="text-4xl font-bold text-zinc-500">:</div>
        
        <div className="flex space-x-2">
          <SplitFlapDigit digit={seconds[0]} prevDigit={prevSeconds[0]} />
          <SplitFlapDigit digit={seconds[1]} prevDigit={prevSeconds[1]} />
        </div>
      </div>
    </div>
  );
};

export default Clock_38;