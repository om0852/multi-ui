'use client';
import React, { useState, useRef } from 'react';

const polaroidAnimationKeyframes = `
  @keyframes develop {
    0% {
      filter: brightness(2) contrast(0.5) sepia(1);
      opacity: 0.5;
    }
    100% {
      filter: brightness(1) contrast(1) sepia(0);
      opacity: 1;
    }
  }

  @keyframes shake {
    0%, 100% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(1deg);
    }
    75% {
      transform: rotate(-1deg);
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

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
`;

interface CollapsibleProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

const Collapsible_18: React.FC<CollapsibleProps> = ({
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
      background: '#ffffff',
      border: '1px solid #e0e0e0',
      borderRadius: '4px',
      position: 'relative',
      overflow: 'hidden',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      animation: 'shake 3s ease-in-out infinite',
      padding: '12px',
    }}>
      <style>{polaroidAnimationKeyframes}</style>

      {/* Film grain texture */}
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

      {/* Header */}
      <div
        onClick={toggleCollapsible}
        style={{
          padding: '16px',
          cursor: 'pointer',
          background: '#ffffff',
          position: 'relative',
          borderBottom: '1px solid #e0e0e0',
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
            color: '#333',
            fontFamily: '"Courier New", monospace',
            letterSpacing: '1px',
          }}>
            {title}
          </h3>
          <div style={{
            width: '24px',
            height: '24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transform: `rotate(${isOpen ? '180deg' : '0deg'})`,
            transition: 'transform 0.3s ease',
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
                stroke="#333"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* Date stamp */}
        <div style={{
          position: 'absolute',
          bottom: '8px',
          right: '16px',
          fontSize: '0.8rem',
          color: '#999',
          fontFamily: '"Courier New", monospace',
        }}>
          01/15/24
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
          color: '#333',
          position: 'relative',
          transition: 'all 0.3s ease',
          animation: isOpen ? 'develop 1s ease-out' : 'none',
        }}
      >
        <div style={{
          position: 'relative',
          zIndex: 2,
          fontFamily: '"Courier New", monospace',
          fontSize: '0.95rem',
          lineHeight: '1.6',
          animation: isOpen ? 'fadeIn 0.5s ease-out' : 'none',
        }}>
          {children}
        </div>

        {/* Photo corner */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          width: '20px',
          height: '20px',
          background: 'linear-gradient(135deg, transparent 50%, rgba(0,0,0,0.05) 50%)',
        }} />
      </div>
    </div>
  );
};

export default Collapsible_18; 