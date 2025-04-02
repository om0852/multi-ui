'use client';
import React, { useEffect, useState } from 'react';

const FlipDigit = ({ value, prevValue }: { value: string; prevValue: string }) => {
  const [isFlipping, setIsFlipping] = useState(false);

  useEffect(() => {
    if (value !== prevValue) {
      setIsFlipping(true);
      const timer = setTimeout(() => setIsFlipping(false), 300);
      return () => clearTimeout(timer);
    }
  }, [value, prevValue]);

  return (
    <div className="relative w-16 h-24 bg-gray-800 rounded-lg overflow-hidden">
      {/* Top static panel */}
      <div className="absolute inset-x-0 top-0 h-[calc(50%-1px)] bg-gray-700 flex items-end justify-center overflow-hidden">
        <span className="text-4xl font-bold text-gray-200 mb-0.5">{value}</span>
      </div>

      {/* Bottom static panel */}
      <div className="absolute inset-x-0 bottom-0 h-[calc(50%-1px)] bg-gray-800 flex items-start justify-center overflow-hidden">
        <span className="text-4xl font-bold text-gray-300 mt-0.5">{value}</span>
      </div>

      {/* Flip top half */}
      <div
        className={`absolute inset-x-0 top-0 h-1/2 bg-gray-700 flex items-end justify-center overflow-hidden origin-bottom transition-all duration-300 ${
          isFlipping ? 'animate-flipTop' : ''
        }`}
        style={{
          transformStyle: 'preserve-3d',
          backfaceVisibility: 'hidden',
          transform: isFlipping ? 'rotateX(-180deg)' : 'rotateX(0)',
        }}
      >
        <span className="text-4xl font-bold text-gray-200 mb-0.5">{prevValue}</span>
      </div>

      {/* Flip bottom half */}
      <div
        className={`absolute inset-x-0 bottom-1/2 h-1/2 bg-gray-800 flex items-start justify-center overflow-hidden origin-top transition-all duration-300 ${
          isFlipping ? 'animate-flipBottom' : ''
        }`}
        style={{
          transformStyle: 'preserve-3d',
          backfaceVisibility: 'hidden',
          transform: isFlipping ? 'rotateX(0)' : 'rotateX(180deg)',
        }}
      >
        <span className="text-4xl font-bold text-gray-300 mt-0.5">{value}</span>
      </div>

      {/* Center line */}
      <div className="absolute inset-x-2 top-1/2 h-[2px] bg-black opacity-20" />

      {/* Inner shadows */}
      <div className="absolute inset-0 shadow-inner pointer-events-none" />

      {/* Side depth effect */}
      <div className="absolute -right-1 inset-y-0 w-1 bg-gray-900" />
      <div className="absolute -left-1 inset-y-0 w-1 bg-gray-900" />
    </div>
  );
};

const Clock_54 = () => {
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
    <div className="relative bg-gradient-to-br from-gray-700 to-gray-900 p-12 rounded-xl shadow-2xl">
      {/* Metallic texture */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              -45deg,
              transparent,
              transparent 1px,
              rgba(255, 255, 255, 0.1) 1px,
              rgba(255, 255, 255, 0.1) 2px
            )
          `,
        }}
      />

      <div className="relative flex items-center space-x-6">
        <div className="flex space-x-2">
          <FlipDigit value={hours[0]} prevValue={prevHours[0]} />
          <FlipDigit value={hours[1]} prevValue={prevHours[1]} />
        </div>

        <div className="flex flex-col space-y-4 py-2">
          <div className="w-2 h-2 rounded-full bg-gray-400" />
          <div className="w-2 h-2 rounded-full bg-gray-400" />
        </div>

        <div className="flex space-x-2">
          <FlipDigit value={minutes[0]} prevValue={prevMinutes[0]} />
          <FlipDigit value={minutes[1]} prevValue={prevMinutes[1]} />
        </div>

        <div className="flex flex-col space-y-4 py-2">
          <div className="w-2 h-2 rounded-full bg-gray-400" />
          <div className="w-2 h-2 rounded-full bg-gray-400" />
        </div>

        <div className="flex space-x-2">
          <FlipDigit value={seconds[0]} prevValue={prevSeconds[0]} />
          <FlipDigit value={seconds[1]} prevValue={prevSeconds[1]} />
        </div>
      </div>

      {/* Ambient light effect */}
      <div
        className="absolute inset-0 rounded-xl opacity-20 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.2) 0%, transparent 70%)',
        }}
      />
    </div>
  );
};

export default Clock_54; 