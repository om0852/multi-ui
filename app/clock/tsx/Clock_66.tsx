'use client';
import React, { useEffect, useState } from 'react';

const CrystalFacet = ({ angle, color }: { angle: number; color: string }) => (
  <div
    className="absolute inset-0"
    style={{
      background: `linear-gradient(${angle}deg, ${color} 0%, transparent 60%)`,
      opacity: 0.4,
      mixBlendMode: 'screen',
    }}
  />
);

const CrystalDigit = ({ value }: { value: string }) => {
  const [sparklePosition, setSparklePosition] = useState({ x: 50, y: 50 });
  const [sparkleOpacity, setSparkleOpacity] = useState(0);

  useEffect(() => {
    const sparkleInterval = setInterval(() => {
      setSparklePosition({
        x: Math.random() * 100,
        y: Math.random() * 100,
      });
      setSparkleOpacity(0.8);
      setTimeout(() => setSparkleOpacity(0), 200);
    }, 2000);

    return () => clearInterval(sparkleInterval);
  }, []);

  return (
    <div className="relative w-16 h-24">
      {/* Crystal container */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden">
        {/* Crystal facets */}
        <CrystalFacet angle={45} color="rgba(255, 0, 255, 0.5)" />
        <CrystalFacet angle={135} color="rgba(0, 255, 255, 0.5)" />
        <CrystalFacet angle={225} color="rgba(255, 255, 0, 0.5)" />
        <CrystalFacet angle={315} color="rgba(0, 255, 0, 0.5)" />

        {/* Light refraction */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(45deg, transparent 0%, rgba(255, 255, 255, 0.4) 50%, transparent 100%)',
            animation: 'crystalRefract 10s linear infinite',
          }}
        />

        {/* Sparkle effect */}
        <div
          className="absolute w-4 h-4 transition-opacity duration-200"
          style={{
            left: `${sparklePosition.x}%`,
            top: `${sparklePosition.y}%`,
            opacity: sparkleOpacity,
            background: 'radial-gradient(circle at center, rgba(255, 255, 255, 0.9) 0%, transparent 70%)',
            transform: 'translate(-50%, -50%)',
          }}
        />
      </div>

      {/* Number display */}
      <div
        className="absolute inset-0 flex items-center justify-center text-4xl font-bold"
        style={{
          color: 'rgba(255, 255, 255, 0.9)',
          textShadow: `
            0 0 10px rgba(255, 255, 255, 0.5),
            0 0 20px rgba(255, 255, 255, 0.3),
            0 0 30px rgba(255, 255, 255, 0.2)
          `,
        }}
      >
        {value}
      </div>

      {/* Edge highlights */}
      <div
        className="absolute inset-0 rounded-lg"
        style={{
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, transparent 50%)',
          mixBlendMode: 'overlay',
        }}
      />

      {/* Prismatic edge effect */}
      <div
        className="absolute inset-0 rounded-lg"
        style={{
          background: `
            linear-gradient(45deg, transparent 0%, rgba(255, 0, 255, 0.2) 25%, transparent 50%),
            linear-gradient(135deg, transparent 0%, rgba(0, 255, 255, 0.2) 25%, transparent 50%),
            linear-gradient(225deg, transparent 0%, rgba(255, 255, 0, 0.2) 25%, transparent 50%),
            linear-gradient(315deg, transparent 0%, rgba(0, 255, 0, 0.2) 25%, transparent 50%)
          `,
          animation: 'prismaticShift 5s linear infinite',
        }}
      />
    </div>
  );
};

const Clock_66 = () => {
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
    <div className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 p-12 rounded-xl shadow-2xl overflow-hidden">
      {/* Crystal background pattern */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(45deg, transparent 45%, rgba(255, 255, 255, 0.1) 50%, transparent 55%),
            linear-gradient(135deg, transparent 45%, rgba(255, 255, 255, 0.1) 50%, transparent 55%)
          `,
          backgroundSize: '20px 20px',
        }}
      />

      <div className="relative flex items-center space-x-4">
        <div className="flex space-x-2">
          <CrystalDigit value={hours[0]} />
          <CrystalDigit value={hours[1]} />
        </div>

        <div className="flex flex-col space-y-4">
          <div className="w-2 h-2 rounded-full bg-white animate-pulse"
               style={{ boxShadow: '0 0 10px rgba(255, 255, 255, 0.8)' }} />
          <div className="w-2 h-2 rounded-full bg-white animate-pulse"
               style={{ boxShadow: '0 0 10px rgba(255, 255, 255, 0.8)' }} />
        </div>

        <div className="flex space-x-2">
          <CrystalDigit value={minutes[0]} />
          <CrystalDigit value={minutes[1]} />
        </div>

        <div className="flex flex-col space-y-4">
          <div className="w-2 h-2 rounded-full bg-white animate-pulse"
               style={{ boxShadow: '0 0 10px rgba(255, 255, 255, 0.8)' }} />
          <div className="w-2 h-2 rounded-full bg-white animate-pulse"
               style={{ boxShadow: '0 0 10px rgba(255, 255, 255, 0.8)' }} />
        </div>

        <div className="flex space-x-2">
          <CrystalDigit value={seconds[0]} />
          <CrystalDigit value={seconds[1]} />
        </div>
      </div>

      {/* Light rays */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 70%)',
          animation: 'crystalGlow 10s ease-in-out infinite',
        }}
      />

      {/* Ambient sparkles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.5 + 0.3,
            animation: `sparkle ${2 + Math.random() * 3}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}
    </div>
  );
};

export default Clock_66; 