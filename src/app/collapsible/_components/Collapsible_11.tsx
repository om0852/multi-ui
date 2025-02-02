'use client';
import React, { useState, useRef } from 'react';

const retroGameAnimationKeyframes = `
  @keyframes pixelate {
    0% {
      background-size: 100% 100%;
    }
    50% {
      background-size: 200% 200%;
    }
    100% {
      background-size: 100% 100%;
    }
  }

  @keyframes scanlines {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 0 20px;
    }
  }

  @keyframes blink {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
  }

  @keyframes slidePixels {
    0% {
      transform: translateY(-100%);
    }
    100% {
      transform: translateY(0);
    }
  }
`;

interface CollapsibleProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

const Collapsible_11: React.FC<CollapsibleProps> = ({
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
      background: '#000',
      border: '4px solid #39ff14',
      position: 'relative',
      overflow: 'hidden',
      fontFamily: '"Press Start 2P", monospace',
    }}>
      <style>{retroGameAnimationKeyframes}</style>

      {/* Scanlines effect */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(transparent 50%, rgba(0, 0, 0, 0.5) 50%)',
        backgroundSize: '100% 4px',
        pointerEvents: 'none',
        animation: 'scanlines 1s linear infinite',
        opacity: 0.15,
        zIndex: 1,
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
          background: '#000',
          borderBottom: '4px solid #39ff14',
          position: 'relative',
        }}
      >
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
        }}>
          <span style={{
            color: '#39ff14',
            animation: 'blink 1s step-end infinite',
          }}>
            ►
          </span>
          <h3 style={{
            margin: 0,
            fontSize: '1rem',
            color: '#39ff14',
            textTransform: 'uppercase',
            letterSpacing: '1px',
          }}>
            {title}
          </h3>
        </div>
        <div style={{
          color: '#39ff14',
          transform: `rotate(${isOpen ? '90deg' : '0deg'})`,
          transition: 'transform 0.3s ease',
          fontSize: '1.2rem',
        }}>
          ►
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
          color: '#39ff14',
          background: '#000',
          position: 'relative',
          transition: 'all 0.3s ease',
          animation: isOpen ? 'slidePixels 0.3s steps(10)' : 'none',
        }}
      >
        <div style={{
          position: 'relative',
          zIndex: 2,
          fontSize: '0.875rem',
          lineHeight: '1.8',
        }}>
          {children}
        </div>

        {/* Pixel grid */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(90deg, rgba(57, 255, 20, 0.1) 1px, transparent 1px), linear-gradient(rgba(57, 255, 20, 0.1) 1px, transparent 1px)',
          backgroundSize: '8px 8px',
          pointerEvents: 'none',
          opacity: 0.5,
          animation: isOpen ? 'pixelate 0.3s ease-out' : 'none',
        }} />
      </div>
    </div>
  );
};

export default Collapsible_11; 