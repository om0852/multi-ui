'use client';
import React, { useEffect, useState } from 'react';

const MagneticDigit = ({ digit, prevDigit }: { digit: string; prevDigit: string }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const particles = Array(30).fill(0).map(() => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 1,
    delay: Math.random() * 0.3
  }));

  useEffect(() => {
    if (digit !== prevDigit) {
      setIsAnimating(true);
      const timer = setTimeout(() => setIsAnimating(false), 800);
      return () => clearTimeout(timer);
    }
  }, [digit, prevDigit]);

  return (
    <div className="relative w-16 h-24 bg-gradient-to-br from-gray-900 to-gray-950 rounded-lg overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(255,255,255,0.05)1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)1px,transparent_1px)] bg-[length:8px_8px]"></div>

      {/* Magnetic particles */}
      {particles.map((particle, index) => (
        <div
          key={index}
          className={`absolute rounded-full bg-gradient-to-br from-yellow-400 to-yellow-500 transition-all duration-800`}
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            opacity: isAnimating ? 1 : 0,
            transform: isAnimating 
              ? `translate(-50%, -50%) scale(1)`
              : `translate(-50%, -50%) translate(${(50 - particle.x) * 2}%, ${(50 - particle.y) * 2}%) scale(0)`,
            transitionDelay: `${particle.delay}s`,
            boxShadow: '0 0 4px rgba(250, 204, 21, 0.5)'
          }}
        />
      ))}

      {/* Main digit */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div 
          className={`text-4xl font-bold transition-all duration-500 ${
            isAnimating 
              ? 'text-yellow-400 scale-110 blur-[1px]' 
              : 'text-yellow-500 scale-100 blur-0'
          }`}
          style={{
            textShadow: isAnimating 
              ? '0 0 20px rgba(250, 204, 21, 0.8)' 
              : '0 0 10px rgba(250, 204, 21, 0.3)'
          }}
        >
          {digit}
        </div>
      </div>

      {/* Magnetic field lines */}
      <div className={`absolute inset-0 transition-opacity duration-500 ${
        isAnimating ? 'opacity-30' : 'opacity-0'
      }`}>
        {Array(6).fill(0).map((_, i) => (
          <div
            key={i}
            className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent"
            style={{
              top: `${i * 20}%`,
              transform: `translateY(${isAnimating ? Math.sin(i) * 4 : 0}px)`,
              transition: 'transform 0.5s ease-in-out'
            }}
          />
        ))}
      </div>

      {/* Glow overlay */}
      <div className={`absolute inset-0 bg-yellow-400/5 transition-opacity duration-300 ${
        isAnimating ? 'opacity-100' : 'opacity-0'
      }`}></div>
    </div>
  );
};

const Clock_46 = () => {
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
    <div className="bg-gradient-to-br from-gray-900 to-gray-950 p-8 rounded-xl shadow-2xl">
      <div className="flex items-center space-x-4">
        <div className="flex space-x-2">
          <MagneticDigit digit={hours[0]} prevDigit={prevHours[0]} />
          <MagneticDigit digit={hours[1]} prevDigit={prevHours[1]} />
        </div>
        
        <div className="text-4xl font-bold text-yellow-500/80">:</div>
        
        <div className="flex space-x-2">
          <MagneticDigit digit={minutes[0]} prevDigit={prevMinutes[0]} />
          <MagneticDigit digit={minutes[1]} prevDigit={prevMinutes[1]} />
        </div>
        
        <div className="text-4xl font-bold text-yellow-500/80">:</div>
        
        <div className="flex space-x-2">
          <MagneticDigit digit={seconds[0]} prevDigit={prevSeconds[0]} />
          <MagneticDigit digit={seconds[1]} prevDigit={prevSeconds[1]} />
        </div>
      </div>
    </div>
  );
};

export default Clock_46; 