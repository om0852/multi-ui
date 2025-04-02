 'use client';
import React, { useState, useRef } from 'react';

const newspaperAnimationKeyframes = `
  @keyframes paperFade {
    0% {
      opacity: 0;
      transform: translateY(-10px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes inkSpread {
    0% {
      letter-spacing: 0;
    }
    50% {
      letter-spacing: 0.5px;
    }
    100% {
      letter-spacing: 0;
    }
  }

  @keyframes paperTexture {
    0%, 100% {
      background-position: 0% 0%;
    }
    50% {
      background-position: 100% 100%;
    }
  }
`;

interface CollapsibleProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

const Collapsible_14: React.FC<CollapsibleProps> = ({
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
      background: '#f4ecd8',
      border: '1px solid #a89f8c',
      position: 'relative',
      overflow: 'hidden',
      boxShadow: '2px 2px 6px rgba(0, 0, 0, 0.1)',
      fontFamily: 'Georgia, serif',
    }}>
      <style>{newspaperAnimationKeyframes}</style>

      {/* Paper texture */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `
          radial-gradient(#d3c7a7 15%, transparent 16%) 0 0,
          radial-gradient(#d3c7a7 15%, transparent 16%) 8px 8px
        `,
        backgroundSize: '16px 16px',
        backgroundColor: '#f4ecd8',
        opacity: 0.1,
        animation: 'paperTexture 10s ease infinite',
      }} />

      {/* Header */}
      <div
        onClick={toggleCollapsible}
        style={{
          padding: '16px 24px',
          cursor: 'pointer',
          borderBottom: '2px solid #8b7355',
          background: 'rgba(244, 236, 216, 0.9)',
          position: 'relative',
        }}
      >
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <h3 style={{
            margin: 0,
            fontSize: '1.4rem',
            fontWeight: 700,
            color: '#2c1810',
            fontFamily: '"Times New Roman", serif',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            animation: isOpen ? 'inkSpread 2s ease infinite' : 'none',
          }}>
            {title}
          </h3>
          <div style={{
            fontFamily: '"Times New Roman", serif',
            fontSize: '1.2rem',
            color: '#2c1810',
            transform: `rotate(${isOpen ? '180deg' : '0deg'})`,
            transition: 'transform 0.3s ease',
          }}>
            ❧
          </div>
        </div>

        {/* Decorative line */}
        <div style={{
          position: 'absolute',
          bottom: '-2px',
          left: '24px',
          right: '24px',
          height: '2px',
          background: `
            repeating-linear-gradient(
              90deg,
              #8b7355,
              #8b7355 4px,
              transparent 4px,
              transparent 8px
            )
          `,
        }} />
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
          color: '#2c1810',
          position: 'relative',
          transition: 'all 0.3s ease',
          animation: isOpen ? 'paperFade 0.3s ease-out' : 'none',
        }}
      >
        <div style={{
          position: 'relative',
          zIndex: 2,
          columnCount: 2,
          columnGap: '24px',
          fontSize: '0.95rem',
          lineHeight: '1.6',
          textAlign: 'justify',
        }}>
          {children}
        </div>

        {/* Coffee stain */}
        <div style={{
          position: 'absolute',
          bottom: '10px',
          right: '10px',
          width: '60px',
          height: '60px',
          background: 'radial-gradient(circle, rgba(139, 69, 19, 0.1) 0%, rgba(139, 69, 19, 0.05) 50%, transparent 70%)',
          borderRadius: '50%',
          transform: 'rotate(-15deg)',
          pointerEvents: 'none',
        }} />

        {/* Date stamp */}
        <div style={{
          position: 'absolute',
          bottom: '8px',
          left: '24px',
          fontSize: '0.8rem',
          color: 'rgba(44, 24, 16, 0.5)',
          fontFamily: '"Courier New", monospace',
        }}>
          Est. MCMXXIII
        </div>
      </div>
    </div>
  );
};

export default Collapsible_14;
