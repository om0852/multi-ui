'use client';
import React, { useEffect, useState } from 'react';

const flipDotAnimationKeyframes = `
  @keyframes flipDot {
    0% { transform: rotateY(0deg); background: #222; }
    49% { transform: rotateY(90deg); background: #222; }
    50% { transform: rotateY(90deg); background: #ffd700; }
    100% { transform: rotateY(180deg); background: #ffd700; }
  }
  @keyframes unflipDot {
    0% { transform: rotateY(180deg); background: #ffd700; }
    49% { transform: rotateY(90deg); background: #ffd700; }
    50% { transform: rotateY(90deg); background: #222; }
    100% { transform: rotateY(0deg); background: #222; }
  }
  @keyframes mechanicalNoise {
    0%, 100% { transform: translate(0, 0); }
    25% { transform: translate(0.5px, 0.5px); }
    50% { transform: translate(-0.5px, -0.5px); }
    75% { transform: translate(-0.5px, 0.5px); }
  }
`;

// Dot patterns for digits 0-9 (8x12 grid)
const dotPatterns = {
  '0': [
    '00111100',
    '01111110',
    '11100111',
    '11100111',
    '11100111',
    '11100111',
    '11100111',
    '11100111',
    '11100111',
    '11100111',
    '01111110',
    '00111100',
  ],
  '1': [
    '00011000',
    '00111000',
    '01111000',
    '00011000',
    '00011000',
    '00011000',
    '00011000',
    '00011000',
    '00011000',
    '00011000',
    '01111110',
    '01111110',
  ],
  '2': [
    '00111100',
    '01111110',
    '11100111',
    '00000111',
    '00001110',
    '00011100',
    '00111000',
    '01110000',
    '11100000',
    '11100000',
    '11111110',
    '11111110',
  ],
  '3': [
    '00111100',
    '01111110',
    '11100111',
    '00000111',
    '00011110',
    '00011110',
    '00000111',
    '00000111',
    '11100111',
    '11100111',
    '01111110',
    '00111100',
  ],
  '4': [
    '00001110',
    '00011110',
    '00111110',
    '01101110',
    '11001110',
    '11111111',
    '11111111',
    '00001110',
    '00001110',
    '00001110',
    '00001110',
    '00001110',
  ],
  '5': [
    '11111110',
    '11111110',
    '11100000',
    '11100000',
    '11111100',
    '11111110',
    '00000111',
    '00000111',
    '11100111',
    '11100111',
    '01111110',
    '00111100',
  ],
  '6': [
    '00111100',
    '01111110',
    '11100111',
    '11100000',
    '11100000',
    '11111100',
    '11111110',
    '11100111',
    '11100111',
    '11100111',
    '01111110',
    '00111100',
  ],
  '7': [
    '11111110',
    '11111110',
    '00000111',
    '00001110',
    '00011100',
    '00111000',
    '00111000',
    '00111000',
    '00111000',
    '00111000',
    '00111000',
    '00111000',
  ],
  '8': [
    '00111100',
    '01111110',
    '11100111',
    '11100111',
    '01111110',
    '01111110',
    '11100111',
    '11100111',
    '11100111',
    '11100111',
    '01111110',
    '00111100',
  ],
  '9': [
    '00111100',
    '01111110',
    '11100111',
    '11100111',
    '11100111',
    '01111111',
    '00111111',
    '00000111',
    '11100111',
    '11100111',
    '01111110',
    '00111100',
  ],
} as const;

