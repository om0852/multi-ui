'use client';
import React, { useState } from 'react';

const newspaperAnimation = `
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  @keyframes paperTexture {
    0%, 100% { background-position: 0% 0%; }
    50% { background-position: 100% 100%; }
  }
`;

const Collapsible_34: React.FC<{ title: string; children: React.ReactNode; defaultOpen?: boolean }> = ({
  title,
  children,
  defaultOpen = false,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div style={{
      margin: '16px',
      background: '#f4f1ea',
      border: '1px solid #8b7355',
      boxShadow: '3px 3px 6px rgba(0, 0, 0, 0.1)',
      position: 'relative',
      fontFamily: '"Times New Roman", serif',
    }}>
      <style>{newspaperAnimation}</style>

      {/* Paper texture overlay */}
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
        opacity: 0.1,
        animation: 'paperTexture 10s ease infinite',
        pointerEvents: 'none',
      }} />

      <div
        onClick={() => setIsOpen(!isOpen)}
        style={{
          padding: '16px 24px',
          cursor: 'pointer',
          borderBottom: '2px solid #8b7355',
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
            fontSize: '1.5rem',
            fontWeight: 700,
            color: '#2c1810',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            borderBottom: '2px double #8b7355',
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
      </div>

      <div style={{
        maxHeight: isOpen ? '500px' : '0',
        overflow: 'hidden',
        transition: 'all 0.3s ease',
        animation: isOpen ? 'fadeIn 0.5s ease-out' : 'none',
      }}>
        <div style={{
          padding: '20px 24px',
          color: '#2c1810',
          position: 'relative',
          columnCount: 2,
          columnGap: '24px',
          fontSize: '0.95rem',
          lineHeight: '1.6',
          textAlign: 'justify',
        }}>
          {children}
        </div>
        
        {/* Vintage date stamp */}
        <div style={{
          position: 'absolute',
          bottom: '10px',
          right: '20px',
          fontFamily: 'monospace',
          fontSize: '0.8rem',
          color: 'rgba(44, 24, 16, 0.5)',
          transform: 'rotate(-5deg)',
        }}>
          Est. MCMXXIII
        </div>
      </div>
    </div>
  );
};

export default Collapsible_34; 