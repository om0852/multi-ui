'use client';
import React, { useState } from 'react';

const Collapsible_33: React.FC<{ title: string; children: React.ReactNode; defaultOpen?: boolean }> = ({
  title,
  children,
  defaultOpen = false,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div style={{
      margin: '16px',
      background: '#000',
      border: '2px solid #fff',
      outline: '2px solid #000',
    }}>
      <div
        onClick={() => setIsOpen(!isOpen)}
        style={{
          padding: '16px',
          cursor: 'pointer',
          background: '#000',
          borderBottom: isOpen ? '2px solid #fff' : 'none',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          userSelect: 'none',
        }}
      >
        <h3 style={{
          margin: 0,
          color: '#fff',
          fontSize: '1rem',
          fontFamily: 'monospace',
          fontWeight: 'normal',
          textTransform: 'uppercase',
          letterSpacing: '2px',
        }}>
          [{isOpen ? '-' : '+'}] {title}
        </h3>
        <div style={{
          color: '#fff',
          fontFamily: 'monospace',
          fontSize: '0.8rem',
        }}>
          {isOpen ? '▼' : '▲'}
        </div>
      </div>

      <div style={{
        maxHeight: isOpen ? '500px' : '0',
        overflow: 'hidden',
        transition: 'max-height 0.3s ease',
        background: '#000',
      }}>
        <div style={{
          padding: '16px',
          color: '#fff',
          fontFamily: 'monospace',
          fontSize: '0.9rem',
          lineHeight: '1.5',
          borderTop: isOpen ? '2px solid #fff' : 'none',
        }}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Collapsible_33; 