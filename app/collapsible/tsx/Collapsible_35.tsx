'use client';
import React, { useState } from 'react';

const cyberpunkAnimation = `
  @keyframes glitch {
    0% {
      clip-path: inset(40% 0 61% 0);
      transform: translate(-2px, 2px);
    }
    20% {
      clip-path: inset(92% 0 1% 0);
      transform: translate(1px, -3px);
    }
    40% {
      clip-path: inset(43% 0 1% 0);
      transform: translate(-1px, 3px);
    }
    60% {
      clip-path: inset(25% 0 58% 0);
      transform: translate(3px, 1px);
    }
    80% {
      clip-path: inset(54% 0 7% 0);
      transform: translate(-3px, -2px);
    }
    100% {
      clip-path: inset(58% 0 43% 0);
      transform: translate(2px, 2px);
    }
  }

  @keyframes scanline {
    0% {
      transform: translateY(-100%);
    }
    100% {
      transform: translateY(100%);
    }
  }
`;

const Collapsible_35: React.FC<{ title: string; children: React.ReactNode; defaultOpen?: boolean }> = ({
  title,
  children,
  defaultOpen = false,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div style={{
      margin: '16px',
      background: '#0a0a0f',
      border: '1px solid #ff00ff',
      boxShadow: '0 0 10px rgba(255, 0, 255, 0.5), inset 0 0 20px rgba(255, 0, 255, 0.2)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <style>{cyberpunkAnimation}</style>

      {/* Scanline effect */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '2px',
        background: 'linear-gradient(90deg, transparent, #0ff, transparent)',
        opacity: 0.5,
        animation: 'scanline 2s linear infinite',
        zIndex: 1,
      }} />

      <div
        onClick={() => setIsOpen(!isOpen)}
        style={{
          padding: '16px 24px',
          cursor: 'pointer',
          background: 'linear-gradient(90deg, #0a0a0f, #1a1a2f)',
          borderBottom: '1px solid #ff00ff',
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
            color: '#0ff',
            fontSize: '1.2rem',
            fontFamily: '"Courier New", monospace',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            textShadow: '0 0 5px #0ff',
            position: 'relative',
          }}>
            <span style={{
              position: 'absolute',
              top: 0,
              left: 0,
              color: '#ff00ff',
              clipPath: 'inset(0 0 0 0)',
              animation: 'glitch 3s infinite linear alternate-reverse',
              width: '100%',
            }}>
              {title}
            </span>
            {title}
          </h3>
          <div style={{
            color: '#0ff',
            fontFamily: 'monospace',
            transform: `rotate(${isOpen ? '180deg' : '0deg'})`,
            transition: 'transform 0.3s ease',
            textShadow: '0 0 5px #0ff',
          }}>
            ▼
          </div>
        </div>
      </div>

      <div style={{
        maxHeight: isOpen ? '500px' : '0',
        overflow: 'hidden',
        transition: 'all 0.3s ease',
        background: 'rgba(10, 10, 15, 0.9)',
      }}>
        <div style={{
          padding: '20px 24px',
          color: '#fff',
          fontFamily: '"Courier New", monospace',
          fontSize: '0.9rem',
          lineHeight: '1.6',
          position: 'relative',
          textShadow: '0 0 2px #fff',
        }}>
          {children}
          
          {/* Decorative elements */}
          <div style={{
            position: 'absolute',
            bottom: '10px',
            right: '10px',
            fontSize: '0.8rem',
            color: '#ff00ff',
            opacity: 0.5,
          }}>
            &lt;/&gt;
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collapsible_35; 