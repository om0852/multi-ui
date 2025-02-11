'use client';
import React, { useState, useRef, useEffect } from 'react';

const neumorphicAnimationKeyframes = `
  @keyframes scaleIn {
    0% {
      opacity: 0;
      transform: scale(0.95);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }

  @keyframes scaleOut {
    0% {
      opacity: 1;
      transform: scale(1);
    }
    100% {
      opacity: 0;
      transform: scale(0.95);
    }
  }

  @keyframes pulseIcon {
    0% {
      transform: scale(1) rotate(0deg);
    }
    50% {
      transform: scale(1.1) rotate(180deg);
    }
    100% {
      transform: scale(1) rotate(180deg);
    }
  }

  @keyframes pulseIconReverse {
    0% {
      transform: scale(1) rotate(180deg);
    }
    50% {
      transform: scale(1.1) rotate(0deg);
    }
    100% {
      transform: scale(1) rotate(0deg);
    }
  }
`;

interface CollapsibleProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  accentColor?: string;
}

const Collapsible_2: React.FC<CollapsibleProps> = ({
  title,
  children,
  defaultOpen = false,
  accentColor = '#4f46e5',
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const [contentHeight, setContentHeight] = useState<number>(0);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [children]);

  const toggleCollapsible = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div style={{
      background: '#e0e5ec',
      borderRadius: '16px',
      padding: '2px',
      margin: '20px',
      boxShadow: isOpen 
        ? 'inset 3px 3px 7px rgba(136, 165, 191, 0.48), inset -3px -3px 7px #FFFFFF'
        : '6px 6px 12px rgba(136, 165, 191, 0.48), -6px -6px 12px #FFFFFF',
      transition: 'box-shadow 0.4s ease',
    }}>
      <style>{neumorphicAnimationKeyframes}</style>

      {/* Header */}
      <div
        onClick={toggleCollapsible}
        style={{
          padding: '20px 24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          cursor: 'pointer',
          borderRadius: '14px',
          background: isOpen ? '#e0e5ec' : 'linear-gradient(145deg, #f0f5fc, #caced3)',
          transition: 'all 0.3s ease',
        }}
      >
        <h3 style={{
          margin: 0,
          fontSize: '1.1rem',
          fontWeight: 600,
          color: accentColor,
          textShadow: '1px 1px 1px #ffffff',
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
          background: '#e0e5ec',
          boxShadow: isOpen
            ? 'inset 2px 2px 5px rgba(136, 165, 191, 0.38), inset -2px -2px 5px #FFFFFF'
            : '3px 3px 6px rgba(136, 165, 191, 0.38), -3px -3px 6px #FFFFFF',
          animation: isOpen ? 'pulseIcon 0.4s forwards' : 'pulseIconReverse 0.4s forwards',
        }}>
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 5L7 10L12 5"
              stroke={accentColor}
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
          animation: isOpen ? 'scaleIn 0.4s ease-out' : 'scaleOut 0.4s ease-in',
          color: '#4a5568',
          lineHeight: 1.7,
          background: '#e0e5ec',
          borderRadius: '0 0 14px 14px',
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Collapsible_2; 