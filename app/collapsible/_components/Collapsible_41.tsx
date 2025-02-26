'use client';
import React, { useState } from 'react';

const arcadeAnimation = `
  @keyframes neonPulse {
    0%, 100% {
      text-shadow: 0 0 7px #fff,
                 0 0 10px #fff,
                 0 0 21px #fff,
                 0 0 42px #0fa,
                 0 0 82px #0fa,
                 0 0 92px #0fa,
                 0 0 102px #0fa,
                 0 0 151px #0fa;
    }
    50% {
      text-shadow: 0 0 4px #fff,
                 0 0 7px #fff,
                 0 0 18px #fff,
                 0 0 38px #0fa,
                 0 0 73px #0fa,
                 0 0 80px #0fa,
                 0 0 94px #0fa,
                 0 0 140px #0fa;
    }
  }

  @keyframes pixelate {
    0% { transform: scale(1); }
    50% { transform: scale(1.02); }
    100% { transform: scale(1); }
  }
`;

const Collapsible_41: React.FC<{ title: string; children: React.ReactNode; defaultOpen?: boolean }> = ({
  title,
  children,
  defaultOpen = false,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const [score, setScore] = useState(0);

  const handleScoreClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setScore(prev => prev + 100);
  };

  return (
    <div style={{
      margin: '16px',
      background: '#1a1a2e',
      border: '4px solid #30305a',
      borderRadius: '4px',
      boxShadow: '0 0 20px rgba(0, 255, 170, 0.3)',
      overflow: 'hidden',
      fontFamily: '"Press Start 2P", monospace',
    }}>
      <style>{arcadeAnimation}</style>

      <div
        onClick={() => setIsOpen(!isOpen)}
        style={{
          padding: '16px',
          cursor: 'pointer',
          background: '#30305a',
          borderBottom: '4px solid #1a1a2e',
          position: 'relative',
        }}
      >
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <h3 style={{
            margin: 0,
            color: '#0fa',
            fontSize: '1rem',
            animation: 'neonPulse 1.5s infinite',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}>
            <span style={{
              animation: 'pixelate 2s infinite',
            }}>
              👾
            </span>
            {title}
          </h3>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}>
            <div
              onClick={handleScoreClick}
              style={{
                color: '#ffd700',
                fontSize: '0.8rem',
                cursor: 'pointer',
              }}
            >
              SCORE: {score}
            </div>
            <div style={{
              color: '#0fa',
              transform: `rotate(${isOpen ? '180deg' : '0deg'})`,
              transition: 'transform 0.3s ease',
            }}>
              ▼
            </div>
          </div>
        </div>
      </div>

      <div style={{
        maxHeight: isOpen ? '500px' : '0',
        overflow: 'hidden',
        transition: 'all 0.3s ease',
      }}>
        <div style={{
          padding: '20px',
          color: '#0fa',
          fontSize: '0.8rem',
          lineHeight: '1.8',
          background: `
            repeating-linear-gradient(
              0deg,
              #1a1a2e,
              #1a1a2e 2px,
              #1d1d35 2px,
              #1d1d35 4px
            )
          `,
        }}>
          <div style={{
            position: 'relative',
            zIndex: 1,
          }}>
            {children}
          </div>

          {/* Decorative elements */}
          <div style={{
            position: 'absolute',
            bottom: '10px',
            right: '10px',
            fontSize: '1.2rem',
            opacity: 0.3,
          }}>
            🕹️
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collapsible_41; 