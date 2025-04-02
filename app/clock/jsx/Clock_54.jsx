'use client';
import React, { useEffect, useState } from 'react';

// LED matrix definitions for digits 0-9
const digitMatrices = {
  '0': [
    [1, 1, 1],
    [1, 0, 1],
    [1, 0, 1],
    [1, 0, 1],
    [1, 1, 1]
  ],
  '1': [
    [0, 1, 0],
    [0, 1, 0],
    [0, 1, 0],
    [0, 1, 0],
    [0, 1, 0]
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
    [1, 1, 1],
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
    [0, 0, 1],
    [0, 0, 1],
    [0, 0, 1]
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
  ],
  ':': [
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0]
  ]
};

const LEDDigit = ({ digit, prevDigit }) => {
  const [isChanging, setIsChanging] = useState(false);
  
  useEffect(() => {
    if (digit !== prevDigit) {
      setIsChanging(true);
      const timer = setTimeout(() => setIsChanging(false), 300);
      return () => clearTimeout(timer);
    }
  }, [digit, prevDigit]);

  const matrix = digitMatrices[digit] || digitMatrices['0'];
  
  return (
    <div className="relative w-14 h-20 bg-gray-900 rounded-md flex flex-col justify-center items-center p-1.5">
      {matrix.map((row, rowIndex) => (
        <div key={rowIndex} className="flex w-full justify-between mb-0.5 last:mb-0">
          {row.map((led, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              className={`w-3 h-3 rounded-full transform transition-all duration-200 ${
                isChanging 
                  ? Math.random() > 0.5 ? 'scale-[0.85] opacity-50' : 'scale-[1.1] opacity-100'
                  : 'scale-100'
              }`}
              style={{
                backgroundColor: led 
                  ? `rgb(255, ${isChanging ? Math.floor(Math.random() * 100) + 50 : 50}, 50)` 
                  : 'rgba(255, 50, 50, 0.1)',
                boxShadow: led 
                  ? `0 0 5px rgba(255, 50, 50, 0.8), 0 0 10px rgba(255, 50, 50, 0.5)` 
                  : 'none',
                transition: 'all 50ms ease-in-out',
              }}
            />
          ))}
        </div>
      ))}
      
      {/* LED surface texture */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-transparent pointer-events-none"></div>
    </div>
  );
};

const ColonSeparator = () => {
  const matrix = digitMatrices[':'];
  
  return (
    <div className="w-6 h-20 bg-gray-900 rounded-md flex flex-col justify-center items-center p-1">
      {matrix.map((row, rowIndex) => (
        <div key={rowIndex} className="flex w-full justify-between mb-0.5 last:mb-0">
          {row.map((led, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              className="w-2 h-2 rounded-full"
              style={{
                backgroundColor: led 
                  ? 'rgb(255, 50, 50)' 
                  : 'rgba(255, 50, 50, 0.1)',
                boxShadow: led 
                  ? '0 0 5px rgba(255, 50, 50, 0.8), 0 0 10px rgba(255, 50, 50, 0.5)' 
                  : 'none',
                animation: led ? 'pulse 2s infinite ease-in-out' : 'none',
              }}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

const Clock_54 = () => {
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
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl shadow-2xl border-2 border-gray-700">
      <div className="flex items-center p-2 bg-black rounded-lg">
        <div className="flex space-x-1">
          <LEDDigit digit={hours[0]} prevDigit={prevHours[0]} />
          <LEDDigit digit={hours[1]} prevDigit={prevHours[1]} />
        </div>
        
        <ColonSeparator />
        
        <div className="flex space-x-1">
          <LEDDigit digit={minutes[0]} prevDigit={prevMinutes[0]} />
          <LEDDigit digit={minutes[1]} prevDigit={prevMinutes[1]} />
        </div>

        <ColonSeparator />
        
        <div className="flex space-x-1">
          <LEDDigit digit={seconds[0]} prevDigit={prevSeconds[0]} />
          <LEDDigit digit={seconds[1]} prevDigit={prevSeconds[1]} />
        </div>
      </div>
      
      {/* Control panel */}
      <div className="mt-3 flex justify-end space-x-2">
        <div className="w-3 h-3 bg-gray-700 rounded-full hover:bg-red-500 transition-colors"></div>
        <div className="w-3 h-3 bg-gray-700 rounded-full hover:bg-green-500 transition-colors"></div>
        <div className="w-3 h-3 bg-gray-700 rounded-full hover:bg-blue-500 transition-colors"></div>
      </div>
    </div>
  );
};

export default Clock_54; 