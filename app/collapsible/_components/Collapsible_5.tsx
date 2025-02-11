'use client';
import React, { useState, useRef, useEffect } from 'react';

const materialAnimationKeyframes = `
  @keyframes ripple {
    0% {
      transform: scale(0);
      opacity: 0.5;
    }
    100% {
      transform: scale(4);
      opacity: 0;
    }
  }

  @keyframes slideContent {
    0% {
      opacity: 0;
      transform: translateY(-10px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes elevate {
    0% {
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    100% {
      box-shadow: 0 8px 16px rgba(0,0,0,0.2);
    }
  }
`;

interface CollapsibleProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  color?: string;
}

const Collapsible_5: React.FC<CollapsibleProps> = ({
  title,
  children,
  defaultOpen = false,
  color = '#6366f1',
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const [rippleStyle, setRippleStyle] = useState({});
  const contentRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  const handleClick = (e: React.MouseEvent) => {
    const rect = headerRef.current?.getBoundingClientRect();
    if (rect) {
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setRippleStyle({
        left: `${x}px`,
        top: `${y}px`,
        animation: 'ripple 0.6s linear',
      });
      setTimeout(() => setRippleStyle({}), 600);
    }
    setIsOpen(!isOpen);
  };

  return (
    <div style={{
      background: '#ffffff',
      borderRadius: '12px',
      margin: '16px',
      overflow: 'hidden',
      boxShadow: isOpen 
        ? '0 8px 16px rgba(0,0,0,0.2)' 
        : '0 2px 4px rgba(0,0,0,0.1)',
      transition: 'box-shadow 0.3s ease',
      animation: isOpen ? 'elevate 0.3s forwards' : 'none',
    }}>
      <style>{materialAnimationKeyframes}</style>

      {/* Header */}
      <div
        ref={headerRef}
        onClick={handleClick}
        style={{
          padding: '16px 24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          cursor: 'pointer',
          background: '#ffffff',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Ripple effect */}
        <div
          style={{
            position: 'absolute',
            width: '20px',
            height: '20px',
            background: `${color}20`,
            borderRadius: '50%',
            transform: 'translate(-50%, -50%)',
            pointerEvents: 'none',
            ...rippleStyle,
          }}
        />

        <h3 style={{
          margin: 0,
          fontSize: '1.1rem',
          fontWeight: 500,
          color: color,
        }}>
          {title}
        </h3>
        <div style={{
          width: '24px',
          height: '24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transform: isOpen ? 'rotate(180deg)' : 'rotate(0)',
          transition: 'transform 0.3s ease',
        }}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 7.5L10 12.5L15 7.5"
              stroke={color}
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
          padding: isOpen ? '16px 24px' : '0 24px',
          maxHeight: isOpen ? 'none' : '0',
          height: isOpen ? 'auto' : '0',
          opacity: isOpen ? 1 : 0,
          overflow: 'hidden',
          transition: 'all 0.3s ease',
          animation: isOpen ? 'slideContent 0.3s ease-out' : 'none',
          background: '#ffffff',
          color: '#4a5568',
          lineHeight: 1.6,
          borderTop: isOpen ? '1px solid #edf2f7' : 'none',
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Collapsible_5; 