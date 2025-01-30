'use client';
import React, { useEffect, useState } from 'react';

const NeonRingDigit = ({ value }: { value: string }) => {
  const [glowIntensity, setGlowIntensity] = useState(1);

  useEffect(() => {
    const glowInterval = setInterval(() => {
      setGlowIntensity(0.8 + Math.random() * 0.4);
    }, 50);

    return () => clearInterval(glowInterval);
  }, []);

  return (
    <div className="relative w-16 h-24">
      {/* Background glow */}
      <div
        className="absolute inset-0 rounded-lg blur-xl transition-opacity duration-100"
        style={{
          background: 'radial-gradient(circle at center, rgba(236, 72, 153, 0.3) 0%, transparent 70%)',
          opacity: glowIntensity,
        }}
      />

      {/* Neon ring container */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="relative w-12 h-20 rounded-full transition-all duration-100"
          style={{
            background: 'transparent',
            boxShadow: `
              0 0 ${2 * glowIntensity}px rgba(236, 72, 153, 0.5),
              0 0 ${4 * glowIntensity}px rgba(236, 72, 153, 0.3),
              inset 0 0 ${2 * glowIntensity}px rgba(236, 72, 153, 0.5),
              inset 0 0 ${4 * glowIntensity}px rgba(236, 72, 153, 0.3)
            `,
            border: '2px solid rgba(236, 72, 153, 0.8)',
          }}
        >
          {/* Digit */}
          <div
            className="absolute inset-0 flex items-center justify-center text-3xl font-bold transition-all duration-100"
            style={{
              color: '#fff',
              textShadow: `
                0 0 ${5 * glowIntensity}px rgba(236, 72, 153, 1),
                0 0 ${10 * glowIntensity}px rgba(236, 72, 153, 0.8),
                0 0 ${15 * glowIntensity}px rgba(236, 72, 153, 0.6)
              `,
            }}
          >
            {value}
          </div>

          {/* Highlight effect */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, transparent 50%)',
            }}
          />
        </div>
      </div>
    </div>
  );
};

const Clock_57 = () => {
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
    <div className="relative bg-gray-900 p-12 rounded-xl shadow-2xl overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            radial-gradient(circle at 50% 50%, rgba(236, 72, 153, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 0% 100%, rgba(236, 72, 153, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 100% 0%, rgba(236, 72, 153, 0.1) 0%, transparent 50%)
          `,
        }}
      />

      <div className="relative flex items-center space-x-6">
        <div className="flex space-x-2">
          <NeonRingDigit value={hours[0]} />
          <NeonRingDigit value={hours[1]} />
        </div>

        <div className="flex flex-col space-y-4">
          <div
            className="w-2 h-2 rounded-full animate-pulse"
            style={{
              background: '#ec4899',
              boxShadow: '0 0 10px rgba(236, 72, 153, 0.8)',
            }}
          />
          <div
            className="w-2 h-2 rounded-full animate-pulse"
            style={{
              background: '#ec4899',
              boxShadow: '0 0 10px rgba(236, 72, 153, 0.8)',
            }}
          />
        </div>

        <div className="flex space-x-2">
          <NeonRingDigit value={minutes[0]} />
          <NeonRingDigit value={minutes[1]} />
        </div>

        <div className="flex flex-col space-y-4">
          <div
            className="w-2 h-2 rounded-full animate-pulse"
            style={{
              background: '#ec4899',
              boxShadow: '0 0 10px rgba(236, 72, 153, 0.8)',
            }}
          />
          <div
            className="w-2 h-2 rounded-full animate-pulse"
            style={{
              background: '#ec4899',
              boxShadow: '0 0 10px rgba(236, 72, 153, 0.8)',
            }}
          />
        </div>

        <div className="flex space-x-2">
          <NeonRingDigit value={seconds[0]} />
          <NeonRingDigit value={seconds[1]} />
        </div>
      </div>

      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, rgba(236, 72, 153, 0.1) 0%, transparent 70%)',
        }}
      />
    </div>
  );
};

export default Clock_57; 