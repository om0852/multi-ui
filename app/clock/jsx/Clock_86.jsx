'use client';
import React, { useState, useEffect } from 'react';

// Minimalist digit component with clean transitions
const MinimalistDigit = ({ digit, prevDigit }) => {
  const [isChanging, setIsChanging] = useState(false);
  
  useEffect(() => {
    if (digit !== prevDigit) {
      setIsChanging(true);
      const timer = setTimeout(() => setIsChanging(false), 300);
      return () => clearTimeout(timer);
    }
  }, [digit, prevDigit]);
  
  return (
    <div className="relative w-16 h-28 mx-1">
      {/* Clean white background */}
      <div className={`absolute inset-0 bg-white rounded-sm shadow-sm
                      ${isChanging ? 'animate-[minPulse_0.3s_ease-in-out]' : ''}`}>
      </div>
      
      {/* Digit display */}
      <div className={`absolute inset-0 flex items-center justify-center
                     text-4xl font-light text-gray-800 transition-all duration-300
                     ${isChanging ? 'opacity-0 transform translate-y-2' : 'opacity-100 transform translate-y-0'}`}>
        {digit}
      </div>
    </div>
  );
};

// Minimal separator between digit groups
const MinimalSeparator = () => {
  return (
    <div className="h-28 flex flex-col items-center justify-center space-y-2 mx-2">
      <div className="w-1 h-1 rounded-full bg-gray-300"></div>
      <div className="w-1 h-1 rounded-full bg-gray-300"></div>
    </div>
  );
};

// Clean line decoration
const MinimalLine = ({ position, width, color = 'bg-gray-100' }) => {
  return (
    <div className={`absolute ${position} ${width} h-px ${color}`}></div>
  );
};

// Circle decoration
const MinimalCircle = ({ position, size = 'w-3 h-3', color = 'bg-gray-100' }) => {
  return (
    <div className={`absolute ${position} ${size} ${color} rounded-full`}></div>
  );
};

// Subtle progress bar showing seconds
const SecondsProgress = ({ seconds }) => {
  const progress = (seconds / 60) * 100;
  
  return (
    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gray-100">
      <div 
        className="h-full bg-gray-400 transition-all duration-300 ease-linear"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

// Main clock component
const Clock_86 = () => {
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
  
  // Formatted date in a minimal style
  const day = time.toLocaleDateString('en-US', { weekday: 'long' });
  const date = time.toLocaleDateString('en-US', { 
    month: 'short', 
    day: 'numeric',
    year: 'numeric'
  });
  
  return (
    <div className="relative bg-gray-50 p-12 rounded-lg shadow-sm border border-gray-100 overflow-hidden min-h-[300px]">
      {/* Minimal background elements */}
      <MinimalLine position="top-12 left-0" width="w-8" />
      <MinimalLine position="top-12 right-0" width="w-8" />
      <MinimalLine position="bottom-12 left-0" width="w-8" />
      <MinimalLine position="bottom-12 right-0" width="w-8" />
      
      <MinimalLine position="left-12 top-0" width="w-px h-8" />
      <MinimalLine position="right-12 top-0" width="w-px h-8" />
      <MinimalLine position="left-12 bottom-0" width="w-px h-8" />
      <MinimalLine position="right-12 bottom-0" width="w-px h-8" />
      
      <MinimalCircle position="top-6 left-6" />
      <MinimalCircle position="top-6 right-6" />
      <MinimalCircle position="bottom-6 left-6" />
      <MinimalCircle position="bottom-6 right-6" />
      
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-xl font-extralight text-gray-700 tracking-widest uppercase">Minimalist</h1>
        <div className="text-xs text-gray-400 mt-1 font-light">{day.toUpperCase()}</div>
      </div>
      
      {/* Clock display */}
      <div className="flex justify-center items-center mb-8">
        {/* Hours */}
        <div className="flex">
          <MinimalistDigit digit={hours[0]} prevDigit={prevHours[0]} />
          <MinimalistDigit digit={hours[1]} prevDigit={prevHours[1]} />
        </div>
        
        <MinimalSeparator />
        
        {/* Minutes */}
        <div className="flex">
          <MinimalistDigit digit={minutes[0]} prevDigit={prevMinutes[0]} />
          <MinimalistDigit digit={minutes[1]} prevDigit={prevMinutes[1]} />
        </div>
        
        <MinimalSeparator />
        
        {/* Seconds */}
        <div className="flex">
          <MinimalistDigit digit={seconds[0]} prevDigit={prevSeconds[0]} />
          <MinimalistDigit digit={seconds[1]} prevDigit={prevSeconds[1]} />
        </div>
      </div>
      
      {/* Date display in a minimal style */}
      <div className="text-center">
        <div className="inline-block px-6 py-2">
          <div className="text-gray-600 text-sm font-light tracking-wide">
            {date}
          </div>
        </div>
      </div>
      
      {/* Seconds progress bar */}
      <SecondsProgress seconds={parseInt(seconds)} />
      
      {/* Minimal signature */}
      <div className="absolute bottom-4 right-4 text-[10px] text-gray-300 font-light">
        MINIMAL · 86
      </div>
    </div>
  );
};

export default Clock_86;

// Add these keyframes to your globals.css:
/*
@keyframes minPulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.9; transform: scale(0.99); }
}
*/ 