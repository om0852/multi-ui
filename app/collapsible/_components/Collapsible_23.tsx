'use client';
import React, { useState, useRef } from 'react';

const filmAnimationKeyframes = `
  @keyframes filmGrain {
    0%, 100% {
      background-position: 0% 0%;
    }
    20% {
      background-position: 20% 20%;
    }
    40% {
      background-position: 40% 40%;
    }
    60% {
      background-position: 60% 60%;
    }
    80% {
      background-position: 80% 80%;
    }
  }

  @keyframes frameAdvance {
    0% {
      transform: translateY(0);
    }
    20% {
      transform: translateY(-2px);
    }
    40% {
      transform: translateY(-4px);
    }
    60% {
      transform: translateY(-2px);
    }
    100% {
      transform: translateY(0);
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
`;

interface CollapsibleProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

const Collapsible_23: React.FC<CollapsibleProps> = ({
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
      background: '#1a1a1a',
      borderRadius: '4px',
      position: 'relative',
      overflow: 'hidden',
      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.3)',
    }}>
      <style>{filmAnimationKeyframes}</style>

      {/* Film perforations */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        width: '24px',
        background: '#2a2a2a',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '12px',
        padding: '8px 0',
        animation: isOpen ? 'frameAdvance 0.3s ease-out' : 'none',
      }}>
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            style={{
              width: '12px',
              height: '8px',
              background: '#1a1a1a',
              borderRadius: '1px',
            }}
          />
        ))}
      </div>

      {/* Header (Film frame) */}
      <div
        onClick={toggleCollapsible}
        style={{
          padding: '16px 16px 16px 40px',
          cursor: 'pointer',
          background: '#2a2a2a',
          position: 'relative',
          borderBottom: '2px solid #1a1a1a',
        }}
      >
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <h3 style={{
            margin: 0,
            fontSize: '1.2rem',
            fontWeight: 500,
            color: '#fff',
            fontFamily: 'Courier New, monospace',
            letterSpacing: '2px',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
          }}>
            {title}
          </h3>

          {/* Frame counter */}
          <div style={{
            fontSize: '0.8rem',
            color: '#888',
            fontFamily: 'Courier New, monospace',
            padding: '4px 8px',
            background: '#1a1a1a',
            borderRadius: '2px',
            animation: 'flicker 2s linear infinite',
          }}>
            FRAME {isOpen ? '24' : '01'} / 24
          </div>
        </div>

        {/* Film grain overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyBAMAAADsEZWCAAAAGFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVfJ92AAAACHRSTlMAzN3u7/7///+AJRShAAAAS0lEQVQ4y2NgQAX8DIxg6sTAwMgPpFgYGBj5gRSDEAOjAJBiEmJgFARSTEIMjEJAilmIgVEYSLEKMTCKAClWBkYRAaDNrEBb2ZEAAO8iBBL5MPtiAAAAAElFTkSuQmCC")`,
          opacity: 0.1,
          animation: 'filmGrain 0.5s steps(4) infinite',
          pointerEvents: 'none',
        }} />
      </div>

      {/* Content */}
      <div
        ref={contentRef}
        style={{
          padding: isOpen ? '16px 16px 16px 40px' : '0 16px 0 40px',
          maxHeight: isOpen ? 'none' : '0',
          height: isOpen ? 'auto' : '0',
          opacity: isOpen ? 1 : 0,
          overflow: 'hidden',
          color: '#fff',
          position: 'relative',
          transition: 'all 0.3s ease',
          background: '#1a1a1a',
        }}
      >
        <div style={{
          position: 'relative',
          zIndex: 2,
          fontFamily: 'Courier New, monospace',
          fontSize: '1rem',
          lineHeight: '1.6',
          padding: '12px',
          background: 'rgba(255, 255, 255, 0.05)',
          borderRadius: '4px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        }}>
          {children}
        </div>

        {/* Film info */}
        <div style={{
          position: 'absolute',
          bottom: '12px',
          right: '16px',
          fontSize: '0.8rem',
          color: '#888',
          fontFamily: 'Courier New, monospace',
        }}>
          35mm • ISO 400
        </div>

        {/* Film grain overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyBAMAAADsEZWCAAAAGFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVfJ92AAAACHRSTlMAzN3u7/7///+AJRShAAAAS0lEQVQ4y2NgQAX8DIxg6sTAwMgPpFgYGBj5gRSDEAOjAJBiEmJgFARSTEIMjEJAilmIgVEYSLEKMTCKAClWBkYRAaDNrEBb2ZEAAO8iBBL5MPtiAAAAAElFTkSuQmCC")`,
          opacity: 0.05,
          animation: 'filmGrain 0.5s steps(4) infinite',
          pointerEvents: 'none',
        }} />
      </div>
    </div>
  );
};

export default Collapsible_23; 