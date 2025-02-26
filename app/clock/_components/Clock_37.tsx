'use client';
import React, { useEffect, useState } from 'react';

const LiquidDigit = ({ digit, prevDigit }: { digit: string; prevDigit: string }) => {
  const [isFilling, setIsFilling] = useState(false);

  useEffect(() => {
    if (digit !== prevDigit) {
      setIsFilling(true);
      const timer = setTimeout(() => setIsFilling(false), 800);
      return () => clearTimeout(timer);
    }
  }, [digit, prevDigit]);

  return (
    <div className="relative w-16 h-24 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden">
      {/* Static digit (outline) */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-4xl font-bold text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}>
          {digit}
        </div>
      </div>

      {/* Liquid fill container */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Liquid */}
        <div 
          className="absolute inset-x-0 bottom-0 bg-gradient-to-b from-fuchsia-400 to-fuchsia-600 transition-all duration-800"
          style={{
            height: isFilling ? '100%' : '0%',
            transition: 'height 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
            boxShadow: '0 0 20px rgba(192, 38, 211, 0.5)'
          }}
        >
          {/* Waves */}
          <div className="absolute inset-x-0 top-0 h-4 transform -translate-y-1/2">
            <div className="absolute inset-0 animate-[wave_2s_linear_infinite]"
                 style={{
                   background: 'radial-gradient(circle at center top, transparent 30%, rgba(255,255,255,0.2) 30%)',
                   backgroundSize: '8px 4px'
                 }}
            ></div>
          </div>
        </div>

        {/* Filled digit */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-4xl font-bold text-white mix-blend-overlay">
            {digit}
          </div>
        </div>
      </div>

      {/* Shine effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>
    </div>
  );
};

const Clock_37 = () => {
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
    <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-xl shadow-2xl">
      <div className="flex items-center space-x-4">
        <div className="flex space-x-2">
          <LiquidDigit digit={hours[0]} prevDigit={prevHours[0]} />
          <LiquidDigit digit={hours[1]} prevDigit={prevHours[1]} />
        </div>
        
        <div className="text-4xl font-bold text-fuchsia-500">:</div>
        
        <div className="flex space-x-2">
          <LiquidDigit digit={minutes[0]} prevDigit={prevMinutes[0]} />
          <LiquidDigit digit={minutes[1]} prevDigit={prevMinutes[1]} />
        </div>
        
        <div className="text-4xl font-bold text-fuchsia-500">:</div>
        
        <div className="flex space-x-2">
          <LiquidDigit digit={seconds[0]} prevDigit={prevSeconds[0]} />
          <LiquidDigit digit={seconds[1]} prevDigit={prevSeconds[1]} />
        </div>
      </div>
    </div>
  );
};

export default Clock_37; 