"use client"
import React, { useState, useRef, useEffect } from 'react';

const collapsibleAnimationKeyframes = `
  @keyframes slideDown {
    0% {
      opacity: 0;
      transform: translateY(-20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideUp {
    0% {
      opacity: 1;
      transform: translateY(0);
    }
    100% {
      opacity: 0;
      transform: translateY(-20px);
    }
  }

  @keyframes rotateArrow {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(180deg);
    }
  }

  @keyframes rotateArrowReverse {
    0% {
      transform: rotate(180deg);
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
}

const Collapsible_1: React.FC<CollapsibleProps> = ({
  title,
  children,
  defaultOpen = false,
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
      background: '#ffffff',
      borderRadius: '12px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      margin: '16px',
      overflow: 'hidden',
      border: '1px solid #e0e0e0',
    }}>
      <style>{collapsibleAnimationKeyframes}</style>

      {/* Header */}
      <div
        onClick={toggleCollapsible}
        style={{
          padding: '16px 24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          cursor: 'pointer',
          background: 'linear-gradient(to right, #f8f9fa, #ffffff)',
          borderBottom: isOpen ? '1px solid #e0e0e0' : 'none',
          transition: 'background-color 0.3s ease',
        }}
      >
        <h3 style={{
          margin: 0,
          fontSize: '1.1rem',
          fontWeight: 500,
          color: '#2c3e50',
        }}>
          {title}
        </h3>
        <div style={{
          width: '24px',
          height: '24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          animation: isOpen ? 'rotateArrow 0.3s forwards' : 'rotateArrowReverse 0.3s forwards',
        }}>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 4L6 8L10 4"
              stroke="#2c3e50"
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
          transition: 'all 0.3s ease-in-out',
          animation: isOpen ? 'slideDown 0.3s ease-out' : 'slideUp 0.3s ease-in',
          background: '#ffffff',
          color: '#4a5568',
          lineHeight: 1.6,
        }}
      >
        {children}
      </div>

      {/* Bottom border gradient */}
      <div style={{
        height: '4px',
        background: 'linear-gradient(to right, #3498db, #2ecc71)',
        opacity: isOpen ? 1 : 0,
        transition: 'opacity 0.3s ease',
      }} />
    </div>
  );
};

export default Collapsible_1;
