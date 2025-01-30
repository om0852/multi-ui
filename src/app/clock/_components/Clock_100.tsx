'use client';
import React, { useEffect, useState } from 'react';

const segmentAnimationKeyframes = `
  @keyframes segmentFlip {
    0% { transform: rotateX(0deg); }
    100% { transform: rotateX(180deg); }
  }
  @keyframes mechanicalNoise {
    0%, 100% { transform: translate(0, 0); }
    25% { transform: translate(-0.5px, 0.5px); }
    50% { transform: translate(0.5px, -0.5px); }
    75% { transform: translate(-0.5px, -0.5px); }
  }
`;

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

const SplitSegmentDigit = ({ value, prevValue }: { value: string; prevValue: string }) => {
  const segments = segmentPatterns[value] || segmentPatterns['0'];
  const prevSegments = segmentPatterns[prevValue] || segmentPatterns['0'];
  const shouldAnimate = value !== prevValue;

  const segmentStyles = {
    horizontal: {
      width: '40px',
      height: '10px',
      position: 'absolute' as const,
      left: '10px',
      background: '#444',
      borderRadius: '5px',
      perspective: '100px',
      transformStyle: 'preserve-3d' as const,
    },
    vertical: {
      width: '10px',
      height: '40px',
      position: 'absolute' as const,
      background: '#444',
      borderRadius: '5px',
      perspective: '100px',
      transformStyle: 'preserve-3d' as const,
    },
  };

  return (
    <div style={{
      position: 'relative',
      width: '60px',
      height: '100px',
      background: '#222',
      borderRadius: '8px',
      border: '2px solid #444',
      boxShadow: 'inset 0 0 10px rgba(0, 0, 0, 0.3)',
    }}>
      {/* Top */}
      <div style={{
        ...segmentStyles.horizontal,
        top: '10px',
        transform: segments[0] ? 'rotateX(0deg)' : 'rotateX(180deg)',
        animation: shouldAnimate && segments[0] !== prevSegments[0] ? 'segmentFlip 0.3s ease-in-out' : 'none',
        background: segments[0] ? '#ff4444' : '#444',
        boxShadow: segments[0] ? '0 0 10px #ff4444' : 'none',
      }} />
      {/* Top Right */}
      <div style={{
        ...segmentStyles.vertical,
        top: '15px',
        right: '10px',
        transform: segments[1] ? 'rotateY(0deg)' : 'rotateY(180deg)',
        animation: shouldAnimate && segments[1] !== prevSegments[1] ? 'segmentFlip 0.3s ease-in-out' : 'none',
        background: segments[1] ? '#ff4444' : '#444',
        boxShadow: segments[1] ? '0 0 10px #ff4444' : 'none',
      }} />
      {/* Bottom Right */}
      <div style={{
        ...segmentStyles.vertical,
        bottom: '15px',
        right: '10px',
        transform: segments[2] ? 'rotateY(0deg)' : 'rotateY(180deg)',
        animation: shouldAnimate && segments[2] !== prevSegments[2] ? 'segmentFlip 0.3s ease-in-out' : 'none',
        background: segments[2] ? '#ff4444' : '#444',
        boxShadow: segments[2] ? '0 0 10px #ff4444' : 'none',
      }} />
      {/* Bottom */}
      <div style={{
        ...segmentStyles.horizontal,
        bottom: '10px',
        transform: segments[3] ? 'rotateX(0deg)' : 'rotateX(180deg)',
        animation: shouldAnimate && segments[3] !== prevSegments[3] ? 'segmentFlip 0.3s ease-in-out' : 'none',
        background: segments[3] ? '#ff4444' : '#444',
        boxShadow: segments[3] ? '0 0 10px #ff4444' : 'none',
      }} />
      {/* Bottom Left */}
      <div style={{
        ...segmentStyles.vertical,
        bottom: '15px',
        left: '10px',
        transform: segments[4] ? 'rotateY(0deg)' : 'rotateY(180deg)',
        animation: shouldAnimate && segments[4] !== prevSegments[4] ? 'segmentFlip 0.3s ease-in-out' : 'none',
        background: segments[4] ? '#ff4444' : '#444',
        boxShadow: segments[4] ? '0 0 10px #ff4444' : 'none',
      }} />
      {/* Top Left */}
      <div style={{
        ...segmentStyles.vertical,
        top: '15px',
        left: '10px',
        transform: segments[5] ? 'rotateY(0deg)' : 'rotateY(180deg)',
        animation: shouldAnimate && segments[5] !== prevSegments[5] ? 'segmentFlip 0.3s ease-in-out' : 'none',
        background: segments[5] ? '#ff4444' : '#444',
        boxShadow: segments[5] ? '0 0 10px #ff4444' : 'none',
      }} />
      {/* Middle */}
      <div style={{
        ...segmentStyles.horizontal,
        top: '45px',
        transform: segments[6] ? 'rotateX(0deg)' : 'rotateX(180deg)',
        animation: shouldAnimate && segments[6] !== prevSegments[6] ? 'segmentFlip 0.3s ease-in-out' : 'none',
        background: segments[6] ? '#ff4444' : '#444',
        boxShadow: segments[6] ? '0 0 10px #ff4444' : 'none',
      }} />
    </div>
  );
};

const Clock_100 = () => {
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
      animation: 'mechanicalNoise 0.1s linear infinite',
    }}>
      <style>{segmentAnimationKeyframes}</style>

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
        gap: '15px',
        boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.2)',
      }}>
        <div style={{ display: 'flex', gap: '8px' }}>
          <SplitSegmentDigit value={hours[0]} prevValue={prevHours[0]} />
          <SplitSegmentDigit value={hours[1]} prevValue={prevHours[1]} />
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
                background: '#ff4444',
                borderRadius: '50%',
                opacity: time.getSeconds() % 2 === 0 ? 1 : 0.2,
                boxShadow: time.getSeconds() % 2 === 0 ? '0 0 10px #ff4444' : 'none',
                transition: 'all 0.1s ease-in-out',
              }}
            />
          ))}
        </div>

        <div style={{ display: 'flex', gap: '8px' }}>
          <SplitSegmentDigit value={minutes[0]} prevValue={prevMinutes[0]} />
          <SplitSegmentDigit value={minutes[1]} prevValue={prevMinutes[1]} />
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
                background: '#ff4444',
                borderRadius: '50%',
                opacity: time.getSeconds() % 2 === 0 ? 1 : 0.2,
                boxShadow: time.getSeconds() % 2 === 0 ? '0 0 10px #ff4444' : 'none',
                transition: 'all 0.1s ease-in-out',
              }}
            />
          ))}
        </div>

        <div style={{ display: 'flex', gap: '8px' }}>
          <SplitSegmentDigit value={seconds[0]} prevValue={prevSeconds[0]} />
          <SplitSegmentDigit value={seconds[1]} prevValue={prevSeconds[1]} />
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
        SEG-100
      </div>
    </div>
  );
};

export default Clock_100; 