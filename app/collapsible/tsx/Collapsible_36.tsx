'use client';
import React, { useState } from 'react';

const scrollAnimation = `
  @keyframes parchmentGlow {
    0%, 100% {
      box-shadow: 0 0 15px rgba(255, 223, 186, 0.2);
    }
    50% {
      box-shadow: 0 0 25px rgba(255, 223, 186, 0.4);
    }
  }

  @keyframes unfold {
    from {
      transform: scaleY(0);
      opacity: 0;
    }
    to {
      transform: scaleY(1);
      opacity: 1;
    }
  }
`;

const Collapsible_36: React.FC<{ title: string; children: React.ReactNode; defaultOpen?: boolean }> = ({
  title,
  children,
  defaultOpen = false,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div style={{
      margin: '16px',
      background: '#f9e4c3',
      border: '3px solid #8b4513',
      borderRadius: '8px',
      boxShadow: '0 0 15px rgba(255, 223, 186, 0.2)',
      animation: 'parchmentGlow 3s infinite',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <style>{scrollAnimation}</style>

      {/* Parchment texture */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `
          radial-gradient(#d4a76a 15%, transparent 16%) 0 0,
          radial-gradient(#d4a76a 15%, transparent 16%) 8px 8px
        `,
        backgroundSize: '16px 16px',
        opacity: 0.1,
      }} />

      <div
        onClick={() => setIsOpen(!isOpen)}
        style={{
          padding: '16px 24px',
          cursor: 'pointer',
          borderBottom: isOpen ? '2px solid #8b4513' : 'none',
          background: 'rgba(139, 69, 19, 0.1)',
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
            color: '#4a1f05',
            fontSize: '1.3rem',
            fontFamily: 'Luminari, Fantasy',
            fontWeight: 'bold',
            textTransform: 'capitalize',
            letterSpacing: '1px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}>
            ⚔️ {title}
          </h3>
          <div style={{
            fontSize: '1.2rem',
            transform: `rotate(${isOpen ? '180deg' : '0deg'})`,
            transition: 'transform 0.3s ease',
            color: '#4a1f05',
          }}>
            ⚜️
          </div>
        </div>

        {/* Decorative border */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: '10%',
          right: '10%',
          height: '2px',
          background: `repeating-linear-gradient(
            90deg,
            #8b4513,
            #8b4513 10px,
            transparent 10px,
            transparent 20px
          )`,
        }} />
      </div>

      <div style={{
        maxHeight: isOpen ? '500px' : '0',
        overflow: 'hidden',
        transition: 'all 0.4s ease',
        transformOrigin: 'top',
        animation: isOpen ? 'unfold 0.4s ease-out' : 'none',
      }}>
        <div style={{
          padding: '20px 24px',
          color: '#4a1f05',
          fontFamily: 'Luminari, Fantasy',
          fontSize: '1rem',
          lineHeight: '1.6',
          position: 'relative',
        }}>
          {children}

          {/* Decorative seal */}
          <div style={{
            position: 'absolute',
            bottom: '10px',
            right: '10px',
            width: '40px',
            height: '40px',
            background: '#8b4513',
            borderRadius: '50%',
            opacity: 0.2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#f9e4c3',
            fontSize: '1.2rem',
          }}>
            ⚔️
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collapsible_36; 