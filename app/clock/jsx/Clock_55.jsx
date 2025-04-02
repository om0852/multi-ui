'use client';
import React, { useEffect, useState } from 'react';

const OrigamiDigit = ({ digit, prevDigit }) => {
  const [isFolding, setIsFolding] = useState(false);
  
  useEffect(() => {
    if (digit !== prevDigit) {
      setIsFolding(true);
      const timer = setTimeout(() => setIsFolding(false), 800);
      return () => clearTimeout(timer);
    }
  }, [digit, prevDigit]);
  
  // Folding animation states based on a 3x5 grid representing digit folds
  const getAnimationData = () => {
    // Each digit has a unique folding pattern
    const foldPatterns = {
      '0': Array(15).fill().map((_, i) => ({
        delay: Math.min(i * 0.03, 0.4),
        direction: i % 4 === 0 ? 'diagonal' : (i % 3 === 0 ? 'vertical' : 'horizontal')
      })),
      '1': Array(15).fill().map((_, i) => ({
        delay: Math.min(i * 0.04, 0.4),
        direction: 'vertical'
      })),
      '2': Array(15).fill().map((_, i) => ({
        delay: Math.min(i * 0.03, 0.4),
        direction: i < 5 ? 'horizontal' : (i < 10 ? 'diagonal' : 'vertical')
      })),
      // Simplified patterns for other digits
      '3': Array(15).fill().map((_, i) => ({
        delay: Math.min(i * 0.03, 0.4),
        direction: 'horizontal'
      })),
      '4': Array(15).fill().map((_, i) => ({
        delay: Math.min(i * 0.03, 0.4),
        direction: i % 2 === 0 ? 'vertical' : 'horizontal'
      })),
      '5': Array(15).fill().map((_, i) => ({
        delay: Math.min(i * 0.03, 0.4),
        direction: 'diagonal'
      })),
      '6': Array(15).fill().map((_, i) => ({
        delay: Math.min(i * 0.03, 0.4),
        direction: i < 8 ? 'vertical' : 'horizontal'
      })),
      '7': Array(15).fill().map((_, i) => ({
        delay: Math.min(i * 0.03, 0.4),
        direction: i < 5 ? 'horizontal' : 'vertical'
      })),
      '8': Array(15).fill().map((_, i) => ({
        delay: Math.min(i * 0.03, 0.4),
        direction: i % 3 === 0 ? 'horizontal' : (i % 2 === 0 ? 'vertical' : 'diagonal')
      })),
      '9': Array(15).fill().map((_, i) => ({
        delay: Math.min(i * 0.03, 0.4),
        direction: i > 8 ? 'vertical' : 'horizontal'
      })),
    };
    
    return foldPatterns[digit] || foldPatterns['0'];
  };
  
  const foldData = getAnimationData();
  
  return (
    <div className="relative w-16 h-24 bg-opacity-0 overflow-hidden">
      {/* Origami paper surface */}
      <div className="absolute inset-0 bg-gradient-to-br from-white to-white/90 rounded-md shadow-md">
        {/* Creases and fold lines */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute left-1/3 top-0 bottom-0 w-[1px] bg-black"></div>
          <div className="absolute left-2/3 top-0 bottom-0 w-[1px] bg-black"></div>
          <div className="absolute top-1/5 left-0 right-0 h-[1px] bg-black"></div>
          <div className="absolute top-2/5 left-0 right-0 h-[1px] bg-black"></div>
          <div className="absolute top-3/5 left-0 right-0 h-[1px] bg-black"></div>
          <div className="absolute top-4/5 left-0 right-0 h-[1px] bg-black"></div>
        </div>
        
        {/* Digit folding animation */}
        <div className="relative w-full h-full">
          {/* Grid of paper folds - 3x5 grid */}
          {Array(15).fill().map((_, index) => {
            const row = Math.floor(index / 3);
            const col = index % 3;
            const foldInfo = foldData[index];
            
            return (
              <div 
                key={index}
                className="absolute bg-white shadow-sm transition-all duration-800"
                style={{
                  left: `${col * 33.33}%`,
                  top: `${row * 20}%`,
                  width: '33.33%',
                  height: '20%',
                  transformOrigin: foldInfo.direction === 'horizontal' 
                    ? 'center top' 
                    : (foldInfo.direction === 'vertical' ? 'left center' : 'top left'),
                  transform: isFolding 
                    ? `rotate3d(
                        ${foldInfo.direction === 'horizontal' ? '1, 0, 0' : (foldInfo.direction === 'vertical' ? '0, 1, 0' : '1, 1, 0')}, 
                        ${Math.random() * 180}deg
                      )`
                    : 'rotate3d(0, 0, 0, 0deg)',
                  transition: `transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)`,
                  transitionDelay: `${foldInfo.delay}s`,
                  boxShadow: isFolding 
                    ? '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)' 
                    : 'none',
                  zIndex: isFolding ? 10 : 1,
                  backgroundColor: 'white',
                  borderRadius: '2px',
                }}
              ></div>
            );
          })}
        </div>
      </div>
      
      {/* Digit display */}
      <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
        isFolding ? 'opacity-0' : 'opacity-100'
      }`}>
        <div className="text-4xl font-light text-gray-800">{digit}</div>
      </div>
    </div>
  );
};

const Clock_55 = () => {
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
    <div className="bg-gradient-to-br from-stone-100 to-stone-200 p-8 rounded-xl shadow-xl">
      <div className="flex items-center space-x-4">
        <div className="flex space-x-2">
          <OrigamiDigit digit={hours[0]} prevDigit={prevHours[0]} />
          <OrigamiDigit digit={hours[1]} prevDigit={prevHours[1]} />
        </div>
        
        <div className="text-4xl font-light text-stone-600 mt-2">:</div>
        
        <div className="flex space-x-2">
          <OrigamiDigit digit={minutes[0]} prevDigit={prevMinutes[0]} />
          <OrigamiDigit digit={minutes[1]} prevDigit={prevMinutes[1]} />
        </div>
        
        <div className="text-4xl font-light text-stone-600 mt-2">:</div>
        
        <div className="flex space-x-2">
          <OrigamiDigit digit={seconds[0]} prevDigit={prevSeconds[0]} />
          <OrigamiDigit digit={seconds[1]} prevDigit={prevSeconds[1]} />
        </div>
      </div>
    </div>
  );
};

export default Clock_55; 