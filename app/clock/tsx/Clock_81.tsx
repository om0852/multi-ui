'use client';
import React, { useEffect, useState } from 'react';

const steampunkAnimationKeyframes = `
  @keyframes rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  @keyframes steam {
    0% { 
      transform: translateY(0) scale(1);
      opacity: 0.8;
    }
    100% { 
      transform: translateY(-20px) scale(1.5);
      opacity: 0;
    }
  }
  @keyframes pressure {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
  }
  @keyframes glow {
    0%, 100% { filter: brightness(1); }
    50% { filter: brightness(1.2); }
  }
`;

const SteampunkDigit = ({ value }: { value: string }) => {
  const [isChanging, setIsChanging] = useState(false);

  useEffect(() => {
    setIsChanging(true);
    const timer = setTimeout(() => setIsChanging(false), 500);
    return () => clearTimeout(timer);
  }, [value]);

  return (
    <div style={{
      position: 'relative',
      width: '100px',
      height: '150px',
      background: 'linear-gradient(45deg, #8b7355, #b8860b)',
      border: '8px solid #704214',
      borderRadius: '10px',
      boxShadow: 'inset 0 0 20px rgba(0, 0, 0, 0.5)',
      overflow: 'hidden',
    }}>
      {/* Rivets */}
      {Array.from({ length: 4 }).map((_, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            width: '12px',
            height: '12px',
            background: '#4a3728',
            borderRadius: '50%',
            border: '2px solid #2b1810',
            boxShadow: 'inset 0 0 4px rgba(0, 0, 0, 0.5)',
            ...(i === 0 && { top: '5px', left: '5px' }),
            ...(i === 1 && { top: '5px', right: '5px' }),
            ...(i === 2 && { bottom: '5px', left: '5px' }),
            ...(i === 3 && { bottom: '5px', right: '5px' }),
          }}
        />
      ))}

      {/* Gears */}
      <div style={{
        position: 'absolute',
        top: '-20px',
        left: '-20px',
        width: '40px',
        height: '40px',
        background: '#8b7355',
        borderRadius: '50%',
        border: '4px solid #4a3728',
        animation: 'rotate 10s linear infinite',
      }}>
        <div style={{
          position: 'absolute',
          inset: '4px',
          background: '#4a3728',
          borderRadius: '50%',
        }} />
      </div>

      {/* Steam effect */}
      {isChanging && Array.from({ length: 3 }).map((_, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            bottom: '0',
            left: `${30 + i * 20}px`,
            width: '10px',
            height: '10px',
            background: 'rgba(255, 255, 255, 0.6)',
            borderRadius: '50%',
            filter: 'blur(4px)',
            animation: 'steam 1s ease-out infinite',
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
        fontSize: '4rem',
        fontFamily: 'Georgia, serif',
        color: '#2b1810',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
        animation: isChanging ? 'glow 0.5s ease-in-out' : 'none',
      }}>
        {value}
      </div>
    </div>
  );
};

const Clock_81 = () => {
  const [time, setTime] = useState(new Date());
  const [pressure, setPressure] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
      setPressure(Math.random() * 100);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const hours = time.getHours().toString().padStart(2, '0');
  const minutes = time.getMinutes().toString().padStart(2, '0');
  const seconds = time.getSeconds().toString().padStart(2, '0');

  return (
    <div style={{
      position: 'relative',
      background: '#2b1810',
      padding: '4rem',
      borderRadius: '20px',
      boxShadow: '0 0 40px rgba(139, 115, 85, 0.3)',
      border: '12px solid #8b7355',
      overflow: 'hidden',
    }}>
      <style>{steampunkAnimationKeyframes}</style>

      {/* Background texture */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: `
          radial-gradient(circle at 50% 50%, transparent 0%, rgba(0, 0, 0, 0.3) 100%),
          url("data:image/svg+xml,%3Csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h20v20H0z' fill='none' stroke='%238b7355' stroke-width='0.5'/%3E%3C/svg%3E")
        `,
        opacity: 0.1,
      }} />

      {/* Large decorative gears */}
      {Array.from({ length: 3 }).map((_, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            width: '100px',
            height: '100px',
            background: '#8b7355',
            borderRadius: '50%',
            border: '8px solid #4a3728',
            boxShadow: 'inset 0 0 20px rgba(0, 0, 0, 0.5)',
            animation: `rotate ${10 + i * 5}s linear infinite${i % 2 ? ' reverse' : ''}`,
            ...(i === 0 && { top: '-30px', left: '-30px' }),
            ...(i === 1 && { top: '-50px', right: '-30px' }),
            ...(i === 2 && { bottom: '-30px', left: '50%' }),
          }}
        >
          <div style={{
            position: 'absolute',
            inset: '10px',
            background: '#4a3728',
            borderRadius: '50%',
          }} />
        </div>
      ))}

      {/* Main display */}
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
                background: '#ffd700',
                borderRadius: '50%',
                border: '2px solid #8b7355',
                boxShadow: '0 0 10px rgba(255, 215, 0, 0.5)',
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
                background: '#ffd700',
                borderRadius: '50%',
                border: '2px solid #8b7355',
                boxShadow: '0 0 10px rgba(255, 215, 0, 0.5)',
              }}
            />
          ))}
        </div>

        <div style={{ display: 'flex', gap: '10px' }}>
          <SteampunkDigit value={seconds[0]} />
          <SteampunkDigit value={seconds[1]} />
        </div>
      </div>

      {/* Pressure gauge */}
      <div style={{
        position: 'absolute',
        bottom: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
      }}>
        <div style={{
          width: '60px',
          height: '60px',
          background: '#8b7355',
          borderRadius: '50%',
          border: '4px solid #4a3728',
          boxShadow: 'inset 0 0 10px rgba(0, 0, 0, 0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          animation: 'pressure 2s ease-in-out infinite',
        }}>
          <div style={{
            width: '4px',
            height: '30px',
            background: '#ffd700',
            transformOrigin: 'bottom',
            transform: `rotate(${pressure * 3.6}deg)`,
            transition: 'transform 0.5s ease-in-out',
          }} />
        </div>
        <div style={{
          color: '#8b7355',
          fontFamily: 'Georgia, serif',
          fontSize: '0.8rem',
        }}>
          PRESSURE
        </div>
      </div>
    </div>
  );
};

export default Clock_81; 