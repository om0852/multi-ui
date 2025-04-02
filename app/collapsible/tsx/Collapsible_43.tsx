'use client';
import React, { useState } from 'react';

const dashboardAnimation = `
  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
  }

  @keyframes progress {
    from { width: 0; }
    to { width: 75%; }
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

const Collapsible_43: React.FC<{ title: React.ReactNode; children: React.ReactNode; defaultOpen?: boolean }> = ({
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
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
      overflow: 'hidden',
      fontFamily: 'Inter, system-ui, sans-serif',
    }}>
      <style>{dashboardAnimation}</style>

      <div
        onClick={() => setIsOpen(!isOpen)}
        style={{
          padding: '20px',
          cursor: 'pointer',
          background: '#f8fafc',
          borderBottom: '1px solid #e2e8f0',
        }}
      >
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}>
            <div style={{
              width: '32px',
              height: '32px',
              borderRadius: '8px',
              background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              fontSize: '1.2rem',
            }}>
              📊
            </div>
            <div>
              <h3 style={{
                margin: 0,
                fontSize: '1rem',
                fontWeight: 600,
                color: '#1e293b',
              }}>
                {title}
              </h3>
              <div style={{
                fontSize: '0.8rem',
                color: '#64748b',
                marginTop: '2px',
              }}>
                Last updated: Just now
              </div>
            </div>
          </div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              color: '#10b981',
              fontSize: '0.9rem',
            }}>
              <span>+12.5%</span>
              <span style={{
                transform: 'rotate(-45deg)',
              }}>
                ↗
              </span>
            </div>
            <div style={{
              color: '#64748b',
              transform: `rotate(${isOpen ? '180deg' : '0deg'})`,
              transition: 'transform 0.3s ease',
            }}>
              ▼
            </div>
          </div>
        </div>
      </div>

      <div style={{
        maxHeight: isOpen ? '500px' : '0',
        overflow: 'hidden',
        transition: 'all 0.3s ease',
      }}>
        <div style={{
          padding: '20px',
          animation: isOpen ? 'fadeIn 0.3s ease-out' : 'none',
        }}>
          <div style={{
            marginBottom: '20px',
            background: '#f1f5f9',
            padding: '16px',
            borderRadius: '8px',
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: '12px',
            }}>
              <span style={{ color: '#475569', fontSize: '0.9rem' }}>Progress</span>
              <span style={{ color: '#475569', fontSize: '0.9rem' }}>75%</span>
            </div>
            <div style={{
              height: '8px',
              background: '#e2e8f0',
              borderRadius: '4px',
              overflow: 'hidden',
            }}>
              <div style={{
                height: '100%',
                background: 'linear-gradient(90deg, #6366f1, #8b5cf6)',
                animation: isOpen ? 'progress 1s ease-out forwards' : 'none',
                width: '0',
              }} />
            </div>
          </div>
          <div style={{
            color: '#475569',
            fontSize: '0.95rem',
            lineHeight: '1.6',
          }}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collapsible_43; 