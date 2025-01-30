'use client';
import React, { useState } from 'react';

const sketchAnimation = `
  @keyframes wiggle {
    0%, 100% { transform: rotate(0deg); }
    25% { transform: rotate(-1deg); }
    75% { transform: rotate(1deg); }
  }
`;

const Collapsible_31: React.FC<{ title: string; children: React.ReactNode; defaultOpen?: boolean }> = ({
  title,
  children,
  defaultOpen = false,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div style={{
      margin: '16px',
      background: '#fff',
      border: '2px solid #333',
      borderRadius: '8px',
      boxShadow: '4px 4px 0 #333',
      fontFamily: '"Comic Sans MS", cursive',
      position: 'relative',
      animation: 'wiggle 4s ease-in-out infinite',
    }}>
      <style>{sketchAnimation}</style>
      
      <div
        onClick={() => setIsOpen(!isOpen)}
        style={{
          padding: '16px 24px',
          cursor: 'pointer',
          borderBottom: isOpen ? '2px solid #333' : 'none',
          background: '#fff',
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
            fontSize: '1.2rem',
            color: '#333',
            textDecoration: 'underline wavy #666',
            textUnderlineOffset: '4px',
          }}>
            ✎ {title}
          </h3>
          <div style={{
            transform: `rotate(${isOpen ? '180deg' : '0deg'})`,
            transition: 'transform 0.3s ease',
            fontSize: '1.2rem',
          }}>
            ✎
          </div>
        </div>

        {/* Decorative squiggles */}
        <div style={{
          position: 'absolute',
          bottom: isOpen ? '-2px' : '0',
          left: '24px',
          right: '24px',
          height: '2px',
          background: `repeating-linear-gradient(
            to right,
            #333 0,
            #333 5px,
            transparent 5px,
            transparent 8px
          )`,
        }} />
      </div>

      <div style={{
        padding: isOpen ? '16px 24px' : '0 24px',
        maxHeight: isOpen ? '500px' : '0',
        overflow: 'hidden',
        transition: 'all 0.3s ease',
        color: '#444',
      }}>
        <div style={{
          position: 'relative',
          fontSize: '1rem',
          lineHeight: '1.6',
        }}>
          {children}
        </div>

        {/* Doodle elements */}
        <div style={{
          position: 'absolute',
          bottom: '8px',
          right: '16px',
          fontSize: '1.2rem',
          opacity: 0.2,
          transform: 'rotate(-15deg)',
        }}>
          ✎✎✎
        </div>
      </div>
    </div>
  );
};

export default Collapsible_31; 