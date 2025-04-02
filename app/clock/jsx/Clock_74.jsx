'use client';
import React, { useEffect, useState } from 'react';

// Comic-style speech bubble for a digit
const ComicDigit = ({ digit, prevDigit, color = 'bg-yellow-400', textColor = 'text-black' }) => {
  const [animate, setAnimate] = useState(false);
  
  useEffect(() => {
    if (digit !== prevDigit) {
      setAnimate(true);
      const timer = setTimeout(() => setAnimate(false), 500);
      return () => clearTimeout(timer);
    }
  }, [digit, prevDigit]);

  return (
    <div className="relative w-20 h-28 flex items-center justify-center">
      {/* Speech bubble background */}
      <div 
        className={`absolute inset-0 ${color} rounded-lg transform transition-transform duration-300 ${
          animate ? 'scale-110' : 'scale-100'
        }`}
      >
        {/* Speech bubble tail */}
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-8 h-4 overflow-hidden">
          <div className={`w-8 h-8 ${color} rotate-45 transform origin-top-left translate-x-4`}></div>
        </div>
        
        {/* Halftone pattern */}
        <div className="absolute inset-2 opacity-20 pointer-events-none">
          <div className="absolute inset-0" 
               style={{
                 backgroundImage: 'radial-gradient(circle, black 1px, transparent 1px)',
                 backgroundSize: '6px 6px'
               }}></div>
        </div>
        
        {/* "POW" or "BAM" effect when digit changes */}
        {animate && (
          <div className="absolute -top-6 -right-6 bg-red-500 text-white text-xs font-extrabold p-2 rounded-full rotate-12 transform scale-90 animate-[pop_0.5s_ease-out]">
            {Math.random() > 0.5 ? 'POW!' : 'BAM!'}
          </div>
        )}
      </div>
      
      {/* Digit display */}
      <div 
        className={`relative ${textColor} text-5xl font-black font-comic transition-all duration-300 ${
          animate ? 'scale-150' : 'scale-100'
        }`}
        style={{
          textShadow: '1px 1px 0 white, -1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white',
          fontFamily: "'Bangers', cursive"
        }}
      >
        {digit}
      </div>
    </div>
  );
};

// Action words that change periodically
const ActionWord = () => {
  const words = ['TICK!', 'TOCK!', 'ZOOM!', 'WHAM!', 'ZAP!', 'KAPOW!'];
  const colors = ['bg-yellow-300', 'bg-pink-500', 'bg-blue-400', 'bg-green-400', 'bg-purple-400'];
  const [wordIndex, setWordIndex] = useState(0);
  const [colorIndex, setColorIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex(i => (i + 1) % words.length);
      setColorIndex(i => (i + 1) % colors.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className={`${colors[colorIndex]} text-black font-bold py-1 px-4 transform rotate-12 rounded-md shadow-md`}
         style={{ fontFamily: "'Bangers', cursive" }}>
      {words[wordIndex]}
    </div>
  );
};

const Clock_74 = () => {
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
    <div className="bg-white p-10 rounded-xl shadow-xl border-4 border-black relative">
      {/* Comic book patterns */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-red-500 rounded-bl-full"></div>
      <div className="absolute bottom-0 left-0 w-16 h-16 bg-blue-500 rounded-tr-full"></div>
      
      {/* Comic page lines */}
      <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute inset-y-0 left-1/3 w-0.5 bg-blue-900"></div>
        <div className="absolute inset-y-0 right-1/3 w-0.5 bg-blue-900"></div>
        <div className="absolute inset-x-0 top-1/4 h-0.5 bg-blue-900"></div>
        <div className="absolute inset-x-0 bottom-1/4 h-0.5 bg-blue-900"></div>
      </div>
      
      {/* Title */}
      <div className="relative z-10 text-center mb-8">
        <h1 className="text-3xl font-bold text-black transform -rotate-2"
            style={{ fontFamily: "'Bangers', cursive" }}>
          SUPER TIME ADVENTURE!
        </h1>
        <div className="mt-1 text-xs text-gray-500">ISSUE #24 • TODAY'S DATE</div>
      </div>
      
      {/* Clock display */}
      <div className="flex items-center justify-center space-x-2 mb-6">
        {/* Hours */}
        <ComicDigit digit={hours[0]} prevDigit={prevHours[0]} color="bg-pink-400" />
        <ComicDigit digit={hours[1]} prevDigit={prevHours[1]} color="bg-pink-400" />
        
        {/* Separator */}
        <div className="text-4xl font-bold text-black self-center pb-4">:</div>
        
        {/* Minutes */}
        <ComicDigit digit={minutes[0]} prevDigit={prevMinutes[0]} color="bg-blue-400" />
        <ComicDigit digit={minutes[1]} prevDigit={prevMinutes[1]} color="bg-blue-400" />
        
        {/* Separator */}
        <div className="text-4xl font-bold text-black self-center pb-4">:</div>
        
        {/* Seconds */}
        <ComicDigit digit={seconds[0]} prevDigit={prevSeconds[0]} color="bg-green-400" />
        <ComicDigit digit={seconds[1]} prevDigit={prevSeconds[1]} color="bg-green-400" />
      </div>
      
      {/* Action words */}
      <div className="flex justify-between items-center mt-6">
        <ActionWord />
        
        <div className="bg-yellow-200 text-black border border-yellow-500 text-sm py-1 px-3 font-medium rounded transform -rotate-1">
          {time.toLocaleDateString('en-US', { 
            weekday: 'short',
            month: 'short', 
            day: 'numeric'
          })}
        </div>
        
        <ActionWord />
      </div>
      
      {/* Comic book dots background */}
      <div className="absolute bottom-2 right-2 text-xs text-gray-400">
        CMYK
      </div>
    </div>
  );
};

export default Clock_74;

// Add to globals.css:
/*
@keyframes pop {
  0% { transform: scale(0); opacity: 0; }
  50% { transform: scale(1.2); opacity: 1; }
  100% { transform: scale(1); opacity: 1; }
}
*/ 