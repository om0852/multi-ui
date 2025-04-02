'use client';
import React, { useState, useRef } from 'react';

const glassAnimationKeyframes = `
  @keyframes blurIn {
    0% {
      opacity: 0;
      backdrop-filter: blur(0px);
      transform: translateX(-20px);
    }
    100% {
      opacity: 1;
      backdrop-filter: blur(16px);
      transform: translateX(0);
    }
  }

  @keyframes blurOut {
    0% {
      opacity: 1;
      backdrop-filter: blur(16px);
      transform: translateX(0);
    }
    100% {
      opacity: 0;
      backdrop-filter: blur(0px);
      transform: translateX(-20px);
    }
  }

  @keyframes glowPulse {
    0%, 100% {
      box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
    }
    50% {
      box-shadow: 0 0 30px rgba(255, 255, 255, 0.5);
    }
  }

  @keyframes iconSpin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(90deg);
    }
  }

  @keyframes iconSpinReverse {
    0% {
      transform: rotate(90deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
`;

interface CollapsibleProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  glowColor?: string;
}

const Collapsible_3: React.FC<CollapsibleProps> = ({
  title,
  children,
  defaultOpen = false,
  glowColor = 'rgba(147, 51, 234, 0.5)',
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const contentRef = useRef<HTMLDivElement>(null);

  const toggleCollapsible = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div style={{
      position: 'relative',
      margin: '20px',
      borderRadius: '20px',
      background: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(16px)',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      overflow: 'hidden',
      animation: 'glowPulse 3s infinite',
      boxShadow: `0 0 20px ${glowColor}`,
    }}>
      <style>{glassAnimationKeyframes}</style>

      {/* Header */}
      <div
        onClick={toggleCollapsible}
        style={{
          padding: '20px 24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          cursor: 'pointer',
          background: 'rgba(255, 255, 255, 0.1)',
          borderBottom: isOpen ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
          transition: 'all 0.3s ease',
        }}
      >
        <h3 style={{
          margin: 0,
          fontSize: '1.2rem',
          fontWeight: 500,
          color: '#ffffff',
          textShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
        }}>
          {title}
        </h3>
        <div style={{
          width: '32px',
          height: '32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '50%',
          background: 'rgba(255, 255, 255, 0.1)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          animation: isOpen ? 'iconSpin 0.3s forwards' : 'iconSpinReverse 0.3s forwards',
        }}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 3L11 8L6 13"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div
        ref={contentRef}
        style={{
          padding: isOpen ? '20px 24px' : '0 24px',
          maxHeight: isOpen ? 'none' : '0',
          height: isOpen ? 'auto' : '0',
          opacity: isOpen ? 1 : 0,
          overflow: 'hidden',
          transition: 'all 0.4s ease',
          animation: isOpen ? 'blurIn 0.4s ease-out' : 'blurOut 0.4s ease-in',
          color: '#ffffff',
          lineHeight: 1.7,
          background: 'rgba(255, 255, 255, 0.05)',
        }}
      >
        {children}
      </div>

      {/* Glow effect */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `radial-gradient(circle at 50% 0%, ${glowColor}, transparent 70%)`,
        opacity: isOpen ? 0.2 : 0,
        transition: 'opacity 0.4s ease',
        pointerEvents: 'none',
      }} />
    </div>
  );
};

export default Collapsible_3; 