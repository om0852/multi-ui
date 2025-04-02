'use client';
import React, { useState } from 'react';

const Collapsible_27: React.FC<{ title: string; children: React.ReactNode; defaultOpen?: boolean }> = ({
  title,
  children,
  defaultOpen = false,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div style={{
      margin: '16px',
      background: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(10px)',
      borderRadius: '16px',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    }}>
      <div
        onClick={() => setIsOpen(!isOpen)}
        style={{
          padding: '16px 24px',
          cursor: 'pointer',
          borderBottom: isOpen ? '1px solid rgba(255, 255, 255, 0.2)' : 'none',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          color: 'rgba(255, 255, 255, 0.9)',
        }}
      >
        <h3 style={{ 
          margin: 0,
          fontSize: '1.1rem',
          fontWeight: 500,
          textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        }}>{title}</h3>
        <span style={{ 
          transform: `rotate(${isOpen ? '180deg' : '0deg'})`,
          transition: 'transform 0.3s ease',
          opacity: 0.8,
        }}>▼</span>
      </div>
      <div style={{
        padding: isOpen ? '16px 24px' : '0 24px',
        maxHeight: isOpen ? '500px' : '0',
        overflow: 'hidden',
        transition: 'all 0.3s ease',
        color: 'rgba(255, 255, 255, 0.8)',
      }}>
        {children}
      </div>
    </div>
  );
};

export default Collapsible_27; 