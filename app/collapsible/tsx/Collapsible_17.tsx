'use client';
import React, { useState, useRef } from 'react';

const cassetteAnimationKeyframes = `
  @keyframes reelSpin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @keyframes tapeFlow {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }

  @keyframes cassetteVibrate {
    0%, 100% {
      transform: translate(0, 0);
    }
    25% {
      transform: translate(0.5px, 0.5px);
    }
    75% {
      transform: translate(-0.5px, -0.5px);
    }
  }

  @keyframes labelFade {
    0%, 100% {
      opacity: 0.8;
    }
    50% {
      opacity: 1;
    }
  }
`;

interface CollapsibleProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

const Collapsible_17: React.FC<CollapsibleProps> = ({
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
      background: '#2d2d2d',
      border: '3px solid #1a1a1a',
      borderRadius: '8px',
      position: 'relative',
      overflow: 'hidden',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
      animation: 'cassetteVibrate 0.5s ease-in-out infinite',
    }}>
      <style>{cassetteAnimationKeyframes}</style>

      {/* Plastic texture */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `
          linear-gradient(45deg, transparent 48%, rgba(255, 255, 255, 0.05) 50%, transparent 52%),
          linear-gradient(-45deg, transparent 48%, rgba(255, 255, 255, 0.05) 50%, transparent 52%)
        `,
        backgroundSize: '20px 20px',
        opacity: 0.3,
      }} />

      {/* Header */}
      <div
        onClick={toggleCollapsible}
        style={{
          padding: '16px 24px',
          cursor: 'pointer',
          background: 'linear-gradient(45deg, #1a1a1a, #2d2d2d)',
          borderBottom: '3px solid #1a1a1a',
          position: 'relative',
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
            {/* Cassette reel */}
            <div style={{
              width: '24px',
              height: '24px',
              borderRadius: '50%',
              border: '3px solid #444',
              position: 'relative',
              animation: isOpen ? 'reelSpin 2s linear infinite' : 'none',
            }}>
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: '8px',
                height: '8px',
                background: '#444',
                borderRadius: '50%',
                transform: 'translate(-50%, -50%)',
              }} />
              <div style={{
                position: 'absolute',
                top: '2px',
                left: '50%',
                width: '2px',
                height: '8px',
                background: '#444',
                transform: 'translateX(-50%)',
              }} />
            </div>
            <h3 style={{
              margin: 0,
              fontSize: '1.2rem',
              fontWeight: 700,
              color: '#fff',
              fontFamily: '"Press Start 2P", monospace',
              textShadow: '2px 2px 0 #000',
              animation: 'labelFade 2s ease infinite',
            }}>
              {title}
            </h3>
          </div>
          <div style={{
            color: '#fff',
            fontSize: '24px',
            transform: `rotate(${isOpen ? '90deg' : '0deg'})`,
            transition: 'transform 0.3s ease',
          }}>
            ▶
          </div>
        </div>

        {/* Tape line */}
        <div style={{
          position: 'absolute',
          bottom: '-3px',
          left: '24px',
          right: '24px',
          height: '3px',
          background: '#000',
          overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '1px',
            background: 'rgba(255, 255, 255, 0.2)',
            animation: isOpen ? 'tapeFlow 2s linear infinite' : 'none',
          }} />
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
          color: '#fff',
          position: 'relative',
          transition: 'all 0.3s ease',
        }}
      >
        <div style={{
          position: 'relative',
          zIndex: 2,
          fontFamily: 'monospace',
          fontSize: '0.9rem',
          lineHeight: '1.6',
        }}>
          {children}
        </div>

        {/* Cassette details */}
        <div style={{
          position: 'absolute',
          bottom: '8px',
          right: '16px',
          display: 'flex',
          gap: '8px',
          fontSize: '0.8rem',
          color: 'rgba(255, 255, 255, 0.5)',
          fontFamily: 'monospace',
        }}>
          <span>TYPE I</span>
          <span>•</span>
          <span>90 MIN</span>
        </div>
      </div>
    </div>
  );
};

export default Collapsible_17; 