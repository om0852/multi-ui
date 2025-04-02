'use client';
import React, { useEffect, useState } from 'react';

// Ancient rune patterns for digit display
const RunePatterns = {
  '0': [
    'xxx',
    'x.x',
    'x.x',
    'x.x',
    'xxx',
  ],
  '1': [
    '.x.',
    'xx.',
    '.x.',
    '.x.',
    'xxx',
  ],
  '2': [
    'xxx',
    '..x',
    'xxx',
    'x..',
    'xxx',
  ],
  '3': [
    'xxx',
    '..x',
    'xxx',
    '..x',
    'xxx',
  ],
  '4': [
    'x.x',
    'x.x',
    'xxx',
    '..x',
    '..x',
  ],
  '5': [
    'xxx',
    'x..',
    'xxx',
    '..x',
    'xxx',
  ],
  '6': [
    'xxx',
    'x..',
    'xxx',
    'x.x',
    'xxx',
  ],
  '7': [
    'xxx',
    '..x',
    '..x',
    '..x',
    '..x',
  ],
  '8': [
    'xxx',
    'x.x',
    'xxx',
    'x.x',
    'xxx',
  ],
  '9': [
    'xxx',
    'x.x',
    'xxx',
    '..x',
    'xxx',
  ]
};

// Glowing effect that pulses around the rune
const RuneGlow = ({ isActive }) => {
  return (
    <div 
      className={`absolute inset-0 bg-yellow-500 rounded-lg blur-md transition-opacity duration-1000 ${
        isActive ? 'opacity-30' : 'opacity-0'
      }`}
    ></div>
  );
};

// Rune digit that glows when it changes
const RuneDigit = ({ digit, prevDigit }) => {
  const [isGlowing, setIsGlowing] = useState(false);
  
  useEffect(() => {
    if (digit !== prevDigit) {
      setIsGlowing(true);
      const timer = setTimeout(() => setIsGlowing(false), 1000);
      return () => clearTimeout(timer);
    }
  }, [digit, prevDigit]);

  // Get rune pattern for this digit
  const runePattern = RunePatterns[digit] || RunePatterns['0'];

  return (
    <div className="relative w-16 h-24 flex items-center justify-center perspective-500">
      {/* Glowing effect */}
      <RuneGlow isActive={isGlowing} />
      
      {/* Stone tablet with rune */}
      <div className="relative w-14 h-20 bg-stone-700 rounded-lg overflow-hidden shadow-md border-2 border-stone-800">
        {/* Tablet texture */}
        <div 
          className="absolute inset-0 opacity-30 mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          }}
        ></div>
        
        {/* Rune pattern */}
        <div className="absolute inset-0 p-2 grid grid-rows-5 gap-0.5">
          {runePattern.map((row, rowIndex) => (
            <div key={rowIndex} className="flex">
              {row.split('').map((cell, cellIndex) => (
                <div 
                  key={cellIndex} 
                  className={`flex-1 mx-0.5 ${
                    cell === 'x' ? 'bg-yellow-500' : 'bg-transparent'
                  } ${isGlowing ? 'animate-pulse' : ''}`}
                ></div>
              ))}
            </div>
          ))}
        </div>
        
        {/* Rune cracks/weathered effect */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 right-1/2 w-5 h-0.5 bg-black rotate-45"></div>
          <div className="absolute bottom-1/3 left-1/4 w-4 h-0.5 bg-black -rotate-20"></div>
        </div>
      </div>
    </div>
  );
};

// Decorative elements
const Torch = ({ position, flicker = false }) => {
  return (
    <div 
      className="absolute w-6 h-14"
      style={position}
    >
      {/* Torch handle */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-8 bg-stone-700 rounded-b-sm"></div>
      
      {/* Torch flame */}
      <div className={`absolute bottom-7 left-1/2 -translate-x-1/2 w-4 h-6 rounded-t-full bg-gradient-to-t from-orange-500 via-yellow-400 to-yellow-200 ${
        flicker ? 'animate-[flicker_1.5s_ease-in-out_infinite]' : ''
      }`}></div>
      
      {/* Glow effect */}
      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-yellow-500/30 blur-sm"></div>
    </div>
  );
};

const Clock_70 = () => {
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
    <div className="bg-gradient-to-b from-stone-900 to-stone-800 p-8 rounded-xl shadow-2xl border-4 border-stone-700 relative">
      {/* Background texture - parchment-like */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f8fafc' fill-opacity='0.4'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>
      
      {/* Decorative torches */}
      <Torch position={{ top: '10px', left: '10px' }} flicker={true} />
      <Torch position={{ top: '10px', right: '10px' }} flicker={true} />
      
      {/* Title banner */}
      <div className="relative mb-6 flex justify-center">
        <div className="px-8 py-1 bg-stone-700 border border-stone-600 shadow-md">
          <h2 className="text-yellow-200 font-serif tracking-wider">CHRONOS ARCANUM</h2>
        </div>
        
        {/* Banner tassels */}
        <div className="absolute -bottom-4 left-[40%] w-1 h-4 bg-stone-600"></div>
        <div className="absolute -bottom-6 left-[40%] w-3 h-2 bg-stone-600"></div>
        <div className="absolute -bottom-4 right-[40%] w-1 h-4 bg-stone-600"></div>
        <div className="absolute -bottom-6 right-[40%] w-3 h-2 bg-stone-600"></div>
      </div>
      
      {/* Main clock display */}
      <div className="relative flex items-center justify-center space-x-4">
        {/* Hours */}
        <div className="flex space-x-2">
          <RuneDigit digit={hours[0]} prevDigit={prevHours[0]} />
          <RuneDigit digit={hours[1]} prevDigit={prevHours[1]} />
        </div>
        
        {/* Separator */}
        <div className="flex flex-col items-center justify-center space-y-2">
          <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
          <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
        </div>
        
        {/* Minutes */}
        <div className="flex space-x-2">
          <RuneDigit digit={minutes[0]} prevDigit={prevMinutes[0]} />
          <RuneDigit digit={minutes[1]} prevDigit={prevMinutes[1]} />
        </div>
        
        {/* Separator */}
        <div className="flex flex-col items-center justify-center space-y-2">
          <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
          <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
        </div>
        
        {/* Seconds */}
        <div className="flex space-x-2">
          <RuneDigit digit={seconds[0]} prevDigit={prevSeconds[0]} />
          <RuneDigit digit={seconds[1]} prevDigit={prevSeconds[1]} />
        </div>
      </div>
      
      {/* Ancient date display */}
      <div className="mt-6 flex justify-center">
        <div className="px-4 py-1.5 bg-stone-800 border border-stone-700 text-xs font-serif text-yellow-200/80 tracking-wider">
          {time.toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}
        </div>
      </div>
    </div>
  );
};

export default Clock_70;

// Add to globals.css:
/*
@keyframes flicker {
  0%, 100% { opacity: 1; transform: translateY(0) scale(1); }
  25% { opacity: 0.8; transform: translateY(-1px) scale(0.98); }
  50% { opacity: 0.9; transform: translateY(1px) scale(1.02); }
  75% { opacity: 0.7; transform: translateY(-1.5px) scale(0.95); }
}
*/ 