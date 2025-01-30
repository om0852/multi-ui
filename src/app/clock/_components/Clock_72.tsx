'use client';
import React, { useEffect, useState } from 'react';

const vinylAnimationKeyframes = `
  @keyframes rotate {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  @keyframes tonearmMove {
    0% { transform: rotate(-10deg); }
    100% { transform: rotate(0deg); }
  }
  @keyframes grooveSpin {
    0% { transform: translate(-50%, -50%) rotate(0deg); }
    100% { transform: translate(-50%, -50%) rotate(360deg); }
  }
  @keyframes labelSpin {
    0% { transform: translate(-50%, -50%) rotate(360deg); }
    100% { transform: translate(-50%, -50%) rotate(0deg); }
  }
`;

const VinylDigit = ({ value }: { value: string }) => {
  return (
    <div style={{
      position: 'relative',
      width: '80px',
      height: '120px',
      background: '#2a2a2a',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
      overflow: 'hidden',
    }}>
      <style>{vinylAnimationKeyframes}</style>

      {/* Record surface */}
      <div style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        background: '#111',
        borderRadius: '50%',
      }}>
        {/* Vinyl grooves */}
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: `${80 - i * 8}%`,
              height: `${80 - i * 8}%`,
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '50%',
              animation: 'grooveSpin 4s linear infinite',
            }}
          />
        ))}

        {/* Record label */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '40%',
          height: '40%',
          background: '#daa520',
          borderRadius: '50%',
          animation: 'labelSpin 4s linear infinite',
        }}>
          {/* Number display */}
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            fontSize: '2rem',
            fontWeight: 'bold',
            color: '#000',
            textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
          }}>
            {value}
          </div>
        </div>
      </div>

      {/* Tonearm */}
      <div style={{
        position: 'absolute',
        top: '10%',
        right: '10%',
        width: '4px',
        height: '40%',
        background: '#silver',
        transformOrigin: 'top right',
        animation: 'tonearmMove 0.5s ease-out forwards',
      }}>
        {/* Cartridge */}
        <div style={{
          position: 'absolute',
          bottom: '-4px',
          left: '-4px',
          width: '12px',
          height: '8px',
          background: '#333',
          borderRadius: '2px',
        }} />
      </div>
    </div>
  );
};

const Clock_72 = () => {
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
      background: 'linear-gradient(45deg, #1a1a1a, #2a2a2a)',
      padding: '3rem',
      borderRadius: '20px',
      boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
      border: '4px solid #333',
    }}>
      {/* Wood grain texture */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.3' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.05'/%3E%3C/svg%3E")`,
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
          <VinylDigit value={hours[0]} />
          <VinylDigit value={hours[1]} />
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
                background: '#daa520',
                borderRadius: '50%',
                boxShadow: '0 0 10px rgba(218,165,32,0.5)',
              }}
            />
          ))}
        </div>

        <div style={{ display: 'flex', gap: '10px' }}>
          <VinylDigit value={minutes[0]} />
          <VinylDigit value={minutes[1]} />
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
                background: '#daa520',
                borderRadius: '50%',
                boxShadow: '0 0 10px rgba(218,165,32,0.5)',
              }}
            />
          ))}
        </div>

        <div style={{ display: 'flex', gap: '10px' }}>
          <VinylDigit value={seconds[0]} />
          <VinylDigit value={seconds[1]} />
        </div>
      </div>

      {/* Control panel */}
      <div style={{
        position: 'absolute',
        bottom: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: '20px',
      }}>
        {['33', '45', '78'].map((speed) => (
          <div
            key={speed}
            style={{
              padding: '4px 12px',
              background: '#333',
              borderRadius: '4px',
              color: '#daa520',
              fontSize: '0.8rem',
              fontFamily: 'monospace',
            }}
          >
            {speed} RPM
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clock_72; 