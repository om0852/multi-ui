'use client';
import React, { useEffect, useState } from 'react';

const counterWheelAnimationKeyframes = `
  @keyframes spin {
    0% { transform: translateY(0); }
    100% { transform: translateY(-100%); }
  }
  @keyframes mechanicalShake {
    0%, 100% { transform: translate(0, 0); }
    25% { transform: translate(-0.5px, 0.5px); }
    50% { transform: translate(0.5px, -0.5px); }
    75% { transform: translate(0.5px, 0.5px); }
  }
`;

const CounterWheel = ({ value, prevValue }: { value: string; prevValue: string }) => {
  const numbers = ['9', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '1'];
  const currentIndex = numbers.indexOf(value);
  const prevIndex = numbers.indexOf(prevValue);
  const shouldAnimate = currentIndex !== prevIndex;

  return (
    <div style={{
      width: '40px',
      height: '60px',
      background: '#222',
      borderRadius: '4px',
      overflow: 'hidden',
      position: 'relative',
      border: '2px solid #444',
      boxShadow: 'inset 0 0 10px rgba(0, 0, 0, 0.3)',
    }}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(to bottom, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 50%, rgba(0,0,0,0.2) 100%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        animation: shouldAnimate ? 'spin 0.5s cubic-bezier(0.4, 0, 0.2, 1)' : 'none',
        transform: `translateY(-${currentIndex * 60}px)`,
      }}>
        {numbers.map((num, i) => (
          <div
            key={i}
            style={{
              height: '60px',
              width: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2.5rem',
              fontFamily: 'monospace',
              color: '#ddd',
              textShadow: '0 0 5px rgba(255,255,255,0.5)',
              background: i % 2 === 0 ? '#2a2a2a' : '#252525',
            }}
          >
            {num}
          </div>
        ))}
      </div>
    </div>
  );
};

const Clock_99 = () => {
  const [time, setTime] = useState(new Date());
  const [prevTime, setPrevTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setPrevTime(time);
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, [time]);

  const hours = time.getHours().toString().padStart(2, '0');
  const minutes = time.getMinutes().toString().padStart(2, '0');
  const seconds = time.getSeconds().toString().padStart(2, '0');

  const prevHours = prevTime.getHours().toString().padStart(2, '0');
  const prevMinutes = prevTime.getMinutes().toString().padStart(2, '0');
  const prevSeconds = prevTime.getSeconds().toString().padStart(2, '0');

  return (
    <div style={{
      position: 'relative',
      background: '#1a1a1a',
      padding: '3rem',
      borderRadius: '15px',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
      border: '2px solid #333',
      animation: 'mechanicalShake 0.1s linear infinite',
    }}>
      <style>{counterWheelAnimationKeyframes}</style>

      {/* Display panel */}
      <div style={{
        position: 'relative',
        background: '#222',
        padding: '30px',
        borderRadius: '10px',
        border: '1px solid #444',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px',
        boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.2)',
      }}>
        <div style={{ display: 'flex', gap: '4px' }}>
          <CounterWheel value={hours[0]} prevValue={prevHours[0]} />
          <CounterWheel value={hours[1]} prevValue={prevHours[1]} />
        </div>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          margin: '0 4px',
        }}>
          {[0, 1].map(i => (
            <div
              key={i}
              style={{
                width: '4px',
                height: '4px',
                background: '#666',
                borderRadius: '50%',
              }}
            />
          ))}
        </div>

        <div style={{ display: 'flex', gap: '4px' }}>
          <CounterWheel value={minutes[0]} prevValue={prevMinutes[0]} />
          <CounterWheel value={minutes[1]} prevValue={prevMinutes[1]} />
        </div>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          margin: '0 4px',
        }}>
          {[0, 1].map(i => (
            <div
              key={i}
              style={{
                width: '4px',
                height: '4px',
                background: '#666',
                borderRadius: '50%',
              }}
            />
          ))}
        </div>

        <div style={{ display: 'flex', gap: '4px' }}>
          <CounterWheel value={seconds[0]} prevValue={prevSeconds[0]} />
          <CounterWheel value={seconds[1]} prevValue={prevSeconds[1]} />
        </div>
      </div>

      {/* Model label */}
      <div style={{
        position: 'absolute',
        bottom: '15px',
        right: '20px',
        background: '#333',
        padding: '4px 8px',
        borderRadius: '4px',
        color: '#888',
        fontSize: '0.8rem',
        fontFamily: 'monospace',
        letterSpacing: '1px',
      }}>
        CNT-99
      </div>
    </div>
  );
};

export default Clock_99; 