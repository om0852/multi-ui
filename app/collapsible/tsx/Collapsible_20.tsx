'use client';
import React, { useState } from 'react';

const hologramAnimation = `
  @keyframes scanline {
    0% {
      transform: translateY(-100%);
    }
    100% {
      transform: translateY(100%);
    }
  }
  @keyframes glow {
    0%, 100% {
      box-shadow: 0 0 10px rgba(0, 195, 255, 0.5),
                  inset 0 0 5px rgba(0, 195, 255, 0.2);
    }
    50% {
      box-shadow: 0 0 20px rgba(0, 195, 255, 0.7),
                  inset 0 0 10px rgba(0, 195, 255, 0.3);
    }
  }
`;

const Collapsible_20: React.FC<{ title: string; children: React.ReactNode; defaultOpen?: boolean }> = ({
  title,
  children,
  defaultOpen = false,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div style={{
      margin: '16px',
      background: 'linear-gradient(145deg, #1a1a2e, #16213e)',
      borderRadius: '4px',
      border: '1px solid #00c3ff',
      position: 'relative',
      animation: 'glow 2s ease-in-out infinite',
      overflow: 'hidden',
    }}>
      <style>{hologramAnimation}</style>
      
      {/* Scanline effect */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '2px',
        background: 'linear-gradient(to right, transparent, #00c3ff, transparent)',
        animation: 'scanline 2s linear infinite',
        opacity: 0.5,
        zIndex: 1,
      }} />

      <div
        onClick={() => setIsOpen(!isOpen)}
        style={{
          padding: '16px 24px',
          cursor: 'pointer',
          background: isOpen ? 'rgba(0, 195, 255, 0.1)' : 'transparent',
          borderBottom: '1px solid rgba(0, 195, 255, 0.3)',
          position: 'relative',
          zIndex: 2,
        }}
      >
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <h3 style={{
            margin: 0,
            color: '#00c3ff',
            fontSize: '1.1rem',
            fontFamily: 'monospace',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            textShadow: '0 0 5px rgba(0, 195, 255, 0.5)',
          }}>
            &lt;{title}&gt;
          </h3>
          <div style={{
            width: '20px',
            height: '20px',
            transform: `rotate(${isOpen ? '180deg' : '0deg'})`,
            transition: 'transform 0.3s ease',
            position: 'relative',
          }}>
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '0',
              height: '0',
              borderLeft: '6px solid transparent',
              borderRight: '6px solid transparent',
              borderTop: '6px solid #00c3ff',
              filter: 'drop-shadow(0 0 2px #00c3ff)',
            }} />
          </div>
        </div>
      </div>

      <div style={{
        padding: isOpen ? '16px 24px' : '0 24px',
        maxHeight: isOpen ? '500px' : '0',
        overflow: 'hidden',
        transition: 'all 0.3s ease',
        color: '#7fdbff',
        position: 'relative',
        zIndex: 2,
      }}>
        <div style={{
          fontFamily: 'monospace',
          fontSize: '0.9rem',
          lineHeight: '1.6',
        }}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Collapsible_20; 