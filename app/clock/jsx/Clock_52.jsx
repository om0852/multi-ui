'use client';
import React, { useEffect, useState } from 'react';

const WaveDigit = ({ digit, prevDigit }) => {
  const [isWaving, setIsWaving] = useState(false);
  const [wavePhase, setWavePhase] = useState(0);

  useEffect(() => {
    // Wave animation when digit changes
    if (digit !== prevDigit) {
      setIsWaving(true);
      const timer = setTimeout(() => setIsWaving(false), 1200);
      return () => clearTimeout(timer);
    }
  }, [digit, prevDigit]);

  // Continuous subtle wave animation
  useEffect(() => {
    const interval = setInterval(() => {
      setWavePhase((prev) => (prev + 0.1) % 10);
    }, 100);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-16 h-24 bg-gradient-to-br from-cyan-800 to-blue-900 rounded-lg overflow-hidden">
      {/* Water ripple effects */}
      <div className="absolute inset-0 opacity-30">
        {Array.from({ length: 3 }).map((_, i) => (
          <div 
            key={i}
            className="absolute w-full h-full rounded-full"
            style={{
              border: '1px solid rgba(255, 255, 255, 0.2)',
              transform: `scale(${isWaving ? 1 + (i * 0.2) : 0})`,
              left: `${50 - 50 * (1 + i * 0.2)}%`,
              top: `${50 - 50 * (1 + i * 0.2)}%`,
              opacity: isWaving ? 1 - (i * 0.3) : 0,
              transition: `transform 1.2s ease-out, opacity 1.2s ease-out`,
            }}
          ></div>
        ))}
      </div>

      {/* Water surface with waves */}
      <div 
        className="absolute inset-x-0 transition-all duration-1000"
        style={{
          height: isWaving ? '100%' : '60%',
          background: 'linear-gradient(180deg, rgba(6, 182, 212, 0.8) 0%, rgba(37, 99, 235, 0.8) 100%)',
          clipPath: `polygon(
            0% ${50 + Math.sin(wavePhase) * 5}%, 
            25% ${50 + Math.sin(wavePhase + 1) * 5}%, 
            50% ${50 + Math.sin(wavePhase + 2) * 5}%, 
            75% ${50 + Math.sin(wavePhase + 3) * 5}%, 
            100% ${50 + Math.sin(wavePhase + 4) * 5}%, 
            100% 100%, 
            0% 100%
          )`,
          bottom: 0,
        }}
      >
        {/* Reflective surface on top of water */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-b from-white/30 to-transparent"></div>
      </div>

      {/* Main digit */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div 
          className="text-4xl font-bold text-white transition-all duration-500"
          style={{
            opacity: 0.9,
            textShadow: '0 0 10px rgba(255, 255, 255, 0.3)',
            filter: `blur(${isWaving ? 1 : 0}px)`,
          }}
        >
          {digit}
        </div>
      </div>

      {/* Bubbles */}
      {isWaving && (
        <>
          {Array.from({ length: 5 }).map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full bg-white/70"
              style={{
                width: `${Math.random() * 4 + 2}px`,
                height: `${Math.random() * 4 + 2}px`,
                left: `${Math.random() * 80 + 10}%`,
                bottom: `0%`,
                opacity: 0.7,
                animation: `bubble ${Math.random() * 1 + 0.5}s ease-out forwards`,
                animationDelay: `${Math.random() * 0.5}s`,
              }}
            ></div>
          ))}
        </>
      )}

      {/* Glass reflection effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>
    </div>
  );
};

const Clock_52 = () => {
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
    <div className="bg-gradient-to-br from-cyan-950 to-blue-950 p-8 rounded-xl shadow-2xl">
      <div className="flex items-center space-x-4">
        <div className="flex space-x-2">
          <WaveDigit digit={hours[0]} prevDigit={prevHours[0]} />
          <WaveDigit digit={hours[1]} prevDigit={prevHours[1]} />
        </div>
        
        <div className="text-4xl font-bold text-cyan-400">:</div>
        
        <div className="flex space-x-2">
          <WaveDigit digit={minutes[0]} prevDigit={prevMinutes[0]} />
          <WaveDigit digit={minutes[1]} prevDigit={prevMinutes[1]} />
        </div>
        
        <div className="text-4xl font-bold text-cyan-400">:</div>
        
        <div className="flex space-x-2">
          <WaveDigit digit={seconds[0]} prevDigit={prevSeconds[0]} />
          <WaveDigit digit={seconds[1]} prevDigit={prevSeconds[1]} />
        </div>
      </div>
    </div>
  );
};

export default Clock_52;

// Add this to your globals.css file:
/*
@keyframes bubble {
  0% {
    transform: translateY(0) scale(1);
    opacity: 0.7;
  }
  100% {
    transform: translateY(-100px) scale(1.5);
    opacity: 0;
  }
}
*/ 