'use client';
import React, { useState, useRef } from 'react';

const flipAnimationKeyframes = `
  @keyframes flipDown {
    0% {
      transform: perspective(1000px) rotateX(-90deg);
      opacity: 0;
    }
    100% {
      transform: perspective(1000px) rotateX(0deg);
      opacity: 1;
    }
  }

  @keyframes flipUp {
    0% {
      transform: perspective(1000px) rotateX(0deg);
      opacity: 1;
    }
    100% {
      transform: perspective(1000px) rotateX(-90deg);
      opacity: 0;
    }
  }

  @keyframes glow {
    0%, 100% {
      box-shadow: 0 0 20px rgba(99, 102, 241, 0.2);
    }
    50% {
      box-shadow: 0 0 30px rgba(99, 102, 241, 0.4);
    }
  }
`;

interface CollapsibleProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

const Collapsible_6: React.FC<CollapsibleProps> = ({
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
      background: 'linear-gradient(145deg, #ffffff, #f3f4f6)',
      borderRadius: '16px',
      margin: '16px',
      overflow: 'hidden',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      animation: 'glow 3s infinite',
      transformStyle: 'preserve-3d' as const,
      perspective: '1000px',
    }}>
      <style>{flipAnimationKeyframes}</style>

      {/* Header */}
      <div
        onClick={toggleCollapsible}
        style={{
          padding: '20px 24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          cursor: 'pointer',
          background: 'linear-gradient(145deg, #6366f1, #4f46e5)',
          color: '#ffffff',
          position: 'relative',
          transformStyle: 'preserve-3d' as const,
        }}
      >
        <h3 style={{
          margin: 0,
          fontSize: '1.1rem',
          fontWeight: 500,
          textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        }}>
          {title}
        </h3>
        <div style={{
          width: '24px',
          height: '24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transform: `rotateZ(${isOpen ? '180deg' : '0deg'})`,
          transition: 'transform 0.5s ease',
        }}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 5L8 11L14 5"
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
          background: '#ffffff',
          color: '#4a5568',
          lineHeight: 1.6,
          transformOrigin: 'top',
          animation: isOpen 
            ? 'flipDown 0.5s ease-out forwards'
            : 'flipUp 0.5s ease-in forwards',
        }}
      >
        <div style={{
          transform: isOpen ? 'translateZ(0)' : 'translateZ(-100px)',
          transition: 'transform 0.5s ease',
        }}>
          {children}
        </div>
      </div>

      {/* 3D edge effect */}
      <div style={{
        height: '4px',
        background: 'linear-gradient(145deg, #4f46e5, #6366f1)',
        opacity: isOpen ? 1 : 0,
        transform: 'translateZ(-10px)',
        transition: 'opacity 0.3s ease',
      }} />
    </div>
  );
};

export default Collapsible_6; 