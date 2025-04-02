'use client';
import React, { useEffect, useState } from 'react';

const NeonDigit = ({ digit, prevDigit }: { digit: string; prevDigit: string }) => {
  const [isPulsing, setIsPulsing] = useState(false);

  useEffect(() => {
    if (digit !== prevDigit) {
      setIsPulsing(true);
      const timer = setTimeout(() => setIsPulsing(false), 500);
      return () => clearTimeout(timer);
    }
  }, [digit, prevDigit]);

  return (
    <div className="relative w-16 h-24 bg-gray-900 rounded-lg overflow-hidden">
      {/* Main digit */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div 
          className={`text-4xl font-bold transition-all duration-500 ${
            isPulsing ? 'text-white scale-110' : 'text-purple-500 scale-100'
          }`}
          style={{
            textShadow: isPulsing 
              ? '0 0 20px rgba(168, 85, 247, 0.9), 0 0 30px rgba(168, 85, 247, 0.7), 0 0 40px rgba(168, 85, 247, 0.5)'
              : '0 0 10px rgba(168, 85, 247, 0.5), 0 0 20px rgba(168, 85, 247, 0.3)'
          }}
        >
          {digit}
        </div>
      </div>

      {/* Neon border effect */}
      <div className={`absolute inset-0 rounded-lg transition-opacity duration-500 ${
        isPulsing ? 'opacity-100' : 'opacity-40'
      }`}
        style={{
          boxShadow: 'inset 0 0 10px rgba(168, 85, 247, 0.5), 0 0 10px rgba(168, 85, 247, 0.3)'
        }}
      ></div>

      {/* Flicker effect */}
      <div className={`absolute inset-0 bg-purple-500/10 transition-opacity duration-100 ${
        Math.random() > 0.97 ? 'opacity-50' : 'opacity-0'
      }`}></div>
    </div>
  );
};

const Clock_36 = () => {
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
    <div className="bg-gray-900 p-8 rounded-xl shadow-2xl">
      <div className="flex items-center space-x-4">
        <div className="flex space-x-2">
          <NeonDigit digit={hours[0]} prevDigit={prevHours[0]} />
          <NeonDigit digit={hours[1]} prevDigit={prevHours[1]} />
        </div>
        
        <div className="text-4xl font-bold text-purple-500" 
             style={{ textShadow: '0 0 10px rgba(168, 85, 247, 0.5)' }}>:</div>
        
        <div className="flex space-x-2">
          <NeonDigit digit={minutes[0]} prevDigit={prevMinutes[0]} />
          <NeonDigit digit={minutes[1]} prevDigit={prevMinutes[1]} />
        </div>
        
        <div className="text-4xl font-bold text-purple-500"
             style={{ textShadow: '0 0 10px rgba(168, 85, 247, 0.5)' }}>:</div>
        
        <div className="flex space-x-2">
          <NeonDigit digit={seconds[0]} prevDigit={prevSeconds[0]} />
          <NeonDigit digit={seconds[1]} prevDigit={prevSeconds[1]} />
        </div>
      </div>
    </div>
  );
};

export default Clock_36; 