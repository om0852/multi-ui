'use client';
import React, { useState, useRef } from 'react';

const brutalistAnimationKeyframes = `
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

  @keyframes noise {
    0%, 100% { transform: translate(0, 0); }
    10% { transform: translate(-1px, 1px); }
    20% { transform: translate(1px, -1px); }
    30% { transform: translate(-2px, 2px); }
    40% { transform: translate(2px, -2px); }
    50% { transform: translate(-1px, 2px); }
    60% { transform: translate(1px, -2px); }
    70% { transform: translate(-2px, 1px); }
    80% { transform: translate(2px, -1px); }
    90% { transform: translate(-1px, -1px); }
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

interface CollapsibleProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

const Collapsible_8: React.FC<CollapsibleProps> = ({
  title,
  children,
  defaultOpen = false,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const contentRef = useRef<HTMLDivElement>(null);

  const toggleCollapsible = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div style={{
      margin: '16px',
      background: '#000000',
      border: '3px solid #00ff00',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <style>{brutalistAnimationKeyframes}</style>

      {/* Scanline effect */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '2px',
        background: 'rgba(0, 255, 0, 0.2)',
        animation: 'scanline 2s linear infinite',
        zIndex: 1,
        pointerEvents: 'none',
      }} />

      {/* Header */}
      <div
        onClick={toggleCollapsible}
        style={{
          padding: '16px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          cursor: 'pointer',
          background: '#000000',
          borderBottom: '3px solid #00ff00',
          position: 'relative',
        }}
      >
        <h3 style={{
          margin: 0,
          fontSize: '1.2rem',
          fontWeight: 700,
          color: '#00ff00',
          textTransform: 'uppercase',
          letterSpacing: '2px',
          animation: isOpen ? 'noise 0.3s infinite' : 'none',
          fontFamily: 'monospace',
        }}>
          {title}
          <span style={{
            position: 'absolute',
            top: 0,
            left: 0,
            color: '#ff0000',
            clipPath: 'inset(0 0 0 0)',
            animation: isOpen ? 'glitch 0.3s infinite' : 'none',
            opacity: 0.5,
          }}>
            {title}
          </span>
        </h3>
        <div style={{
          fontSize: '24px',
          color: '#00ff00',
          transform: `rotate(${isOpen ? '45deg' : '0deg'})`,
          transition: 'transform 0.3s ease',
          fontFamily: 'monospace',
        }}>
          +
        </div>
      </div>

      {/* Content */}
      <div
        ref={contentRef}
        style={{
          padding: isOpen ? '16px' : '0 16px',
          maxHeight: isOpen ? 'none' : '0',
          height: isOpen ? 'auto' : '0',
          opacity: isOpen ? 1 : 0,
          overflow: 'hidden',
          color: '#00ff00',
          background: '#000000',
          fontFamily: 'monospace',
          lineHeight: 1.6,
          position: 'relative',
          transition: 'all 0.3s ease',
        }}
      >
        <div style={{
          position: 'relative',
          zIndex: 2,
        }}>
          {children}
        </div>
        {/* Noise texture */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyBAMAAADsEZWCAAAAGFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVfJ92AAAACHRSTlMAzN3u7/7///+AJRShAAAAS0lEQVQ4y2NgQAX8DIxg6sTAwMgPpFgYGBj5gRSDEAOjAJBiEmJgFARSTEIMjEJAilmIgVEYSLEKMTCKAClWBkYRAaDNrEBb2ZEAAO8iBBL5MPtiAAAAAElFTkSuQmCC")',
          opacity: 0.05,
          animation: 'noise 0.2s infinite',
          pointerEvents: 'none',
          zIndex: 1,
        }} />
      </div>
    </div>
  );
};

export default Collapsible_8; 