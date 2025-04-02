'use client';
import React, { useEffect, useState } from 'react';

const counterAnimationKeyframes = `
  @keyframes drumRotate {
    0% { transform: rotateX(0deg); }
    100% { transform: rotateX(-360deg); }
  }
  @keyframes mechanicalShake {
    0%, 100% { transform: translate(0, 0); }
    25% { transform: translate(0.3px, 0.3px); }
    50% { transform: translate(-0.3px, -0.3px); }
    75% { transform: translate(-0.3px, 0.3px); }
  }
  @keyframes drumShadow {
    0%, 100% { opacity: 0.7; }
    50% { opacity: 0.3; }
  }
`;

const CounterDigit = ({ value }: { value: string }) => {
  const [isRotating, setIsRotating] = useState(false);
  const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const currentIndex = numbers.indexOf(value);

  useEffect(() => {
    setIsRotating(true);
    const timer = setTimeout(() => setIsRotating(false), 500);
    return () => clearTimeout(timer);
  }, [value]);

  return (
    <div style={{
      position: 'relative',
      width: '60px',
      height: '100px',
      perspective: '1000px',
      backgroundColor: '#e8e8e8',
      borderRadius: '8px',
      boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.2)',
      overflow: 'hidden',
    }}>
      {/* Counter drum */}
      <div style={{
        position: 'absolute',
        width: '100%',
        height: '1000px',
        transformStyle: 'preserve-3d',
        animation: isRotating ? 'drumRotate 0.5s cubic-bezier(0.4, 0, 0.2, 1)' : 'none',
        transform: `rotateX(${-currentIndex * 36}deg)`,
        transformOrigin: '50% 50px',
      }}>
        {numbers.map((num, index) => (
          <div
            key={index}
            style={{
              position: 'absolute',
              width: '100%',
              height: '100px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '4rem',
              fontFamily: 'Courier, monospace',
              color: '#222',
              background: '#e8e8e8',
              borderTop: '1px solid rgba(0, 0, 0, 0.1)',
              borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
              transform: `rotateX(${index * 36}deg) translateZ(50px)`,
              backfaceVisibility: 'hidden',
            }}
          >
            {num}
          </div>
        ))}
      </div>

      {/* Lighting effects */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(180deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 30%, rgba(0,0,0,0.1) 70%, rgba(0,0,0,0.2) 100%)',
        pointerEvents: 'none',
      }} />

      {/* Side shadows */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '20px',
        height: '100%',
        background: 'linear-gradient(90deg, rgba(0,0,0,0.1), transparent)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        top: 0,
        right: 0,
        width: '20px',
        height: '100%',
        background: 'linear-gradient(-90deg, rgba(0,0,0,0.1), transparent)',
        pointerEvents: 'none',
      }} />
    </div>
  );
};

const Clock_91 = () => {
  const [time, setTime] = useState(new Date());
  const [isShaking, setIsShaking] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsShaking(true);
      setTime(new Date());
      setTimeout(() => setIsShaking(false), 500);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const hours = time.getHours().toString().padStart(2, '0');
  const minutes = time.getMinutes().toString().padStart(2, '0');
  const seconds = time.getSeconds().toString().padStart(2, '0');

  return (
    <div style={{
      position: 'relative',
      background: '#2a2a2a',
      padding: '4rem',
      borderRadius: '20px',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)',
      border: '4px solid #444',
    }}>
      <style>{counterAnimationKeyframes}</style>

      {/* Metal texture */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: `
          repeating-linear-gradient(
            45deg,
            rgba(255, 255, 255, 0.03) 0px,
            rgba(255, 255, 255, 0.03) 1px,
            transparent 1px,
            transparent 4px
          )
        `,
        borderRadius: '16px',
        pointerEvents: 'none',
      }} />

      {/* Display panel */}
      <div style={{
        position: 'relative',
        background: '#1a1a1a',
        padding: '30px',
        borderRadius: '10px',
        border: '2px solid #333',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px',
        animation: isShaking ? 'mechanicalShake 0.5s linear' : 'none',
      }}>
        <div style={{ display: 'flex', gap: '4px' }}>
          <CounterDigit value={hours[0]} />
          <CounterDigit value={hours[1]} />
        </div>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          margin: '0 10px',
        }}>
          {[0, 1].map(i => (
            <div
              key={i}
              style={{
                width: '8px',
                height: '8px',
                background: '#666',
                borderRadius: '50%',
                boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.5)',
              }}
            />
          ))}
        </div>

        <div style={{ display: 'flex', gap: '4px' }}>
          <CounterDigit value={minutes[0]} />
          <CounterDigit value={minutes[1]} />
        </div>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          margin: '0 10px',
        }}>
          {[0, 1].map(i => (
            <div
              key={i}
              style={{
                width: '8px',
                height: '8px',
                background: '#666',
                borderRadius: '50%',
                boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.5)',
              }}
            />
          ))}
        </div>

        <div style={{ display: 'flex', gap: '4px' }}>
          <CounterDigit value={seconds[0]} />
          <CounterDigit value={seconds[1]} />
        </div>
      </div>

      {/* Manufacturer plate */}
      <div style={{
        position: 'absolute',
        bottom: '15px',
        right: '20px',
        background: '#222',
        padding: '4px 8px',
        borderRadius: '4px',
        border: '1px solid #444',
        color: '#888',
        fontSize: '0.8rem',
        fontFamily: 'monospace',
        letterSpacing: '1px',
      }}>
        VEEDER-ROOT 91
      </div>

      {/* Mechanical details */}
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            width: '16px',
            height: '16px',
            background: '#333',
            borderRadius: '50%',
            border: '2px solid #222',
            boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.5)',
            ...(i < 3
              ? { top: '20px', left: `${20 + i * 40}px` }
              : { bottom: '20px', right: `${20 + (i - 3) * 40}px` }),
          }}
        >
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '8px',
            height: '2px',
            background: '#222',
            transform: `translate(-50%, -50%) rotate(${45 * i}deg)`,
          }} />
        </div>
      ))}
    </div>
  );
};

export default Clock_91; 