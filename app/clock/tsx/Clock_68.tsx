'use client';
import React, { useEffect, useState } from 'react';

// Define digit patterns for LED matrix (5x7 grid)
const digitPatterns = {
  '0': [
    [1,1,1,1,1],
    [1,0,0,0,1],
    [1,0,0,0,1],
    [1,0,0,0,1],
    [1,0,0,0,1],
    [1,0,0,0,1],
    [1,1,1,1,1]
  ],
  '1': [
    [0,0,1,0,0],
    [0,1,1,0,0],
    [0,0,1,0,0],
    [0,0,1,0,0],
    [0,0,1,0,0],
    [0,0,1,0,0],
    [0,1,1,1,0]
  ],
  '2': [
    [1,1,1,1,1],
    [0,0,0,0,1],
    [0,0,0,0,1],
    [1,1,1,1,1],
    [1,0,0,0,0],
    [1,0,0,0,0],
    [1,1,1,1,1]
  ],
  '3': [
    [1,1,1,1,1],
    [0,0,0,0,1],
    [0,0,0,0,1],
    [1,1,1,1,1],
    [0,0,0,0,1],
    [0,0,0,0,1],
    [1,1,1,1,1]
  ],
  '4': [
    [1,0,0,0,1],
    [1,0,0,0,1],
    [1,0,0,0,1],
    [1,1,1,1,1],
    [0,0,0,0,1],
    [0,0,0,0,1],
    [0,0,0,0,1]
  ],
  '5': [
    [1,1,1,1,1],
    [1,0,0,0,0],
    [1,0,0,0,0],
    [1,1,1,1,1],
    [0,0,0,0,1],
    [0,0,0,0,1],
    [1,1,1,1,1]
  ],
  '6': [
    [1,1,1,1,1],
    [1,0,0,0,0],
    [1,0,0,0,0],
    [1,1,1,1,1],
    [1,0,0,0,1],
    [1,0,0,0,1],
    [1,1,1,1,1]
  ],
  '7': [
    [1,1,1,1,1],
    [0,0,0,0,1],
    [0,0,0,1,0],
    [0,0,1,0,0],
    [0,1,0,0,0],
    [0,1,0,0,0],
    [0,1,0,0,0]
  ],
  '8': [
    [1,1,1,1,1],
    [1,0,0,0,1],
    [1,0,0,0,1],
    [1,1,1,1,1],
    [1,0,0,0,1],
    [1,0,0,0,1],
    [1,1,1,1,1]
  ],
  '9': [
    [1,1,1,1,1],
    [1,0,0,0,1],
    [1,0,0,0,1],
    [1,1,1,1,1],
    [0,0,0,0,1],
    [0,0,0,0,1],
    [1,1,1,1,1]
  ]
};

const ledAnimationKeyframes = `
  @keyframes ledPulse {
    0%, 100% { opacity: 1; transform: scale(0.95); }
    50% { opacity: 0.5; transform: scale(1); }
  }
  @keyframes scanline {
    0% { transform: translateY(-100%); }
    100% { transform: translateY(100%); }
  }
`;

const DotMatrixDigit = ({ value }: { value: string }) => {
  const pattern = digitPatterns[value as keyof typeof digitPatterns];

  return (
    <div style={{ position: 'relative', width: '50px', height: '70px', margin: '0 4px' }}>
      <style>{ledAnimationKeyframes}</style>
      
      {/* LED Matrix */}
      <div style={{ 
        position: 'relative',
        width: '100%',
        height: '100%',
        display: 'grid',
        gridTemplateRows: 'repeat(7, 1fr)',
        gap: '2px',
        padding: '2px',
        background: '#1a1a1a',
        borderRadius: '4px',
        boxShadow: 'inset 0 0 10px rgba(0,0,0,0.5)'
      }}>
        {pattern.map((row, i) => (
          <div key={i} style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '2px' }}>
            {row.map((led, j) => (
              <div
                key={j}
                style={{
                  width: '100%',
                  height: '100%',
                  background: led ? '#00ff00' : '#1a1a1a',
                  borderRadius: '50%',
                  boxShadow: led ? '0 0 5px #00ff00' : 'none',
                  animation: led ? 'ledPulse 2s ease-in-out infinite' : 'none',
                  animationDelay: `${(i * 5 + j) * 0.05}s`
                }}
              />
            ))}
          </div>
        ))}
      </div>

      {/* Scanline effect */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '2px',
        background: 'linear-gradient(to bottom, rgba(0,255,0,0.2), rgba(0,255,0,0))',
        animation: 'scanline 2s linear infinite',
        pointerEvents: 'none'
      }} />
    </div>
  );
};

const Clock_68 = () => {
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
      background: '#000',
      padding: '2rem',
      borderRadius: '12px',
      boxShadow: '0 0 20px rgba(0,255,0,0.2)',
      border: '2px solid #333'
    }}>
      {/* Background grid */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `
          linear-gradient(rgba(0,255,0,0.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,255,0,0.05) 1px, transparent 1px)
        `,
        backgroundSize: '20px 20px',
        opacity: 0.5
      }} />

      <div style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '12px'
      }}>
        <div style={{ display: 'flex' }}>
          <DotMatrixDigit value={hours[0]} />
          <DotMatrixDigit value={hours[1]} />
        </div>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px'
        }}>
          {[0, 1].map(i => (
            <div
              key={i}
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: '#00ff00',
                boxShadow: '0 0 5px #00ff00',
                animation: 'ledPulse 1s ease-in-out infinite'
              }}
            />
          ))}
        </div>

        <div style={{ display: 'flex' }}>
          <DotMatrixDigit value={minutes[0]} />
          <DotMatrixDigit value={minutes[1]} />
        </div>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px'
        }}>
          {[0, 1].map(i => (
            <div
              key={i}
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: '#00ff00',
                boxShadow: '0 0 5px #00ff00',
                animation: 'ledPulse 1s ease-in-out infinite'
              }}
            />
          ))}
        </div>

        <div style={{ display: 'flex' }}>
          <DotMatrixDigit value={seconds[0]} />
          <DotMatrixDigit value={seconds[1]} />
        </div>
      </div>

      {/* CRT screen effect */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(circle at center, transparent 50%, rgba(0,0,0,0.3) 100%)',
        pointerEvents: 'none'
      }} />
    </div>
  );
};

export default Clock_68; 