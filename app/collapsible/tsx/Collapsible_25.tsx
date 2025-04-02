'use client';
import React, { useState } from 'react';

const Collapsible_25: React.FC<{ title: string; children: React.ReactNode; defaultOpen?: boolean }> = ({
  title,
  children,
  defaultOpen = false,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div style={{
      margin: '16px',
      background: '#222',
      borderRadius: '4px',
      border: '1px solid #333',
    }}>
      <div
        onClick={() => setIsOpen(!isOpen)}
        style={{
          padding: '12px 16px',
          cursor: 'pointer',
          color: '#fff',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: isOpen ? '1px solid #333' : 'none',
        }}
      >
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 400 }}>{title}</h3>
        <span style={{ 
          transform: `rotate(${isOpen ? '180deg' : '0deg'})`,
          transition: 'transform 0.2s ease',
          opacity: 0.5
        }}>▼</span>
      </div>
      <div style={{
        padding: isOpen ? '12px 16px' : '0',
        maxHeight: isOpen ? '500px' : '0',
        overflow: 'hidden',
        transition: 'all 0.2s ease',
        color: '#aaa',
      }}>
        {children}
      </div>
    </div>
  );
};

export default Collapsible_25; 