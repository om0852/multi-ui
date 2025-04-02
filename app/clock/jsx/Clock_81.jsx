"use client";
import React, { useState, useEffect } from 'react';

// Animated dragon that flies around the clock
const Dragon = ({ position, size = 40, reversed = false }) => {
  return (
    <div 
      className={`absolute ${position} transition-transform duration-[15000ms] hover:scale-110 z-10`}
      style={{ transform: reversed ? 'scaleX(-1)' : '' }}
    >
      <div className="relative" style={{ width: size, height: size }}>
        {/* Dragon body */}
        <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-red-800 rounded-full transform rotate-45"></div>
        
        {/* Dragon head */}
        <div className="absolute top-1/8 left-1/2 w-1/4 h-1/4 bg-red-900 rounded-full"></div>
        
        {/* Dragon wings */}
        <div className="absolute top-1/4 left-0 w-1/3 h-1/3 bg-red-700 rounded-tl-full animate-[dragonWing_2s_ease-in-out_infinite_alternate]"></div>
        <div className="absolute top-1/4 right-0 w-1/3 h-1/3 bg-red-700 rounded-tr-full animate-[dragonWing_2s_ease-in-out_infinite_alternate_reverse]"></div>
        
        {/* Dragon tail */}
        <div className="absolute bottom-0 right-1/4 w-1/5 h-1/3 bg-red-800 rounded-br-full animate-[dragonTail_3s_ease-in-out_infinite]"></div>
        
        {/* Fire breath */}
        <div className="absolute top-1/8 left-3/4 w-1/4 h-1/8 bg-gradient-to-r from-yellow-500 via-orange-500 to-transparent rounded-r-full animate-[fireBreath_1s_ease-in-out_infinite_alternate]"></div>
      </div>
    </div>
  );
};

// Illuminated letter/digit in medieval manuscript style
const IlluminatedDigit = ({ digit, prevDigit }) => {
  const [isChanging, setIsChanging] = useState(false);
  
  useEffect(() => {
    if (digit !== prevDigit) {
      setIsChanging(true);
      const timer = setTimeout(() => setIsChanging(false), 300);
      return () => clearTimeout(timer);
    }
  }, [digit, prevDigit]);
  
  return (
    <div className="relative w-20 h-28 flex items-center justify-center m-1">
      {/* Parchment background */}
      <div className="absolute inset-0 bg-amber-100 rounded-lg border-4 border-amber-800 overflow-hidden">
        {/* Parchment texture */}
        <div className="absolute inset-0 opacity-20" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23935d32' fill-opacity='0.2' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>
      
      {/* Ornate border decorations */}
      <div className="absolute top-0 left-0 w-6 h-6 border-t-4 border-l-4 border-amber-900 rounded-tl-lg"></div>
      <div className="absolute top-0 right-0 w-6 h-6 border-t-4 border-r-4 border-amber-900 rounded-tr-lg"></div>
      <div className="absolute bottom-0 left-0 w-6 h-6 border-b-4 border-l-4 border-amber-900 rounded-bl-lg"></div>
      <div className="absolute bottom-0 right-0 w-6 h-6 border-b-4 border-r-4 border-amber-900 rounded-br-lg"></div>
      
      {/* Decorative flourishes */}
      <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-1/2 h-2 bg-amber-900/30"></div>
      <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1/2 h-2 bg-amber-900/30"></div>
      
      {/* Digit display with medieval font */}
      <div 
        className={`relative text-5xl font-medieval text-amber-900 
                   ${isChanging ? 'animate-[illuminate_0.3s_ease-in-out]' : ''}`}
      >
        {digit}
        
        {/* Gold leaf effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-amber-600 opacity-0 mix-blend-overlay hover:opacity-50 transition-opacity duration-300"></div>
      </div>
    </div>
  );
};

// Decorative separator with medieval design
const MedievalSeparator = () => (
  <div className="relative h-28 w-8 flex items-center justify-center mx-1">
    <div className="h-16 w-0.5 bg-amber-900"></div>
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-amber-700 rounded-full"></div>
    <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-amber-800 rounded-full"></div>
    <div className="absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-amber-800 rounded-full"></div>
  </div>
);

// Shield with coat of arms for decoration
const Shield = ({ position, size = 50 }) => (
  <div className={`absolute ${position} w-${size} h-${size} transform rotate-3`}>
    <div className="relative w-full h-full">
      {/* Shield base */}
      <div className="absolute w-full h-full bg-amber-700 rounded-t-xl" 
        style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 70%, 50% 100%, 0% 70%)' }}>
      </div>
      
      {/* Shield details */}
      <div className="absolute w-[90%] h-[90%] top-[5%] left-[5%] bg-red-700 rounded-t-lg"
        style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 70%, 50% 100%, 0% 70%)' }}>
        {/* Coat of arms design */}
        <div className="absolute inset-0 flex items-center justify-center text-amber-200 text-2xl font-bold">
          ⚜
        </div>
      </div>
    </div>
  </div>
);

