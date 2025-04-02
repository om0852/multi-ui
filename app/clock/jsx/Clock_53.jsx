'use client';
import React, { useEffect, useState } from 'react';

const ShadowDigit = ({ digit, prevDigit }) => {
  const [isSwitching, setIsSwitching] = useState(false);
  const [shadowAngle, setShadowAngle] = useState(135);
  
  useEffect(() => {
    // Shadow rotation effect
    const interval = setInterval(() => {
      setShadowAngle((prev) => (prev + 1) % 360);
    }, 100);
    
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (digit !== prevDigit) {
      setIsSwitching(true);
      const timer = setTimeout(() => setIsSwitching(false), 500);
      return () => clearTimeout(timer);
    }
  }, [digit, prevDigit]);

  // Calculate shadow direction
  const shadowX = Math.cos((shadowAngle * Math.PI) / 180) * 10;
  const shadowY = Math.sin((shadowAngle * Math.PI) / 180) * 10;

  return (
    <div className="relative w-16 h-24 bg-gray-200 rounded-lg overflow-hidden">
      {/* Day/night gradient background */}
      <div 
        className="absolute inset-0 transition-opacity duration-1000"
        style={{
          background: `linear-gradient(${shadowAngle}deg, #e5e5e5, #f8fafc)`,
          opacity: 0.6,
        }}
      ></div>

      {/* Main digit */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div 
          className={`text-4xl font-extrabold transition-all duration-500 ${
            isSwitching ? 'scale-110 opacity-0' : 'scale-100 opacity-1'
          }`}
          style={{
            color: 'rgba(15, 23, 42, 0.9)',
            textShadow: `${shadowX}px ${shadowY}px 8px rgba(15, 23, 42, 0.3)`,
          }}
        >
          {prevDigit}
        </div>
      </div>

      {/* Incoming digit */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div 
          className={`text-4xl font-extrabold transition-all duration-500 ${
            isSwitching ? 'scale-100 opacity-1' : 'scale-90 opacity-0'
          }`}
          style={{
            color: 'rgba(15, 23, 42, 0.9)',
            textShadow: `${shadowX}px ${shadowY}px 8px rgba(15, 23, 42, 0.3)`,
          }}
        >
          {digit}
        </div>
      </div>

      {/* Sun/Moon position indicator */}
      <div
        className="absolute w-4 h-4 rounded-full bg-gradient-to-br from-amber-300 to-amber-500 transition-all duration-100"
        style={{
          left: `calc(50% + ${Math.cos((shadowAngle * Math.PI) / 180) * 40}%)`,
          top: `calc(50% + ${Math.sin((shadowAngle * Math.PI) / 180) * 40}%)`,
          transform: 'translate(-50%, -50%)',
          boxShadow: '0 0 20px rgba(251, 191, 36, 0.5)',
          opacity: 0.8,
        }}
      ></div>
    </div>
  );
};

const Clock_53 = () => {
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
    <div className="bg-gradient-to-br from-slate-100 to-gray-200 p-8 rounded-xl shadow-xl">
      <div className="flex items-center space-x-4">
        <div className="flex space-x-2">
          <ShadowDigit digit={hours[0]} prevDigit={prevHours[0]} />
          <ShadowDigit digit={hours[1]} prevDigit={prevHours[1]} />
        </div>
        
        <div className="text-4xl font-bold text-gray-800">:</div>
        
        <div className="flex space-x-2">
          <ShadowDigit digit={minutes[0]} prevDigit={prevMinutes[0]} />
          <ShadowDigit digit={minutes[1]} prevDigit={prevMinutes[1]} />
        </div>
        
        <div className="text-4xl font-bold text-gray-800">:</div>
        
        <div className="flex space-x-2">
          <ShadowDigit digit={seconds[0]} prevDigit={prevSeconds[0]} />
          <ShadowDigit digit={seconds[1]} prevDigit={prevSeconds[1]} />
        </div>
      </div>
    </div>
  );
};

export default Clock_53; 