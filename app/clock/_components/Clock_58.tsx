'use client';
import React, { useEffect, useState } from 'react';

const LEDSegment = ({ active }: { active: boolean }) => (
  <div
    className="transition-all duration-200"
    style={{
      background: active
        ? 'linear-gradient(to right, #fbbf24, #f59e0b)'
        : '#4b5563',
      boxShadow: active
        ? '0 0 5px rgba(251, 191, 36, 0.8), 0 0 10px rgba(251, 191, 36, 0.5), inset 0 0 2px rgba(251, 191, 36, 0.5)'
        : 'none',
      opacity: active ? 1 : 0.2,
    }}
  />
);

const LEDDigit = ({ value }: { value: string }) => {
  // Define segment patterns for each digit
  const segments = {
    '0': [1, 1, 1, 0, 1, 1, 1],
    '1': [0, 0, 1, 0, 0, 1, 0],
    '2': [1, 0, 1, 1, 1, 0, 1],
    '3': [1, 0, 1, 1, 0, 1, 1],
    '4': [0, 1, 1, 1, 0, 1, 0],
    '5': [1, 1, 0, 1, 0, 1, 1],
    '6': [1, 1, 0, 1, 1, 1, 1],
    '7': [1, 0, 1, 0, 0, 1, 0],
    '8': [1, 1, 1, 1, 1, 1, 1],
    '9': [1, 1, 1, 1, 0, 1, 1],
  }[value] || [0, 0, 0, 0, 0, 0, 0];

  return (
    <div className="relative w-16 h-24 bg-gray-800 rounded-lg p-3">
      {/* Inner shadow effect */}
      <div className="absolute inset-0 rounded-lg" style={{ boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.3)' }} />

      <div className="relative h-full">
        {/* Top segment */}
        <div className="absolute top-0 left-2 right-2 h-2">
          <LEDSegment active={segments[0] === 1} />
        </div>

        {/* Top-right segment */}
        <div className="absolute top-1 right-0 w-2 h-[calc(50%-2px)]">
          <LEDSegment active={segments[1] === 1} />
        </div>

        {/* Bottom-right segment */}
        <div className="absolute bottom-1 right-0 w-2 h-[calc(50%-2px)]">
          <LEDSegment active={segments[2] === 1} />
        </div>

        {/* Bottom segment */}
        <div className="absolute bottom-0 left-2 right-2 h-2">
          <LEDSegment active={segments[3] === 1} />
        </div>

        {/* Bottom-left segment */}
        <div className="absolute bottom-1 left-0 w-2 h-[calc(50%-2px)]">
          <LEDSegment active={segments[4] === 1} />
        </div>

        {/* Top-left segment */}
        <div className="absolute top-1 left-0 w-2 h-[calc(50%-2px)]">
          <LEDSegment active={segments[5] === 1} />
        </div>

        {/* Middle segment */}
        <div className="absolute top-1/2 left-2 right-2 h-2 -mt-1">
          <LEDSegment active={segments[6] === 1} />
        </div>
      </div>

      {/* Dust effect */}
      <div
        className="absolute inset-0 rounded-lg pointer-events-none opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
};

const Clock_58 = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const hours = time.getHours().toString().padStart(2, '0');
  const minutes = time.getMinutes().toString().padStart(2, '0');
  const seconds = time.getSeconds().toString().padStart(2, '0');

  return (
    <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 p-12 rounded-xl shadow-2xl">
      {/* Vintage texture overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              45deg,
              #000 0,
              #000 1px,
              transparent 1px,
              transparent 2px
            )
          `,
        }}
      />

      <div className="relative flex items-center space-x-6">
        <div className="flex space-x-2">
          <LEDDigit value={hours[0]} />
          <LEDDigit value={hours[1]} />
        </div>

        <div className="flex flex-col space-y-4">
          <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse shadow-lg"
               style={{ boxShadow: '0 0 5px rgba(251, 191, 36, 0.8)' }} />
          <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse shadow-lg"
               style={{ boxShadow: '0 0 5px rgba(251, 191, 36, 0.8)' }} />
        </div>

        <div className="flex space-x-2">
          <LEDDigit value={minutes[0]} />
          <LEDDigit value={minutes[1]} />
        </div>

        <div className="flex flex-col space-y-4">
          <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse shadow-lg"
               style={{ boxShadow: '0 0 5px rgba(251, 191, 36, 0.8)' }} />
          <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse shadow-lg"
               style={{ boxShadow: '0 0 5px rgba(251, 191, 36, 0.8)' }} />
        </div>

        <div className="flex space-x-2">
          <LEDDigit value={seconds[0]} />
          <LEDDigit value={seconds[1]} />
        </div>
      </div>

      {/* Vignette effect */}
      <div
        className="absolute inset-0 rounded-xl pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, transparent 30%, rgba(0, 0, 0, 0.3) 100%)',
        }}
      />
    </div>
  );
};

export default Clock_58; 