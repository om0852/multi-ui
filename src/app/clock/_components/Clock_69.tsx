'use client';
import React, { useEffect, useState } from 'react';

const hologramKeyframes = `
  @keyframes hologramFlicker {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.7; }
  }
  @keyframes hologramGlitch {
    0%, 100% { transform: translate(0); }
    33% { transform: translate(-2px, 1px); }
    66% { transform: translate(2px, -1px); }
  }
  @keyframes hologramScan {
    0% { transform: translateY(-100%) rotate(45deg); }
    100% { transform: translateY(100%) rotate(45deg); }
  }
  @keyframes hologramFloat {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }
  @keyframes hologramRotate {
    0% { transform: rotateY(0deg); }
    100% { transform: rotateY(360deg); }
  }
`;

const HologramDigit = ({ value }: { value: string }) => {
  return (
    <div style={{
      position: 'relative',
      width: '60px',
      height: '100px',
      perspective: '1000px',
      transformStyle: 'preserve-3d',
    }}>
      <style>{hologramKeyframes}</style>

      {/* Main hologram container */}
      <div style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        animation: 'hologramFloat 4s ease-in-out infinite',
      }}>
        {/* Base glow */}
        <div style={{
          position: 'absolute',
          bottom: '-20px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '40px',
          height: '4px',
          background: 'radial-gradient(ellipse at center, rgba(0,255,255,0.6) 0%, transparent 70%)',
          filter: 'blur(2px)',
        }} />

        {/* Hologram number */}
        <div style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '4rem',
          fontWeight: 'bold',
          color: 'rgba(0,255,255,0.8)',
          textShadow: `
            0 0 10px rgba(0,255,255,0.8),
            0 0 20px rgba(0,255,255,0.4)
          `,
          animation: 'hologramFlicker 0.5s ease-in-out infinite',
        }}>
          {value}
        </div>

        {/* Hologram lines */}
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              inset: 0,
              border: '1px solid rgba(0,255,255,0.2)',
              transform: `scale(${1 + i * 0.02}) rotate(${i * 5}deg)`,
              animation: 'hologramGlitch 3s ease-in-out infinite',
              animationDelay: `${i * 0.1}s`,
            }}
          />
        ))}

        {/* Scanning effect */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(45deg, transparent 0%, rgba(0,255,255,0.2) 50%, transparent 100%)',
          animation: 'hologramScan 2s linear infinite',
        }} />

        {/* Particle effects */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              width: '2px',
              height: '2px',
              background: 'rgba(0,255,255,0.8)',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `hologramFloat ${2 + Math.random() * 2}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

const Clock_69 = () => {
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
    <div style={{
      position: 'relative',
      background: 'linear-gradient(45deg, #000022, #000044)',
      padding: '3rem',
      borderRadius: '20px',
      boxShadow: '0 0 30px rgba(0,255,255,0.2)',
      overflow: 'hidden',
    }}>
      {/* Background grid */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `
          linear-gradient(rgba(0,255,255,0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,255,255,0.1) 1px, transparent 1px)
        `,
        backgroundSize: '20px 20px',
        opacity: 0.2,
      }} />

      {/* Hologram platform */}
      <div style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '20px',
        padding: '20px',
        background: 'rgba(0,255,255,0.05)',
        borderRadius: '10px',
        boxShadow: 'inset 0 0 20px rgba(0,255,255,0.2)',
      }}>
        <div style={{ display: 'flex', gap: '10px' }}>
          <HologramDigit value={hours[0]} />
          <HologramDigit value={hours[1]} />
        </div>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
        }}>
          {[0, 1].map(i => (
            <div
              key={i}
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: 'rgba(0,255,255,0.8)',
                boxShadow: '0 0 10px rgba(0,255,255,0.8)',
                animation: 'hologramFlicker 1s ease-in-out infinite',
              }}
            />
          ))}
        </div>

        <div style={{ display: 'flex', gap: '10px' }}>
          <HologramDigit value={minutes[0]} />
          <HologramDigit value={minutes[1]} />
        </div>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
        }}>
          {[0, 1].map(i => (
            <div
              key={i}
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: 'rgba(0,255,255,0.8)',
                boxShadow: '0 0 10px rgba(0,255,255,0.8)',
                animation: 'hologramFlicker 1s ease-in-out infinite',
              }}
            />
          ))}
        </div>

        <div style={{ display: 'flex', gap: '10px' }}>
          <HologramDigit value={seconds[0]} />
          <HologramDigit value={seconds[1]} />
        </div>
      </div>

      {/* Ambient light effect */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(circle at 50% 50%, transparent 0%, rgba(0,0,0,0.5) 100%)',
        pointerEvents: 'none',
      }} />
    </div>
  );
};

export default Clock_69;