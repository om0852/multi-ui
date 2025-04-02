'use client';
import React, { useState } from 'react';

const luxuryAnimation = `
  @keyframes shimmer {
    0% {
      background-position: -200% center;
    }
    100% {
      background-position: 200% center;
    }
  }

  @keyframes borderGlow {
    0%, 100% {
      border-color: #d4af37;
      box-shadow: 0 0 10px rgba(212, 175, 55, 0.3);
    }
    50% {
      border-color: #ffd700;
      box-shadow: 0 0 20px rgba(212, 175, 55, 0.5);
    }
  }
`;

const Collapsible_42: React.FC<{ title: string; children: React.ReactNode; defaultOpen?: boolean }> = ({
  title,
  children,
  defaultOpen = false,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div style={{
      margin: '16px',
      background: '#1c1c1c',
      border: '2px solid #d4af37',
      borderRadius: '8px',
      overflow: 'hidden',
      animation: 'borderGlow 3s infinite',
      position: 'relative',
    }}>
      <style>{luxuryAnimation}</style>

      {/* Luxury pattern overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `
          linear-gradient(45deg, transparent 25%, rgba(212, 175, 55, 0.05) 25%),
          linear-gradient(-45deg, transparent 25%, rgba(212, 175, 55, 0.05) 25%),
          linear-gradient(45deg, rgba(212, 175, 55, 0.05) 75%, transparent 75%),
          linear-gradient(-45deg, rgba(212, 175, 55, 0.05) 75%, transparent 75%)
        `,
        backgroundSize: '20px 20px',
        pointerEvents: 'none',
      }} />

      <div
        onClick={() => setIsOpen(!isOpen)}
        style={{
          padding: '20px 24px',
          cursor: 'pointer',
          position: 'relative',
          background: isOpen ? 'rgba(212, 175, 55, 0.1)' : 'transparent',
          transition: 'background 0.3s ease',
        }}
      >
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <h3 style={{
            margin: 0,
            color: '#d4af37',
            fontSize: '1.2rem',
            fontFamily: 'Didot, serif',
            fontWeight: 400,
            letterSpacing: '1px',
            background: 'linear-gradient(90deg, #d4af37, #ffd700, #d4af37)',
            backgroundSize: '200% auto',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            animation: 'shimmer 3s linear infinite',
          }}>
            ✧ {title} ✧
          </h3>
          <div style={{
            width: '24px',
            height: '24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid #d4af37',
            borderRadius: '50%',
            transform: `rotate(${isOpen ? '180deg' : '0deg'})`,
            transition: 'transform 0.3s ease',
          }}>
            <span style={{
              color: '#d4af37',
              fontSize: '0.8rem',
            }}>▼</span>
          </div>
        </div>
      </div>

      <div style={{
        maxHeight: isOpen ? '500px' : '0',
        overflow: 'hidden',
        transition: 'all 0.3s ease',
      }}>
        <div style={{
          padding: '20px 24px',
          color: '#d4af37',
          fontFamily: 'Didot, serif',
          fontSize: '1rem',
          lineHeight: '1.8',
          position: 'relative',
          background: 'rgba(212, 175, 55, 0.05)',
          borderTop: '1px solid rgba(212, 175, 55, 0.2)',
        }}>
          {children}

          {/* Decorative corner */}
          <div style={{
            position: 'absolute',
            bottom: '10px',
            right: '10px',
            fontSize: '1.2rem',
            opacity: 0.3,
            color: '#d4af37',
          }}>
            ❦
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collapsible_42; 