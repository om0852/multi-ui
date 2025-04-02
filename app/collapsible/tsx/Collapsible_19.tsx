'use client';
import React, { useState, useRef } from 'react';

const tvAnimationKeyframes = `
  @keyframes static {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: 100% 100%;
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

  @keyframes flicker {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.95;
    }
  }

  @keyframes channelSwitch {
    0% {
      transform: scale(1.1);
      filter: brightness(2);
    }
    50% {
      transform: scale(0.9);
      filter: brightness(0.5);
    }
    100% {
      transform: scale(1);
      filter: brightness(1);
    }
  }
`;

interface CollapsibleProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

const Collapsible_19: React.FC<CollapsibleProps> = ({
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
      background: '#2a2a2a',
      border: '20px solid #4a4a4a',
      borderRadius: '20px',
      position: 'relative',
      overflow: 'hidden',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3), inset 0 0 30px rgba(0, 0, 0, 0.5)',
    }}>
      <style>{tvAnimationKeyframes}</style>

      {/* TV static effect */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyBAMAAADsEZWCAAAAGFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVfJ92AAAACHRSTlMAzN3u7/7///+AJRShAAAAS0lEQVQ4y2NgQAX8DIxg6sTAwMgPpFgYGBj5gRSDEAOjAJBiEmJgFARSTEIMjEJAilmIgVEYSLEKMTCKAClWBkYRAaDNrEBb2ZEAAO8iBBL5MPtiAAAAAElFTkSuQmCC")`,
        opacity: 0.1,
        animation: 'static 0.5s steps(4) infinite',
        pointerEvents: 'none',
      }} />

      {/* Header */}
      <div
        onClick={toggleCollapsible}
        style={{
          padding: '16px 24px',
          cursor: 'pointer',
          background: 'rgba(0, 0, 0, 0.8)',
          borderBottom: '4px solid #4a4a4a',
          position: 'relative',
          animation: 'flicker 2s linear infinite',
        }}
      >
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}>
            <div style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              background: isOpen ? '#32cd32' : '#ff4444',
              boxShadow: isOpen 
                ? '0 0 10px #32cd32, 0 0 20px #32cd32'
                : '0 0 10px #ff4444, 0 0 20px #ff4444',
            }} />
            <h3 style={{
              margin: 0,
              fontSize: '1.2rem',
              fontWeight: 700,
              color: '#fff',
              fontFamily: 'VT323, monospace',
              letterSpacing: '2px',
              textShadow: '2px 2px 0 #000',
            }}>
              {title}
            </h3>
          </div>
          <div style={{
            color: '#fff',
            fontSize: '1rem',
            fontFamily: 'VT323, monospace',
          }}>
            CH-19
          </div>
        </div>

        {/* Scanline */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '2px',
          background: 'linear-gradient(to right, transparent, rgba(255, 255, 255, 0.2), transparent)',
          animation: 'scanline 2s linear infinite',
          pointerEvents: 'none',
        }} />
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
          color: '#fff',
          position: 'relative',
          transition: 'all 0.3s ease',
          animation: isOpen ? 'channelSwitch 0.3s ease-out' : 'none',
          background: 'rgba(0, 0, 0, 0.8)',
        }}
      >
        <div style={{
          position: 'relative',
          zIndex: 2,
          fontFamily: 'VT323, monospace',
          fontSize: '1.1rem',
          lineHeight: '1.6',
          textShadow: '1px 1px 0 #000',
        }}>
          {children}
        </div>

        {/* TV info */}
        <div style={{
          position: 'absolute',
          bottom: '8px',
          right: '16px',
          fontSize: '0.8rem',
          color: 'rgba(255, 255, 255, 0.5)',
          fontFamily: 'VT323, monospace',
        }}>
          SIGNAL: NTSC • 480i
        </div>
      </div>
    </div>
  );
};

export default Collapsible_19; 