'use client';
import React, { useEffect, useState } from 'react';

const IsometricDigit = ({ digit, prevDigit }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  
  useEffect(() => {
    if (digit !== prevDigit) {
      setIsAnimating(true);
      
      const timer = setTimeout(() => {
        setIsAnimating(false);
      }, 500);
      
      return () => clearTimeout(timer);
    }
  }, [digit, prevDigit]);

  return (
    <div className="relative w-16 h-24">
      <div 
        className={`absolute inset-0 transition-all duration-500 transform ${
          isAnimating ? 'scale-110' : 'scale-100'
        }`}
      >
        {/* Cube container */}
        <div className="w-full h-full relative flex items-center justify-center">
          {/* Top face */}
          <div className="absolute bg-purple-400 w-8 h-8 transform rotate-45 -translate-y-4"
               style={{
                 clipPath: 'polygon(50% 0, 100% 50%, 50% 100%, 0 50%)',
                 transformStyle: 'preserve-3d',
               }}>
          </div>
          
          {/* Left face */}
          <div className="absolute bg-purple-700 w-8 h-10 transform rotate-45 -translate-x-4"
              style={{
                clipPath: 'polygon(50% 0, 100% 50%, 100% 100%, 50% 50%)',
                transformStyle: 'preserve-3d',
              }}>
          </div>
          
          {/* Right face */}
          <div className="absolute bg-purple-500 w-8 h-10 transform rotate-45 translate-x-4"
              style={{
                clipPath: 'polygon(0 50%, 50% 0, 50% 50%, 0 100%)',
                transformStyle: 'preserve-3d',
              }}>
          </div>
          
          {/* Front digit */}
          <div 
            className={`text-4xl font-bold text-white absolute z-10 transition-all duration-500 ${
              isAnimating ? 'scale-125 opacity-0' : 'scale-100 opacity-100'
            }`}
            style={{
              textShadow: '2px 2px 0 rgba(0,0,0,0.1)',
              transform: 'translateZ(1px)'
            }}
          >
            {prevDigit}
          </div>
          
          <div 
            className={`text-4xl font-bold text-white absolute z-10 transition-all duration-500 ${
              isAnimating ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
            }`}
            style={{
              textShadow: '2px 2px 0 rgba(0,0,0,0.1)',
              transform: 'translateZ(1px)'
            }}
          >
            {digit}
          </div>
          
          {/* Shadow */}
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-3 bg-black/20 blur-md rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

const Clock_62 = () => {
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
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl shadow-2xl relative overflow-hidden">
      {/* Background isometric grid */}
      <div className="absolute inset-0 opacity-10"
         style={{
           backgroundSize: '40px 40px',
           backgroundImage: `
             linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
             linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
             linear-gradient(135deg, rgba(255, 255, 255, 0.1) 25%, transparent 25%, transparent 75%, rgba(255, 255, 255, 0.1) 75%),
             linear-gradient(45deg, rgba(255, 255, 255, 0.1) 25%, transparent 25%, transparent 75%, rgba(255, 255, 255, 0.1) 75%)
           `,
           backgroundPosition: '0 0, 0 0, 0 0, 0 0'
         }}>
      </div>
      
      <div className="relative flex items-center justify-center perspective-1000">
        <div className="transform rotate-x-30 rotate-y-30 rotate-z-0 flex items-center space-x-4">
          <div className="flex space-x-2">
            <IsometricDigit digit={hours[0]} prevDigit={prevHours[0]} />
            <IsometricDigit digit={hours[1]} prevDigit={prevHours[1]} />
          </div>
          
          <div className="flex flex-col space-y-4 -mx-2">
            <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
            <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
          </div>
          
          <div className="flex space-x-2">
            <IsometricDigit digit={minutes[0]} prevDigit={prevMinutes[0]} />
            <IsometricDigit digit={minutes[1]} prevDigit={prevMinutes[1]} />
          </div>
          
          <div className="flex flex-col space-y-4 -mx-2">
            <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
            <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
          </div>
          
          <div className="flex space-x-2">
            <IsometricDigit digit={seconds[0]} prevDigit={prevSeconds[0]} />
            <IsometricDigit digit={seconds[1]} prevDigit={prevSeconds[1]} />
          </div>
        </div>
        
        {/* Floor shadow */}
        <div className="absolute bottom-0 w-full h-2 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent rounded-full blur-md"></div>
      </div>
    </div>
  );
};

export default Clock_62; 