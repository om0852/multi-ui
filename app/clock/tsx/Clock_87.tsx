'use client';
import React, { useEffect, useState } from 'react';

const splitFlapAnimationKeyframes = `
  @keyframes flipTop {
    0% { transform: rotateX(0deg); }
    100% { transform: rotateX(-90deg); }
  }
  @keyframes flipBottom {
    0% { transform: rotateX(90deg); }
    100% { transform: rotateX(0deg); }
  }
  @keyframes mechanicalNoise {
    0%, 100% { transform: translate(0, 0); }
    10% { transform: translate(-1px, 1px); }
    20% { transform: translate(1px, -1px); }
    30% { transform: translate(-1px, -1px); }
    40% { transform: translate(1px, 1px); }
  }
`;

const SplitFlapDigit = ({ value }: { value: string }) => {
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
      width: '80px',
      height: '120px',
      perspective: '1000px',
      backgroundColor: '#222',
      borderRadius: '8px',
      boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.5)',
      overflow: 'hidden',
    }}>
      {/* Static top half */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '50%',
        background: '#333',
        borderTopLeftRadius: '8px',
        borderTopRightRadius: '8px',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        overflow: 'hidden',
        borderBottom: '1px solid #000',
      }}>
        <div style={{
          fontSize: '5rem',
          fontFamily: 'Arial, sans-serif',
          color: '#fff',
          lineHeight: '120px',
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
          right: 0,
          height: '50%',
          background: '#333',
          borderTopLeftRadius: '8px',
          borderTopRightRadius: '8px',
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'center',
          overflow: 'hidden',
          transformOrigin: 'bottom',
          animation: 'flipTop 0.3s ease-in forwards',
          borderBottom: '1px solid #000',
          backfaceVisibility: 'hidden',
        }}>
          <div style={{
            fontSize: '5rem',
            fontFamily: 'Arial, sans-serif',
            color: '#fff',
            lineHeight: '120px',
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
        right: 0,
        height: '50%',
        background: '#2a2a2a',
        borderBottomLeftRadius: '8px',
        borderBottomRightRadius: '8px',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        overflow: 'hidden',
        borderTop: '1px solid #444',
      }}>
        <div style={{
          fontSize: '5rem',
          fontFamily: 'Arial, sans-serif',
          color: '#fff',
          lineHeight: '120px',
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
          right: 0,
          height: '50%',
          background: '#2a2a2a',
          borderBottomLeftRadius: '8px',
          borderBottomRightRadius: '8px',
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'center',
          overflow: 'hidden',
          transformOrigin: 'top',
          animation: 'flipBottom 0.3s ease-out forwards',
          borderTop: '1px solid #444',
          backfaceVisibility: 'hidden',
        }}>
          <div style={{
            fontSize: '5rem',
            fontFamily: 'Arial, sans-serif',
            color: '#fff',
            lineHeight: '120px',
            transform: 'translateY(-75%)',
          }}>
            {value}
          </div>
        </div>
      )}

      {/* Mechanical noise effect */}
      {isFlipping && (
        <div style={{
          position: 'absolute',
          inset: 0,
          animation: 'mechanicalNoise 0.3s linear',
          pointerEvents: 'none',
        }} />
      )}

      {/* Center divider */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: 0,
        right: 0,
        height: '2px',
        background: '#000',
        transform: 'translateY(-1px)',
        boxShadow: '0 1px 0 rgba(255, 255, 255, 0.1)',
      }} />
    </div>
  );
};

const Clock_87 = () => {
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
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)',
      border: '4px solid #333',
    }}>
      <style>{splitFlapAnimationKeyframes}</style>

      {/* Vintage texture */}
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

      {/* Display panel */}
      <div style={{
        position: 'relative',
        background: '#111',
        padding: '30px',
        borderRadius: '10px',
        border: '2px solid #333',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '20px',
      }}>
        <div style={{ display: 'flex', gap: '10px' }}>
          <SplitFlapDigit value={hours[0]} />
          <SplitFlapDigit value={hours[1]} />
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
                width: '12px',
                height: '12px',
                background: '#333',
                borderRadius: '50%',
                boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.5)',
              }}
            />
          ))}
        </div>

        <div style={{ display: 'flex', gap: '10px' }}>
          <SplitFlapDigit value={minutes[0]} />
          <SplitFlapDigit value={minutes[1]} />
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
                width: '12px',
                height: '12px',
                background: '#333',
                borderRadius: '50%',
                boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.5)',
              }}
            />
          ))}
        </div>

        <div style={{ display: 'flex', gap: '10px' }}>
          <SplitFlapDigit value={seconds[0]} />
          <SplitFlapDigit value={seconds[1]} />
        </div>
      </div>

      {/* Vintage label */}
      <div style={{
        position: 'absolute',
        bottom: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        background: '#222',
        padding: '5px 15px',
        borderRadius: '15px',
        border: '1px solid #333',
        color: '#666',
        fontSize: '0.8rem',
        fontFamily: 'monospace',
        letterSpacing: '2px',
      }}>
        SOLARI SF-87
      </div>

      {/* Mechanical sound effect */}
      <audio id="flipSound" style={{ display: 'none' }}>
        <source src="flip.mp3" type="audio/mpeg" />
      </audio>
    </div>
  );
};

export default Clock_87; 