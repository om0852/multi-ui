'use client';
import React, { useState } from 'react';

const Collapsible_37: React.FC<{ title: string; children: React.ReactNode; defaultOpen?: boolean }> = ({
  title,
  children,
  defaultOpen = false,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div style={{
      margin: '16px',
      background: '#e0e5ec',
      borderRadius: '16px',
      padding: '2px',
      boxShadow: `
        8px 8px 16px #a3b1c6,
        -8px -8px 16px #ffffff
      `,
    }}>
      <div style={{
        background: '#e0e5ec',
        borderRadius: '14px',
        overflow: 'hidden',
      }}>
        <div
          onClick={() => setIsOpen(!isOpen)}
          style={{
            padding: '16px 24px',
            cursor: 'pointer',
            background: isOpen ? '#e0e5ec' : '#e0e5ec',
            position: 'relative',
            boxShadow: isOpen 
              ? 'inset 2px 2px 5px #b8b9be, inset -3px -3px 7px #ffffff'
              : 'none',
            transition: 'all 0.3s ease',
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
              color: '#2d4059',
              fontFamily: 'system-ui, -apple-system, sans-serif',
              fontWeight: 600,
            }}>
              {title}
            </h3>
            <div style={{
              width: '24px',
              height: '24px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: '#e0e5ec',
              boxShadow: isOpen
                ? 'inset 2px 2px 5px #b8b9be, inset -3px -3px 7px #ffffff'
                : '3px 3px 6px #b8b9be, -3px -3px 6px #ffffff',
              transition: 'all 0.3s ease',
            }}>
              <span style={{
                transform: `rotate(${isOpen ? '180deg' : '0deg'})`,
                transition: 'transform 0.3s ease',
                color: '#2d4059',
                fontSize: '0.8rem',
              }}>
                ▼
              </span>
            </div>
          </div>
        </div>

        <div style={{
          maxHeight: isOpen ? '500px' : '0',
          overflow: 'hidden',
          transition: 'all 0.3s ease',
          background: '#e0e5ec',
          boxShadow: isOpen
            ? 'inset 2px 2px 5px #b8b9be, inset -3px -3px 7px #ffffff'
            : 'none',
        }}>
          <div style={{
            padding: '20px 24px',
            color: '#4a4a4a',
            fontSize: '0.95rem',
            lineHeight: '1.6',
            fontFamily: 'system-ui, -apple-system, sans-serif',
          }}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collapsible_37; 