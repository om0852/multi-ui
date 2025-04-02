'use client';
import React, { useState } from 'react';

const musicAnimation = `
  @keyframes equalizer {
    0% { height: 5px; }
    50% { height: 20px; }
    100% { height: 5px; }
  }

  @keyframes rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  @keyframes pulse {
    0%, 100% { transform: scale(1); opacity: 0.8; }
    50% { transform: scale(1.1); opacity: 1; }
  }
`;

const Collapsible_44: React.FC<{ title: string; children: React.ReactNode; defaultOpen?: boolean }> = ({
  title,
  children,
  defaultOpen = false,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsPlaying(!isPlaying);
  };

  return (
    <div style={{
      margin: '16px',
      background: 'linear-gradient(145deg, #1e1e1e, #2d2d2d)',
      borderRadius: '16px',
      overflow: 'hidden',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
    }}>
      <style>{musicAnimation}</style>

      <div
        onClick={() => setIsOpen(!isOpen)}
        style={{
          padding: '20px',
          cursor: 'pointer',
          position: 'relative',
        }}
      >
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
        }}>
          <div style={{
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            background: 'linear-gradient(45deg, #ff6b6b, #ffd93d)',
            animation: isPlaying ? 'rotate 4s linear infinite' : 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.5rem',
          }}>
            🎵
          </div>
          <div style={{ flex: 1 }}>
            <h3 style={{
              margin: 0,
              color: '#fff',
              fontSize: '1.1rem',
              fontWeight: 500,
            }}>
              {title}
            </h3>
            <div style={{
              color: '#888',
              fontSize: '0.9rem',
              marginTop: '4px',
            }}>
              Now Playing
            </div>
          </div>
          <button
            onClick={handlePlayClick}
            style={{
              background: 'none',
              border: 'none',
              color: '#fff',
              fontSize: '1.5rem',
              cursor: 'pointer',
              padding: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              animation: isPlaying ? 'pulse 2s infinite' : 'none',
            }}
          >
            {isPlaying ? '⏸️' : '▶️'}
          </button>
          <div style={{
            color: '#fff',
            transform: `rotate(${isOpen ? '180deg' : '0deg'})`,
            transition: 'transform 0.3s ease',
          }}>
            ▼
          </div>
        </div>

        {/* Audio visualizer */}
        <div style={{
          display: 'flex',
          gap: '3px',
          height: '20px',
          alignItems: 'flex-end',
          marginTop: '12px',
        }}>
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              style={{
                width: '4px',
                height: '5px',
                background: '#ff6b6b',
                animation: isPlaying ? `equalizer 0.${5 + i}s ease infinite` : 'none',
                animationDelay: `0.${i}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div style={{
        maxHeight: isOpen ? '500px' : '0',
        overflow: 'hidden',
        transition: 'all 0.3s ease',
      }}>
        <div style={{
          padding: '20px',
          color: '#fff',
          background: 'rgba(0, 0, 0, 0.2)',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        }}>
          <div style={{
            fontSize: '0.95rem',
            lineHeight: '1.6',
            color: '#ddd',
          }}>
            {children}
          </div>

          {/* Music controls */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            marginTop: '20px',
            color: '#888',
            fontSize: '1.2rem',
          }}>
            <span style={{ cursor: 'pointer' }}>⏮️</span>
            <span style={{ cursor: 'pointer' }}>🔀</span>
            <span style={{ cursor: 'pointer' }}>🔁</span>
            <span style={{ cursor: 'pointer' }}>⏭️</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collapsible_44; 