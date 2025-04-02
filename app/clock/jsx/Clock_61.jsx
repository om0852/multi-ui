'use client';
import React, { useEffect, useState } from 'react';

// Define pixel patterns for each digit
const digitPatterns = {
  '0': [
    [1, 1, 1],
    [1, 0, 1],
    [1, 0, 1],
    [1, 0, 1],
    [1, 1, 1]
  ],
  '1': [
    [0, 1, 0],
    [1, 1, 0],
    [0, 1, 0],
    [0, 1, 0],
    [1, 1, 1]
  ],
  '2': [
    [1, 1, 1],
    [0, 0, 1],
    [1, 1, 1],
    [1, 0, 0],
    [1, 1, 1]
  ],
  '3': [
    [1, 1, 1],
    [0, 0, 1],
    [0, 1, 1],
    [0, 0, 1],
    [1, 1, 1]
  ],
  '4': [
    [1, 0, 1],
    [1, 0, 1],
    [1, 1, 1],
    [0, 0, 1],
    [0, 0, 1]
  ],
  '5': [
    [1, 1, 1],
    [1, 0, 0],
    [1, 1, 1],
    [0, 0, 1],
    [1, 1, 1]
  ],
  '6': [
    [1, 1, 1],
    [1, 0, 0],
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1]
  ],
  '7': [
    [1, 1, 1],
    [0, 0, 1],
    [0, 1, 0],
    [0, 1, 0],
    [0, 1, 0]
  ],
  '8': [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1]
  ],
  '9': [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
    [0, 0, 1],
    [1, 1, 1]
  ]
};

const PixelDigit = ({ digit }) => {
  const pattern = digitPatterns[digit] || digitPatterns['0'];
  
  return (
    <div className="w-12 h-20 flex flex-col">
      {pattern.map((row, rowIndex) => (
        <div key={rowIndex} className="flex flex-grow">
          {row.map((pixel, pixelIndex) => (
            <div 
              key={pixelIndex} 
              className={`flex-grow ${pixel ? 'bg-green-400' : 'bg-transparent'} m-0.5`}
            ></div>
          ))}
        </div>
      ))}
    </div>
  );
};

const RetroGameClock = () => {
  const [time, setTime] = useState(new Date());
  const [showColon, setShowColon] = useState(true);

  useEffect(() => {
    // Update time every second
    const timeInterval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    
    // Blink colon every 500ms
    const colonInterval = setInterval(() => {
      setShowColon(prev => !prev);
    }, 500);
    
    return () => {
      clearInterval(timeInterval);
      clearInterval(colonInterval);
    };
  }, []);

  const hours = time.getHours().toString().padStart(2, '0');
  const minutes = time.getMinutes().toString().padStart(2, '0');
  const seconds = time.getSeconds().toString().padStart(2, '0');

  return (
    <div className="bg-gray-950 p-8 border-4 border-gray-800 rounded-md shadow-lg relative overflow-hidden">
      {/* Pixel pattern background */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{ 
          backgroundImage: 'linear-gradient(to right, #4ade80 1px, transparent 1px), linear-gradient(to bottom, #4ade80 1px, transparent 1px)',
          backgroundSize: '8px 8px' 
        }}></div>
      </div>
      
      {/* "Screen" scanlines */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
        backgroundSize: '2px 4px',
        opacity: 0.3
      }}></div>
      
      {/* CRT screen effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/10 pointer-events-none"></div>
      
      {/* Game UI header */}
      <div className="mb-4 text-green-400 font-bold text-xl font-mono flex justify-between">
        <span>[LEVEL-1]</span>
        <span className="animate-pulse">SCORE:{time.getSeconds().toString().padStart(5, '0')}</span>
      </div>
      
      <div className="flex items-center justify-center space-x-3">
        <div className="flex space-x-1">
          <PixelDigit digit={hours[0]} />
          <PixelDigit digit={hours[1]} />
        </div>
        
        {/* Blinking colon */}
        <div className="flex flex-col justify-center space-y-6 w-2">
          <div className={`w-2 h-2 ${showColon ? 'bg-green-400' : 'bg-transparent'}`}></div>
          <div className={`w-2 h-2 ${showColon ? 'bg-green-400' : 'bg-transparent'}`}></div>
        </div>
        
        <div className="flex space-x-1">
          <PixelDigit digit={minutes[0]} />
          <PixelDigit digit={minutes[1]} />
        </div>
        
        {/* Blinking colon */}
        <div className="flex flex-col justify-center space-y-6 w-2">
          <div className={`w-2 h-2 ${showColon ? 'bg-green-400' : 'bg-transparent'}`}></div>
          <div className={`w-2 h-2 ${showColon ? 'bg-green-400' : 'bg-transparent'}`}></div>
        </div>
        
        <div className="flex space-x-1">
          <PixelDigit digit={seconds[0]} />
          <PixelDigit digit={seconds[1]} />
        </div>
      </div>
      
      {/* Game UI footer */}
      <div className="mt-4 text-green-400 font-mono text-xs flex justify-between items-center">
        <div className="flex space-x-1">
          <div className="w-3 h-3 bg-green-400"></div>
          <div className="w-3 h-3 bg-green-400"></div>
          <div className="w-3 h-3 bg-green-400"></div>
          <span className="ml-1">LIVES</span>
        </div>
        <div className="animate-[glitch_2s_ease-in-out_infinite]">PRESS START</div>
        <div>POWER:{Math.floor(time.getSeconds() / 60 * 100)}%</div>
      </div>
    </div>
  );
};

export default RetroGameClock;

// Add to globals.css:
/*
@keyframes glitch {
  0% { opacity: 1; }
  10% { opacity: 0.5; }
  20% { opacity: 1; }
  90% { opacity: 1; }
  100% { opacity: 0.5; }
}
*/ 