const FlipDot = ({ active, delay }: { active: boolean; delay: number }) => {
  const [isFlipping, setIsFlipping] = useState(false);
  const [isActive, setIsActive] = useState(active);

  useEffect(() => {
    if (isActive !== active) {
      setIsFlipping(true);
      const timer = setTimeout(() => {
        setIsActive(active);
        setIsFlipping(false);
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [active, isActive]);

  return (
    <div style={{
      width: '8px',
      height: '8px',
      background: isActive ? '#ffd700' : '#222',
      borderRadius: '50%',
      boxShadow: isActive ? '0 0 4px rgba(255, 215, 0, 0.5)' : 'inset 0 1px 2px rgba(0, 0, 0, 0.5)',
      transition: 'all 0.15s ease-in-out',
      animation: isFlipping
        ? `${active ? 'flipDot' : 'unflipDot'} 0.15s ease-in-out forwards ${delay}ms, mechanicalNoise 0.15s ease-in-out ${delay}ms`
        : 'none',
    }} />
  );
};

const FlipDotDigit = ({ value }: { value: string }) => {
  const pattern = dotPatterns[value as keyof typeof dotPatterns];

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(8, 8px)',
      gap: '2px',
      padding: '4px',
      background: '#111',
      borderRadius: '4px',
      boxShadow: 'inset 0 0 10px rgba(0, 0, 0, 0.5)',
    }}>
      {pattern.map((row, rowIndex) =>
        row.split('').map((dot, colIndex) => (
          <FlipDot
            key={`${rowIndex}-${colIndex}`}
            active={dot === '1'}
            delay={(rowIndex * 8 + colIndex) * 10}
          />
        ))
      )}
    </div>
  );
};

const Clock_84 = () => {
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
      background: '#1a1a1a',
      padding: '3rem',
      borderRadius: '20px',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)',
      border: '4px solid #333',
    }}>
      <style>{flipDotAnimationKeyframes}</style>

      {/* Vintage texture overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: `
          radial-gradient(circle at 50% 50%, rgba(0, 0, 0, 0.3) 0%, transparent 60%),
          repeating-linear-gradient(0deg, rgba(0, 0, 0, 0.1) 0px, rgba(0, 0, 0, 0.1) 1px, transparent 1px, transparent 4px)
        `,
        pointerEvents: 'none',
      }} />

      {/* Display frame */}
      <div style={{
        position: 'relative',
        background: '#000',
        padding: '20px',
        borderRadius: '10px',
        border: '2px solid #333',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '20px',
      }}>
        <div style={{ display: 'flex', gap: '10px' }}>
          <FlipDotDigit value={hours[0]} />
          <FlipDotDigit value={hours[1]} />
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
                background: time.getSeconds() % 2 === 0 ? '#ffd700' : '#222',
                borderRadius: '50%',
                boxShadow: time.getSeconds() % 2 === 0
                  ? '0 0 4px rgba(255, 215, 0, 0.5)'
                  : 'inset 0 1px 2px rgba(0, 0, 0, 0.5)',
                transition: 'all 0.15s ease-in-out',
              }}
            />
          ))}
        </div>

        <div style={{ display: 'flex', gap: '10px' }}>
          <FlipDotDigit value={minutes[0]} />
          <FlipDotDigit value={minutes[1]} />
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
                background: time.getSeconds() % 2 === 0 ? '#ffd700' : '#222',
                borderRadius: '50%',
                boxShadow: time.getSeconds() % 2 === 0
                  ? '0 0 4px rgba(255, 215, 0, 0.5)'
                  : 'inset 0 1px 2px rgba(0, 0, 0, 0.5)',
                transition: 'all 0.15s ease-in-out',
              }}
            />
          ))}
        </div>

        <div style={{ display: 'flex', gap: '10px' }}>
          <FlipDotDigit value={seconds[0]} />
          <FlipDotDigit value={seconds[1]} />
        </div>
      </div>

      {/* Control panel */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '20px',
        marginTop: '20px',
      }}>
        {['POWER', 'RESET', 'MODE'].map((label, i) => (
          <div
            key={i}
            style={{
              padding: '8px 16px',
              background: '#333',
              color: '#666',
              borderRadius: '4px',
              fontSize: '0.8rem',
              fontFamily: 'monospace',
              border: '1px solid #444',
              boxShadow: 'inset 0 0 10px rgba(0, 0, 0, 0.3)',
            }}
          >
            {label}
          </div>
        ))}
      </div>

      {/* Model number */}
      <div style={{
        position: 'absolute',
        bottom: '10px',
        right: '20px',
        color: '#444',
        fontSize: '0.8rem',
        fontFamily: 'monospace',
      }}>
        MODEL FD-84
      </div>
    </div>
  );
};

export default Clock_84; 