'use client';
import React, { useState, useEffect } from 'react';

// Art deco inspired corner decoration
const DecoCorner = ({ position }) => {
  return (
    <div className={`absolute ${position} w-24 h-24`}>
      <div className="relative w-full h-full">
        {/* Gold angular corner shapes */}
        <div className="absolute w-full h-1/2 bg-amber-600/90"
             style={{ clipPath: 'polygon(0 0, 50% 50%, 100% 0)' }}></div>
        <div className="absolute w-1/2 h-full bg-amber-600/90"
             style={{ clipPath: 'polygon(0 0, 0 100%, 50% 50%)' }}></div>
        
        {/* Inner details */}
        <div className="absolute w-[90%] h-[45%] bg-black"
             style={{ clipPath: 'polygon(0 0, 50% 50%, 100% 0)' }}></div>
        <div className="absolute w-[45%] h-[90%] bg-black"
             style={{ clipPath: 'polygon(0 0, 0 100%, 50% 50%)' }}></div>
        
        {/* Gold accent lines */}
        <div className="absolute w-[80%] h-[40%] bg-amber-600/90"
             style={{ clipPath: 'polygon(0 0, 50% 50%, 100% 0)' }}></div>
        <div className="absolute w-[40%] h-[80%] bg-amber-600/90"
             style={{ clipPath: 'polygon(0 0, 0 100%, 50% 50%)' }}></div>
      </div>
    </div>
  );
};

