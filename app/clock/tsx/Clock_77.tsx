'use client';
import React, { useEffect, useState } from 'react';

const gameConsoleAnimationKeyframes = `
  @keyframes powerLight {
    0%, 100% { opacity: 1; box-shadow: 0 0 10px #ff0000; }
    50% { opacity: 0.5; box-shadow: 0 0 5px #ff0000; }
  }
  @keyframes pixelate {
    0% { filter: none; }
    50% { filter: url(#pixelate); }
    100% { filter: none; }
  }
  @keyframes scanlines {
    0% { background-position: 0 0; }
    100% { background-position: 0 4px; }
  }
  @keyframes buttonPress {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(2px); }
  }
`;

const ConsoleDigit = ({ value }: { value: string }) => {
  const [isPressed, setIsPressed] = useState(false);

  useEffect(() => {
    setIsPressed(true);
    const timer = setTimeout(() => setIsPressed(false), 100);
    return () => clearTimeout(timer);
  }, [value]);

  return (
    <div style={{
      position: 'relative',
      width: '80px',
      height: '120px',
      background: '#303030',
      borderRadius: '8px',
      overflow: 'hidden',
      boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
      border: '2px solid #404040',
    }}>
      <style>{gameConsoleAnimationKeyframes}</style>

      {/* Screen frame */}
      <div style={{
        position: 'absolute',
        inset: '5px',
        background: '#202020',
        borderRadius: '4px',
        padding: '4px',
      }}>
        {/* Screen */}
        <div style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          background: '#143114',
          borderRadius: '2px',
          overflow: 'hidden',
        }}>
          {/* Scanlines */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(transparent 50%, rgba(0, 0, 0, 0.3) 50%)',
            backgroundSize: '100% 4px',
            animation: 'scanlines 1s linear infinite',
            pointerEvents: 'none',
          }} />

          {/* Number display */}
          <div style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '3rem',
            fontFamily: '"Press Start 2P", monospace',
            color: '#33ff33',
            textShadow: '0 0 5px #33ff33',
            animation: isPressed ? 'pixelate 0.1s linear' : 'none',
          }}>
            {value}
          </div>
        </div>
      </div>

      {/* Control buttons */}
      <div style={{
        position: 'absolute',
        bottom: '8px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: '4px',
      }}>
        {[0, 1].map(i => (
          <div
            key={i}
            style={{
              width: '6px',
              height: '6px',
              background: '#ff0000',
              borderRadius: '50%',
              animation: 'powerLight 2s ease-in-out infinite',
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

const Clock_77 = () => {
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
      background: 'linear-gradient(45deg, #202020, #303030)',
      padding: '3rem',
      borderRadius: '20px',
      boxShadow: '0 0 30px rgba(0,0,0,0.5)',
      border: '4px solid #404040',
    }}>
      {/* Console texture */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: `url("data:image/svg+xml,%3Csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h20v20H0z' fill='none' stroke='%23353535' stroke-width='0.5'/%3E%3C/svg%3E")`,
        opacity: 0.1,
      }} />

      {/* Brand name */}
      <div style={{
        position: 'absolute',
        top: '10px',
        left: '50%',
        transform: 'translateX(-50%)',
        color: '#808080',
        fontFamily: '"Press Start 2P", monospace',
        fontSize: '0.8rem',
        letterSpacing: '2px',
      }}>
        CHRONOTENDO
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
          <ConsoleDigit value={hours[0]} />
          <ConsoleDigit value={hours[1]} />
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
                background: '#33ff33',
                borderRadius: '50%',
                boxShadow: '0 0 10px rgba(51, 255, 51, 0.5)',
                animation: 'powerLight 1s ease-in-out infinite',
                animationDelay: `${i * 0.5}s`,
              }}
            />
          ))}
        </div>

        <div style={{ display: 'flex', gap: '10px' }}>
          <ConsoleDigit value={minutes[0]} />
          <ConsoleDigit value={minutes[1]} />
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
                background: '#33ff33',
                borderRadius: '50%',
                boxShadow: '0 0 10px rgba(51, 255, 51, 0.5)',
                animation: 'powerLight 1s ease-in-out infinite',
                animationDelay: `${i * 0.5}s`,
              }}
            />
          ))}
        </div>

        <div style={{ display: 'flex', gap: '10px' }}>
          <ConsoleDigit value={seconds[0]} />
          <ConsoleDigit value={seconds[1]} />
        </div>
      </div>

      {/* Control pad */}
      <div style={{
        position: 'absolute',
        bottom: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: '40px',
        alignItems: 'center',
      }}>
        {/* D-Pad */}
        <div style={{
          position: 'relative',
          width: '60px',
          height: '60px',
        }}>
          {['↑', '→', '↓', '←'].map((arrow, i) => (
            <div
              key={i}
              style={{
                position: 'absolute',
                width: '20px',
                height: '20px',
                background: '#404040',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#808080',
                fontSize: '0.8rem',
                borderRadius: '4px',
                boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.3)',
                cursor: 'pointer',
                ...(i === 0 && { top: 0, left: '20px' }),
                ...(i === 1 && { top: '20px', right: 0 }),
                ...(i === 2 && { bottom: 0, left: '20px' }),
                ...(i === 3 && { top: '20px', left: 0 }),
              }}
            >
              {arrow}
            </div>
          ))}
        </div>

        {/* Action buttons */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '10px',
        }}>
          {['A', 'B', 'X', 'Y'].map((button, i) => (
            <div
              key={i}
              style={{
                width: '20px',
                height: '20px',
                background: '#404040',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#808080',
                fontSize: '0.8rem',
                fontWeight: 'bold',
                boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.3)',
                cursor: 'pointer',
              }}
            >
              {button}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clock_77; 