'use client';
import React, { useEffect, useState } from 'react';

const counterAnimationKeyframes = `
  @keyframes rotateWheel {
    0% { transform: rotateX(0deg); }
    100% { transform: rotateX(-360deg); }
  }
  @keyframes mechanicalShake {
    0%, 100% { transform: translate(0, 0); }
    25% { transform: translate(0.5px, 0.5px); }
    50% { transform: translate(-0.5px, -0.5px); }
    75% { transform: translate(-0.5px, 0.5px); }
  }
  @keyframes numberBlur {
    0%, 100% { filter: blur(0); }
    50% { filter: blur(1px); }
  }
`;

const NumberWheel = ({ value, isTransitioning }: { value: string; isTransitioning: boolean }) => {
  const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const currentIndex = numbers.indexOf(value);

  return (
    <div style={{
      position: 'relative',
      width: '60px',
      height: '100px',
      perspective: '1000px',
      backgroundColor: '#f0f0f0',
      borderRadius: '8px',
      boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.2)',
      overflow: 'hidden',
    }}>
      {/* Number wheel */}
      <div style={{
        position: 'absolute',
        width: '100%',
        height: '1000px', // 10x height for all numbers
        transformStyle: 'preserve-3d',
        animation: isTransitioning ? 'rotateWheel 0.5s cubic-bezier(0.4, 0, 0.2, 1)' : 'none',
        transform: `rotateX(${-currentIndex * 36}deg)`, // 360/10 = 36 degrees per number
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
              fontFamily: 'Arial, sans-serif',
              color: '#333',
              background: '#f0f0f0',
              backfaceVisibility: 'hidden',
              transform: `rotateX(${index * 36}deg) translateZ(50px)`,
              borderTop: '1px solid rgba(0, 0, 0, 0.1)',
              borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
            }}
          >
            {num}
          </div>
        ))}
      </div>

      {/* Top shadow */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '40px',
        background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.2), transparent)',
        pointerEvents: 'none',
      }} />

      {/* Bottom shadow */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '40px',
        background: 'linear-gradient(to top, rgba(0, 0, 0, 0.2), transparent)',
        pointerEvents: 'none',
      }} />

      {/* Side shadows */}
      <div style={{
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        width: '20px',
        background: 'linear-gradient(to right, rgba(0, 0, 0, 0.1), transparent)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        width: '20px',
        background: 'linear-gradient(to left, rgba(0, 0, 0, 0.1), transparent)',
        pointerEvents: 'none',
      }} />
    </div>
  );
};

const Clock_88 = () => {
  const [time, setTime] = useState(new Date());
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setTime(new Date());
      setTimeout(() => setIsTransitioning(false), 500);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const hours = time.getHours().toString().padStart(2, '0');
  const minutes = time.getMinutes().toString().padStart(2, '0');
  const seconds = time.getSeconds().toString().padStart(2, '0');

  return (
    <div style={{
      position: 'relative',
      background: 'linear-gradient(45deg, #2a2a2a, #3a3a3a)',
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
            rgba(255, 255, 255, 0.05) 0px,
            rgba(255, 255, 255, 0.05) 1px,
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
        background: '#222',
        padding: '30px',
        borderRadius: '10px',
        border: '2px solid #444',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px',
        animation: isTransitioning ? 'mechanicalShake 0.5s linear' : 'none',
      }}>
        <div style={{ display: 'flex', gap: '4px' }}>
          <NumberWheel value={hours[0]} isTransitioning={isTransitioning} />
          <NumberWheel value={hours[1]} isTransitioning={isTransitioning} />
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
          <NumberWheel value={minutes[0]} isTransitioning={isTransitioning} />
          <NumberWheel value={minutes[1]} isTransitioning={isTransitioning} />
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
          <NumberWheel value={seconds[0]} isTransitioning={isTransitioning} />
          <NumberWheel value={seconds[1]} isTransitioning={isTransitioning} />
        </div>
      </div>

      {/* Mechanical details */}
      <div style={{
        position: 'absolute',
        bottom: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: '40px',
      }}>
        {/* Screws */}
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            style={{
              width: '16px',
              height: '16px',
              background: 'linear-gradient(45deg, #333, #444)',
              borderRadius: '50%',
              border: '2px solid #222',
              boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.5)',
              position: 'relative',
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

      {/* Model number */}
      <div style={{
        position: 'absolute',
        bottom: '15px',
        right: '20px',
        color: '#666',
        fontSize: '0.8rem',
        fontFamily: 'monospace',
        letterSpacing: '1px',
      }}>
        COUNTER-88
      </div>
    </div>
  );
};

export default Clock_88; 