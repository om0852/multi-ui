'use client';
import React, { useState } from 'react';

const settingsAnimation = `
  @keyframes slideDown {
    from { opacity: 0; transform: translateY(-8px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
  }
`;

const Toggle: React.FC<{ checked: boolean; onChange: () => void }> = ({ checked, onChange }) => (
  <div
    onClick={onChange}
    style={{
      width: '44px',
      height: '24px',
      background: checked ? '#12b886' : '#dee2e6',
      borderRadius: '12px',
      padding: '2px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
      position: 'relative',
    }}
  >
    <div style={{
      width: '20px',
      height: '20px',
      background: '#ffffff',
      borderRadius: '50%',
      transform: `translateX(${checked ? '20px' : '0'})`,
      transition: 'transform 0.3s ease',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    }} />
  </div>
);

const Collapsible_48: React.FC<{ title: string; children: React.ReactNode; defaultOpen?: boolean }> = ({
  title,
  children,
  defaultOpen = false,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [autoSave, setAutoSave] = useState(true);

  return (
    <div style={{
      margin: '16px',
      background: '#ffffff',
      borderRadius: '12px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      overflow: 'hidden',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    }}>
      <style>{settingsAnimation}</style>

      <div
        onClick={() => setIsOpen(!isOpen)}
        style={{
          padding: '16px 20px',
          cursor: 'pointer',
          background: '#f8f9fa',
          borderBottom: isOpen ? '1px solid #e9ecef' : 'none',
        }}
      >
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
        }}>
          <span style={{
            fontSize: '1.2rem',
            color: '#495057',
          }}>
            ⚙️
          </span>
          <span style={{
            fontSize: '1rem',
            fontWeight: 500,
            color: '#495057',
          }}>
            {title}
          </span>
          <span style={{
            marginLeft: 'auto',
            fontSize: '0.9rem',
            color: '#adb5bd',
            transform: `rotate(${isOpen ? '180deg' : '0deg'})`,
            transition: 'transform 0.3s ease',
          }}>
            ▼
          </span>
        </div>
      </div>

      <div style={{
        maxHeight: isOpen ? '500px' : '0',
        overflow: 'hidden',
        transition: 'all 0.3s ease',
      }}>
        <div style={{
          padding: '20px',
          animation: isOpen ? 'slideDown 0.3s ease-out' : 'none',
        }}>
          {/* Settings options */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
              <div>
                <div style={{ fontSize: '0.95rem', color: '#495057', fontWeight: 500 }}>Notifications</div>
                <div style={{ fontSize: '0.85rem', color: '#868e96', marginTop: '4px' }}>Receive alerts and updates</div>
              </div>
              <Toggle checked={notifications} onChange={() => setNotifications(!notifications)} />
            </div>

            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
              <div>
                <div style={{ fontSize: '0.95rem', color: '#495057', fontWeight: 500 }}>Dark Mode</div>
                <div style={{ fontSize: '0.85rem', color: '#868e96', marginTop: '4px' }}>Switch to dark theme</div>
              </div>
              <Toggle checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
            </div>

            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
              <div>
                <div style={{ fontSize: '0.95rem', color: '#495057', fontWeight: 500 }}>Auto-save</div>
                <div style={{ fontSize: '0.85rem', color: '#868e96', marginTop: '4px' }}>Save changes automatically</div>
              </div>
              <Toggle checked={autoSave} onChange={() => setAutoSave(!autoSave)} />
            </div>
          </div>

          {/* Additional content */}
          <div style={{
            marginTop: '20px',
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

export default Collapsible_48; 