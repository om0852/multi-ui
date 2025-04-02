'use client';
import React, { useState, useRef } from 'react';

const accordionAnimationKeyframes = `
  @keyframes expandLine {
    0% {
      width: 0;
    }
    100% {
      width: 100%;
    }
  }

  @keyframes fadeSlideDown {
    0% {
      opacity: 0;
      transform: translateY(-8px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fadeSlideUp {
    0% {
      opacity: 1;
      transform: translateY(0);
    }
    100% {
      opacity: 0;
      transform: translateY(-8px);
    }
  }
`;

interface CollapsibleProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

const Collapsible_7: React.FC<CollapsibleProps> = ({
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
      borderLeft: '2px solid #e2e8f0',
      transition: 'border-color 0.3s ease',
      borderColor: isOpen ? '#000000' : '#e2e8f0',
    }}>
      <style>{accordionAnimationKeyframes}</style>

      {/* Header */}
      <div
        onClick={toggleCollapsible}
        style={{
          padding: '16px 24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          cursor: 'pointer',
          position: 'relative',
        }}
      >
        <h3 style={{
          margin: 0,
          fontSize: '1.1rem',
          fontWeight: 500,
          color: isOpen ? '#000000' : '#4a5568',
          transition: 'color 0.3s ease',
        }}>
          {title}
        </h3>
        <div style={{
          width: '24px',
          height: '24px',
          position: 'relative',
        }}>
          <div style={{
            position: 'absolute',
            top: '50%',
            left: 0,
            width: '100%',
            height: '2px',
            background: isOpen ? '#000000' : '#4a5568',
            transform: 'translateY(-50%)',
            transition: 'background-color 0.3s ease',
          }} />
          <div style={{
            position: 'absolute',
            top: '50%',
            left: 0,
            width: '100%',
            height: '2px',
            background: isOpen ? '#000000' : '#4a5568',
            transform: `translateY(-50%) rotate(${isOpen ? '180deg' : '90deg'})`,
            transition: 'transform 0.3s ease, background-color 0.3s ease',
          }} />
        </div>
      </div>

      {/* Underline animation */}
      <div style={{
        height: '1px',
        background: '#000000',
        width: isOpen ? '100%' : '0',
        transition: 'width 0.3s ease',
        animation: isOpen ? 'expandLine 0.3s ease-out' : 'none',
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
          color: '#4a5568',
          lineHeight: 1.6,
          animation: isOpen 
            ? 'fadeSlideDown 0.3s ease-out'
            : 'fadeSlideUp 0.3s ease-in',
        }}
      >
        <div style={{
          paddingLeft: '16px',
          borderLeft: '1px solid #e2e8f0',
        }}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Collapsible_7; 