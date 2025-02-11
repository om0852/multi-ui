'use client';
import React, { useEffect, useState } from 'react';

const HolographicDigit = ({ value }: { value: string }) => {
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      if (Math.random() < 0.1) {
        setIsGlitching(true);
        setTimeout(() => setIsGlitching(false), 150);
      }
    }, 2000);

    return () => clearInterval(glitchInterval);
  }, []);

  return (
    <div className="relative w-16 h-24">
      {/* Main digit */}
      <div
        className={`absolute inset-0 flex items-center justify-center text-4xl font-bold
          ${isGlitching ? 'animate-glitch' : ''}`}
        style={{
          color: 'rgba(0, 255, 255, 0.8)',
          textShadow: `
            0 0 5px rgba(0, 255, 255, 0.5),
            0 0 10px rgba(0, 255, 255, 0.3),
            0 0 15px rgba(0, 255, 255, 0.2)
          `,
        }}
      >
        {value}
      </div>

      {/* Holographic effects */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, transparent 0%, rgba(0, 255, 255, 0.1) 50%, transparent 100%)',
          animation: 'hologramScan 2s linear infinite',
        }}
      />

      {/* Glitch overlay */}
      {isGlitching && (
        <>
          <div
            className="absolute inset-0 flex items-center justify-center text-4xl font-bold"
            style={{
              color: 'rgba(255, 0, 255, 0.5)',
              transform: 'translate(2px, -2px)',
              mixBlendMode: 'screen',
            }}
          >
            {value}
          </div>
          <div
            className="absolute inset-0 flex items-center justify-center text-4xl font-bold"
            style={{
              color: 'rgba(0, 255, 255, 0.5)',
              transform: 'translate(-2px, 2px)',
              mixBlendMode: 'screen',
            }}
          >
            {value}
          </div>
        </>
      )}
    </div>
  );
};

const Clock_48 = () => {
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
    <div className="relative bg-black p-8 rounded-xl shadow-2xl overflow-hidden">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 255, 0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px',
          animation: 'gridMove 20s linear infinite',
        }}
      />

      {/* Holographic container */}
      <div className="relative z-10">
        <div className="flex items-center space-x-4">
          <div className="flex space-x-2">
            <HolographicDigit value={hours[0]} />
            <HolographicDigit value={hours[1]} />
          </div>

          <div className="text-4xl font-bold" style={{ color: 'rgba(0, 255, 255, 0.8)' }}>:</div>

          <div className="flex space-x-2">
            <HolographicDigit value={minutes[0]} />
            <HolographicDigit value={minutes[1]} />
          </div>

          <div className="text-4xl font-bold" style={{ color: 'rgba(0, 255, 255, 0.8)' }}>:</div>

          <div className="flex space-x-2">
            <HolographicDigit value={seconds[0]} />
            <HolographicDigit value={seconds[1]} />
          </div>
        </div>
      </div>

      {/* Ambient light effect */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, rgba(0, 255, 255, 0.2) 0%, transparent 70%)',
        }}
      />
    </div>
  );
};

export default Clock_48; 