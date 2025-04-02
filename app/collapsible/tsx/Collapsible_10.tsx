'use client';
import React, { useState, useRef } from 'react';

const origamiAnimationKeyframes = `
  @keyframes unfold {
    0% {
      transform: perspective(1000px) rotateX(-90deg);
      transform-origin: top;
    }
    100% {
      transform: perspective(1000px) rotateX(0deg);
      transform-origin: top;
    }
  }

  @keyframes fold {
    0% {
      transform: perspective(1000px) rotateX(0deg);
      transform-origin: top;
    }
    100% {
      transform: perspective(1000px) rotateX(-90deg);
      transform-origin: top;
    }
  }

  @keyframes paperLight {
    0%, 100% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
  }
`;

interface CollapsibleProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

const Collapsible_10: React.FC<CollapsibleProps> = ({
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
      background: 'linear-gradient(135deg, #ffffff 0%, #f0f0f0 100%)',
      borderRadius: '4px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <style>{origamiAnimationKeyframes}</style>

      {/* Paper texture */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(45deg, rgba(255,255,255,0.2) 25%, transparent 25%, transparent 75%, rgba(255,255,255,0.2) 75%, rgba(255,255,255,0.2)), linear-gradient(45deg, rgba(255,255,255,0.2) 25%, transparent 25%, transparent 75%, rgba(255,255,255,0.2) 75%, rgba(255,255,255,0.2))',
        backgroundSize: '20px 20px',
        backgroundPosition: '0 0, 10px 10px',
        pointerEvents: 'none',
        opacity: 0.5,
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
          background: 'linear-gradient(90deg, #f8f9fa, #e9ecef, #f8f9fa)',
          backgroundSize: '200% 100%',
          animation: 'paperLight 3s ease infinite',
          borderBottom: '1px solid #dee2e6',
          position: 'relative',
        }}
      >
        <h3 style={{
          margin: 0,
          fontSize: '1.1rem',
          fontWeight: 500,
          color: '#495057',
        }}>
          {title}
        </h3>
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
          >
            <path
              d="M7 10L12 15L17 10"
              stroke="#495057"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* Fold lines */}
      <div style={{
        position: 'absolute',
        top: '56px',
        left: 0,
        right: 0,
        height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(0,0,0,0.1), transparent)',
        transform: `scaleY(${isOpen ? '1' : '0'})`,
        transition: 'transform 0.3s ease',
      }} />

      {/* Content */}
      <div
        ref={contentRef}
        style={{
          padding: isOpen ? '16px 24px' : '0 24px',
          maxHeight: isOpen ? 'none' : '0',
          height: isOpen ? 'auto' : '0',
          opacity: isOpen ? 1 : 0,
          overflow: 'hidden',
          color: '#495057',
          background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
          position: 'relative',
          transformStyle: 'preserve-3d',
          animation: isOpen 
            ? 'unfold 0.5s ease-out forwards'
            : 'fold 0.5s ease-in forwards',
        }}
      >
        <div style={{
          position: 'relative',
          zIndex: 2,
        }}>
          {children}
        </div>

        {/* Corner fold effect */}
        <div style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '20px',
          height: '20px',
          background: 'linear-gradient(135deg, transparent 50%, rgba(0,0,0,0.1) 50%)',
        }} />
      </div>
    </div>
  );
};

export default Collapsible_10; 