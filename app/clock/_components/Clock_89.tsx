'use client';
import React, { useEffect, useState } from 'react';

const oscilloscopeAnimationKeyframes = `
  @keyframes scanline {
    0% { transform: translateY(-100%); }
    100% { transform: translateY(100%); }
  }
  @keyframes phosphorGlow {
    0%, 100% { opacity: 1; filter: brightness(1); }
    50% { opacity: 0.8; filter: brightness(0.8); }
  }
  @keyframes traceFlicker {
    0%, 100% { opacity: 1; }
    95% { opacity: 1; }
    96% { opacity: 0.5; }
    97% { opacity: 1; }
  }
  @keyframes noisePattern {
    0%, 100% { background-position: 0 0; }
    20% { background-position: 20% 20%; }
    40% { background-position: -20% -20%; }
    60% { background-position: 20% -20%; }
    80% { background-position: -20% 20%; }
  }
`;

const OscilloscopeDigit = ({ value }: { value: string }) => {
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    setIsDrawing(true);
    const timer = setTimeout(() => setIsDrawing(false), 100);
    return () => clearTimeout(timer);
  }, [value]);

  // Vector paths for each digit
  const digitPaths: { [key: string]: string } = {
    '0': 'M 20 20 L 60 20 L 60 80 L 20 80 L 20 20',
    '1': 'M 40 20 L 40 80',
    '2': 'M 20 20 L 60 20 L 60 50 L 20 50 L 20 80 L 60 80',
    '3': 'M 20 20 L 60 20 L 60 50 L 20 50 M 60 50 L 60 80 L 20 80',
    '4': 'M 20 20 L 20 50 L 60 50 M 60 20 L 60 80',
    '5': 'M 60 20 L 20 20 L 20 50 L 60 50 L 60 80 L 20 80',
    '6': 'M 60 20 L 20 20 L 20 80 L 60 80 L 60 50 L 20 50',
    '7': 'M 20 20 L 60 20 L 60 80',
    '8': 'M 20 20 L 60 20 L 60 80 L 20 80 L 20 20 M 20 50 L 60 50',
    '9': 'M 60 50 L 20 50 L 20 20 L 60 20 L 60 80',
  };

  return (
    <div style={{
      position: 'relative',
      width: '80px',
      height: '100px',
      background: '#000',
      borderRadius: '4px',
      overflow: 'hidden',
    }}>
      {/* CRT screen noise */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(circle at 50% 50%, rgba(0, 255, 0, 0.1) 0%, transparent 80%)',
        opacity: 0.1,
        animation: 'noisePattern 8s linear infinite',
      }} />

      {/* Phosphor trace */}
      <svg
        width="80"
        height="100"
        viewBox="0 0 80 100"
        style={{
          position: 'absolute',
          inset: 0,
        }}
      >
        <path
          d={digitPaths[value]}
          fill="none"
          stroke="#00ff00"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            animation: 'phosphorGlow 2s ease-in-out infinite, traceFlicker 10s linear infinite',
            filter: 'drop-shadow(0 0 2px #00ff00)',
          }}
        />
      </svg>

      {/* Scanline effect */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(transparent 50%, rgba(0, 255, 0, 0.1) 50%)',
        backgroundSize: '100% 4px',
        animation: 'scanline 10s linear infinite',
        pointerEvents: 'none',
      }} />

      {/* Screen reflection */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, transparent 100%)',
        pointerEvents: 'none',
      }} />
    </div>
  );
};

const Clock_89 = () => {
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
      padding: '4rem',
      borderRadius: '20px',
      boxShadow: '0 10px 30px rgba(0, 255, 0, 0.1)',
      border: '4px solid #333',
    }}>
      <style>{oscilloscopeAnimationKeyframes}</style>

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
        background: '#000',
        padding: '30px',
        borderRadius: '10px',
        border: '2px solid #333',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '20px',
      }}>
        <div style={{ display: 'flex', gap: '10px' }}>
          <OscilloscopeDigit value={hours[0]} />
          <OscilloscopeDigit value={hours[1]} />
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
                background: time.getSeconds() % 2 === 0 ? '#00ff00' : '#003300',
                borderRadius: '50%',
                boxShadow: time.getSeconds() % 2 === 0
                  ? '0 0 10px #00ff00'
                  : 'none',
                animation: 'phosphorGlow 2s ease-in-out infinite',
              }}
            />
          ))}
        </div>

        <div style={{ display: 'flex', gap: '10px' }}>
          <OscilloscopeDigit value={minutes[0]} />
          <OscilloscopeDigit value={minutes[1]} />
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
                background: time.getSeconds() % 2 === 0 ? '#00ff00' : '#003300',
                borderRadius: '50%',
                boxShadow: time.getSeconds() % 2 === 0
                  ? '0 0 10px #00ff00'
                  : 'none',
                animation: 'phosphorGlow 2s ease-in-out infinite',
              }}
            />
          ))}
        </div>

        <div style={{ display: 'flex', gap: '10px' }}>
          <OscilloscopeDigit value={seconds[0]} />
          <OscilloscopeDigit value={seconds[1]} />
        </div>
      </div>

      {/* Control knobs */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '40px',
        marginTop: '20px',
      }}>
        {['INTENSITY', 'FOCUS', 'SWEEP'].map((label, i) => (
          <div key={i} style={{ textAlign: 'center' }}>
            <div style={{
              width: '40px',
              height: '40px',
              background: 'linear-gradient(45deg, #2a2a2a, #3a3a3a)',
              borderRadius: '50%',
              border: '2px solid #444',
              position: 'relative',
              cursor: 'pointer',
              boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.5)',
            }}>
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: '2px',
                height: '16px',
                background: '#666',
                transform: `translate(-50%, -50%) rotate(${i * 45}deg)`,
                transformOrigin: 'bottom',
              }} />
            </div>
            <div style={{
              marginTop: '5px',
              color: '#666',
              fontSize: '0.7rem',
              fontFamily: 'monospace',
            }}>
              {label}
            </div>
          </div>
        ))}
      </div>

      {/* Model label */}
      <div style={{
        position: 'absolute',
        bottom: '15px',
        right: '20px',
        color: '#00ff00',
        fontSize: '0.8rem',
        fontFamily: 'monospace',
        letterSpacing: '1px',
        textShadow: '0 0 5px #00ff00',
      }}>
        SCOPE-89
      </div>
    </div>
  );
};

export default Clock_89; 