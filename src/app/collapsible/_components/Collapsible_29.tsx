'use client';
import React, { useState } from 'react';

const leafAnimation = `
  @keyframes leafWave {
    0%, 100% { transform: rotate(0deg); }
    50% { transform: rotate(5deg); }
  }
`;

const Collapsible_29: React.FC<{ title: string; children: React.ReactNode; defaultOpen?: boolean }> = ({
  title,
  children,
  defaultOpen = false,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div style={{
      margin: '16px',
      background: '#f1f8e9',
      borderRadius: '12px',
      border: '2px solid #81c784',
      boxShadow: '0 4px 12px rgba(129, 199, 132, 0.2)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <style>{leafAnimation}</style>
      <div
        onClick={() => setIsOpen(!isOpen)}
        style={{
          padding: '16px 24px',
          cursor: 'pointer',
          background: isOpen ? '#e8f5e9' : 'transparent',
          borderBottom: isOpen ? '2px solid #81c784' : 'none',
          transition: 'all 0.3s ease',
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
            color: '#2e7d32',
            fontSize: '1.2rem',
            fontFamily: 'system-ui, -apple-system, sans-serif',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}>
            <span style={{
              fontSize: '1.2em',
              animation: 'leafWave 2s ease-in-out infinite',
              display: 'inline-block',
            }}>🌿</span>
            {title}
          </h3>
          <span style={{
            transform: `rotate(${isOpen ? '180deg' : '0deg'})`,
            transition: 'transform 0.3s ease',
            color: '#4caf50',
            fontSize: '0.8rem',
          }}>▼</span>
        </div>
      </div>
      <div style={{
        padding: isOpen ? '16px 24px' : '0 24px',
        maxHeight: isOpen ? '500px' : '0',
        overflow: 'hidden',
        transition: 'all 0.3s ease',
        color: '#1b5e20',
        position: 'relative',
      }}>
        <div style={{
          position: 'relative',
          zIndex: 1,
        }}>
          {children}
        </div>
        <div style={{
          position: 'absolute',
          bottom: '10px',
          right: '10px',
          opacity: 0.1,
          fontSize: '2rem',
          transform: 'rotate(-15deg)',
        }}>
          🍃
        </div>
      </div>
    </div>
  );
};

export default Collapsible_29; 