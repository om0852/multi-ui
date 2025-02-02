'use client';
import React, { useEffect, useState } from 'react';

const holographicAnimationKeyframes = `
  @keyframes hologramFlicker {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.8; }
    75% { opacity: 0.9; }
  }
  @keyframes scanLine {
    0% { transform: translateY(-100%); }
    100% { transform: translateY(100%); }
  }
  @keyframes glitchHorizontal {
    0%, 100% { transform: translateX(0); }
    10% { transform: translateX(-5px); }
    30% { transform: translateX(5px); }
    50% { transform: translateX(-2px); }
    70% { transform: translateX(2px); }
  }
  @keyframes glitchVertical {
    0%, 100% { transform: translateY(0); }
    10% { transform: translateY(-2px); }
    30% { transform: translateY(2px); }
    50% { transform: translateY(-1px); }
    70% { transform: translateY(1px); }
  }
  @keyframes hologramRotate {
    0% { transform: rotateY(0deg); }
    100% { transform: rotateY(360deg); }
  }
`;

const HologramDigit = ({ value }: { value: string }) => {
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    setIsGlitching(true);
    const timer = setTimeout(() => setIsGlitching(false), 150);
    return () => clearTimeout(timer);
  }, [value]);

  return (
    <div style={{
      position: 'relative',
      width: '80px',
      height: '120px',
      perspective: '1000px',
      transformStyle: 'preserve-3d',
    }}>
      {/* Hologram base */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(circle at 50% 50%, rgba(0, 255, 255, 0.2), transparent)',
        borderRadius: '10px',
        animation: 'hologramFlicker 2s infinite',
      }} />

      {/* Main digit display */}
      <div style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '4rem',
        fontFamily: 'Arial, sans-serif',
        color: '#00ffff',
        textShadow: `
          0 0 10px #00ffff,
          0 0 20px #00ffff,
          0 0 30px #00ffff
        `,
        animation: isGlitching ? 'glitchHorizontal 0.2s ease infinite' : 'none',
        transform: 'translateZ(20px)',
      }}>
        {value}
      </div>

      {/* Holographic artifacts */}
      <div style={{
        position: 'absolute',
        inset: '-10px',
        border: '2px solid rgba(0, 255, 255, 0.3)',
        borderRadius: '12px',
        animation: 'hologramRotate 10s linear infinite',
        transformStyle: 'preserve-3d',
      }} />

      {/* Scan lines */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(transparent 50%, rgba(0, 255, 255, 0.1) 50%)',
        backgroundSize: '100% 4px',
        animation: 'scanLine 4s linear infinite',
        pointerEvents: 'none',
      }} />

      {/* Glitch overlay */}
      {isGlitching && (
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(0, 255, 255, 0.2)',
          animation: 'glitchVertical 0.2s ease infinite',
        }} />
      )}
    </div>
  );
};

const Clock_79 = () => {
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
      padding: '4rem',
      borderRadius: '20px',
      boxShadow: '0 0 50px rgba(0, 255, 255, 0.2)',
      overflow: 'hidden',
    }}>
      <style>{holographicAnimationKeyframes}</style>

      {/* Background grid */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: `
          linear-gradient(transparent 95%, rgba(0, 255, 255, 0.2) 95%),
          linear-gradient(90deg, transparent 95%, rgba(0, 255, 255, 0.2) 95%)
        `,
        backgroundSize: '20px 20px',
        opacity: 0.3,
      }} />

      {/* Hologram projector effect */}
      <div style={{
        position: 'absolute',
        bottom: '-50px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '200px',
        height: '100px',
        background: 'radial-gradient(ellipse at top, rgba(0, 255, 255, 0.4), transparent)',
        filter: 'blur(10px)',
      }} />

      <div style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '20px',
        transform: 'translateY(-20px)',
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
                width: '10px',
                height: '10px',
                background: '#00ffff',
                borderRadius: '50%',
                boxShadow: '0 0 10px #00ffff',
                animation: 'hologramFlicker 2s infinite',
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
                width: '10px',
                height: '10px',
                background: '#00ffff',
                borderRadius: '50%',
                boxShadow: '0 0 10px #00ffff',
                animation: 'hologramFlicker 2s infinite',
              }}
            />
          ))}
        </div>

        <div style={{ display: 'flex', gap: '10px' }}>
          <HologramDigit value={seconds[0]} />
          <HologramDigit value={seconds[1]} />
        </div>
      </div>

      {/* Status indicators */}
      <div style={{
        position: 'absolute',
        bottom: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: '20px',
        color: '#00ffff',
        fontSize: '0.8rem',
        fontFamily: 'monospace',
      }}>
        <div>PROJECTION STABLE</div>
        <div>SIGNAL STRENGTH: 98%</div>
        <div>MATRIX ALIGNED</div>
      </div>
    </div>
  );
};

export default Clock_79; 