'use client';
import React, { useEffect, useState } from 'react';

const dnaAnimationKeyframes = `
  @keyframes rotate {
    0% { transform: rotateX(0deg); }
    100% { transform: rotateX(360deg); }
  }
  @keyframes pulse {
    0%, 100% { opacity: 0.8; transform: scale(1); }
    50% { opacity: 1; transform: scale(1.1); }
  }
  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }
  @keyframes helix {
    0% { transform: translateX(-50%) rotateZ(0deg); }
    100% { transform: translateX(-50%) rotateZ(360deg); }
  }
`;

const DNAStrand = ({ offset = 0 }: { offset?: number }) => (
  <div style={{
    position: 'absolute',
    left: '50%',
    top: 0,
    bottom: 0,
    width: '2px',
    transformOrigin: 'center',
    animation: `helix 4s linear infinite`,
    animationDelay: `${offset}s`,
  }}>
    {Array.from({ length: 10 }).map((_, i) => (
      <div
        key={i}
        style={{
          position: 'absolute',
          top: `${i * 10}%`,
          width: '20px',
          height: '4px',
          background: 'rgba(0, 255, 255, 0.5)',
          transform: `translateX(-50%) rotate(${i * 36}deg)`,
          boxShadow: '0 0 10px rgba(0, 255, 255, 0.3)',
        }}
      />
    ))}
  </div>
);

const DNADigit = ({ value }: { value: string }) => {
  return (
    <div style={{
      position: 'relative',
      width: '60px',
      height: '100px',
      perspective: '1000px',
      transformStyle: 'preserve-3d',
    }}>
      <style>{dnaAnimationKeyframes}</style>

      {/* DNA container */}
      <div style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        background: 'rgba(0, 0, 0, 0.8)',
        borderRadius: '10px',
        overflow: 'hidden',
        boxShadow: 'inset 0 0 20px rgba(0, 255, 255, 0.2)',
      }}>
        {/* DNA strands */}
        <DNAStrand offset={0} />
        <DNAStrand offset={2} />

        {/* Number display */}
        <div style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '3rem',
          fontWeight: 'bold',
          color: 'rgba(0, 255, 255, 0.9)',
          textShadow: '0 0 10px rgba(0, 255, 255, 0.5)',
          animation: 'pulse 2s ease-in-out infinite',
          zIndex: 1,
        }}>
          {value}
        </div>

        {/* Floating particles */}
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              width: '4px',
              height: '4px',
              background: 'rgba(0, 255, 255, 0.6)',
              borderRadius: '50%',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${2 + Math.random()}s ease-in-out infinite`,
              animationDelay: `${Math.random()}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

const Clock_73 = () => {
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
      background: 'linear-gradient(45deg, #001f3f, #003366)',
      padding: '3rem',
      borderRadius: '20px',
      boxShadow: '0 0 30px rgba(0, 255, 255, 0.2)',
      overflow: 'hidden',
    }}>
      {/* Background grid */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `
          linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
        `,
        backgroundSize: '20px 20px',
        opacity: 0.2,
      }} />

      <div style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '20px',
      }}>
        <div style={{ display: 'flex', gap: '10px' }}>
          <DNADigit value={hours[0]} />
          <DNADigit value={hours[1]} />
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
                background: 'rgba(0, 255, 255, 0.8)',
                boxShadow: '0 0 10px rgba(0, 255, 255, 0.5)',
                animation: 'pulse 1s ease-in-out infinite',
              }}
            />
          ))}
        </div>

        <div style={{ display: 'flex', gap: '10px' }}>
          <DNADigit value={minutes[0]} />
          <DNADigit value={minutes[1]} />
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
                background: 'rgba(0, 255, 255, 0.8)',
                boxShadow: '0 0 10px rgba(0, 255, 255, 0.5)',
                animation: 'pulse 1s ease-in-out infinite',
              }}
            />
          ))}
        </div>

        <div style={{ display: 'flex', gap: '10px' }}>
          <DNADigit value={seconds[0]} />
          <DNADigit value={seconds[1]} />
        </div>
      </div>

      {/* Ambient glow */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(circle at center, transparent 0%, rgba(0, 0, 0, 0.5) 100%)',
        pointerEvents: 'none',
      }} />
    </div>
  );
};

export default Clock_73; 