'use client';
import React, { useEffect, useState } from 'react';

const nixieAnimationKeyframes = `
  @keyframes tubeGlow {
    0%, 100% { opacity: 1; filter: brightness(1); }
    50% { opacity: 0.8; filter: brightness(0.8); }
  }
  @keyframes digitFlicker {
    0%, 100% { opacity: 1; }
    95% { opacity: 1; }
    96% { opacity: 0.4; }
    97% { opacity: 1; }
    98% { opacity: 0.4; }
    99% { opacity: 1; }
  }
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(2px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes fadeOut {
    from { opacity: 1; transform: translateY(0); }
    to { opacity: 0; transform: translateY(-2px); }
  }
`;

const NixieDigit = ({ value }: { value: string }) => {
  const [prevValue, setPrevValue] = useState(value);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (value !== prevValue) {
      setIsTransitioning(true);
      const timer = setTimeout(() => {
        setPrevValue(value);
        setIsTransitioning(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [value, prevValue]);

  return (
    <div style={{
      position: 'relative',
      width: '80px',
      height: '140px',
      background: '#000',
      borderRadius: '10px 10px 20px 20px',
      overflow: 'hidden',
      boxShadow: 'inset 0 0 20px rgba(255, 100, 0, 0.2)',
    }}>
      {/* Glass tube effect */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse at 50% 50%, rgba(255, 160, 60, 0.1) 0%, transparent 70%)',
        borderRadius: '10px 10px 20px 20px',
        animation: 'tubeGlow 4s ease-in-out infinite',
      }} />

      {/* Glass reflection */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, transparent 50%)',
        borderRadius: '10px 10px 20px 20px',
        pointerEvents: 'none',
      }} />

      {/* Stacked digits */}
      {Array.from({ length: 10 }).map((_, i) => {
        const digit = (9 - i).toString();
        const isActive = digit === value;
        const isVisible = isActive || digit === prevValue;

        return (
          <div
            key={i}
            style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '5rem',
              fontFamily: 'Arial, sans-serif',
              color: isActive ? '#ff6e27' : '#3d1f0e',
              textShadow: isActive
                ? '0 0 10px #ff6e27, 0 0 20px #ff6e27, 0 0 30px #ff6e27'
                : 'none',
              opacity: isVisible ? 1 : 0.1,
              transform: `translateZ(${i * 0.1}px)`,
              animation: isTransitioning
                ? isActive
                  ? 'fadeIn 0.3s ease-out forwards'
                  : digit === prevValue
                    ? 'fadeOut 0.3s ease-in forwards'
                    : 'none'
                : 'none',
            }}
          >
            {digit}
          </div>
        );
      })}

      {/* Filament glow */}
      <div style={{
        position: 'absolute',
        bottom: '10px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '30px',
        height: '4px',
        background: '#ff6e27',
        borderRadius: '2px',
        boxShadow: '0 0 10px #ff6e27, 0 0 20px #ff6e27',
        animation: 'tubeGlow 2s ease-in-out infinite',
      }} />
    </div>
  );
};

const Clock_86 = () => {
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
      boxShadow: '0 10px 30px rgba(255, 110, 39, 0.1)',
      border: '4px solid #333',
    }}>
      <style>{nixieAnimationKeyframes}</style>

      {/* Wood grain texture */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: `
          repeating-linear-gradient(
            45deg,
            rgba(139, 69, 19, 0.1) 0px,
            rgba(139, 69, 19, 0.1) 1px,
            transparent 1px,
            transparent 4px
          )
        `,
        borderRadius: '16px',
        opacity: 0.5,
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
          <NixieDigit value={hours[0]} />
          <NixieDigit value={hours[1]} />
        </div>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '30px',
        }}>
          {[0, 1].map(i => (
            <div
              key={i}
              style={{
                width: '10px',
                height: '10px',
                background: time.getSeconds() % 2 === 0 ? '#ff6e27' : '#3d1f0e',
                borderRadius: '50%',
                boxShadow: time.getSeconds() % 2 === 0
                  ? '0 0 10px #ff6e27, 0 0 20px #ff6e27'
                  : 'none',
                transition: 'all 0.1s ease-in-out',
                animation: 'tubeGlow 2s ease-in-out infinite',
              }}
            />
          ))}
        </div>

        <div style={{ display: 'flex', gap: '10px' }}>
          <NixieDigit value={minutes[0]} />
          <NixieDigit value={minutes[1]} />
        </div>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '30px',
        }}>
          {[0, 1].map(i => (
            <div
              key={i}
              style={{
                width: '10px',
                height: '10px',
                background: time.getSeconds() % 2 === 0 ? '#ff6e27' : '#3d1f0e',
                borderRadius: '50%',
                boxShadow: time.getSeconds() % 2 === 0
                  ? '0 0 10px #ff6e27, 0 0 20px #ff6e27'
                  : 'none',
                transition: 'all 0.1s ease-in-out',
                animation: 'tubeGlow 2s ease-in-out infinite',
              }}
            />
          ))}
        </div>

        <div style={{ display: 'flex', gap: '10px' }}>
          <NixieDigit value={seconds[0]} />
          <NixieDigit value={seconds[1]} />
        </div>
      </div>

      {/* Control switches */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '30px',
        marginTop: '20px',
      }}>
        {['POWER', 'MODE', 'SET'].map((label, i) => (
          <div key={i} style={{ textAlign: 'center' }}>
            <div style={{
              width: '30px',
              height: '50px',
              background: 'linear-gradient(to bottom, #444, #222)',
              borderRadius: '4px',
              border: '1px solid #555',
              position: 'relative',
              cursor: 'pointer',
            }}>
              <div style={{
                position: 'absolute',
                top: i === 0 ? '5px' : '25px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '20px',
                height: '20px',
                background: '#111',
                borderRadius: '50%',
                border: '1px solid #666',
                boxShadow: 'inset 0 0 5px rgba(0,0,0,0.5)',
              }} />
            </div>
            <div style={{
              marginTop: '5px',
              color: '#666',
              fontSize: '0.8rem',
              fontFamily: 'monospace',
            }}>
              {label}
            </div>
          </div>
        ))}
      </div>

      {/* Manufacturer plate */}
      <div style={{
        position: 'absolute',
        bottom: '15px',
        right: '20px',
        background: '#222',
        padding: '5px 10px',
        borderRadius: '2px',
        border: '1px solid #333',
        color: '#666',
        fontSize: '0.7rem',
        fontFamily: 'monospace',
        letterSpacing: '1px',
      }}>
        NIXIE-TRON IN-86
      </div>
    </div>
  );
};

export default Clock_86; 