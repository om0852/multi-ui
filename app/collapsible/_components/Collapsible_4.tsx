'use client';
import React, { useState, useRef, useEffect } from 'react';

const terminalAnimationKeyframes = `
  @keyframes scanline {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(100%);
    }
  }

  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }

  @keyframes typeIn {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }
`;

interface CollapsibleProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

const Collapsible_4: React.FC<CollapsibleProps> = ({
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
      background: '#0C0C0C',
      borderRadius: '8px',
      margin: '16px',
      overflow: 'hidden',
      border: '2px solid #00FF00',
      boxShadow: '0 0 10px rgba(0, 255, 0, 0.3)',
      fontFamily: 'monospace',
      position: 'relative',
    }}>
      <style>{terminalAnimationKeyframes}</style>

      {/* Scanline effect */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '2px',
        background: 'rgba(0, 255, 0, 0.1)',
        animation: 'scanline 2s linear infinite',
        pointerEvents: 'none',
      }} />

      {/* Header */}
      <div
        onClick={toggleCollapsible}
        style={{
          padding: '16px 24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          cursor: 'pointer',
          background: '#0C0C0C',
          borderBottom: '1px solid #00FF00',
          color: '#00FF00',
        }}
      >
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
        }}>
          <span style={{
            animation: 'blink 1s step-end infinite',
          }}>
            &gt;
          </span>
          <h3 style={{
            margin: 0,
            fontSize: '1.1rem',
            fontWeight: 500,
            animation: 'typeIn 1s steps(40, end)',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
          }}>
            {title}
          </h3>
        </div>
        <div style={{
          fontSize: '1.2rem',
          transform: isOpen ? 'rotate(90deg)' : 'rotate(0)',
          transition: 'transform 0.3s ease',
        }}>
          &gt;
        </div>
      </div>

      {/* Content */}
      <div
        ref={contentRef}
        style={{
          padding: isOpen ? '16px 24px' : '0 24px',
          maxHeight: isOpen ? 'none' : '0',
          height: isOpen ? 'auto' : '0',
          opacity: isOpen ? 1 : 0,
          overflow: 'hidden',
          transition: 'all 0.3s ease',
          background: '#0C0C0C',
          color: '#00FF00',
          lineHeight: 1.6,
          position: 'relative',
        }}
      >
        <div style={{
          animation: isOpen ? 'typeIn 0.5s steps(40, end)' : 'none',
          whiteSpace: 'pre-wrap',
          wordBreak: 'break-word',
        }}>
          {children}
        </div>
      </div>

      {/* Terminal prompt */}
      <div style={{
        padding: '8px 24px',
        color: '#00FF00',
        borderTop: isOpen ? '1px solid #00FF00' : 'none',
        opacity: isOpen ? 1 : 0,
        transition: 'opacity 0.3s ease',
      }}>
        <span style={{ animation: 'blink 1s step-end infinite' }}>_</span>
      </div>
    </div>
  );
};

export default Collapsible_4; 