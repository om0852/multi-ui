'use client';
import React, { useEffect, useState } from 'react';

const cassetteAnimationKeyframes = `
  @keyframes reelRotate {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  @keyframes tapeWobble {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-2px); }
  }
  @keyframes levelBounce {
    0%, 100% { transform: scaleY(0.3); }
    50% { transform: scaleY(1); }
  }
  @keyframes numberFlip {
    0% { transform: rotateX(0deg); }
    100% { transform: rotateX(360deg); }
  }
`;

const AudioLevel = ({ delay = 0 }: { delay?: number }) => (
  <div
    style={{
      width: '2px',
      height: '15px',
      background: '#ff6b6b',
      transformOrigin: 'bottom',
      animation: 'levelBounce 0.5s ease-in-out infinite',
      animationDelay: `${delay}s`,
    }}
  />
);

const CassetteDigit = ({ value }: { value: string }) => {
  const [isFlipping, setIsFlipping] = useState(false);

  useEffect(() => {
    setIsFlipping(true);
    const timer = setTimeout(() => setIsFlipping(false), 500);
    return () => clearTimeout(timer);
  }, [value]);

  return (
    <div style={{
      position: 'relative',
      width: '80px',
      height: '120px',
      background: '#ddd',
      borderRadius: '8px',
      overflow: 'hidden',
      boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
    }}>
      <style>{cassetteAnimationKeyframes}</style>

      {/* Cassette body */}
      <div style={{
        position: 'absolute',
        inset: '5px',
        background: '#333',
        borderRadius: '4px',
      }}>
        {/* Reels */}
        <div style={{
          position: 'absolute',
          top: '20%',
          left: '20%',
          width: '20px',
          height: '20px',
          background: '#666',
          borderRadius: '50%',
          animation: 'reelRotate 2s linear infinite',
        }}>
          <div style={{
            position: 'absolute',
            inset: '20%',
            background: '#444',
            borderRadius: '50%',
          }} />
        </div>
        <div style={{
          position: 'absolute',
          top: '20%',
          right: '20%',
          width: '20px',
          height: '20px',
          background: '#666',
          borderRadius: '50%',
          animation: 'reelRotate 2s linear infinite',
        }}>
          <div style={{
            position: 'absolute',
            inset: '20%',
            background: '#444',
            borderRadius: '50%',
          }} />
        </div>

        {/* Tape */}
        <div style={{
          position: 'absolute',
          top: '30%',
          left: '25%',
          right: '25%',
          height: '2px',
          background: '#111',
          animation: 'tapeWobble 1s ease-in-out infinite',
        }} />

        {/* Audio levels */}
        <div style={{
          position: 'absolute',
          bottom: '20%',
          left: '20%',
          right: '20%',
          height: '15px',
          display: 'flex',
          gap: '2px',
          justifyContent: 'center',
          alignItems: 'flex-end',
        }}>
          {Array.from({ length: 8 }).map((_, i) => (
            <AudioLevel key={i} delay={i * 0.1} />
          ))}
        </div>
      </div>

      {/* Number display */}
      <div style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '3rem',
        fontWeight: 'bold',
        color: '#ff6b6b',
        textShadow: '0 0 10px rgba(255,107,107,0.5)',
        animation: isFlipping ? 'numberFlip 0.5s ease-out' : 'none',
        fontFamily: 'monospace',
      }}>
        {value}
      </div>

      {/* Label details */}
      <div style={{
        position: 'absolute',
        bottom: '10px',
        left: '50%',
        transform: 'translateX(-50%)',
        fontSize: '0.5rem',
        color: '#666',
        whiteSpace: 'nowrap',
        fontFamily: 'monospace',
      }}>
        TIME-90
      </div>
    </div>
  );
};

const Clock_75 = () => {
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
      background: 'linear-gradient(45deg, #2a2a2a, #3a3a3a)',
      padding: '3rem',
      borderRadius: '20px',
      boxShadow: '0 0 30px rgba(0,0,0,0.3)',
      border: '4px solid #444',
    }}>
      {/* Texture overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.05'/%3E%3C/svg%3E")`,
        opacity: 0.1,
      }} />

      <div style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '20px',
      }}>
        <div style={{ display: 'flex', gap: '10px' }}>
          <CassetteDigit value={hours[0]} />
          <CassetteDigit value={hours[1]} />
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
                background: '#ff6b6b',
                borderRadius: '50%',
                boxShadow: '0 0 10px rgba(255,107,107,0.5)',
                animation: 'levelBounce 1s ease-in-out infinite',
                animationDelay: `${i * 0.5}s`,
              }}
            />
          ))}
        </div>

        <div style={{ display: 'flex', gap: '10px' }}>
          <CassetteDigit value={minutes[0]} />
          <CassetteDigit value={minutes[1]} />
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
                background: '#ff6b6b',
                borderRadius: '50%',
                boxShadow: '0 0 10px rgba(255,107,107,0.5)',
                animation: 'levelBounce 1s ease-in-out infinite',
                animationDelay: `${i * 0.5}s`,
              }}
            />
          ))}
        </div>

        <div style={{ display: 'flex', gap: '10px' }}>
          <CassetteDigit value={seconds[0]} />
          <CassetteDigit value={seconds[1]} />
        </div>
      </div>

      {/* Deck controls */}
      <div style={{
        position: 'absolute',
        bottom: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: '20px',
      }}>
        {['⏪', '▶️', '⏸️', '⏹️', '⏩'].map((symbol, i) => (
          <div
            key={i}
            style={{
              width: '30px',
              height: '30px',
              background: '#222',
              borderRadius: '4px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#666',
              fontSize: '1rem',
              boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.3)',
            }}
          >
            {symbol}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clock_75; 