'use client';
import React, { useEffect, useState } from 'react';

const CosmicDigit = ({ value, prevValue }: { value: string; prevValue: string }) => {
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (value !== prevValue) {
      setIsTransitioning(true);
      const timer = setTimeout(() => setIsTransitioning(false), 500);
      return () => clearTimeout(timer);
    }
  }, [value, prevValue]);

  return (
    <div className="relative w-16 h-24">
      {/* Star field background */}
      <div className="absolute inset-0 overflow-hidden rounded-lg">
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at center, #1a237e 0%, #000051 100%)',
            opacity: isTransitioning ? 0.8 : 0.6,
          }}
        />
        
        {/* Random stars */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 bg-white rounded-full animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.8 + 0.2,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Nebula effect */}
      <div
        className="absolute inset-0 transition-opacity duration-500"
        style={{
          background: `
            radial-gradient(circle at 30% 30%, rgba(255, 0, 255, 0.2) 0%, transparent 50%),
            radial-gradient(circle at 70% 70%, rgba(0, 255, 255, 0.2) 0%, transparent 50%)
          `,
          opacity: isTransitioning ? 0.8 : 0.4,
        }}
      />

      {/* Current digit */}
      <div
        className={`absolute inset-0 flex items-center justify-center text-4xl font-bold transition-all duration-500
          ${isTransitioning ? 'transform scale-150 opacity-0' : 'transform scale-100 opacity-100'}`}
        style={{
          color: '#ffffff',
          textShadow: `
            0 0 10px rgba(255, 255, 255, 0.8),
            0 0 20px rgba(255, 255, 255, 0.4),
            0 0 30px rgba(255, 255, 255, 0.2)
          `,
        }}
      >
        {prevValue}
      </div>

      {/* New digit */}
      <div
        className={`absolute inset-0 flex items-center justify-center text-4xl font-bold transition-all duration-500
          ${isTransitioning ? 'transform scale-100 opacity-100' : 'transform scale-50 opacity-0'}`}
        style={{
          color: '#ffffff',
          textShadow: `
            0 0 10px rgba(255, 255, 255, 0.8),
            0 0 20px rgba(255, 255, 255, 0.4),
            0 0 30px rgba(255, 255, 255, 0.2)
          `,
        }}
      >
        {value}
      </div>

      {/* Cosmic dust particles */}
      {isTransitioning && Array.from({ length: 10 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 rounded-full"
          style={{
            left: `${50 + (Math.random() - 0.5) * 100}%`,
            top: `${50 + (Math.random() - 0.5) * 100}%`,
            background: 'linear-gradient(135deg, #00ffff, #ff00ff)',
            opacity: Math.random() * 0.5 + 0.5,
            transform: `scale(${Math.random() * 0.5 + 0.5})`,
            animation: `particle ${1 + Math.random()}s linear forwards`,
          }}
        />
      ))}
    </div>
  );
};

const Clock_60 = () => {
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
    <div className="relative bg-gradient-to-br from-[#000051] to-[#1a237e] p-12 rounded-xl shadow-2xl overflow-hidden">
      {/* Space background with stars */}
      <div className="absolute inset-0">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 bg-white rounded-full animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.8 + 0.2,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Galaxy swirl effect */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `
            radial-gradient(circle at 20% 20%, rgba(255, 0, 255, 0.2) 0%, transparent 40%),
            radial-gradient(circle at 80% 80%, rgba(0, 255, 255, 0.2) 0%, transparent 40%)
          `,
          animation: 'galaxyRotate 20s linear infinite',
        }}
      />

      <div className="relative flex items-center space-x-6">
        <div className="flex space-x-2">
          <CosmicDigit value={hours[0]} prevValue={prevHours[0]} />
          <CosmicDigit value={hours[1]} prevValue={prevHours[1]} />
        </div>

        <div className="flex flex-col space-y-4">
          <div className="w-2 h-2 rounded-full bg-white animate-pulse opacity-80"
               style={{ boxShadow: '0 0 10px rgba(255, 255, 255, 0.8)' }} />
          <div className="w-2 h-2 rounded-full bg-white animate-pulse opacity-80"
               style={{ boxShadow: '0 0 10px rgba(255, 255, 255, 0.8)' }} />
        </div>

        <div className="flex space-x-2">
          <CosmicDigit value={minutes[0]} prevValue={prevMinutes[0]} />
          <CosmicDigit value={minutes[1]} prevValue={prevMinutes[1]} />
        </div>

        <div className="flex flex-col space-y-4">
          <div className="w-2 h-2 rounded-full bg-white animate-pulse opacity-80"
               style={{ boxShadow: '0 0 10px rgba(255, 255, 255, 0.8)' }} />
          <div className="w-2 h-2 rounded-full bg-white animate-pulse opacity-80"
               style={{ boxShadow: '0 0 10px rgba(255, 255, 255, 0.8)' }} />
        </div>

        <div className="flex space-x-2">
          <CosmicDigit value={seconds[0]} prevValue={prevSeconds[0]} />
          <CosmicDigit value={seconds[1]} prevValue={prevSeconds[1]} />
        </div>
      </div>

      {/* Cosmic rays */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: 'linear-gradient(45deg, transparent 45%, rgba(255, 255, 255, 0.1) 50%, transparent 55%)',
          backgroundSize: '200% 200%',
          animation: 'cosmicRays 3s linear infinite',
        }}
      />
    </div>
  );
};

export default Clock_60; 