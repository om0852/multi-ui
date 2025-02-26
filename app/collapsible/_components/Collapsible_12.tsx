'use client';
import React, { useState, useRef } from 'react';

const steampunkAnimationKeyframes = `
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @keyframes reverseSpin {
    from {
      transform: rotate(360deg);
    }
    to {
      transform: rotate(0deg);
    }
  }

  @keyframes steamRelease {
    0% {
      opacity: 0;
      transform: translateY(0) scale(1);
    }
    50% {
      opacity: 0.5;
      transform: translateY(-10px) scale(1.5);
    }
    100% {
      opacity: 0;
      transform: translateY(-20px) scale(2);
    }
  }

  @keyframes metalShine {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
`;

interface CollapsibleProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

const Collapsible_12: React.FC<CollapsibleProps> = ({
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
      background: 'linear-gradient(45deg, #2c2c2c, #1a1a1a)',
      border: '4px solid #8b7355',
      borderRadius: '8px',
      position: 'relative',
      overflow: 'hidden',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3), inset 0 2px 4px rgba(255, 255, 255, 0.1)',
    }}>
      <style>{steampunkAnimationKeyframes}</style>

      {/* Metallic texture */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)',
        backgroundSize: '200% 100%',
        animation: 'metalShine 5s linear infinite',
        pointerEvents: 'none',
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
          background: 'linear-gradient(45deg, #8b7355, #6b5842)',
          borderBottom: '4px solid #8b7355',
          position: 'relative',
        }}
      >
        <h3 style={{
          margin: 0,
          fontSize: '1.2rem',
          fontWeight: 700,
          color: '#d4af37',
          textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
          fontFamily: 'Georgia, serif',
        }}>
          {title}
        </h3>

        {/* Gear icon */}
        <div style={{
          position: 'relative',
          width: '24px',
          height: '24px',
        }}>
          <div style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            background: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23d4af37'%3E%3Cpath d='M12 15a3 3 0 100-6 3 3 0 000 6z'/%3E%3Cpath d='M12 2l-2.4 1.5L7.2 2 5.7 4.4 3 4.8l-.4 2.7L0 9l1.5 2.4L0 13.8l2.4 1.5.4 2.7 2.7.4L7 21l2.4-1.5L12 21l2.4-1.5L16.8 21l1.5-2.4 2.7-.4.4-2.7L24 13.8 22.5 12 24 9l-2.4-1.5L21.2 4.8l-2.7-.4L17 2l-2.4 1.5L12 2z'/%3E%3C/svg%3E") center/contain no-repeat`,
            animation: 'spin 10s linear infinite',
          }} />
          <div style={{
            position: 'absolute',
            width: '80%',
            height: '80%',
            top: '10%',
            left: '10%',
            background: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23d4af37'%3E%3Cpath d='M12 15a3 3 0 100-6 3 3 0 000 6z'/%3E%3Cpath d='M12 2l-2.4 1.5L7.2 2 5.7 4.4 3 4.8l-.4 2.7L0 9l1.5 2.4L0 13.8l2.4 1.5.4 2.7 2.7.4L7 21l2.4-1.5L12 21l2.4-1.5L16.8 21l1.5-2.4 2.7-.4.4-2.7L24 13.8 22.5 12 24 9l-2.4-1.5L21.2 4.8l-2.7-.4L17 2l-2.4 1.5L12 2z'/%3E%3C/svg%3E") center/contain no-repeat`,
            animation: 'reverseSpin 7s linear infinite',
          }} />
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
          color: '#d4af37',
          background: 'linear-gradient(45deg, #2c2c2c, #1a1a1a)',
          position: 'relative',
          transition: 'all 0.3s ease',
        }}
      >
        <div style={{
          position: 'relative',
          zIndex: 2,
        }}>
          {children}
        </div>

        {/* Steam effect */}
        {isOpen && (
          <div style={{
            position: 'absolute',
            top: 0,
            left: '50%',
            width: '20px',
            height: '20px',
            background: 'radial-gradient(circle, rgba(255,255,255,0.8) 0%, transparent 70%)',
            animation: 'steamRelease 2s ease-out infinite',
          }} />
        )}

        {/* Rivets */}
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              width: '8px',
              height: '8px',
              background: '#8b7355',
              borderRadius: '50%',
              boxShadow: 'inset -2px -2px 4px rgba(0,0,0,0.3)',
              ...{
                0: { top: '8px', left: '8px' },
                1: { top: '8px', right: '8px' },
                2: { bottom: '8px', left: '8px' },
                3: { bottom: '8px', right: '8px' },
              }[i],
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Collapsible_12; 