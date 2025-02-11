'use client';
import React, { useEffect, useState } from 'react';

const MorphingDigit = ({ digit, prevDigit }: { digit: string; prevDigit: string }) => {
  const [isMorphing, setIsMorphing] = useState(false);

  useEffect(() => {
    if (digit !== prevDigit) {
      setIsMorphing(true);
      const timer = setTimeout(() => setIsMorphing(false), 500);
      return () => clearTimeout(timer);
    }
  }, [digit, prevDigit]);

  // SVG paths for each digit
  const digitPaths: { [key: string]: string } = {
    '0': 'M 15 10 A 20 20 0 1 1 15 70 A 20 20 0 1 1 15 10',
    '1': 'M 30 10 L 30 70',
    '2': 'M 10 20 Q 15 10 30 10 Q 45 10 45 25 Q 45 40 25 50 L 10 70 L 50 70',
    '3': 'M 10 10 L 50 10 L 30 40 L 50 40 L 30 70 L 10 70',
    '4': 'M 40 10 L 10 40 L 50 40 L 40 10 L 40 70',
    '5': 'M 50 10 L 10 10 L 10 40 Q 50 35 50 70 L 10 70',
    '6': 'M 50 10 L 10 40 Q 10 70 30 70 Q 50 70 50 50 Q 50 40 30 40',
    '7': 'M 10 10 L 50 10 L 30 70',
    '8': 'M 30 10 Q 10 10 10 25 Q 10 40 30 40 Q 50 40 50 55 Q 50 70 30 70 Q 10 70 10 55 Q 10 40 30 40 Q 50 40 50 25 Q 50 10 30 10',
    '9': 'M 30 10 Q 50 10 50 30 Q 50 40 30 40 Q 10 40 10 70'
  };

  return (
    <div className="relative w-16 h-24 bg-gradient-to-br from-red-900 to-orange-900 rounded-lg overflow-hidden">
      <svg 
        className="absolute inset-0 w-full h-full" 
        viewBox="0 0 60 80" 
        fill="none" 
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Previous digit path */}
        <path
          d={digitPaths[prevDigit]}
          className={`transition-all duration-500 ${
            isMorphing ? 'stroke-red-500/0' : 'stroke-red-500'
          }`}
          style={{
            transform: isMorphing ? 'scale(0.8)' : 'scale(1)',
            transformOrigin: 'center'
          }}
        />
        
        {/* Current digit path */}
        <path
          d={digitPaths[digit]}
          className={`transition-all duration-500 ${
            isMorphing ? 'stroke-red-400' : 'stroke-red-500'
          }`}
          style={{
            transform: isMorphing ? 'scale(1.2)' : 'scale(1)',
            transformOrigin: 'center'
          }}
        />
      </svg>

      {/* Glow effect */}
      <div className={`absolute inset-0 transition-opacity duration-300 ${
        isMorphing ? 'opacity-50' : 'opacity-0'
      }`} style={{ boxShadow: 'inset 0 0 20px rgba(239, 68, 68, 0.5)' }}></div>

      {/* Shine overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>
    </div>
  );
};

const Clock_40 = () => {
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
    <div className="bg-gradient-to-br from-red-950 to-orange-950 p-8 rounded-xl shadow-2xl">
      <div className="flex items-center space-x-4">
        <div className="flex space-x-2">
          <MorphingDigit digit={hours[0]} prevDigit={prevHours[0]} />
          <MorphingDigit digit={hours[1]} prevDigit={prevHours[1]} />
        </div>
        
        <div className="text-4xl font-bold text-red-500">:</div>
        
        <div className="flex space-x-2">
          <MorphingDigit digit={minutes[0]} prevDigit={prevMinutes[0]} />
          <MorphingDigit digit={minutes[1]} prevDigit={prevMinutes[1]} />
        </div>
        
        <div className="text-4xl font-bold text-red-500">:</div>
        
        <div className="flex space-x-2">
          <MorphingDigit digit={seconds[0]} prevDigit={prevSeconds[0]} />
          <MorphingDigit digit={seconds[1]} prevDigit={prevSeconds[1]} />
        </div>
      </div>
    </div>
  );
};

export default Clock_40; 