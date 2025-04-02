'use client';
import React, { useEffect, useState } from 'react';

const SandDigit = ({ digit, prevDigit }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const particles = Array(30).fill(0).map(() => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 1,
    delay: Math.random() * 0.5
  }));

  useEffect(() => {
    if (digit !== prevDigit) {
      setIsAnimating(true);
      const timer = setTimeout(() => setIsAnimating(false), 1000);
      return () => clearTimeout(timer);
    }
  }, [digit, prevDigit]);

  return (
    <div className="relative w-16 h-24 bg-gradient-to-br from-amber-800 to-amber-900 rounded-lg overflow-hidden">
      {/* Digit outline */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-4xl font-bold text-transparent" 
             style={{ WebkitTextStroke: '1px rgba(255,255,255,0.1)' }}>
          {digit}
        </div>
      </div>

      {/* Sand particles */}
      {particles.map((particle, index) => (
        <div
          key={index}
          className="absolute rounded-full bg-amber-300"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.x}%`,
            top: isAnimating 
              ? `${Math.min(100, particle.y + (100 - particle.y) * Math.random())}%` 
              : `${particle.y}%`,
            opacity: 0.6 + Math.random() * 0.4,
            transition: `top ${0.5 + Math.random() * 0.5}s cubic-bezier(0.4, 0, 1, 1)`,
            transitionDelay: `${particle.delay}s`,
            boxShadow: '0 0 2px rgba(217, 119, 6, 0.3)'
          }}
        />
      ))}

      {/* Sand pile at bottom */}
      <div className="absolute left-0 right-0 bottom-0 rounded-b-lg overflow-hidden">
        <div 
          className="w-full bg-gradient-to-r from-amber-300/70 via-amber-400/70 to-amber-300/70 transition-all duration-1000"
          style={{
            height: isAnimating ? '30%' : '10%',
            clipPath: 'polygon(0% 100%, 50% 0%, 100% 100%)',
            filter: 'brightness(1.2) contrast(1.2)'
          }}
        ></div>
      </div>

      {/* Glass reflection effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>
    </div>
  );
};

const Clock_51 = () => {
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
    <div className="bg-gradient-to-br from-amber-950 to-amber-900 p-8 rounded-xl shadow-2xl">
      <div className="flex items-center space-x-4">
        <div className="flex space-x-2">
          <SandDigit digit={hours[0]} prevDigit={prevHours[0]} />
          <SandDigit digit={hours[1]} prevDigit={prevHours[1]} />
        </div>
        
        <div className="text-4xl font-bold text-amber-400">:</div>
        
        <div className="flex space-x-2">
          <SandDigit digit={minutes[0]} prevDigit={prevMinutes[0]} />
          <SandDigit digit={minutes[1]} prevDigit={prevMinutes[1]} />
        </div>
        
        <div className="text-4xl font-bold text-amber-400">:</div>
        
        <div className="flex space-x-2">
          <SandDigit digit={seconds[0]} prevDigit={prevSeconds[0]} />
          <SandDigit digit={seconds[1]} prevDigit={prevSeconds[1]} />
        </div>
      </div>
    </div>
  );
};

export default Clock_51; 