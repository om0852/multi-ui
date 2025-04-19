 'use client';
import React, { useState, useRef } from 'react';

const spaceAnimationKeyframes = `
  @keyframes starTwinkle {
    0%, 100% {
      opacity: 1;
      transform: scale(1);
    }
    50% {
      opacity: 0.5;
      transform: scale(0.8);
    }
  }

  @keyframes nebulaPulse {
    0%, 100% {
      opacity: 0.6;
      transform: scale(1);
    }
    50% {
      opacity: 0.8;
      transform: scale(1.1);
    }
  }

  @keyframes spaceGlow {
    0%, 100% {
      box-shadow: 0 0 20px rgba(123, 31, 162, 0.5),
                 inset 0 0 20px rgba(123, 31, 162, 0.3);
    }
    50% {
      box-shadow: 0 0 30px rgba(123, 31, 162, 0.7),
                 inset 0 0 30px rgba(123, 31, 162, 0.5);
    }
  }

  @keyframes warpSpeed {
    0% {
      transform: translateZ(-100px);
      opacity: 0;
    }
    100% {
      transform: translateZ(50px);
      opacity: 1;
    }
  }
`;

interface CollapsibleProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

const Collapsible_15: React.FC<CollapsibleProps> = ({
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
      background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
      border: '2px solid #7b1fa2',
      borderRadius: '12px',
      position: 'relative',
      overflow: 'hidden',
      animation: 'spaceGlow 3s ease-in-out infinite',
    }}>
      <style>{spaceAnimationKeyframes}</style>

      {/* Star field */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `
          radial-gradient(1px 1px at 10px 10px, white 100%, transparent),
          radial-gradient(1px 1px at 50px 50px, white 100%, transparent),
          radial-gradient(2px 2px at 100px 100px, white 100%, transparent),
          radial-gradient(1px 1px at 150px 150px, white 100%, transparent)
        `,
        backgroundSize: '200px 200px',
        opacity: 0.3,
        animation: 'starTwinkle 3s ease infinite',
      }} />

      {/* Nebula effect */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `
          radial-gradient(circle at 30% 50%, rgba(123, 31, 162, 0.3), transparent 60%),
          radial-gradient(circle at 70% 50%, rgba(66, 165, 245, 0.3), transparent 60%)
        `,
        opacity: 0.5,
        animation: 'nebulaPulse 5s ease infinite',
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
          background: 'rgba(26, 26, 46, 0.8)',
          borderBottom: '2px solid #7b1fa2',
          position: 'relative',
          backdropFilter: 'blur(5px)',
        }}
      >
        <h3 style={{
          margin: 0,
          fontSize: '1.2rem',
          fontWeight: 500,
          color: '#fff',
          textShadow: '0 0 10px rgba(123, 31, 162, 0.7)',
          fontFamily: 'Orbitron, sans-serif',
          letterSpacing: '2px',
        }}>
          {title}
        </h3>

        {/* Space station icon */}
        <div style={{
          width: '24px',
          height: '24px',
          position: 'relative',
          transform: `rotate(${isOpen ? '180deg' : '0deg'})`,
          transition: 'transform 0.5s ease',
        }}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              filter: 'drop-shadow(0 0 2px rgba(123, 31, 162, 0.7))',
            }}
          >
            <path
              d="M12 2L2 7V17L12 22L22 17V7L12 2Z"
              stroke="#7b1fa2"
              strokeWidth="2"
              strokeLinejoin="round"
            />
            <path
              d="M12 22V12"
              stroke="#7b1fa2"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M2 7L12 12L22 7"
              stroke="#7b1fa2"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
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
          transition: 'all 0.5s ease',
          perspective: '1000px',
          transformStyle: 'preserve-3d',
          animation: isOpen ? 'warpSpeed 0.5s ease-out' : 'none',
        }}
      >
        <div style={{
          position: 'relative',
          zIndex: 2,
          textShadow: '0 0 5px rgba(123, 31, 162, 0.5)',
        }}>
          {children}
        </div>

        {/* Space coordinates */}
        <div style={{
          position: 'absolute',
          bottom: '8px',
          right: '16px',
          fontSize: '0.8rem',
          fontFamily: 'monospace',
          color: 'rgba(255, 255, 255, 0.7)',
          textShadow: '0 0 5px rgba(123, 31, 162, 0.5)',
        }}>
          SEC: 117
          &nbsp;
          QD: 42
        </div>
      </div>
    </div>
  );
};

export default Collapsible_15;