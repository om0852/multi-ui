'use client';
import React, { useState } from 'react';

const Collapsible_28: React.FC<{ title: string; children: React.ReactNode; defaultOpen?: boolean }> = ({
  title,
  children,
  defaultOpen = false,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div style={{
      margin: '16px',
      background: '#f4f1de',
      border: '3px solid #463f3a',
      boxShadow: '4px 4px 0 #463f3a',
      fontFamily: '"Courier New", Courier, monospace',
    }}>
      <div
        onClick={() => setIsOpen(!isOpen)}
        style={{
          padding: '12px 20px',
          cursor: 'pointer',
          background: '#e07a5f',
          borderBottom: '3px solid #463f3a',
          color: '#463f3a',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <h3 style={{ 
          margin: 0,
          fontSize: '1.2rem',
          fontWeight: 'bold',
          letterSpacing: '1px',
          textTransform: 'uppercase',
        }}>
          {title}
        </h3>
        <span style={{ 
          transform: `rotate(${isOpen ? '180deg' : '0deg'})`,
          transition: 'transform 0.3s ease',
          fontSize: '1.2rem',
          fontWeight: 'bold',
        }}>▼</span>
      </div>
      <div style={{
        padding: isOpen ? '16px 20px' : '0 20px',
        maxHeight: isOpen ? '500px' : '0',
        overflow: 'hidden',
        transition: 'all 0.3s ease',
        color: '#463f3a',
        background: '#f4f1de',
        borderTop: isOpen ? '3px dotted #463f3a' : 'none',
      }}>
        <div style={{
          fontSize: '1rem',
          lineHeight: '1.5',
        }}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Collapsible_28; 