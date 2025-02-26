'use client';
import React, { useState } from 'react';

const Collapsible_24: React.FC<{ title: string; children: React.ReactNode; defaultOpen?: boolean }> = ({
  title,
  children,
  defaultOpen = false,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div style={{
      margin: '16px',
      background: '#1a1a1a',
      borderRadius: '8px',
      border: '2px solid #00ff99',
      boxShadow: `0 0 10px #00ff99, inset 0 0 5px #00ff99`,
    }}>
      <div
        onClick={() => setIsOpen(!isOpen)}
        style={{
          padding: '16px',
          cursor: 'pointer',
          color: '#00ff99',
          textShadow: '0 0 5px #00ff99',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          transition: 'all 0.3s ease',
          background: isOpen ? 'rgba(0, 255, 153, 0.1)' : 'transparent',
        }}
      >
        <h3 style={{ margin: 0, fontSize: '1.2rem' }}>{title}</h3>
        <span style={{ transform: `rotate(${isOpen ? '180deg' : '0deg'})`, transition: 'transform 0.3s ease' }}>▼</span>
      </div>
      <div style={{
        padding: isOpen ? '16px' : '0',
        maxHeight: isOpen ? '500px' : '0',
        overflow: 'hidden',
        transition: 'all 0.3s ease',
        color: '#fff',
      }}>
        {children}
      </div>
    </div>
  );
};

export default Collapsible_24; 