// Art deco style border pattern
const DecoBorder = ({ position, width, height, rotation = '0deg' }) => {
  return (
    <div 
      className={`absolute ${position} overflow-hidden`}
      style={{ width, height, transform: `rotate(${rotation})` }}
    >
      <div className="flex h-full">
        {Array.from({ length: Math.ceil(parseInt(width) / 20) }).map((_, i) => (
          <div key={i} className="flex flex-col justify-between w-5 h-full">
            <div className="h-2 w-full bg-amber-600"></div>
            <div className="h-2 w-full bg-amber-600"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Fan decoration in art deco style
const DecoFan = ({ position, size = 'w-20 h-20' }) => {
  return (
    <div className={`absolute ${position} ${size}`}>
      <div className="relative w-full h-full">
        {/* Create fan segments */}
        {Array.from({ length: 9 }).map((_, i) => (
          <div 
            key={i}
            className={`absolute top-1/2 left-1/2 bg-gradient-to-t from-amber-700 to-amber-500
                       w-1 h-1/2 origin-bottom transform -translate-x-1/2`}
            style={{ 
              transform: `translateX(-50%) rotate(${i * 20}deg)`,
              clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
              width: '10%',
            }}
          ></div>
        ))}
        
        {/* Center circle */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/4 h-1/4 bg-amber-600 rounded-full"></div>
      </div>
    </div>
  );
};

// Digit display with art deco styling
const ArtDecoDigit = ({ digit, prevDigit }) => {
  const [isChanging, setIsChanging] = useState(false);
  
  useEffect(() => {
    if (digit !== prevDigit) {
      setIsChanging(true);
      const timer = setTimeout(() => setIsChanging(false), 400);
      return () => clearTimeout(timer);
    }
  }, [digit, prevDigit]);
  
  return (
    <div className="relative w-16 h-28 mx-1">
      {/* Background panel */}
      <div className={`absolute inset-0 bg-black rounded-sm overflow-hidden
                      shadow-[0_0_0_1px_rgba(217,119,6,0.5),inset_0_0_0_1px_rgba(217,119,6,0.3)]
                      ${isChanging ? 'animate-[decoDigitChange_0.4s_ease-in-out]' : ''}`}>
        
        {/* Art deco background pattern */}
        <div className="absolute inset-0">
          {/* Top triangle */}
          <div className="absolute top-0 left-0 right-0 h-1/3 overflow-hidden">
            <div className="absolute top-0 left-1/2 w-full h-full bg-amber-600/20"
                 style={{ 
                   transform: 'translateX(-50%)',
                   clipPath: 'polygon(50% 0, 0 100%, 100% 100%)' 
                 }}></div>
          </div>
          
          {/* Bottom triangle */}
          <div className="absolute bottom-0 left-0 right-0 h-1/3 overflow-hidden">
            <div className="absolute bottom-0 left-1/2 w-full h-full bg-amber-600/20"
                 style={{ 
                   transform: 'translateX(-50%)',
                   clipPath: 'polygon(0 0, 100% 0, 50% 100%)' 
                 }}></div>
          </div>
          
          {/* Center line */}
          <div className="absolute top-1/2 left-1 right-1 h-[1px] bg-amber-600/40 transform -translate-y-1/2"></div>
        </div>
      </div>
      
      {/* Digit with gold outline effect */}
      <div 
        className={`absolute inset-0 flex items-center justify-center
                   text-5xl font-['Georgia',_serif] text-transparent bg-clip-text
                   bg-gradient-to-b from-amber-300 to-amber-600
                   transition-all duration-300 ${isChanging ? 'scale-110' : 'scale-100'}`}
        style={{ 
          textShadow: '0 0 1px rgba(217,119,6,0.8)',
        }}
      >
        {digit}
        
        {/* Gold outline effect */}
        <span className="absolute inset-0 flex items-center justify-center text-amber-600/20 z-10 pointer-events-none">
          {digit}
        </span>
      </div>
      
      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-amber-600"></div>
      <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-amber-600"></div>
      <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-amber-600"></div>
      <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-amber-600"></div>
    </div>
  );
};

// Decorative separator between digit groups
const DecoSeparator = () => {
  return (
    <div className="relative h-28 mx-2 flex flex-col items-center justify-center space-y-5">
      <div className="w-1 h-1 bg-amber-600 rounded-full"></div>
      <div className="w-1 h-4 bg-amber-600/80"></div>
      <div className="w-1 h-1 bg-amber-600 rounded-full"></div>
    </div>
  );
};

// Main clock component
const Clock_85 = () => {
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
  
  // Formatted date in Art Deco style
  const month = time.toLocaleDateString('en-US', { month: 'long' });
  const day = time.getDate();
  const year = time.getFullYear();
  
  return (
    <div className="relative bg-black p-12 rounded-lg shadow-2xl overflow-hidden">
      {/* Art Deco background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" 
          style={{
            backgroundImage: `radial-gradient(circle, rgba(217,119,6,0.8) 1px, transparent 1px)`,
            backgroundSize: '20px 20px'
          }}
        ></div>
      </div>
      
      {/* Corner decorations */}
      <DecoCorner position="top-0 left-0" />
      <DecoCorner position="top-0 right-0 transform rotate-90" />
      <DecoCorner position="bottom-0 left-0 transform -rotate-90" />
      <DecoCorner position="bottom-0 right-0 transform rotate-180" />
      
      {/* Border elements */}
      <DecoBorder position="top-8 left-24" width="calc(100% - 48px)" height="8px" />
      <DecoBorder position="bottom-8 left-24" width="calc(100% - 48px)" height="8px" />
      <DecoBorder position="left-8 top-24" width="calc(100% - 48px)" height="8px" rotation="90deg" />
      <DecoBorder position="right-8 top-24" width="calc(100% - 48px)" height="8px" rotation="90deg" />
      
      {/* Fan decorations */}
      <DecoFan position="top-20 left-10" size="w-12 h-12" />
      <DecoFan position="top-20 right-10" size="w-12 h-12" />
      <DecoFan position="bottom-20 left-10" size="w-12 h-12" />
      <DecoFan position="bottom-20 right-10" size="w-12 h-12" />
      
      {/* Title */}
      <div className="text-center mb-8 relative z-10">
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-600 
                      text-2xl tracking-[0.2em] uppercase font-bold">
          The Gatsby Time
        </h1>
        <div className="flex items-center justify-center mt-2">
          <div className="w-20 h-[1px] bg-amber-600/60"></div>
          <div className="px-4 text-amber-600">★</div>
          <div className="w-20 h-[1px] bg-amber-600/60"></div>
        </div>
      </div>
      
      {/* Clock display */}
      <div className="flex justify-center items-center mb-8 relative z-10">
        {/* Hours */}
        <div className="flex">
          <ArtDecoDigit digit={hours[0]} prevDigit={prevHours[0]} />
          <ArtDecoDigit digit={hours[1]} prevDigit={prevHours[1]} />
        </div>
        
        <DecoSeparator />
        
        {/* Minutes */}
        <div className="flex">
          <ArtDecoDigit digit={minutes[0]} prevDigit={prevMinutes[0]} />
          <ArtDecoDigit digit={minutes[1]} prevDigit={prevMinutes[1]} />
        </div>
        
        <DecoSeparator />
        
        {/* Seconds */}
        <div className="flex">
          <ArtDecoDigit digit={seconds[0]} prevDigit={prevSeconds[0]} />
          <ArtDecoDigit digit={seconds[1]} prevDigit={prevSeconds[1]} />
        </div>
      </div>
      
      {/* Date display in art deco style */}
      <div className="text-center relative z-10">
        <div className="inline-block px-6 py-1 bg-black border border-amber-600/30 relative">
          <div className="absolute -top-px -left-px -right-px -bottom-px bg-amber-600/5"></div>
          <div className="text-amber-500 tracking-wider text-sm font-serif">
            {month} {day}, {year}
          </div>
          
          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-amber-600"></div>
          <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-amber-600"></div>
          <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-amber-600"></div>
          <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-amber-600"></div>
        </div>
      </div>
      
      {/* Decorative diamond */}
      <div className="absolute bottom-[5%] left-1/2 transform -translate-x-1/2 rotate-45 w-5 h-5">
        <div className="absolute inset-0 bg-amber-600"></div>
        <div className="absolute inset-[2px] bg-black"></div>
        <div className="absolute inset-[4px] bg-amber-600"></div>
      </div>
    </div>
  );
};

export default Clock_85;

// Add these keyframes to your globals.css:
/*
@keyframes decoDigitChange {
  0%, 100% { transform: scale(1); filter: brightness(1); }
  50% { transform: scale(1.05); filter: brightness(1.3); }
}
*/ 