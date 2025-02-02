'use client';
import React, { useState } from 'react';

const terminalAnimation = `
  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }
`;

const Collapsible_38: React.FC<{ title: string; children: React.ReactNode; defaultOpen?: boolean }> = ({
  title,
  children,
  defaultOpen = false,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div style={{
      margin: '16px',
      background: '#1e1e1e',
      border: '1px solid #3c3c3c',
      borderRadius: '6px',
      fontFamily: 'Consolas, Monaco, monospace',
      overflow: 'hidden',
    }}>
      <style>{terminalAnimation}</style>

      {/* Terminal header */}
      <div style={{
        background: '#323232',
        padding: '8px 16px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid #3c3c3c',
      }}>
        <div style={{
          display: 'flex',
          gap: '6px',
        }}>
          <div style={{
            width: '12px',
            height: '12px',
            borderRadius: '50%',
            background: '#ff5f56',
          }} />
          <div style={{
            width: '12px',
            height: '12px',
            borderRadius: '50%',
            background: '#ffbd2e',
          }} />
          <div style={{
            width: '12px',
            height: '12px',
            borderRadius: '50%',
            background: '#27c93f',
          }} />
        </div>
        <div style={{
          color: '#999',
          fontSize: '0.8rem',
        }}>
          bash ~ {title.toLowerCase()}
        </div>
      </div>

      <div
        onClick={() => setIsOpen(!isOpen)}
        style={{
          padding: '12px 16px',
          cursor: 'pointer',
          borderBottom: '1px solid #3c3c3c',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
        }}
      >
        <span style={{
          color: '#00ff00',
        }}>
          $
        </span>
        <span style={{
          color: '#dcdcdc',
        }}>
          ./expand {isOpen ? '--collapse' : '--expand'}
        </span>
        <span style={{
          color: '#666',
          animation: 'blink 1s step-end infinite',
        }}>
          |
        </span>
      </div>

      <div style={{
        maxHeight: isOpen ? '500px' : '0',
        overflow: 'hidden',
        transition: 'all 0.3s ease',
      }}>
        <div style={{
          padding: '16px',
          color: '#dcdcdc',
          fontSize: '0.9rem',
          lineHeight: '1.6',
          background: '#1e1e1e',
        }}>
          <div style={{
            display: 'flex',
            gap: '8px',
            marginBottom: '8px',
          }}>
            <span style={{ color: '#00ff00' }}>{'>'}</span>
            <span style={{ color: '#569cd6' }}>Output:</span>
          </div>
          <div style={{
            paddingLeft: '24px',
            borderLeft: '1px solid #3c3c3c',
          }}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collapsible_38; 