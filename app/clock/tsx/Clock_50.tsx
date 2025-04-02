'use client';
import React, { useEffect, useState } from 'react';

const MinimalistDigit = ({ value, prevValue }: { value: string; prevValue: string }) => {
  return (
    <div className="relative w-16 h-24">
      {/* Current digit */}
      <div
        className={`absolute inset-0 flex items-center justify-center text-4xl font-light transition-all duration-500
          ${value !== prevValue ? 'transform translate-y-full opacity-0' : 'transform translate-y-0 opacity-100'}`}
        style={{
          color: '#f5f5f5',
          fontFamily: "'Inter', sans-serif",
        }}
      >
        {prevValue}
      </div>

      {/* New digit sliding in */}
      <div
        className={`absolute inset-0 flex items-center justify-center text-4xl font-light transition-all duration-500
          ${value !== prevValue ? 'transform translate-y-0 opacity-100' : 'transform -translate-y-full opacity-0'}`}
        style={{
          color: '#f5f5f5',
          fontFamily: "'Inter', sans-serif",
        }}
      >
        {value}
      </div>

      {/* Elegant line decoration */}
      <div
        className="absolute bottom-0 left-1/2 w-8 h-[1px] transform -translate-x-1/2 transition-all duration-300"
        style={{
          background: 'linear-gradient(90deg, transparent, #f5f5f5 25%, #f5f5f5 75%, transparent)',
          opacity: value !== prevValue ? 0.8 : 0.3,
        }}
      />
    </div>
  );
};

const Clock_50 = () => {
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
    <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 p-12 rounded-xl shadow-2xl overflow-hidden">
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Clock container */}
      <div className="relative">
        <div className="flex items-center space-x-6">
          <div className="flex space-x-2">
            <MinimalistDigit value={hours[0]} prevValue={prevHours[0]} />
            <MinimalistDigit value={hours[1]} prevValue={prevHours[1]} />
          </div>

          {/* Separator */}
          <div className="flex flex-col space-y-2 h-24 justify-center">
            <div className="w-1 h-1 bg-gray-400 rounded-full" />
            <div className="w-1 h-1 bg-gray-400 rounded-full" />
          </div>

          <div className="flex space-x-2">
            <MinimalistDigit value={minutes[0]} prevValue={prevMinutes[0]} />
            <MinimalistDigit value={minutes[1]} prevValue={prevMinutes[1]} />
          </div>

          {/* Separator */}
          <div className="flex flex-col space-y-2 h-24 justify-center">
            <div className="w-1 h-1 bg-gray-400 rounded-full" />
            <div className="w-1 h-1 bg-gray-400 rounded-full" />
          </div>

          <div className="flex space-x-2">
            <MinimalistDigit value={seconds[0]} prevValue={prevSeconds[0]} />
            <MinimalistDigit value={seconds[1]} prevValue={prevSeconds[1]} />
          </div>
        </div>

        {/* Ambient glow */}
        <div
          className="absolute -inset-4 opacity-20 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at center, #f5f5f5 0%, transparent 70%)',
          }}
        />
      </div>
    </div>
  );
};

export default Clock_50; 