'use client';
import React, { useState } from 'react';

const fileAnimation = `
  @keyframes appear {
    from { opacity: 0; transform: translateY(-4px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

const Collapsible_47: React.FC<{ title: string; children: React.ReactNode; defaultOpen?: boolean }> = ({
  title,
  children,
  defaultOpen = false,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div style={{
      margin: '16px',
      background: '#ffffff',
      borderRadius: '8px',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
      overflow: 'hidden',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    }}>
      <style>{fileAnimation}</style>

      <div
        onClick={() => setIsOpen(!isOpen)}
        style={{
          padding: '12px 16px',
          cursor: 'pointer',
          background: '#f8f9fa',
          borderBottom: '1px solid #e9ecef',
          userSelect: 'none',
        }}
      >
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          color: '#495057',
        }}>
          <span style={{
            fontSize: '1.1rem',
            color: '#228be6',
          }}>
            {isOpen ? '📂' : '📁'}
          </span>
          <span style={{
            fontSize: '0.95rem',
            fontWeight: 500,
          }}>
            {title}
          </span>
          <span style={{
            marginLeft: 'auto',
            fontSize: '0.8rem',
            transform: `rotate(${isOpen ? '90deg' : '0deg'})`,
            transition: 'transform 0.2s ease',
          }}>
            ▶
          </span>
        </div>
      </div>

      <div style={{
        maxHeight: isOpen ? '500px' : '0',
        overflow: 'hidden',
        transition: 'all 0.3s ease',
      }}>
        <div style={{
          padding: '12px 16px 12px 44px',
          animation: isOpen ? 'appear 0.3s ease-out' : 'none',
        }}>
          {/* File items */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '0.9rem',
              color: '#495057',
            }}>
              <span>📄</span>
              <span>document.pdf</span>
              <span style={{ marginLeft: 'auto', fontSize: '0.8rem', color: '#868e96' }}>2.3 MB</span>
            </div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '0.9rem',
              color: '#495057',
            }}>
              <span>📄</span>
              <span>report.docx</span>
              <span style={{ marginLeft: 'auto', fontSize: '0.8rem', color: '#868e96' }}>1.8 MB</span>
            </div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '0.9rem',
              color: '#495057',
            }}>
              <span>📄</span>
              <span>presentation.pptx</span>
              <span style={{ marginLeft: 'auto', fontSize: '0.8rem', color: '#868e96' }}>4.5 MB</span>
            </div>
          </div>

          {/* Additional content */}
          <div style={{
            marginTop: '16px',
            fontSize: '0.9rem',
            color: '#495057',
          }}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collapsible_47; 