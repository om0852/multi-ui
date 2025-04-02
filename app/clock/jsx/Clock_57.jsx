'use client';
import React, { useEffect, useState } from 'react';

const TypewriterDigit = ({ digit, prevDigit }) => {
  const [isTyping, setIsTyping] = useState(false);
  
  useEffect(() => {
    if (digit !== prevDigit) {
      setIsTyping(true);
      const timer = setTimeout(() => setIsTyping(false), 600);
      return () => clearTimeout(timer);
    }
  }, [digit, prevDigit]);
  
  return (
    <div className="relative w-16 h-24 bg-amber-100 rounded-lg shadow-md overflow-hidden border-2 border-amber-800">
      {/* Paper texture */}
      <div className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23daa520' fill-opacity='0.2' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          backgroundSize: '80px 80px'
        }}
      ></div>
      
      {/* Digit display with typewriter effect */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className={`text-4xl font-mono text-amber-900 transition-all duration-50 ${isTyping ? 'opacity-0 -translate-y-1' : 'opacity-100'}`}>
          {prevDigit}
        </div>
        <div className={`text-4xl font-mono text-amber-900 transition-all duration-50 ${isTyping ? 'opacity-100' : 'opacity-0 translate-y-1'}`}>
          {digit}
        </div>
      </div>
      
      {/* Typewriter effect */}
      {isTyping && (
        <div className="absolute inset-0">
          {/* Type bar */}
          <div 
            className="absolute left-1/2 -translate-x-1/2 w-6 h-2 bg-gray-800 rounded-sm"
            style={{
              top: '45%',
              animation: 'typebarMove 0.1s ease-in-out forwards'
            }}
          ></div>
          
          {/* Ink ribbon */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[3px] bg-amber-950/30"></div>
          
          {/* Paper movement effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-800/5 to-transparent"
              style={{
                animation: 'paperShift 0.2s ease-in-out'
              }}
          ></div>
        </div>
      )}
      
      {/* Worn edges */}
      <div className="absolute inset-0 pointer-events-none mix-blend-overlay">
        <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-b from-white/20 to-transparent"></div>
        <div className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-t from-amber-900/20 to-transparent"></div>
        <div className="absolute inset-y-0 left-0 w-2 bg-gradient-to-r from-amber-900/20 to-transparent"></div>
        <div className="absolute inset-y-0 right-0 w-2 bg-gradient-to-l from-amber-900/20 to-transparent"></div>
      </div>
    </div>
  );
};

const Clock_57 = () => {
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
    <div className="bg-gradient-to-br from-amber-800 to-amber-950 p-8 rounded-xl shadow-2xl">
      <div className="relative">
        {/* Typewriter carriage decoration */}
        <div className="absolute -top-6 left-0 right-0 h-4 bg-gray-700 rounded-t-lg"></div>
        <div className="absolute -top-2 left-0 right-0 h-2 bg-gray-800"></div>
        
        <div className="flex items-center space-x-4">
          <div className="flex space-x-2">
            <TypewriterDigit digit={hours[0]} prevDigit={prevHours[0]} />
            <TypewriterDigit digit={hours[1]} prevDigit={prevHours[1]} />
          </div>
          
          <div className="text-4xl font-bold text-amber-200">:</div>
          
          <div className="flex space-x-2">
            <TypewriterDigit digit={minutes[0]} prevDigit={prevMinutes[0]} />
            <TypewriterDigit digit={minutes[1]} prevDigit={prevMinutes[1]} />
          </div>
          
          <div className="text-4xl font-bold text-amber-200">:</div>
          
          <div className="flex space-x-2">
            <TypewriterDigit digit={seconds[0]} prevDigit={prevSeconds[0]} />
            <TypewriterDigit digit={seconds[1]} prevDigit={prevSeconds[1]} />
          </div>
        </div>
        
        {/* Typewriter base decoration */}
        <div className="absolute -bottom-5 left-0 right-0 h-5 bg-gray-800 rounded-b-lg"></div>
      </div>
    </div>
  );
};

export default Clock_57;

// Add to globals.css:
/*
@keyframes typebarMove {
  0% { transform: translateX(-50%) translateY(-100%); }
  50% { transform: translateX(-50%) translateY(0); }
  100% { transform: translateX(-50%) translateY(-100%); }
}

@keyframes paperShift {
  0% { transform: translateY(0); }
  50% { transform: translateY(2px); }
  100% { transform: translateY(0); }
}
*/ 