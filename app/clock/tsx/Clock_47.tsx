'use client';
import React, { useEffect, useState } from 'react';

const SmokeDigit = ({ digit, prevDigit }: { digit: string; prevDigit: string }) => {
  const [isDissolving, setIsDissolving] = useState(false);
  const particles = Array(20).fill(0).map(() => ({
    x: 50 + (Math.random() - 0.5) * 20,
    y: 50 + (Math.random() - 0.5) * 20,
    scale: Math.random() * 0.5 + 0.5,
    delay: Math.random() * 0.3
  }));

  useEffect(() => {
    if (digit !== prevDigit) {
      setIsDissolving(true);
      const timer = setTimeout(() => setIsDissolving(false), 1000);
      return () => clearTimeout(timer);
    }
  }, [digit, prevDigit]);

  return (
    <div className="relative w-16 h-24 bg-gradient-to-br from-neutral-900 to-neutral-950 rounded-lg overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-20"
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.005'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
             filter: 'contrast(120%) brightness(120%)'
           }}></div>

      {/* Smoke particles */}
      {isDissolving && particles.map((particle, index) => (
        <div
          key={index}
          className="absolute w-8 h-8 rounded-full transition-all duration-1000"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            opacity: isDissolving ? 0 : 0.3,
            transform: isDissolving 
              ? `translate(-50%, -50%) scale(${particle.scale}) translate(${(Math.random() - 0.5) * 100}px, ${-Math.random() * 100}px)`
              : 'translate(-50%, -50%) scale(0)',
            background: 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 70%)',
            transitionDelay: `${particle.delay}s`,
            transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        />
      ))}

      {/* Main digit */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div 
          className={`text-4xl font-bold transition-all duration-500 ${
            isDissolving ? 'opacity-0 scale-110 blur-sm' : 'opacity-100 scale-100 blur-0'
          }`}
          style={{
            color: '#e5e5e5',
            textShadow: '0 2px 4px rgba(0,0,0,0.2)'
          }}
        >
          {isDissolving ? prevDigit : digit}
        </div>
      </div>

      {/* New digit appearing */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div 
          className={`text-4xl font-bold transition-all duration-500 ${
            isDissolving ? 'opacity-100 scale-100 blur-0' : 'opacity-0 scale-90 blur-sm'
          }`}
          style={{
            color: '#e5e5e5',
            textShadow: '0 2px 4px rgba(0,0,0,0.2)'
          }}
        >
          {digit}
        </div>
      </div>

      {/* Smoke overlay */}
      <div 
        className={`absolute inset-0 transition-opacity duration-1000 ${
          isDissolving ? 'opacity-30' : 'opacity-0'
        }`}
        style={{
          background: 'radial-gradient(circle at center, transparent 30%, rgba(0,0,0,0.2) 70%)'
        }}
      ></div>
    </div>
  );
};

const Clock_47 = () => {
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
    <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 p-8 rounded-xl shadow-2xl">
      <div className="flex items-center space-x-4">
        <div className="flex space-x-2">
          <SmokeDigit digit={hours[0]} prevDigit={prevHours[0]} />
          <SmokeDigit digit={hours[1]} prevDigit={prevHours[1]} />
        </div>
        
        <div className="text-4xl font-bold text-neutral-400">:</div>
        
        <div className="flex space-x-2">
          <SmokeDigit digit={minutes[0]} prevDigit={prevMinutes[0]} />
          <SmokeDigit digit={minutes[1]} prevDigit={prevMinutes[1]} />
        </div>
        
        <div className="text-4xl font-bold text-neutral-400">:</div>
        
        <div className="flex space-x-2">
          <SmokeDigit digit={seconds[0]} prevDigit={prevSeconds[0]} />
          <SmokeDigit digit={seconds[1]} prevDigit={prevSeconds[1]} />
        </div>
      </div>
    </div>
  );
};

export default Clock_47; 