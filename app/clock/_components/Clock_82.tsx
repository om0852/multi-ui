'use client';
import React, { useEffect, useState } from 'react';

const paperAnimationKeyframes = `
  @keyframes unfold {
    0% { transform: rotateX(90deg); opacity: 0; }
    100% { transform: rotateX(0deg); opacity: 1; }
  }
  @keyframes fold {
    0% { transform: rotateX(0deg); opacity: 1; }
    100% { transform: rotateX(-90deg); opacity: 0; }
  }
  @keyframes paperFloat {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-5px); }
  }
`;

const PaperDigit = ({ value }: { value: string }) => {
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
      height: '120px',
      perspective: '1000px',
    }}>
      {/* Paper background */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: '#ffffff',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        animation: 'paperFloat 3s ease-in-out infinite',
      }}>
        {/* Folded corner effect */}
        <div style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '20px',
          height: '20px',
          background: 'linear-gradient(135deg, transparent 50%, rgba(0, 0, 0, 0.1) 50%)',
        }} />
      </div>

      {/* Previous number */}
      <div style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '4rem',
        fontFamily: 'Helvetica, Arial, sans-serif',
        color: '#333333',
        animation: isTransitioning ? 'fold 0.3s ease-in forwards' : 'none',
        transformOrigin: 'bottom',
      }}>
        {prevValue}
      </div>

      {/* Current number */}
      {isTransitioning && (
        <div style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '4rem',
          fontFamily: 'Helvetica, Arial, sans-serif',
          color: '#333333',
          animation: 'unfold 0.3s ease-out forwards',
          transformOrigin: 'top',
        }}>
          {value}
        </div>
      )}
    </div>
  );
};

const Clock_82 = () => {
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
      background: '#f5f5f5',
      padding: '4rem',
      borderRadius: '20px',
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
    }}>
      <style>{paperAnimationKeyframes}</style>

      {/* Background pattern */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: `
          linear-gradient(45deg, transparent 25%, rgba(0, 0, 0, 0.02) 25%),
          linear-gradient(-45deg, transparent 25%, rgba(0, 0, 0, 0.02) 25%),
          linear-gradient(45deg, rgba(0, 0, 0, 0.02) 75%, transparent 75%),
          linear-gradient(-45deg, rgba(0, 0, 0, 0.02) 75%, transparent 75%)
        `,
        backgroundSize: '20px 20px',
        opacity: 0.5,
      }} />

      {/* Main display */}
      <div style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '20px',
      }}>
        <div style={{ display: 'flex', gap: '10px' }}>
          <PaperDigit value={hours[0]} />
          <PaperDigit value={hours[1]} />
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
                background: '#333333',
                borderRadius: '50%',
                opacity: 0.5,
              }}
            />
          ))}
        </div>

        <div style={{ display: 'flex', gap: '10px' }}>
          <PaperDigit value={minutes[0]} />
          <PaperDigit value={minutes[1]} />
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
                background: '#333333',
                borderRadius: '50%',
                opacity: 0.5,
              }}
            />
          ))}
        </div>

        <div style={{ display: 'flex', gap: '10px' }}>
          <PaperDigit value={seconds[0]} />
          <PaperDigit value={seconds[1]} />
        </div>
      </div>

      {/* Decorative paper strips */}
      {Array.from({ length: 3 }).map((_, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            width: '100px',
            height: '4px',
            background: '#ffffff',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            transform: `rotate(${i * 60}deg)`,
            transformOrigin: 'center',
            ...(i === 0 && { top: '20px', right: '40px' }),
            ...(i === 1 && { bottom: '40px', left: '20px' }),
            ...(i === 2 && { top: '50%', right: '60px' }),
          }}
        />
      ))}

      {/* Watermark */}
      <div style={{
        position: 'absolute',
        bottom: '20px',
        right: '20px',
        color: '#999999',
        fontSize: '0.8rem',
        fontFamily: 'Helvetica, Arial, sans-serif',
        letterSpacing: '2px',
      }}>
        PAPER TIME
      </div>
    </div>
  );
};

export default Clock_82; 