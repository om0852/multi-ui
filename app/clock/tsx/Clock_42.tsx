'use client';
import React, { useEffect, useState } from 'react';

const CubeDigit = ({ digit, prevDigit }: { digit: string; prevDigit: string }) => {
  const [isRotating, setIsRotating] = useState(false);

  useEffect(() => {
    if (digit !== prevDigit) {
      setIsRotating(true);
      const timer = setTimeout(() => setIsRotating(false), 600);
      return () => clearTimeout(timer);
    }
  }, [digit, prevDigit]);

  return (
    <div className="relative w-16 h-24 [perspective:1000px]">
      <div 
        className={`relative w-full h-full transition-transform duration-600 transform-style-3d ${
          isRotating ? '[transform:rotateX(-90deg)]' : ''
        }`}
      >
        {/* Front face (current number) */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg 
                      flex items-center justify-center backface-hidden">
          <span className="text-4xl font-bold text-white">{prevDigit}</span>
          {/* Inner shadow */}
          <div className="absolute inset-0 rounded-lg shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]"></div>
        </div>

        {/* Top face (rotating to front) */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg 
                      flex items-center justify-center backface-hidden origin-bottom
                      [transform:rotateX(90deg)_translateY(-100%)]">
          <span className="text-4xl font-bold text-white">{digit}</span>
          {/* Inner shadow */}
          <div className="absolute inset-0 rounded-lg shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]"></div>
        </div>

        {/* Bottom face (rotating to back) */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-700 to-blue-800 rounded-lg 
                      flex items-center justify-center backface-hidden origin-top
                      [transform:rotateX(-90deg)_translateY(100%)]">
          <span className="text-4xl font-bold text-white">{prevDigit}</span>
          {/* Inner shadow */}
          <div className="absolute inset-0 rounded-lg shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]"></div>
        </div>

        {/* Back face */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-800 to-blue-900 rounded-lg 
                      flex items-center justify-center backface-hidden [transform:rotateX(180deg)]">
          <span className="text-4xl font-bold text-white">{digit}</span>
          {/* Inner shadow */}
          <div className="absolute inset-0 rounded-lg shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]"></div>
        </div>
      </div>

      {/* Perspective shadow */}
      <div 
        className={`absolute bottom-0 left-1/2 w-4/5 h-1 bg-black/20 rounded-full blur-[2px] transition-all duration-600 -translate-x-1/2 ${
          isRotating ? 'scale-50 opacity-50' : 'scale-100 opacity-100'
        }`}
      ></div>
    </div>
  );
};

const Clock_42 = () => {
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
    <div className="bg-gradient-to-br from-blue-900 to-blue-950 p-8 rounded-xl shadow-2xl">
      <div className="flex items-center space-x-4">
        <div className="flex space-x-2">
          <CubeDigit digit={hours[0]} prevDigit={prevHours[0]} />
          <CubeDigit digit={hours[1]} prevDigit={prevHours[1]} />
        </div>
        
        <div className="text-4xl font-bold text-blue-400">:</div>
        
        <div className="flex space-x-2">
          <CubeDigit digit={minutes[0]} prevDigit={prevMinutes[0]} />
          <CubeDigit digit={minutes[1]} prevDigit={prevMinutes[1]} />
        </div>
        
        <div className="text-4xl font-bold text-blue-400">:</div>
        
        <div className="flex space-x-2">
          <CubeDigit digit={seconds[0]} prevDigit={prevSeconds[0]} />
          <CubeDigit digit={seconds[1]} prevDigit={prevSeconds[1]} />
        </div>
      </div>
    </div>
  );
};

export default Clock_42; 