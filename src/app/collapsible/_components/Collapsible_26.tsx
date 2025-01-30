'use client';
import React, { useState } from 'react';

const Collapsible_26: React.FC<{ title: string; children: React.ReactNode; defaultOpen?: boolean }> = ({
  title,
  children,
  defaultOpen = false,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div style={{
      margin: '16px',
      background: 'linear-gradient(135deg, #6366f1, #a855f7)',
      borderRadius: '12px',
      padding: '2px',
    }}>
      <div style={{
        background: '#fff',
        borderRadius: '10px',
      }}>
        <div
          onClick={() => setIsOpen(!isOpen)}
          style={{
            padding: '14px 20px',
            cursor: 'pointer',
            background: isOpen ? 'linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(168, 85, 247, 0.1))' : '#fff',
            borderRadius: '10px',
            transition: 'background 0.3s ease',
          }}
        >
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
            <h3 style={{ 
              margin: 0,
              fontSize: '1.1rem',
              background: 'linear-gradient(135deg, #6366f1, #a855f7)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>{title}</h3>
            <span style={{ 
              transform: `rotate(${isOpen ? '180deg' : '0deg'})`,
              transition: 'transform 0.3s ease',
              color: '#a855f7'
            }}>▼</span>
          </div>
        </div>
        <div style={{
          padding: isOpen ? '0 20px 20px' : '0 20px',
          maxHeight: isOpen ? '500px' : '0',
          overflow: 'hidden',
          transition: 'all 0.3s ease',
          color: '#4b5563',
        }}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Collapsible_26; 