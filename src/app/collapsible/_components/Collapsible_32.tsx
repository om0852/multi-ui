'use client';
import React, { useState } from 'react';

const candyAnimation = `
  @keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-3px); }
  }
  @keyframes rainbow {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
`;

const Collapsible_32: React.FC<{ title: string; children: React.ReactNode; defaultOpen?: boolean }> = ({
  title,
  children,
  defaultOpen = false,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div style={{
      margin: '16px',
      background: 'linear-gradient(45deg, #ffe5e5, #e5f0ff, #fff1e6, #e6ffe6)',
      backgroundSize: '400% 400%',
      animation: 'rainbow 15s ease infinite',
      borderRadius: '20px',
      border: '3px solid #ffb6c1',
      boxShadow: '0 6px 0 #ffb6c1',
      overflow: 'hidden',
    }}>
      <style>{candyAnimation}</style>

      <div
        onClick={() => setIsOpen(!isOpen)}
        style={{
          padding: '16px 24px',
          cursor: 'pointer',
          borderBottom: isOpen ? '3px dashed #ffb6c1' : 'none',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          position: 'relative',
        }}
      >
        <h3 style={{
          margin: 0,
          color: '#ff69b4',
          fontSize: '1.2rem',
          fontFamily: '"Segoe UI", sans-serif',
          fontWeight: 600,
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          animation: 'bounce 2s ease-in-out infinite',
        }}>
          🍬 {title}
        </h3>
        <span style={{
          transform: `rotate(${isOpen ? '180deg' : '0deg'})`,
          transition: 'transform 0.3s ease',
          fontSize: '1.2rem',
        }}>
          🍭
        </span>
      </div>

      <div style={{
        padding: isOpen ? '16px 24px' : '0 24px',
        maxHeight: isOpen ? '500px' : '0',
        overflow: 'hidden',
        transition: 'all 0.3s ease',
        color: '#ff69b4',
        position: 'relative',
      }}>
        <div style={{
          position: 'relative',
          zIndex: 1,
          fontSize: '1rem',
          lineHeight: '1.6',
        }}>
          {children}
        </div>

        {/* Decorative candy elements */}
        <div style={{
          position: 'absolute',
          bottom: '10px',
          right: '10px',
          opacity: 0.2,
          fontSize: '1.5rem',
        }}>
          🍬 🍭 🍪
        </div>
      </div>
    </div>
  );
};

export default Collapsible_32; 