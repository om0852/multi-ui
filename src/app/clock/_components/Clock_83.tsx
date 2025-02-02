'use client';
import React, { useEffect, useState } from 'react';

const calculatorAnimationKeyframes = `
  @keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }
  @keyframes fadeOut {
    0% { opacity: 1; }
    100% { opacity: 0; }
  }
  @keyframes buttonPress {
    0% { transform: translateY(0); }
    50% { transform: translateY(2px); }
    100% { transform: translateY(0); }
  }
`;

// Seven-segment display patterns for digits 0-9
const segmentPatterns = {
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
} as const;

const LCDDigit = ({ value }: { value: string }) => {
  const segments = segmentPatterns[value as keyof typeof segmentPatterns];
  const [isChanging, setIsChanging] = useState(false);

  useEffect(() => {
    setIsChanging(true);
    const timer = setTimeout(() => setIsChanging(false), 100);
    return () => clearTimeout(timer);
  }, [value]);

  const segmentStyle = (active: boolean) => ({
    position: 'absolute' as const,
    background: active ? '#32ff32' : '#143214',
    boxShadow: active ? '0 0 10px #32ff32' : 'none',
    transition: 'all 0.1s ease-in-out',
    opacity: isChanging ? 0.8 : 1,
  });

  return (
    <div style={{
      position: 'relative',
      width: '60px',
      height: '100px',
      background: '#0a0a0a',
      border: '2px solid #222',
      borderRadius: '4px',
      padding: '4px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
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

      {/* Vertical segments - top left */}
      <div style={{
        ...segmentStyle(segments[1]),
        top: '12%',
        left: '10%',
        width: '6px',
        height: '35%',
      }} />
      {/* top right */}
      <div style={{
        ...segmentStyle(segments[2]),
        top: '12%',
        right: '10%',
        width: '6px',
        height: '35%',
      }} />
      {/* bottom left */}
      <div style={{
        ...segmentStyle(segments[4]),
        bottom: '12%',
        left: '10%',
        width: '6px',
        height: '35%',
      }} />
      {/* bottom right */}
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

const Clock_83 = () => {
  const [time, setTime] = useState(new Date());
  const [memoryIndicator, setMemoryIndicator] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
      // Randomly toggle memory indicator
      if (Math.random() < 0.1) {
        setMemoryIndicator(prev => !prev);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const hours = time.getHours().toString().padStart(2, '0');
  const minutes = time.getMinutes().toString().padStart(2, '0');
  const seconds = time.getSeconds().toString().padStart(2, '0');

  return (
    <div style={{
      position: 'relative',
      background: 'linear-gradient(45deg, #2a2a2a, #1a1a1a)',
      padding: '3rem',
      borderRadius: '15px',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)',
      border: '2px solid #333',
    }}>
      <style>{calculatorAnimationKeyframes}</style>

      {/* Calculator brand */}
      <div style={{
        position: 'absolute',
        top: '10px',
        left: '20px',
        color: '#666',
        fontSize: '0.8rem',
        fontFamily: 'Arial, sans-serif',
        letterSpacing: '1px',
      }}>
        CHRONOTRON-83
      </div>

      {/* Solar panel */}
      <div style={{
        position: 'absolute',
        top: '10px',
        right: '20px',
        width: '100px',
        height: '20px',
        background: '#111',
        borderRadius: '2px',
        display: 'flex',
        overflow: 'hidden',
      }}>
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            style={{
              flex: 1,
              background: 'linear-gradient(90deg, #1a1a1a 0%, #222 50%, #1a1a1a 100%)',
              margin: '1px',
            }}
          />
        ))}
      </div>

      {/* LCD screen */}
      <div style={{
        position: 'relative',
        background: '#0a0a0a',
        padding: '20px',
        borderRadius: '8px',
        marginTop: '20px',
        border: '1px solid #222',
        boxShadow: 'inset 0 0 20px rgba(0, 0, 0, 0.5)',
      }}>
        {/* Memory indicator */}
        <div style={{
          position: 'absolute',
          top: '10px',
          left: '10px',
          color: memoryIndicator ? '#32ff32' : '#143214',
          fontSize: '0.7rem',
          fontFamily: 'monospace',
          transition: 'color 0.2s ease-in-out',
        }}>
          M
        </div>

        {/* Main display */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '10px',
        }}>
          <div style={{ display: 'flex', gap: '4px' }}>
            <LCDDigit value={hours[0]} />
            <LCDDigit value={hours[1]} />
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
                  width: '6px',
                  height: '6px',
                  background: '#32ff32',
                  borderRadius: '50%',
                  boxShadow: '0 0 5px #32ff32',
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
            gap: '30px',
          }}>
            {[0, 1].map(i => (
              <div
                key={i}
                style={{
                  width: '6px',
                  height: '6px',
                  background: '#32ff32',
                  borderRadius: '50%',
                  boxShadow: '0 0 5px #32ff32',
                }}
              />
            ))}
          </div>

          <div style={{ display: 'flex', gap: '4px' }}>
            <LCDDigit value={seconds[0]} />
            <LCDDigit value={seconds[1]} />
          </div>
        </div>
      </div>

      {/* Calculator buttons */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '8px',
        marginTop: '20px',
      }}>
        {['MC', 'MR', 'M+', 'M-', '7', '8', '9', '÷', '4', '5', '6', '×', '1', '2', '3', '-', '0', '.', '=', '+'].map((btn, i) => (
          <div
            key={i}
            style={{
              background: '#222',
              color: '#666',
              padding: '10px',
              borderRadius: '4px',
              textAlign: 'center',
              fontSize: '0.9rem',
              fontFamily: 'Arial, sans-serif',
              cursor: 'pointer',
              userSelect: 'none',
              boxShadow: 'inset 0 0 10px rgba(0, 0, 0, 0.3)',
              border: '1px solid #333',
              transition: 'transform 0.1s ease-in-out',
            }}
            onClick={() => {
              const button = document.activeElement as HTMLElement;
              button.style.transform = 'translateY(2px)';
              setTimeout(() => {
                button.style.transform = 'translateY(0)';
              }, 100);
            }}
          >
            {btn}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clock_83; 