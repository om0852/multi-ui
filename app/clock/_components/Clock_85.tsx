'use client';
import React, { useEffect, useState } from 'react';

const vfdAnimationKeyframes = `
  @keyframes phosphorGlow {
    0%, 100% { opacity: 1; filter: brightness(1); }
    50% { opacity: 0.8; filter: brightness(0.8); }
  }
  @keyframes segmentFlicker {
    0%, 100% { opacity: 1; }
    95% { opacity: 1; }
    96% { opacity: 0.4; }
    97% { opacity: 1; }
    98% { opacity: 0.4; }
    99% { opacity: 1; }
  }
  @keyframes tubeNoise {
    0%, 100% { background-position: 0% 0%; }
    50% { background-position: 100% 100%; }
  }
`;

// VFD segment patterns for digits 0-9
const segmentPatterns: { [key: string]: boolean[] } = {
  '0': [true, true, true, false, true, true, true],
  '1': [false, false, true, false, false, true, false],
  '2': [true, false, true, true, true, false, true],
  '3': [true, false, true, true, false, true, true],
  '4': [false, true, true, true, false, true, false],
  '5': [true, true, false, true, false, true, true],
  '6': [true, true, false, true, true, true, true],
  '7': [true, false, true, false, false, true, false],
  '8': [true, true, true, true, true, true, true],
  '9': [true, true, true, true, false, true, true],
};

const VFDDigit = ({ value }: { value: string }) => {
  const segments = segmentPatterns[value] || segmentPatterns['0']; // Fallback to '0' if value is invalid
  const [isChanging, setIsChanging] = useState(false);

  useEffect(() => {
    setIsChanging(true);
    const timer = setTimeout(() => setIsChanging(false), 100);
    return () => clearTimeout(timer);
  }, [value]);

  const segmentStyle = (active: boolean) => ({
    position: 'absolute' as const,
    background: active ? '#4dffd2' : '#1a3330',
    boxShadow: active ? '0 0 10px #4dffd2, 0 0 20px #4dffd2' : 'none',
    transition: 'all 0.1s ease-in-out',
    opacity: isChanging ? 0.8 : 1,
    animation: active ? 'phosphorGlow 2s ease-in-out infinite, segmentFlicker 10s linear infinite' : 'none',
  });

  return (
    <div style={{
      position: 'relative',
      width: '60px',
      height: '100px',
      background: '#000',
      border: '2px solid #333',
      borderRadius: '4px',
      padding: '4px',
      overflow: 'hidden',
    }}>
      {/* Tube noise effect */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(circle at 50% 50%, rgba(77, 255, 210, 0.1) 0%, transparent 80%)',
        opacity: 0.2,
        animation: 'tubeNoise 4s linear infinite',
        pointerEvents: 'none',
      }} />

      {/* Horizontal segments */}
      <div style={{
        ...segmentStyle(segments[0]),
        top: '10%',
        left: '20%',
        width: '60%',
        height: '6px',
      }} />
      <div style={{
        ...segmentStyle(segments[3]),
        top: '47%',
        left: '20%',
        width: '60%',
        height: '6px',
      }} />
      <div style={{
        ...segmentStyle(segments[6]),
        bottom: '10%',
        left: '20%',
        width: '60%',
        height: '6px',
      }} />

      {/* Vertical segments */}
      <div style={{
        ...segmentStyle(segments[1]),
        top: '12%',
        left: '10%',
        width: '6px',
        height: '35%',
      }} />
      <div style={{
        ...segmentStyle(segments[2]),
        top: '12%',
        right: '10%',
        width: '6px',
        height: '35%',
      }} />
      <div style={{
        ...segmentStyle(segments[4]),
        bottom: '12%',
        left: '10%',
        width: '6px',
        height: '35%',
      }} />
      <div style={{
        ...segmentStyle(segments[5]),
        bottom: '12%',
        right: '10%',
        width: '6px',
        height: '35%',
      }} />
    </div>
  );
};

const Clock_85 = () => {
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
      background: '#111',
      padding: '3rem',
      borderRadius: '20px',
      boxShadow: '0 10px 30px rgba(77, 255, 210, 0.1)',
      border: '4px solid #222',
      overflow: 'hidden',
    }}>
      <style>{vfdAnimationKeyframes}</style>

      {/* Glass reflection */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, transparent 100%)',
        pointerEvents: 'none',
      }} />

      {/* Display frame */}
      <div style={{
        position: 'relative',
        background: '#000',
        padding: '20px',
        borderRadius: '10px',
        border: '2px solid #222',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '20px',
      }}>
        <div style={{ display: 'flex', gap: '10px' }}>
          <VFDDigit value={hours[0]} />
          <VFDDigit value={hours[1]} />
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
                background: time.getSeconds() % 2 === 0 ? '#4dffd2' : '#1a3330',
                borderRadius: '50%',
                boxShadow: time.getSeconds() % 2 === 0
                  ? '0 0 10px #4dffd2, 0 0 20px #4dffd2'
                  : 'none',
                transition: 'all 0.1s ease-in-out',
                animation: time.getSeconds() % 2 === 0
                  ? 'phosphorGlow 2s ease-in-out infinite'
                  : 'none',
              }}
            />
          ))}
        </div>

        <div style={{ display: 'flex', gap: '10px' }}>
          <VFDDigit value={minutes[0]} />
          <VFDDigit value={minutes[1]} />
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
                background: time.getSeconds() % 2 === 0 ? '#4dffd2' : '#1a3330',
                borderRadius: '50%',
                boxShadow: time.getSeconds() % 2 === 0
                  ? '0 0 10px #4dffd2, 0 0 20px #4dffd2'
                  : 'none',
                transition: 'all 0.1s ease-in-out',
                animation: time.getSeconds() % 2 === 0
                  ? 'phosphorGlow 2s ease-in-out infinite'
                  : 'none',
              }}
            />
          ))}
        </div>

        <div style={{ display: 'flex', gap: '10px' }}>
          <VFDDigit value={seconds[0]} />
          <VFDDigit value={seconds[1]} />
        </div>
      </div>

      {/* Vintage brand label */}
      <div style={{
        position: 'absolute',
        bottom: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        color: '#4dffd2',
        fontSize: '0.8rem',
        fontFamily: 'monospace',
        letterSpacing: '2px',
        textShadow: '0 0 10px #4dffd2',
        animation: 'phosphorGlow 2s ease-in-out infinite',
      }}>
        VACUUM-TRON VFD-85
      </div>

      {/* Decorative vents */}
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            width: '30px',
            height: '4px',
            background: '#222',
            borderRadius: '2px',
            ...(i < 3
              ? { top: '20px', left: `${20 + i * 40}px` }
              : { bottom: '20px', right: `${20 + (i - 3) * 40}px` }),
          }}
        />
      ))}
    </div>
  );
};

export default Clock_85;