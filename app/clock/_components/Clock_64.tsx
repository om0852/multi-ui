'use client';
import React, { useEffect, useState } from 'react';

const Ember = ({ delay = 0 }: { delay?: number }) => (
  <div
    className="absolute w-1 h-1 rounded-full"
    style={{
      background: 'radial-gradient(circle at center, #ff6b6b, #ff4757)',
      animation: `ember ${2 + Math.random() * 2}s ease-out infinite`,
      animationDelay: `${delay}s`,
      opacity: Math.random() * 0.7 + 0.3,
    }}
  />
);

const FireDigit = ({ value }: { value: string }) => {
  const [intensity, setIntensity] = useState(1);

  useEffect(() => {
    const flameInterval = setInterval(() => {
      setIntensity(0.8 + Math.random() * 0.4);
    }, 100);

    return () => clearInterval(flameInterval);
  }, []);

  return (
    <div className="relative w-16 h-24">
      {/* Background glow */}
      <div
        className="absolute inset-0 rounded-lg transition-opacity duration-100"
        style={{
          background: 'radial-gradient(circle at center, rgba(255, 71, 87, 0.3) 0%, transparent 70%)',
          opacity: intensity,
        }}
      />

      {/* Fire base */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-x-0 bottom-0 h-full"
          style={{
            background: `
              linear-gradient(0deg, #ff4757 0%, #ff6b6b 30%, #ffa502 60%, transparent 100%)
            `,
            animation: 'flameMove 2s ease-in-out infinite',
            opacity: intensity,
          }}
        />

        {/* Ember particles */}
        {Array.from({ length: 10 }).map((_, i) => (
          <Ember key={i} delay={i * 0.2} />
        ))}
      </div>

      {/* Number display */}
      <div
        className="absolute inset-0 flex items-center justify-center text-4xl font-bold transition-all duration-100"
        style={{
          color: '#ffffff',
          textShadow: `
            0 0 10px rgba(255, 71, 87, ${0.8 * intensity}),
            0 0 20px rgba(255, 71, 87, ${0.6 * intensity}),
            0 0 30px rgba(255, 71, 87, ${0.4 * intensity})
          `,
        }}
      >
        {value}
      </div>

      {/* Fire overlay */}
      <div
        className="absolute inset-0 mix-blend-color-dodge"
        style={{
          background: `
            radial-gradient(circle at 50% 100%,
              rgba(255, 165, 2, ${0.4 * intensity}) 0%,
              transparent 60%
            )
          `,
        }}
      />
    </div>
  );
};

const Clock_64 = () => {
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
    <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 p-12 rounded-xl shadow-2xl overflow-hidden">
      {/* Heat distortion effect */}
      <div
        className="absolute inset-0 opacity-50"
        style={{
          background: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")',
          animation: 'heatDistortion 10s linear infinite',
        }}
      />

      <div className="relative flex items-center space-x-4">
        <div className="flex space-x-2">
          <FireDigit value={hours[0]} />
          <FireDigit value={hours[1]} />
        </div>

        <div className="flex flex-col space-y-4">
          <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"
               style={{ boxShadow: '0 0 10px rgba(255, 71, 87, 0.8)' }} />
          <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"
               style={{ boxShadow: '0 0 10px rgba(255, 71, 87, 0.8)' }} />
        </div>

        <div className="flex space-x-2">
          <FireDigit value={minutes[0]} />
          <FireDigit value={minutes[1]} />
        </div>

        <div className="flex flex-col space-y-4">
          <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"
               style={{ boxShadow: '0 0 10px rgba(255, 71, 87, 0.8)' }} />
          <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"
               style={{ boxShadow: '0 0 10px rgba(255, 71, 87, 0.8)' }} />
        </div>

        <div className="flex space-x-2">
          <FireDigit value={seconds[0]} />
          <FireDigit value={seconds[1]} />
        </div>
      </div>

      {/* Ember overlay */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <Ember key={i} delay={i * 0.3} />
        ))}
      </div>

      {/* Heat haze effect */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(0deg, transparent, rgba(255, 71, 87, 0.1))',
          animation: 'heatHaze 2s ease-in-out infinite',
        }}
      />
    </div>
  );
};

export default Clock_64; 