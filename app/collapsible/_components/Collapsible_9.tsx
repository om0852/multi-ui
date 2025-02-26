'use client';
import React, { useState, useRef } from 'react';

const cyberpunkAnimationKeyframes = `
  @keyframes neonPulse {
    0%, 100% {
      text-shadow: 0 0 5px #ff00de,
                   0 0 10px #ff00de,
                   0 0 20px #ff00de,
                   0 0 40px #ff00de;
    }
    50% {
      text-shadow: 0 0 10px #00ffff,
                   0 0 20px #00ffff,
                   0 0 40px #00ffff,
                   0 0 80px #00ffff;
    }
  }

  @keyframes borderGlow {
    0%, 100% {
      box-shadow: 0 0 5px #ff00de,
                 0 0 10px #ff00de inset;
    }
    50% {
      box-shadow: 0 0 10px #00ffff,
                 0 0 20px #00ffff inset;
    }
  }

  @keyframes dataStream {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: 200% 0%;
    }
  }

  @keyframes glitchText {
    0% {
      transform: skew(0deg);
    }
    20% {
      transform: skew(-10deg);
      color: #ff00de;
    }
    40% {
      transform: skew(10deg);
      color: #00ffff;
    }
    60% {
      transform: skew(-5deg);
      color: #ff00de;
    }
    80% {
      transform: skew(5deg);
      color: #00ffff;
    }
    100% {
      transform: skew(0deg);
    }
  }
`;

interface CollapsibleProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

const Collapsible_9: React.FC<CollapsibleProps> = ({
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
      background: '#0a0a1f',
      border: '2px solid #ff00de',
      borderRadius: '4px',
      position: 'relative',
      overflow: 'hidden',
      animation: 'borderGlow 2s infinite',
    }}>
      <style>{cyberpunkAnimationKeyframes}</style>

      {/* Data stream background */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(90deg, transparent 0%, rgba(0, 255, 255, 0.1) 50%, transparent 100%)',
        backgroundSize: '200% 100%',
        animation: 'dataStream 3s linear infinite',
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
          background: 'rgba(10, 10, 31, 0.9)',
          borderBottom: '2px solid #ff00de',
          position: 'relative',
        }}
      >
        <h3 style={{
          margin: 0,
          fontSize: '1.2rem',
          fontWeight: 700,
          color: '#ffffff',
          animation: isOpen ? 'neonPulse 2s infinite, glitchText 0.3s infinite' : 'neonPulse 2s infinite',
          fontFamily: 'monospace',
          letterSpacing: '2px',
        }}>
          {title}
        </h3>
        <div style={{
          color: '#00ffff',
          fontSize: '24px',
          transform: `rotate(${isOpen ? '45deg' : '0deg'})`,
          transition: 'transform 0.3s ease',
          textShadow: '0 0 5px #00ffff',
        }}>
          +
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
          color: '#ffffff',
          background: 'rgba(10, 10, 31, 0.9)',
          transition: 'all 0.3s ease',
          position: 'relative',
          textShadow: '0 0 2px #00ffff',
        }}
      >
        <div style={{
          position: 'relative',
          zIndex: 2,
        }}>
          {children}
        </div>

        {/* Circuit board pattern */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
            radial-gradient(circle at 50% 50%, rgba(0, 255, 255, 0.1) 2px, transparent 2px),
            radial-gradient(circle at 0% 50%, rgba(255, 0, 222, 0.1) 2px, transparent 2px)
          `,
          backgroundSize: '20px 20px',
          pointerEvents: 'none',
          opacity: 0.5,
          zIndex: 1,
        }} />
      </div>
    </div>
  );
};

export default Collapsible_9; 