'use client';
import React, { useState, useRef } from 'react';

const spellbookAnimationKeyframes = `
  @keyframes magicSparkle {
    0%, 100% {
      background-position: 0% 0%;
    }
    50% {
      background-position: 100% 100%;
    }
  }

  @keyframes runeGlow {
    0%, 100% {
      opacity: 0.7;
      filter: brightness(1);
    }
    50% {
      opacity: 1;
      filter: brightness(1.3);
    }
  }

  @keyframes magicReveal {
    0% {
      transform: scale(0.95);
      opacity: 0;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }

  @keyframes pageFlutter {
    0%, 100% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(0.5deg);
    }
    75% {
      transform: rotate(-0.5deg);
    }
  }
`;

interface CollapsibleProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

const Collapsible_16: React.FC<CollapsibleProps> = ({
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
      background: '#2c1810',
      border: '3px solid #8b5e34',
      borderRadius: '8px',
      position: 'relative',
      overflow: 'hidden',
      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
      animation: 'pageFlutter 3s ease-in-out infinite',
    }}>
      <style>{spellbookAnimationKeyframes}</style>

      {/* Magical texture */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `
          radial-gradient(circle at 50% 50%, rgba(255, 215, 0, 0.1), transparent 60%),
          radial-gradient(circle at 20% 20%, rgba(255, 215, 0, 0.05), transparent 40%),
          radial-gradient(circle at 80% 80%, rgba(255, 215, 0, 0.05), transparent 40%)
        `,
        animation: 'magicSparkle 10s ease infinite',
        opacity: 0.5,
      }} />

      {/* Header */}
      <div
        onClick={toggleCollapsible}
        style={{
          padding: '16px 24px',
          cursor: 'pointer',
          background: 'linear-gradient(45deg, #4a3520, #2c1810)',
          borderBottom: '3px solid #8b5e34',
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
            fontSize: '1.3rem',
            fontWeight: 600,
            color: '#ffd700',
            fontFamily: 'Cinzel, serif',
            textShadow: '0 0 10px rgba(255, 215, 0, 0.5)',
            letterSpacing: '1px',
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
            {/* Magical rune */}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                filter: 'drop-shadow(0 0 3px rgba(255, 215, 0, 0.7))',
                animation: 'runeGlow 2s ease-in-out infinite',
              }}
            >
              <path
                d="M12 2L7 12L12 22L17 12L12 2Z"
                stroke="#ffd700"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <path
                d="M7 12H17"
                stroke="#ffd700"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>

        {/* Decorative runes */}
        <div style={{
          position: 'absolute',
          bottom: '-3px',
          left: '24px',
          right: '24px',
          height: '3px',
          background: `
            repeating-linear-gradient(
              90deg,
              #8b5e34,
              #8b5e34 10px,
              #ffd700 10px,
              #ffd700 12px
            )
          `,
          opacity: 0.7,
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
          color: '#ffd700',
          position: 'relative',
          transition: 'all 0.4s ease',
          animation: isOpen ? 'magicReveal 0.4s ease-out' : 'none',
        }}
      >
        <div style={{
          position: 'relative',
          zIndex: 2,
          fontFamily: 'Crimson Text, serif',
          fontSize: '1.1rem',
          lineHeight: '1.6',
          textShadow: '0 0 5px rgba(255, 215, 0, 0.3)',
        }}>
          {children}
        </div>

        {/* Magical seal */}
        <div style={{
          position: 'absolute',
          bottom: '16px',
          right: '16px',
          width: '40px',
          height: '40px',
          background: `
            radial-gradient(circle, rgba(255, 215, 0, 0.2) 0%, transparent 70%),
            repeating-conic-gradient(
              from 0deg,
              rgba(255, 215, 0, 0.1) 0deg 30deg,
              transparent 30deg 60deg
            )
          `,
          borderRadius: '50%',
          animation: 'runeGlow 3s ease-in-out infinite',
        }} />
      </div>
    </div>
  );
};

export default Collapsible_16; 