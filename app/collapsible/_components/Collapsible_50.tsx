'use client';
import React, { useState } from 'react';

const Collapsible_50: React.FC<{ title: string; children: React.ReactNode; defaultOpen?: boolean }> = ({
  title,
  children,
  defaultOpen = false,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div style={{
      margin: '16px',
      background: '#ffffff',
      borderRadius: '12px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
      overflow: 'hidden',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    }}>
      <div
        onClick={() => setIsOpen(!isOpen)}
        style={{
          padding: '20px',
          cursor: 'pointer',
          background: 'linear-gradient(135deg, #5f3dc4, #7048e8)',
          color: 'white',
          position: 'relative',
        }}
      >
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}>
            <span style={{ fontSize: '1.2rem' }}>💎</span>
            <div>
              <div style={{ fontWeight: 600, fontSize: '1.1rem' }}>{title}</div>
              <div style={{ fontSize: '0.9rem', opacity: 0.9, marginTop: '4px' }}>Most Popular</div>
            </div>
          </div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
          }}>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '1.4rem', fontWeight: 700 }}>$29</div>
              <div style={{ fontSize: '0.8rem', opacity: 0.9 }}>per month</div>
            </div>
            <span style={{
              transform: `rotate(${isOpen ? '180deg' : '0deg'})`,
              transition: 'transform 0.3s ease',
            }}>▼</span>
          </div>
        </div>
      </div>

      <div style={{
        maxHeight: isOpen ? '500px' : '0',
        overflow: 'hidden',
        transition: 'all 0.3s ease',
      }}>
        <div style={{ padding: '20px' }}>
          {/* Feature list */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              color: '#495057',
            }}>
              <span style={{ color: '#5f3dc4' }}>✓</span>
              <span style={{ fontSize: '0.95rem' }}>Unlimited projects</span>
            </div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              color: '#495057',
            }}>
              <span style={{ color: '#5f3dc4' }}>✓</span>
              <span style={{ fontSize: '0.95rem' }}>Priority support</span>
            </div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              color: '#495057',
            }}>
              <span style={{ color: '#5f3dc4' }}>✓</span>
              <span style={{ fontSize: '0.95rem' }}>Advanced analytics</span>
            </div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              color: '#495057',
            }}>
              <span style={{ color: '#5f3dc4' }}>✓</span>
              <span style={{ fontSize: '0.95rem' }}>Custom integrations</span>
            </div>
          </div>

          {/* CTA Button */}
          <button style={{
            width: '100%',
            padding: '12px',
            marginTop: '20px',
            background: '#5f3dc4',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            fontSize: '0.95rem',
            fontWeight: 500,
            cursor: 'pointer',
            transition: 'background 0.2s',
          }}>
            Choose Plan
          </button>

          {/* Additional content */}
          <div style={{
            marginTop: '16px',
            padding: '16px',
            background: '#f8f9fa',
            borderRadius: '8px',
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

export default Collapsible_50; 