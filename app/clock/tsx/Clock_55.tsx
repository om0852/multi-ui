'use client';
import React, { useEffect, useState } from 'react';

const LiquidDigit = ({ value, prevValue }: { value: string; prevValue: string }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (value !== prevValue) {
      setIsAnimating(true);
      const timer = setTimeout(() => setIsAnimating(false), 1000);
      return () => clearTimeout(timer);
    }
  }, [value, prevValue]);

  return (
    <div className="relative w-16 h-24">
      {/* Background container */}
      <div className="absolute inset-0 bg-blue-900 rounded-lg overflow-hidden">
        {/* Liquid background effect */}
        <div
          className="absolute inset-0 transition-transform duration-1000"
          style={{
            background: `
              radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.5) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.5) 0%, transparent 30%),
              radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.5) 0%, transparent 40%)
            `,
            transform: isAnimating ? 'scale(1.2) rotate(5deg)' : 'scale(1) rotate(0deg)',
          }}
        />

        {/* Bubbles */}
        {isAnimating && Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-blue-300 opacity-50"
            style={{
              left: `${Math.random() * 100}%`,
              top: '100%',
              animation: `bubble ${1 + Math.random()}s ease-in-out forwards`,
            }}
          />
        ))}
      </div>

      {/* Current digit */}
      <div
        className={`absolute inset-0 flex items-center justify-center text-4xl font-bold transition-all duration-1000
          ${isAnimating ? 'transform translate-y-full opacity-0' : 'transform translate-y-0 opacity-100'}`}
        style={{
          color: 'rgba(255, 255, 255, 0.9)',
          textShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
        }}
      >
        {prevValue}
      </div>

      {/* New digit */}
      <div
        className={`absolute inset-0 flex items-center justify-center text-4xl font-bold transition-all duration-1000
          ${isAnimating ? 'transform translate-y-0 opacity-100' : 'transform -translate-y-full opacity-0'}`}
        style={{
          color: 'rgba(255, 255, 255, 0.9)',
          textShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
        }}
      >
        {value}
      </div>

      {/* Glass reflection effect */}
      <div
        className="absolute inset-0 rounded-lg opacity-30"
        style={{
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, transparent 50%)',
        }}
      />

      {/* Liquid surface effect */}
      <div
        className={`absolute inset-x-0 h-1/2 transition-transform duration-1000 ${
          isAnimating ? 'animate-liquidWave' : ''
        }`}
        style={{
          background: 'linear-gradient(180deg, transparent, rgba(59, 130, 246, 0.3))',
          transform: isAnimating ? 'translateY(10px)' : 'translateY(0)',
        }}
      />
    </div>
  );
};

const Clock_55 = () => {
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
    <div className="relative bg-gradient-to-br from-blue-800 to-blue-900 p-12 rounded-xl shadow-2xl overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 0% 100%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 100% 0%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)
          `,
        }}
      />

      <div className="relative flex items-center space-x-6">
        <div className="flex space-x-2">
          <LiquidDigit value={hours[0]} prevValue={prevHours[0]} />
          <LiquidDigit value={hours[1]} prevValue={prevHours[1]} />
        </div>

        <div className="flex flex-col space-y-4">
          <div className="w-2 h-2 rounded-full bg-blue-300 animate-pulse" />
          <div className="w-2 h-2 rounded-full bg-blue-300 animate-pulse" />
        </div>

        <div className="flex space-x-2">
          <LiquidDigit value={minutes[0]} prevValue={prevMinutes[0]} />
          <LiquidDigit value={minutes[1]} prevValue={prevMinutes[1]} />
        </div>

        <div className="flex flex-col space-y-4">
          <div className="w-2 h-2 rounded-full bg-blue-300 animate-pulse" />
          <div className="w-2 h-2 rounded-full bg-blue-300 animate-pulse" />
        </div>

        <div className="flex space-x-2">
          <LiquidDigit value={seconds[0]} prevValue={prevSeconds[0]} />
          <LiquidDigit value={seconds[1]} prevValue={prevSeconds[1]} />
        </div>
      </div>

      {/* Glass reflection */}
      <div
        className="absolute inset-0 rounded-xl opacity-30"
        style={{
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, transparent 50%)',
        }}
      />
    </div>
  );
};

export default Clock_55; 