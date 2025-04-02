'use client';
import React, { useState, useRef } from 'react';

const bookAnimationKeyframes = `
  @keyframes pageOpen {
    0% {
      transform: perspective(1000px) rotateX(0);
    }
    100% {
      transform: perspective(1000px) rotateX(-180deg);
    }
  }

  @keyframes pageClose {
    0% {
      transform: perspective(1000px) rotateX(-180deg);
    }
    100% {
      transform: perspective(1000px) rotateX(0);
    }
  }

  @keyframes inkSpread {
    0% {
      letter-spacing: normal;
      opacity: 0;
    }
    50% {
      letter-spacing: 2px;
      opacity: 0.5;
    }
    100% {
      letter-spacing: normal;
      opacity: 1;
    }
  }
`;

interface CollapsibleProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

const Collapsible_22: React.FC<CollapsibleProps> = ({
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
      background: '#8b4513',
      borderRadius: '8px',
      position: 'relative',
      overflow: 'hidden',
      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.3)',
      backgroundImage: `
        repeating-linear-gradient(
          45deg,
          transparent,
          transparent 10px,
          rgba(0, 0, 0, 0.1) 10px,
          rgba(0, 0, 0, 0.1) 20px
        )
      `,
    }}>
      <style>{bookAnimationKeyframes}</style>

      {/* Book spine texture */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '20px',
        bottom: 0,
        background: '#6b3410',
        boxShadow: 'inset -2px 0 4px rgba(0, 0, 0, 0.3)',
      }} />

      {/* Header (Book cover) */}
      <div
        onClick={toggleCollapsible}
        style={{
          padding: '20px 20px 20px 40px',
          cursor: 'pointer',
          background: 'linear-gradient(45deg, #8b4513 0%, #a0522d 100%)',
          position: 'relative',
          borderBottom: '4px solid #6b3410',
          boxShadow: 'inset 0 0 20px rgba(0, 0, 0, 0.3)',
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
            fontWeight: 700,
            color: '#f4d03f',
            fontFamily: 'Playfair Display, serif',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
            animation: isOpen ? 'inkSpread 0.5s ease-out' : 'none',
          }}>
            {title}
          </h3>

          {/* Bookmark */}
          <div style={{
            width: '20px',
            height: '40px',
            background: '#dc3545',
            borderRadius: '0 0 4px 4px',
            transform: isOpen ? 'translateY(20px)' : 'translateY(0)',
            transition: 'transform 0.3s ease',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
          }} />
        </div>

        {/* Decorative lines */}
        <div style={{
          position: 'absolute',
          top: '50%',
          right: '24px',
          transform: 'translateY(-50%)',
          width: '60px',
          height: '2px',
          background: '#f4d03f',
          boxShadow: '0 -8px 0 #f4d03f, 0 8px 0 #f4d03f',
          opacity: 0.5,
        }} />
      </div>

      {/* Content */}
      <div
        ref={contentRef}
        style={{
          padding: isOpen ? '24px 24px 24px 40px' : '0 24px 0 40px',
          maxHeight: isOpen ? 'none' : '0',
          height: isOpen ? 'auto' : '0',
          opacity: isOpen ? 1 : 0,
          overflow: 'hidden',
          color: '#2c3e50',
          position: 'relative',
          transition: 'all 0.5s ease',
          background: '#f5e6d3',
          animation: isOpen ? 'pageOpen 0.5s ease-out' : 'pageClose 0.5s ease-out',
          transformOrigin: 'top',
          backgroundImage: `
            linear-gradient(
              90deg,
              rgba(0, 0, 0, 0.05) 3%,
              transparent 3%
            )
          `,
        }}
      >
        <div style={{
          position: 'relative',
          zIndex: 2,
          fontFamily: 'Playfair Display, serif',
          fontSize: '1rem',
          lineHeight: '1.8',
          color: '#2c3e50',
          columnCount: 1,
          columnGap: '24px',
          textAlign: 'justify',
        }}>
          {children}
        </div>

        {/* Page number */}
        <div style={{
          position: 'absolute',
          bottom: '16px',
          right: '24px',
          fontSize: '0.8rem',
          color: '#8b4513',
          fontFamily: 'Playfair Display, serif',
          fontStyle: 'italic',
        }}>
          — xxii —
        </div>
      </div>
    </div>
  );
};

export default Collapsible_22; 