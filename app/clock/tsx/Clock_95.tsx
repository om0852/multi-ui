'use client';
import React, { useEffect, useState } from 'react';

const segmentPatterns: { [key: string]: boolean[] } = {
  '0': [true, true, true, true, true, true, false],
  '1': [false, true, true, false, false, false, false],
  '2': [true, true, false, true, true, false, true],
  '3': [true, true, true, true, false, false, true],
  '4': [false, true, true, false, false, true, true],
  '5': [true, false, true, true, false, true, true],
  '6': [true, false, true, true, true, true, true],
  '7': [true, true, true, false, false, false, false],
  '8': [true, true, true, true, true, true, true],
  '9': [true, true, true, true, false, true, true],
};

const LCDDigit = ({ value }: { value: string }) => {
  const segments = segmentPatterns[value] || segmentPatterns['0'];
  const segmentStyles = {
    horizontal: {
      width: '30px',
      height: '5px',
      background: '#2b2b2b',
      position: 'absolute' as const,
      left: '50%',
      transform: 'translateX(-50%)',
    },
    vertical: {
      width: '5px',
      height: '25px',
      background: '#2b2b2b',
      position: 'absolute' as const,
    },
  };

  return (
    <div style={{
      position: 'relative',
      width: '40px',
      height: '60px',
      background: '#c0c2b9',
      borderRadius: '2px',
      boxShadow: 'inset 0 0 10px rgba(0, 0, 0, 0.1)',
    }}>
      {/* Top */}
      <div style={{
        ...segmentStyles.horizontal,
        top: '5px',
        opacity: segments[0] ? 1 : 0.1,
      }} />
      {/* Top Right */}
      <div style={{
        ...segmentStyles.vertical,
        top: '7px',
        right: '5px',
        opacity: segments[1] ? 1 : 0.1,
      }} />
      {/* Bottom Right */}
      <div style={{
        ...segmentStyles.vertical,
        bottom: '7px',
        right: '5px',
        opacity: segments[2] ? 1 : 0.1,
      }} />
      {/* Bottom */}
      <div style={{
        ...segmentStyles.horizontal,
        bottom: '5px',
        opacity: segments[3] ? 1 : 0.1,
      }} />
      {/* Bottom Left */}
      <div style={{
        ...segmentStyles.vertical,
        bottom: '7px',
        left: '5px',
        opacity: segments[4] ? 1 : 0.1,
      }} />
      {/* Top Left */}
      <div style={{
        ...segmentStyles.vertical,
        top: '7px',
        left: '5px',
        opacity: segments[5] ? 1 : 0.1,
      }} />
      {/* Middle */}
      <div style={{
        ...segmentStyles.horizontal,
        top: '50%',
        transform: 'translate(-50%, -50%)',
        opacity: segments[6] ? 1 : 0.1,
      }} />
    </div>
  );
};

const Clock_95 = () => {
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
      background: '#8b8c88',
      padding: '3rem',
      borderRadius: '15px',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
      border: '2px solid #6b6c68',
    }}>
      {/* Display panel */}
      <div style={{
        position: 'relative',
        background: '#c0c2b9',
        padding: '20px',
        borderRadius: '8px',
        border: '1px solid #a0a29a',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px',
        boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.1)',
      }}>
        <div style={{ display: 'flex', gap: '4px' }}>
          <LCDDigit value={hours[0]} />
          <LCDDigit value={hours[1]} />
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
                background: '#2b2b2b',
                borderRadius: '50%',
                opacity: time.getSeconds() % 2 === 0 ? 1 : 0.1,
              }}
            />
          ))}
        </div>

        <div style={{ display: 'flex', gap: '4px' }}>
          <LCDDigit value={minutes[0]} />
          <LCDDigit value={minutes[1]} />
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
                background: '#2b2b2b',
                borderRadius: '50%',
                opacity: time.getSeconds() % 2 === 0 ? 1 : 0.1,
              }}
            />
          ))}
        </div>

        <div style={{ display: 'flex', gap: '4px' }}>
          <LCDDigit value={seconds[0]} />
          <LCDDigit value={seconds[1]} />
        </div>
      </div>

      {/* Model label */}
      <div style={{
        position: 'absolute',
        bottom: '10px',
        right: '15px',
        background: '#a0a29a',
        padding: '2px 6px',
        borderRadius: '3px',
        color: '#2b2b2b',
        fontSize: '0.7rem',
        fontFamily: 'monospace',
        letterSpacing: '1px',
      }}>
        LCD-95
      </div>
    </div>
  );
};

export default Clock_95; 