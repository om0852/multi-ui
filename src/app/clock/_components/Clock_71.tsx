'use client';
import React, { useEffect, useState } from 'react';

const arcadeAnimationKeyframes = `
  @keyframes pixelate {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.02); }
  }
  @keyframes glitch {
    0%, 100% { transform: translate(0); filter: none; }
    20% { transform: translate(-2px, 2px); filter: hue-rotate(90deg); }
    40% { transform: translate(2px, -2px); filter: hue-rotate(-90deg); }
    60% { transform: translate(-2px, -2px); filter: hue-rotate(180deg); }
    80% { transform: translate(2px, 2px); filter: hue-rotate(-180deg); }
  }
  @keyframes scanline {
    0% { transform: translateY(-100%); }
    100% { transform: translateY(100%); }
  }
  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.7; }
  }
`;

// Pixel art numbers (8x12 grid)
const pixelNumbers = {
  '0': [
    '  ████  ',
    ' ██  ██ ',
    '██    ██',
    '██    ██',
    '██    ██',
    '██    ██',
    '██    ██',
    '██    ██',
    '██    ██',
    '██    ██',
    ' ██  ██ ',
    '  ████  '
  ],
  '1': [
    '   ██   ',
    '  ███   ',
    ' ████   ',
    '   ██   ',
    '   ██   ',
    '   ██   ',
    '   ██   ',
    '   ██   ',
    '   ██   ',
    '   ██   ',
    '   ██   ',
    ' ██████ '
  ],
  // ... Add patterns for other numbers similarly
};

const ArcadeDigit = ({ value }: { value: string }) => {
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    setIsGlitching(true);
    const timer = setTimeout(() => setIsGlitching(false), 300);
    return () => clearTimeout(timer);
  }, [value]);

  return (
    <div style={{
      position: 'relative',
      width: '64px',
      height: '96px',
      background: '#000',
      border: '2px solid #30ff30',
      boxShadow: '0 0 10px rgba(48, 255, 48, 0.5)',
      overflow: 'hidden',
    }}>
      <style>{arcadeAnimationKeyframes}</style>

      {/* Main digit display */}
      <div style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '4rem',
        fontFamily: '"Press Start 2P", monospace',
        color: '#30ff30',
        textShadow: '0 0 10px rgba(48, 255, 48, 0.5)',
        animation: isGlitching ? 'glitch 0.3s ease-in-out' : 'blink 2s infinite',
      }}>
        {value}
      </div>

      {/* Scanline effect */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '2px',
        background: 'linear-gradient(to bottom, rgba(48, 255, 48, 0.2), transparent)',
        animation: 'scanline 2s linear infinite',
        pointerEvents: 'none',
      }} />

      {/* CRT screen effect */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(circle at center, transparent 50%, rgba(0, 0, 0, 0.3) 100%)',
        pointerEvents: 'none',
      }} />

      {/* Pixel noise */}
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            width: '2px',
            height: '2px',
            background: '#30ff30',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.3,
          }}
        />
      ))}
    </div>
  );
};

const Clock_71 = () => {
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
      padding: '3rem',
      borderRadius: '20px',
      boxShadow: '0 0 30px rgba(48, 255, 48, 0.2)',
      border: '4px solid #30ff30',
    }}>
      {/* Background grid */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `
          linear-gradient(rgba(48, 255, 48, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(48, 255, 48, 0.1) 1px, transparent 1px)
        `,
        backgroundSize: '20px 20px',
        opacity: 0.2,
      }} />

      {/* Game score style header */}
      <div style={{
        position: 'absolute',
        top: '10px',
        left: '50%',
        transform: 'translateX(-50%)',
        fontFamily: '"Press Start 2P", monospace',
        fontSize: '0.8rem',
        color: '#30ff30',
        textShadow: '0 0 5px rgba(48, 255, 48, 0.5)',
      }}>
        TIME SCORE
      </div>

      <div style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '20px',
        marginTop: '20px',
      }}>
        <div style={{ display: 'flex', gap: '10px' }}>
          <ArcadeDigit value={hours[0]} />
          <ArcadeDigit value={hours[1]} />
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
                background: '#30ff30',
                boxShadow: '0 0 10px rgba(48, 255, 48, 0.8)',
                animation: 'blink 1s infinite',
              }}
            />
          ))}
        </div>

        <div style={{ display: 'flex', gap: '10px' }}>
          <ArcadeDigit value={minutes[0]} />
          <ArcadeDigit value={minutes[1]} />
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
                background: '#30ff30',
                boxShadow: '0 0 10px rgba(48, 255, 48, 0.8)',
                animation: 'blink 1s infinite',
              }}
            />
          ))}
        </div>

        <div style={{ display: 'flex', gap: '10px' }}>
          <ArcadeDigit value={seconds[0]} />
          <ArcadeDigit value={seconds[1]} />
        </div>
      </div>

      {/* Game instructions style footer */}
      <div style={{
        position: 'absolute',
        bottom: '10px',
        left: '50%',
        transform: 'translateX(-50%)',
        fontFamily: '"Press Start 2P", monospace',
        fontSize: '0.8rem',
        color: '#30ff30',
        textShadow: '0 0 5px rgba(48, 255, 48, 0.5)',
      }}>
        PRESS START
      </div>
    </div>
  );
};

export default Clock_71; 