'use client';
import React, { useEffect, useState } from 'react';

const gearAnimationKeyframes = `
  @keyframes gearRotate {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  @keyframes steamPuff {
    0% { transform: scale(0.8) translateY(0); opacity: 0.8; }
    100% { transform: scale(1.2) translateY(-20px); opacity: 0; }
  }
  @keyframes numberFlip {
    0% { transform: rotateX(0deg); }
    100% { transform: rotateX(360deg); }
  }
`;

const Gear = ({ size, speed, clockwise = true, color = '#8b4513' }: { 
  size: number;
  speed: number;
  clockwise?: boolean;
  color?: string;
}) => (
  <div style={{
    position: 'absolute',
    width: `${size}px`,
    height: `${size}px`,
    animation: `gearRotate ${speed}s linear infinite ${clockwise ? '' : 'reverse'}`,
  }}>
    <div style={{
      position: 'absolute',
      inset: '10%',
      background: color,
      borderRadius: '50%',
      boxShadow: 'inset 0 0 10px rgba(0,0,0,0.5)',
    }} />
    {Array.from({ length: 8 }).map((_, i) => (
      <div
        key={i}
        style={{
          position: 'absolute',
          width: '30%',
          height: '10%',
          background: color,
          left: '35%',
          top: '45%',
          transform: `rotate(${i * 45}deg)`,
          transformOrigin: '50% 50%',
          boxShadow: '2px 2px 4px rgba(0,0,0,0.3)',
        }}
      />
    ))}
  </div>
);

const SteampunkDigit = ({ value }: { value: string }) => {
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
      perspective: '1000px',
    }}>
      <style>{gearAnimationKeyframes}</style>

      {/* Background plate */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: '#2a1810',
        border: '4px solid #8b4513',
        borderRadius: '8px',
        boxShadow: 'inset 0 0 20px rgba(0,0,0,0.5)',
      }}>
        {/* Decorative rivets */}
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              width: '12px',
              height: '12px',
              background: '#8b4513',
              borderRadius: '50%',
              boxShadow: 'inset 0 0 4px rgba(0,0,0,0.5)',
              ...{
                0: { top: '5px', left: '5px' },
                1: { top: '5px', right: '5px' },
                2: { bottom: '5px', left: '5px' },
                3: { bottom: '5px', right: '5px' },
              }[i],
            }}
          />
        ))}
      </div>

      {/* Gears */}
      <Gear size={30} speed={8} clockwise={true} color="#cd7f32" />
      <Gear size={40} speed={12} clockwise={false} color="#8b4513" />
      <Gear size={25} speed={6} clockwise={true} color="#daa520" />

      {/* Number display */}
      <div style={{
        position: 'absolute',
        inset: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#000',
        border: '2px solid #8b4513',
        borderRadius: '4px',
        overflow: 'hidden',
      }}>
        <div style={{
          fontSize: '4rem',
          fontFamily: 'Courier New, monospace',
          fontWeight: 'bold',
          color: '#daa520',
          textShadow: '0 0 10px rgba(218,165,32,0.5)',
          animation: isFlipping ? 'numberFlip 0.5s ease-out' : 'none',
        }}>
          {value}
        </div>
      </div>

      {/* Steam effects */}
      {Array.from({ length: 3 }).map((_, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            width: '10px',
            height: '10px',
            background: 'rgba(255,255,255,0.2)',
            borderRadius: '50%',
            top: '0',
            left: `${20 + i * 20}px`,
            animation: 'steamPuff 2s ease-out infinite',
            animationDelay: `${i * 0.5}s`,
          }}
        />
      ))}
    </div>
  );
};

const Clock_70 = () => {
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
      background: 'linear-gradient(45deg, #1a0f0f, #2a1810)',
      padding: '3rem',
      borderRadius: '20px',
      boxShadow: '0 0 30px rgba(0,0,0,0.5)',
      border: '8px solid #8b4513',
    }}>
      {/* Metal texture overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.05'/%3E%3C/svg%3E")`,
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
          <SteampunkDigit value={hours[0]} />
          <SteampunkDigit value={hours[1]} />
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
                width: '12px',
                height: '12px',
                background: '#daa520',
                borderRadius: '50%',
                border: '2px solid #8b4513',
                boxShadow: '0 0 10px rgba(218,165,32,0.5)',
              }}
            />
          ))}
        </div>

        <div style={{ display: 'flex', gap: '10px' }}>
          <SteampunkDigit value={minutes[0]} />
          <SteampunkDigit value={minutes[1]} />
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
                width: '12px',
                height: '12px',
                background: '#daa520',
                borderRadius: '50%',
                border: '2px solid #8b4513',
                boxShadow: '0 0 10px rgba(218,165,32,0.5)',
              }}
            />
          ))}
        </div>

        <div style={{ display: 'flex', gap: '10px' }}>
          <SteampunkDigit value={seconds[0]} />
          <SteampunkDigit value={seconds[1]} />
        </div>
      </div>

      {/* Large background gears */}
      <Gear size={150} speed={20} clockwise={true} color="#8b4513" />
      <Gear size={120} speed={15} clockwise={false} color="#cd7f32" />
      <Gear size={180} speed={25} clockwise={true} color="#daa520" />
    </div>
  );
};

export default Clock_70; 