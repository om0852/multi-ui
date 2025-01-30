'use client';
import React, { useEffect, useState } from 'react';

const flipCardAnimationKeyframes = `
  @keyframes flipTop {
    0% { transform: rotateX(0deg); }
    100% { transform: rotateX(-90deg); }
  }
  @keyframes flipBottom {
    0% { transform: rotateX(90deg); }
    100% { transform: rotateX(0deg); }
  }
  @keyframes cardShadow {
    0%, 100% { opacity: 0.3; }
    50% { opacity: 0.1; }
  }
`;

const FlipCard = ({ value }: { value: string }) => {
  const [prevValue, setPrevValue] = useState(value);
  const [isFlipping, setIsFlipping] = useState(false);

  useEffect(() => {
    if (value !== prevValue) {
      setIsFlipping(true);
      const timer = setTimeout(() => {
        setPrevValue(value);
        setIsFlipping(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [value, prevValue]);

  return (
    <div style={{
      position: 'relative',
      width: '60px',
      height: '100px',
      perspective: '1000px',
    }}>
      {/* Static top half */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '50%',
        background: '#f8f8f8',
        borderTopLeftRadius: '8px',
        borderTopRightRadius: '8px',
        border: '1px solid #ddd',
        borderBottom: 'none',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        overflow: 'hidden',
        boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.1)',
      }}>
        <div style={{
          fontSize: '5rem',
          fontFamily: 'Arial, sans-serif',
          color: '#333',
          lineHeight: '100px',
          transform: 'translateY(25%)',
        }}>
          {isFlipping ? prevValue : value}
        </div>
      </div>

      {/* Flipping top half */}
      {isFlipping && (
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '50%',
          background: '#f8f8f8',
          borderTopLeftRadius: '8px',
          borderTopRightRadius: '8px',
          border: '1px solid #ddd',
          borderBottom: 'none',
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'center',
          overflow: 'hidden',
          transformOrigin: 'bottom',
          animation: 'flipTop 0.3s ease-in forwards',
          backfaceVisibility: 'hidden',
          boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.1)',
        }}>
          <div style={{
            fontSize: '5rem',
            fontFamily: 'Arial, sans-serif',
            color: '#333',
            lineHeight: '100px',
            transform: 'translateY(25%)',
          }}>
            {prevValue}
          </div>
        </div>
      )}

      {/* Static bottom half */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '50%',
        background: '#f0f0f0',
        borderBottomLeftRadius: '8px',
        borderBottomRightRadius: '8px',
        border: '1px solid #ddd',
        borderTop: 'none',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        overflow: 'hidden',
        boxShadow: 'inset 0 -2px 4px rgba(0, 0, 0, 0.1)',
      }}>
        <div style={{
          fontSize: '5rem',
          fontFamily: 'Arial, sans-serif',
          color: '#333',
          lineHeight: '100px',
          transform: 'translateY(-75%)',
        }}>
          {value}
        </div>
      </div>

      {/* Flipping bottom half */}
      {isFlipping && (
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '50%',
          background: '#f0f0f0',
          borderBottomLeftRadius: '8px',
          borderBottomRightRadius: '8px',
          border: '1px solid #ddd',
          borderTop: 'none',
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'center',
          overflow: 'hidden',
          transformOrigin: 'top',
          animation: 'flipBottom 0.3s ease-out forwards',
          backfaceVisibility: 'hidden',
          boxShadow: 'inset 0 -2px 4px rgba(0, 0, 0, 0.1)',
        }}>
          <div style={{
            fontSize: '5rem',
            fontFamily: 'Arial, sans-serif',
            color: '#333',
            lineHeight: '100px',
            transform: 'translateY(-75%)',
          }}>
            {value}
          </div>
        </div>
      )}

      {/* Center line */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: 0,
        width: '100%',
        height: '1px',
        background: '#ddd',
        transform: 'translateY(-0.5px)',
      }} />
    </div>
  );
};

const Clock_94 = () => {
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
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
      border: '4px solid #e0e0e0',
    }}>
      <style>{flipCardAnimationKeyframes}</style>

      {/* Display panel */}
      <div style={{
        position: 'relative',
        background: '#fff',
        padding: '30px',
        borderRadius: '10px',
        border: '1px solid #ddd',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '15px',
        boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.05)',
      }}>
        <div style={{ display: 'flex', gap: '8px' }}>
          <FlipCard value={hours[0]} />
          <FlipCard value={hours[1]} />
        </div>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '15px',
        }}>
          {[0, 1].map(i => (
            <div
              key={i}
              style={{
                width: '8px',
                height: '8px',
                background: '#333',
                borderRadius: '50%',
                opacity: time.getSeconds() % 2 === 0 ? 1 : 0.3,
                transition: 'opacity 0.2s ease-in-out',
              }}
            />
          ))}
        </div>

        <div style={{ display: 'flex', gap: '8px' }}>
          <FlipCard value={minutes[0]} />
          <FlipCard value={minutes[1]} />
        </div>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '15px',
        }}>
          {[0, 1].map(i => (
            <div
              key={i}
              style={{
                width: '8px',
                height: '8px',
                background: '#333',
                borderRadius: '50%',
                opacity: time.getSeconds() % 2 === 0 ? 1 : 0.3,
                transition: 'opacity 0.2s ease-in-out',
              }}
            />
          ))}
        </div>

        <div style={{ display: 'flex', gap: '8px' }}>
          <FlipCard value={seconds[0]} />
          <FlipCard value={seconds[1]} />
        </div>
      </div>

      {/* Manufacturer plate */}
      <div style={{
        position: 'absolute',
        bottom: '15px',
        right: '20px',
        background: '#fff',
        padding: '4px 8px',
        borderRadius: '4px',
        border: '1px solid #ddd',
        color: '#666',
        fontSize: '0.8rem',
        fontFamily: 'monospace',
        letterSpacing: '1px',
      }}>
        FLIP-94
      </div>
    </div>
  );
};

export default Clock_94; 