// Main clock component
const Clock_81 = () => {
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
  
  const date = time.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  
  return (
    <div className="relative bg-gradient-to-b from-stone-700 to-stone-900 overflow-hidden p-12 rounded-xl border-8 border-amber-900 shadow-2xl min-h-[300px] min-w-[600px]">
      {/* Stone wall texture background */}
      <div className="absolute inset-0 opacity-10" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='42' height='44' viewBox='0 0 42 44' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M0 0h42v44H0V0zm1 1h40v20H1V1zM0 23h20v20H0V23zm22 0h20v20H22V23z'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>
      
      {/* Floating decorations */}
      <Dragon position="top-6 left-10" size={50} />
      <Dragon position="bottom-6 right-10" size={40} reversed={true} />
      <Shield position="top-12 right-8" size="20" />
      <Shield position="bottom-12 left-8" size="20" />
      
      {/* Manuscript title */}
      <div className="text-center mb-6">
        <h1 className="text-2xl font-medieval text-amber-400 tracking-wide">Tempus Arcanum</h1>
        <div className="w-40 h-1 bg-amber-700 mx-auto mt-1"></div>
      </div>
      
      {/* Clock digits display */}
      <div className="flex justify-center items-center mb-6">
        <div className="flex">
          <IlluminatedDigit digit={hours[0]} prevDigit={prevHours[0]} />
          <IlluminatedDigit digit={hours[1]} prevDigit={prevHours[1]} />
        </div>
        
        <MedievalSeparator />
        
        <div className="flex">
          <IlluminatedDigit digit={minutes[0]} prevDigit={prevMinutes[0]} />
          <IlluminatedDigit digit={minutes[1]} prevDigit={prevMinutes[1]} />
        </div>
        
        <MedievalSeparator />
        
        <div className="flex">
          <IlluminatedDigit digit={seconds[0]} prevDigit={prevSeconds[0]} />
          <IlluminatedDigit digit={seconds[1]} prevDigit={prevSeconds[1]} />
        </div>
      </div>
      
      {/* Date display in gothic script */}
      <div className="text-center font-medieval text-amber-400">
        <div className="text-sm">{date}</div>
        <div className="w-60 h-0.5 bg-amber-700/50 mx-auto mt-1"></div>
      </div>
      
      {/* Torch decorations */}
      <div className="absolute bottom-4 left-4 w-6 h-12">
        <div className="w-2 h-8 bg-amber-900 mx-auto"></div>
        <div className="w-6 h-4 bg-orange-600 rounded-t-full animate-[flicker_1s_ease-in-out_infinite_alternate]"></div>
      </div>
      <div className="absolute bottom-4 right-4 w-6 h-12">
        <div className="w-2 h-8 bg-amber-900 mx-auto"></div>
        <div className="w-6 h-4 bg-orange-600 rounded-t-full animate-[flicker_1.3s_ease-in-out_infinite_alternate]"></div>
      </div>
    </div>
  );
};

export default Clock_81;

// Add these keyframes to your globals.css:
/*
@keyframes illuminate {
  0% { transform: scale(1); filter: brightness(1); }
  50% { transform: scale(1.1); filter: brightness(1.5); }
  100% { transform: scale(1); filter: brightness(1); }
}

@keyframes flicker {
  0%, 100% { opacity: 1; transform: translateY(0) scale(1); }
  25% { opacity: 0.8; transform: translateY(-1px) scale(0.98); }
  50% { opacity: 0.9; transform: translateY(1px) scale(1.02); }
  75% { opacity: 0.8; transform: translateY(-1px) scale(0.99); }
}

@keyframes dragonWing {
  0% { transform: rotate(0); }
  100% { transform: rotate(30deg); }
}

@keyframes dragonTail {
  0% { transform: rotate(0); }
  25% { transform: rotate(15deg); }
  50% { transform: rotate(-15deg); }
  75% { transform: rotate(10deg); }
  100% { transform: rotate(0); }
}

@keyframes fireBreath {
  0% { width: 25%; opacity: 0.7; }
  100% { width: 50%; opacity: 0.3; }
}
*/ 