'use client';
import React, { useEffect, useState } from 'react';

const Ripple = ({ delay = 0, size = 1 }: { delay?: number; size?: number }) => (
  <div
    className="absolute rounded-full border border-cyan-300 opacity-0"
    style={{
      width: `${size * 100}%`,
      height: `${size * 100}%`,
      left: `${50 - (size * 100) / 2}%`,
      top: `${50 - (size * 100) / 2}%`,
      animation: `ripple 4s cubic-bezier(0, 0, 0.2, 1) infinite`,
      animationDelay: `${delay}s`,
    }}
  />
);

const WaterDigit = ({ value }: { value: string }) => {
  const [isRippling, setIsRippling] = useState(false);

  useEffect(() => {
    const rippleInterval = setInterval(() => {
      setIsRippling(true);
      setTimeout(() => setIsRippling(false), 100);
    }, 3000);

    return () => clearInterval(rippleInterval);
  }, []);

  return (
    <div className="relative w-16 h-24">
      {/* Water container */}
      <div className="absolute inset-0 rounded-lg overflow-hidden bg-cyan-900">
        {/* Water surface */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, rgba(6, 182, 212, 0.3) 0%, rgba(6, 182, 212, 0.1) 100%)',
            animation: 'waterFlow 10s linear infinite',
          }}
        />

        {/* Ripple effects */}
        {isRippling && (
          <>
            <Ripple delay={0} size={0.2} />
            <Ripple delay={0.5} size={0.4} />
            <Ripple delay={1} size={0.6} />
          </>
        )}

        {/* Water movement */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(circle at 30% 30%, rgba(6, 182, 212, 0.4) 0%, transparent 50%),
              radial-gradient(circle at 70% 70%, rgba(6, 182, 212, 0.4) 0%, transparent 50%)
            `,
            animation: 'waterMove 8s ease-in-out infinite',
          }}
        />
      </div>

      {/* Number display */}
      <div
        className="absolute inset-0 flex items-center justify-center text-4xl font-bold"
        style={{
          color: 'rgba(255, 255, 255, 0.9)',
          textShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
          animation: isRippling ? 'waterDistort 0.5s ease-in-out' : 'none',
        }}
      >
        {value}
      </div>

      {/* Surface reflection */}
      <div
        className="absolute inset-0 rounded-lg"
        style={{
          background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, transparent 50%)',
          opacity: 0.3,
        }}
      />

      {/* Water caustics */}
      <div
        className="absolute inset-0 mix-blend-overlay"
        style={{
          background: `
            url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")
          `,
          animation: 'caustics 10s linear infinite',
          opacity: 0.1,
        }}
      />
    </div>
  );
};

const Clock_65 = () => {
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
    <div className="relative bg-gradient-to-br from-cyan-900 to-blue-900 p-12 rounded-xl shadow-2xl overflow-hidden">
      {/* Background water pattern */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `
            radial-gradient(circle at 20% 20%, rgba(6, 182, 212, 0.2) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(6, 182, 212, 0.2) 0%, transparent 50%)
          `,
          animation: 'waterBackground 20s linear infinite',
        }}
      />

      <div className="relative flex items-center space-x-4">
        <div className="flex space-x-2">
          <WaterDigit value={hours[0]} />
          <WaterDigit value={hours[1]} />
        </div>

        <div className="flex flex-col space-y-4">
          <div className="w-2 h-2 rounded-full bg-cyan-300 animate-pulse"
               style={{ boxShadow: '0 0 10px rgba(6, 182, 212, 0.8)' }} />
          <div className="w-2 h-2 rounded-full bg-cyan-300 animate-pulse"
               style={{ boxShadow: '0 0 10px rgba(6, 182, 212, 0.8)' }} />
        </div>

        <div className="flex space-x-2">
          <WaterDigit value={minutes[0]} />
          <WaterDigit value={minutes[1]} />
        </div>

        <div className="flex flex-col space-y-4">
          <div className="w-2 h-2 rounded-full bg-cyan-300 animate-pulse"
               style={{ boxShadow: '0 0 10px rgba(6, 182, 212, 0.8)' }} />
          <div className="w-2 h-2 rounded-full bg-cyan-300 animate-pulse"
               style={{ boxShadow: '0 0 10px rgba(6, 182, 212, 0.8)' }} />
        </div>

        <div className="flex space-x-2">
          <WaterDigit value={seconds[0]} />
          <WaterDigit value={seconds[1]} />
        </div>
      </div>

      {/* Water surface overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, transparent 30%, rgba(6, 182, 212, 0.1) 100%)',
          animation: 'waterSurface 5s ease-in-out infinite',
        }}
      />

      {/* Bubble effects */}
      {Array.from({ length: 10 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-cyan-200 opacity-30"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `bubble ${3 + Math.random() * 2}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}
    </div>
  );
};

export default Clock_65; 