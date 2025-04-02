'use client';
import React, { useEffect, useState } from 'react';

const starAnimationKeyframes = `
  @keyframes twinkle {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.3; transform: scale(0.8); }
  }
  @keyframes shooting {
    0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); opacity: 1; }
    100% { transform: translateX(100%) translateY(100%) rotate(45deg); opacity: 0; }
  }
  @keyframes constellationPulse {
    0%, 100% { opacity: 0.8; }
    50% { opacity: 0.4; }
  }
  @keyframes starfieldRotate {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const Star = ({ size = 2, delay = 0 }: { size?: number; delay?: number }) => (
  <div
    style={{
      position: 'absolute',
      width: `${size}px`,
      height: `${size}px`,
      background: '#fff',
      borderRadius: '50%',
      boxShadow: '0 0 8px #fff',
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animation: 'twinkle 2s ease-in-out infinite',
      animationDelay: `${delay}s`,
    }}
  />
);

const ConstellationDigit = ({ value }: { value: string }) => {
  const [starPoints, setStarPoints] = useState<{ x: number; y: number }[]>([]);

  useEffect(() => {
    // Generate constellation points based on the digit
    const points = Array.from({ length: 8 }).map(() => ({
      x: 20 + Math.random() * 60,
      y: 20 + Math.random() * 60,
    }));
    setStarPoints(points);
  }, [value]);

  return (
    <div style={{
      position: 'relative',
      width: '80px',
      height: '120px',
      background: 'rgba(0, 0, 20, 0.8)',
      borderRadius: '10px',
      overflow: 'hidden',
    }}>
      <style>{starAnimationKeyframes}</style>

      {/* Background stars */}
      {Array.from({ length: 30 }).map((_, i) => (
        <Star key={i} size={1 + Math.random()} delay={Math.random() * 2} />
      ))}

      {/* Constellation lines */}
      <svg
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          opacity: 0.6,
          animation: 'constellationPulse 3s ease-in-out infinite',
        }}
      >
        {starPoints.map((point, i) => (
          <React.Fragment key={i}>
            {i < starPoints.length - 1 && (
              <line
                x1={`${point.x}%`}
                y1={`${point.y}%`}
                x2={`${starPoints[i + 1].x}%`}
                y2={`${starPoints[i + 1].y}%`}
                stroke="rgba(100, 200, 255, 0.3)"
                strokeWidth="1"
              />
            )}
          </React.Fragment>
        ))}
      </svg>

      {/* Constellation points */}
      {starPoints.map((point, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            left: `${point.x}%`,
            top: `${point.y}%`,
            width: '4px',
            height: '4px',
            background: '#64c8ff',
            borderRadius: '50%',
            boxShadow: '0 0 10px #64c8ff',
            transform: 'translate(-50%, -50%)',
            animation: 'twinkle 2s ease-in-out infinite',
            animationDelay: `${i * 0.2}s`,
          }}
        />
      ))}

      {/* Number display */}
      <div style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '3rem',
        fontWeight: 'bold',
        color: 'rgba(255, 255, 255, 0.15)',
        textShadow: '0 0 20px rgba(100, 200, 255, 0.5)',
      }}>
        {value}
      </div>

      {/* Shooting stars */}
      {Array.from({ length: 2 }).map((_, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            width: '40px',
            height: '1px',
            background: 'linear-gradient(90deg, #fff, transparent)',
            animation: 'shooting 2s linear infinite',
            animationDelay: `${i + Math.random() * 2}s`,
          }}
        />
      ))}
    </div>
  );
};

const Clock_74 = () => {
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
      background: 'linear-gradient(45deg, #000020, #000040)',
      padding: '3rem',
      borderRadius: '20px',
      boxShadow: '0 0 30px rgba(100, 200, 255, 0.2)',
      overflow: 'hidden',
    }}>
      {/* Rotating starfield background */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: `radial-gradient(circle at center, transparent 0%, #000020 100%),
                    url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.15'/%3E%3C/svg%3E")`,
        animation: 'starfieldRotate 240s linear infinite',
      }} />

      <div style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '20px',
      }}>
        <div style={{ display: 'flex', gap: '10px' }}>
          <ConstellationDigit value={hours[0]} />
          <ConstellationDigit value={hours[1]} />
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
                borderRadius: '50%',
                background: '#64c8ff',
                boxShadow: '0 0 10px #64c8ff',
                animation: 'twinkle 1s ease-in-out infinite',
                animationDelay: `${i * 0.5}s`,
              }}
            />
          ))}
        </div>

        <div style={{ display: 'flex', gap: '10px' }}>
          <ConstellationDigit value={minutes[0]} />
          <ConstellationDigit value={minutes[1]} />
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
                borderRadius: '50%',
                background: '#64c8ff',
                boxShadow: '0 0 10px #64c8ff',
                animation: 'twinkle 1s ease-in-out infinite',
                animationDelay: `${i * 0.5}s`,
              }}
            />
          ))}
        </div>

        <div style={{ display: 'flex', gap: '10px' }}>
          <ConstellationDigit value={seconds[0]} />
          <ConstellationDigit value={seconds[1]} />
        </div>
      </div>

      {/* Ambient glow */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(circle at center, transparent 0%, rgba(0, 0, 0, 0.5) 100%)',
        pointerEvents: 'none',
      }} />
    </div>
  );
};

export default Clock_74; 