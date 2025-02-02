'use client';
import React, { useState, useRef } from 'react';

const cartridgeAnimationKeyframes = `
  @keyframes insert {
    0% {
      transform: translateY(-10px);
    }
    60% {
      transform: translateY(2px);
    }
    80% {
      transform: translateY(-1px);
    }
    100% {
      transform: translateY(0);
    }
  }

  @keyframes powerOn {
    0% {
      filter: brightness(1);
    }
    20% {
      filter: brightness(2);
    }
    40% {
      filter: brightness(0.8);
    }
    60% {
      filter: brightness(1.5);
    }
    100% {
      filter: brightness(1);
    }
  }

  @keyframes pixelate {
    0% {
      background-size: 100% 100%;
    }
    50% {
      background-size: 105% 105%;
    }
    100% {
      background-size: 100% 100%;
    }
  }
`;

interface CollapsibleProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

const Collapsible_21: React.FC<CollapsibleProps> = ({
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
      background: '#8b8b8b',
      borderRadius: '8px',
      position: 'relative',
      overflow: 'hidden',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
      animation: isOpen ? 'insert 0.3s ease-out' : 'none',
    }}>
      <style>{cartridgeAnimationKeyframes}</style>

      {/* Header (Cartridge) */}
      <div
        onClick={toggleCollapsible}
        style={{
          padding: '16px',
          cursor: 'pointer',
          background: 'linear-gradient(45deg, #6b6b6b 0%, #8b8b8b 100%)',
          position: 'relative',
          borderBottom: '3px solid #5a5a5a',
        }}
      >
        {/* Cartridge label */}
        <div style={{
          background: 'linear-gradient(45deg, #2a2a2a 0%, #3a3a3a 100%)',
          border: '2px solid #1a1a1a',
          borderRadius: '4px',
          padding: '12px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          animation: isOpen ? 'powerOn 0.5s ease-out' : 'none',
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}>
            {/* Power LED */}
            <div style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: isOpen ? '#32cd32' : '#ff4444',
              boxShadow: isOpen 
                ? '0 0 8px #32cd32'
                : '0 0 8px #ff4444',
            }} />
            <h3 style={{
              margin: 0,
              fontSize: '1rem',
              fontWeight: 700,
              color: '#fff',
              fontFamily: 'Press Start 2P, monospace',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              textShadow: '2px 2px 0 #000',
            }}>
              {title}
            </h3>
          </div>

          {/* Cartridge ridges */}
          <div style={{
            display: 'flex',
            gap: '4px',
          }}>
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                style={{
                  width: '4px',
                  height: '16px',
                  background: '#1a1a1a',
                  borderRadius: '2px',
                }}
              />
            ))}
          </div>
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
          color: '#fff',
          position: 'relative',
          transition: 'all 0.3s ease',
          background: '#2a2a2a',
          animation: isOpen ? 'pixelate 0.3s ease-out' : 'none',
        }}
      >
        <div style={{
          position: 'relative',
          zIndex: 2,
          fontFamily: 'Press Start 2P, monospace',
          fontSize: '0.8rem',
          lineHeight: '1.8',
          padding: '8px',
          background: 'rgba(0, 0, 0, 0.2)',
          borderRadius: '4px',
          border: '2px solid #1a1a1a',
        }}>
          {children}
        </div>

        {/* Game info */}
        <div style={{
          position: 'absolute',
          bottom: '8px',
          right: '16px',
          fontSize: '0.6rem',
          color: 'rgba(255, 255, 255, 0.5)',
          fontFamily: 'Press Start 2P, monospace',
        }}>
          8-BIT • 1MB
        </div>
      </div>
    </div>
  );
};

export default Collapsible_21; 