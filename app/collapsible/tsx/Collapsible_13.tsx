'use client';
import React, { useState, useRef } from 'react';

const hologramAnimationKeyframes = `
  @keyframes hologramFlicker {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.97;
    }
    25%, 75% {
      opacity: 0.95;
    }
  }

  @keyframes hologramScan {
    0% {
      transform: translateY(-100%);
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      transform: translateY(100%);
      opacity: 0;
    }
  }

  @keyframes dataFlow {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: 0% 100%;
    }
  }

  @keyframes glowPulse {
    0%, 100% {
      box-shadow: 0 0 10px rgba(0, 255, 255, 0.5),
                 0 0 20px rgba(0, 255, 255, 0.3),
                 0 0 30px rgba(0, 255, 255, 0.1),
                 inset 0 0 10px rgba(0, 255, 255, 0.2);
    }
    50% {
      box-shadow: 0 0 15px rgba(0, 255, 255, 0.7),
                 0 0 25px rgba(0, 255, 255, 0.5),
                 0 0 35px rgba(0, 255, 255, 0.3),
                 inset 0 0 15px rgba(0, 255, 255, 0.4);
    }
  }
`;

interface CollapsibleProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

const Collapsible_13: React.FC<CollapsibleProps> = ({
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
      background: 'rgba(0, 12, 24, 0.8)',
      border: '1px solid rgba(0, 255, 255, 0.3)',
      borderRadius: '8px',
      position: 'relative',
      overflow: 'hidden',
      animation: 'hologramFlicker 2s linear infinite, glowPulse 3s ease-in-out infinite',
      backdropFilter: 'blur(10px)',
    }}>
      <style>{hologramAnimationKeyframes}</style>

      {/* Hologram scan effect */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '2px',
        background: 'linear-gradient(to bottom, transparent, rgba(0, 255, 255, 0.5), transparent)',
        animation: 'hologramScan 2s linear infinite',
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
          background: 'rgba(0, 24, 48, 0.5)',
          borderBottom: '1px solid rgba(0, 255, 255, 0.3)',
          position: 'relative',
        }}
      >
        <h3 style={{
          margin: 0,
          fontSize: '1.1rem',
          fontWeight: 500,
          color: '#00ffff',
          textShadow: '0 0 10px rgba(0, 255, 255, 0.5)',
          fontFamily: 'Arial, sans-serif',
          letterSpacing: '1px',
        }}>
          {title}
        </h3>

        {/* Holographic interface elements */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
        }}>
          <div style={{
            width: '8px',
            height: '8px',
            background: '#00ffff',
            borderRadius: '50%',
            boxShadow: '0 0 10px rgba(0, 255, 255, 0.7)',
          }} />
          <div style={{
            width: '24px',
            height: '24px',
            position: 'relative',
            transform: `rotate(${isOpen ? '180deg' : '0deg'})`,
            transition: 'transform 0.3s ease',
          }}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                filter: 'drop-shadow(0 0 2px rgba(0, 255, 255, 0.7))',
              }}
            >
              <path
                d="M7 10L12 15L17 10"
                stroke="#00ffff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
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
          color: '#00ffff',
          background: 'rgba(0, 12, 24, 0.5)',
          position: 'relative',
          transition: 'all 0.3s ease',
          textShadow: '0 0 5px rgba(0, 255, 255, 0.5)',
        }}
      >
        <div style={{
          position: 'relative',
          zIndex: 2,
        }}>
          {children}
        </div>

        {/* Data flow background */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            linear-gradient(0deg,
              transparent 50%,
              rgba(0, 255, 255, 0.1) 50%,
              rgba(0, 255, 255, 0.1) 51%,
              transparent 51%
            )
          `,
          backgroundSize: '100% 4px',
          animation: 'dataFlow 20s linear infinite',
          pointerEvents: 'none',
          opacity: 0.3,
        }} />

        {/* Interface elements */}
        <div style={{
          position: 'absolute',
          bottom: '8px',
          right: '8px',
          fontSize: '10px',
          color: 'rgba(0, 255, 255, 0.7)',
          fontFamily: 'monospace',
        }}>
          {isOpen ? 'ACTIVE' : 'STANDBY'}
        </div>
      </div>
    </div>
  );
};

export default Collapsible_13; 