'use client';
import React, { useEffect, useState } from 'react';

const inkSplatterKeyframes = `
  @keyframes inkSplatter {
    0% { transform: scale(0); opacity: 0.8; }
    100% { transform: scale(2); opacity: 0; }
  }
`;

const brushStrokeKeyframes = `
  @keyframes brushStroke {
    0% { transform: scaleX(0) translateX(-50%); }
    100% { transform: scaleX(1) translateX(0); }
  }
`;

const inkDripKeyframes = `
  @keyframes inkDrip {
    0% { transform: translateY(-10px); opacity: 0; }
    50% { opacity: 1; }
    100% { transform: translateY(20px); opacity: 0; }
  }
`;

const InkDigit = ({ value }: { value: string }) => {
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    setIsDrawing(true);
    const timer = setTimeout(() => setIsDrawing(false), 500);
    return () => clearTimeout(timer);
  }, [value]);

  return (
    <div className="relative w-16 h-24">
      <style>
        {inkSplatterKeyframes}
        {brushStrokeKeyframes}
        {inkDripKeyframes}
      </style>

      {/* Ink container */}
      <div
        className="absolute inset-0"
        style={{
          background: 'rgba(0, 0, 0, 0.05)',
          borderRadius: '8px',
        }}
      >
        {/* Brush stroke effect */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: '#000',
            transformOrigin: 'left',
            animation: isDrawing ? 'brushStroke 0.5s ease-out forwards' : 'none',
            opacity: 0.9,
            borderRadius: '4px',
          }}
        />

        {/* Ink splatter effects */}
        {isDrawing && Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              width: '10px',
              height: '10px',
              background: '#000',
              borderRadius: '50%',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: 'inkSplatter 0.5s ease-out forwards',
              animationDelay: `${i * 0.1}s`,
              opacity: 0.6,
            }}
          />
        ))}

        {/* Ink drips */}
        {Array.from({ length: 2 }).map((_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              width: '2px',
              height: '10px',
              background: '#000',
              left: `${30 + (i * 40)}%`,
              bottom: '0',
              animation: 'inkDrip 2s ease-in-out infinite',
              animationDelay: `${i * 0.5}s`,
              opacity: 0.4,
            }}
          />
        ))}
      </div>

      {/* Number display */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '2.5rem',
          fontWeight: 'bold',
          fontFamily: '"Noto Serif JP", serif',
          color: 'white',
          mixBlendMode: 'difference',
        }}
      >
        {value}
      </div>
    </div>
  );
};

const Clock_67 = () => {
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
    <div
      style={{
        position: 'relative',
        background: '#f5f5f5',
        padding: '3rem',
        borderRadius: '1rem',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
        overflow: 'hidden',
      }}
    >
      {/* Rice paper texture */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.1'/%3E%3C/svg%3E")`,
          opacity: 0.2,
        }}
      />

      <div
        style={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
        }}
      >
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <InkDigit value={hours[0]} />
          <InkDigit value={hours[1]} />
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}
        >
          <div
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: '#000',
              opacity: 0.7,
            }}
          />
          <div
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: '#000',
              opacity: 0.7,
            }}
          />
        </div>

        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <InkDigit value={minutes[0]} />
          <InkDigit value={minutes[1]} />
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}
        >
          <div
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: '#000',
              opacity: 0.7,
            }}
          />
          <div
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: '#000',
              opacity: 0.7,
            }}
          />
        </div>

        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <InkDigit value={seconds[0]} />
          <InkDigit value={seconds[1]} />
        </div>
      </div>
    </div>
  );
};

 