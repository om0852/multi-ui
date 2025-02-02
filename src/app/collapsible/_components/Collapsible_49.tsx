'use client';
import React, { useState } from 'react';

const Collapsible_49: React.FC<{ title: string; children: React.ReactNode; defaultOpen?: boolean }> = ({
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
          padding: '16px',
          cursor: 'pointer',
          background: '#4263eb',
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
            <span style={{ fontSize: '1.2rem' }}>🔔</span>
            <div>
              <div style={{ fontWeight: 500 }}>{title}</div>
              <div style={{ fontSize: '0.85rem', opacity: 0.9, marginTop: '4px' }}>3 new notifications</div>
            </div>
          </div>
          <span style={{
            transform: `rotate(${isOpen ? '180deg' : '0deg'})`,
            transition: 'transform 0.3s ease',
          }}>▼</span>
        </div>
      </div>

      <div style={{
        maxHeight: isOpen ? '500px' : '0',
        overflow: 'hidden',
        transition: 'all 0.3s ease',
      }}>
        <div style={{ padding: '8px' }}>
          {/* Notification items */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
          }}>
            <div style={{
              padding: '12px',
              borderBottom: '1px solid #e9ecef',
              cursor: 'pointer',
              transition: 'background 0.2s',
              ':hover': { background: '#f8f9fa' },
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '12px',
              }}>
                <div style={{
                  width: '8px',
                  height: '8px',
                  background: '#4263eb',
                  borderRadius: '50%',
                  marginTop: '6px',
                }}/>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '0.9rem', color: '#495057', fontWeight: 500 }}>New message from Alex</div>
                  <div style={{ fontSize: '0.85rem', color: '#868e96', marginTop: '4px' }}>Hey, just checking in about the project...</div>
                  <div style={{ fontSize: '0.8rem', color: '#adb5bd', marginTop: '8px' }}>2 minutes ago</div>
                </div>
              </div>
            </div>

            <div style={{
              padding: '12px',
              borderBottom: '1px solid #e9ecef',
              cursor: 'pointer',
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '12px',
              }}>
                <div style={{
                  width: '8px',
                  height: '8px',
                  background: '#4263eb',
                  borderRadius: '50%',
                  marginTop: '6px',
                }}/>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '0.9rem', color: '#495057', fontWeight: 500 }}>System Update</div>
                  <div style={{ fontSize: '0.85rem', color: '#868e96', marginTop: '4px' }}>Your system has been updated successfully</div>
                  <div style={{ fontSize: '0.8rem', color: '#adb5bd', marginTop: '8px' }}>1 hour ago</div>
                </div>
              </div>
            </div>

            <div style={{
              padding: '12px',
              cursor: 'pointer',
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '12px',
              }}>
                <div style={{
                  width: '8px',
                  height: '8px',
                  background: '#4263eb',
                  borderRadius: '50%',
                  marginTop: '6px',
                }}/>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '0.9rem', color: '#495057', fontWeight: 500 }}>Security Alert</div>
                  <div style={{ fontSize: '0.85rem', color: '#868e96', marginTop: '4px' }}>New login detected from Chrome on Windows</div>
                  <div style={{ fontSize: '0.8rem', color: '#adb5bd', marginTop: '8px' }}>2 hours ago</div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional content */}
          <div style={{
            padding: '16px',
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

export default Collapsible_49; 