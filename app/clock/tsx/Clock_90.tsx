'use client';
import React, { useEffect, useState } from 'react';

const punchCardAnimationKeyframes = `
  @keyframes cardShift {
    0% { transform: translateY(0); }
    10% { transform: translateY(-2px); }
    20% { transform: translateY(0); }
  }
  @keyframes mechanicalNoise {
    0%, 100% { transform: translate(0, 0); }
    25% { transform: translate(0.5px, 0.5px); }
    50% { transform: translate(-0.5px, -0.5px); }
    75% { transform: translate(-0.5px, 0.5px); }
  }
  @keyframes readerLight {
    0%, 100% { opacity: 0.3; }
    50% { opacity: 0.8; }
  }
`;

const PunchDigit = ({ value }: { value: string }) => {
  const [isChanging, setIsChanging] = useState(false);

  useEffect(() => {
    setIsChanging(true);
    const timer = setTimeout(() => setIsChanging(false), 200);
    return () => clearTimeout(timer);
  }, [value]);

  // Binary representation for each digit (4-bit)
  const binaryPatterns: { [key: string]: boolean[] } = {
    '0': [false, false, false, false],
    '1': [false, false, false, true],
    '2': [false, false, true, false],
    '3': [false, false, true, true],
    '4': [false, true, false, false],
    '5': [false, true, false, true],
    '6': [false, true, true, false],
    '7': [false, true, true, true],
    '8': [true, false, false, false],
    '9': [true, false, false, true],
  };

  const pattern = binaryPatterns[value];

  return (
    <div style={{
      position: 'relative',
      width: '60px',
      height: '100px',
      background: '#f5f5dc', // Vintage card color
      borderRadius: '4px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
      animation: isChanging ? 'cardShift 0.2s ease-in-out' : 'none',
    }}>
      {/* Card texture */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: `
          repeating-linear-gradient(
            0deg,
            transparent 0px,
            transparent 19px,
            rgba(0, 0, 0, 0.05) 20px
          )
        `,
        borderRadius: '4px',
      }} />

      {/* Punch holes */}
      <div style={{
        display: 'grid',
        gridTemplateRows: 'repeat(4, 1fr)',
        gap: '4px',
        padding: '10px',
        height: '100%',
      }}>
        {pattern.map((isPunched, i) => (
          <div
            key={i}
            style={{
              width: '100%',
              height: '16px',
              background: isPunched ? '#333' : 'transparent',
              border: '1px solid #999',
              borderRadius: '2px',
              transition: 'background-color 0.2s ease-in-out',
            }}
          />
        ))}
      </div>

      {/* Printed number */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        fontSize: '2.5rem',
        fontFamily: 'Courier, monospace',
        color: '#666',
        opacity: 0.5,
      }}>
        {value}
      </div>

      {/* Reader light effect */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '4px',
        height: '100%',
        background: 'rgba(255, 0, 0, 0.2)',
        animation: isChanging ? 'readerLight 0.2s ease-in-out' : 'none',
      }} />
    </div>
  );
};

const Clock_90 = () => {
  const [time, setTime] = useState(new Date());
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsProcessing(true);
      setTime(new Date());
      setTimeout(() => setIsProcessing(false), 200);
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
      <style>{punchCardAnimationKeyframes}</style>

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

      {/* Card reader frame */}
      <div style={{
        position: 'relative',
        background: '#333',
        padding: '40px 30px',
        borderRadius: '10px',
        border: '2px solid #444',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '20px',
        animation: isProcessing ? 'mechanicalNoise 0.2s linear' : 'none',
      }}>
        <div style={{ display: 'flex', gap: '10px' }}>
          <PunchDigit value={hours[0]} />
          <PunchDigit value={hours[1]} />
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
                background: '#666',
                borderRadius: '50%',
                boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, 0.5)',
              }}
            />
          ))}
        </div>

        <div style={{ display: 'flex', gap: '10px' }}>
          <PunchDigit value={minutes[0]} />
          <PunchDigit value={minutes[1]} />
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
                background: '#666',
                borderRadius: '50%',
                boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, 0.5)',
              }}
            />
          ))}
        </div>

        <div style={{ display: 'flex', gap: '10px' }}>
          <PunchDigit value={seconds[0]} />
          <PunchDigit value={seconds[1]} />
        </div>
      </div>

      {/* Status indicators */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '40px',
        marginTop: '20px',
      }}>
        {['READY', 'PROCESS', 'ERROR'].map((label, i) => (
          <div key={i} style={{ textAlign: 'center' }}>
            <div style={{
              width: '12px',
              height: '12px',
              background: i === 0 ? '#00ff00' : i === 1 ? '#ffff00' : '#ff0000',
              borderRadius: '50%',
              margin: '0 auto',
              opacity: i === 0 ? 1 : 0.3,
              boxShadow: i === 0
                ? '0 0 10px rgba(0, 255, 0, 0.5)'
                : 'none',
            }} />
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
        background: '#222',
        padding: '4px 8px',
        borderRadius: '4px',
        border: '1px solid #444',
        color: '#666',
        fontSize: '0.8rem',
        fontFamily: 'monospace',
        letterSpacing: '1px',
      }}>
        IBM-90
      </div>
    </div>
  );
};

export default Clock_90;