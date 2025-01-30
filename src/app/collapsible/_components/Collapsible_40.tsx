'use client';
import React, { useState } from 'react';

const weatherAnimation = `
  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-5px); }
  }

  @keyframes shine {
    0% { background-position: 200% center; }
    100% { background-position: -200% center; }
  }

  @keyframes rain {
    0% { transform: translateY(-100%); }
    100% { transform: translateY(100%); }
  }
`;

const Collapsible_40: React.FC<{ title: string; children: React.ReactNode; defaultOpen?: boolean }> = ({
  title,
  children,
  defaultOpen = false,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div style={{
      margin: '16px',
      background: 'linear-gradient(135deg, #00b4db, #0083b0)',
      borderRadius: '16px',
      overflow: 'hidden',
      boxShadow: '0 4px 15px rgba(0, 131, 176, 0.3)',
      position: 'relative',
    }}>
      <style>{weatherAnimation}</style>

      {/* Weather effects */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `
          linear-gradient(90deg, 
            rgba(255,255,255,0) 0%,
            rgba(255,255,255,0.2) 25%,
            rgba(255,255,255,0.2) 50%,
            rgba(255,255,255,0) 100%)
        `,
        backgroundSize: '200% 100%',
        animation: 'shine 8s linear infinite',
        pointerEvents: 'none',
      }} />

      <div
        onClick={() => setIsOpen(!isOpen)}
        style={{
          padding: '20px',
          cursor: 'pointer',
          position: 'relative',
          color: '#fff',
        }}
      >
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <div>
            <h3 style={{
              margin: 0,
              fontSize: '1.4rem',
              fontWeight: 500,
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}>
              <span style={{
                fontSize: '1.8rem',
                animation: 'float 3s ease-in-out infinite',
              }}>
                ⛅
              </span>
              {title}
            </h3>
            <div style={{
              fontSize: '0.9rem',
              opacity: 0.9,
              marginTop: '4px',
            }}>
              Today's Forecast
            </div>
          </div>
          <div style={{
            fontSize: '2rem',
            fontWeight: 300,
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
          }}>
            24°
            <span style={{
              transform: `rotate(${isOpen ? '180deg' : '0deg'})`,
              transition: 'transform 0.3s ease',
              fontSize: '1rem',
              opacity: 0.8,
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
      }}>
        <div style={{
          padding: '0 20px 20px',
          color: '#fff',
          position: 'relative',
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '20px',
            padding: '15px',
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '12px',
          }}>
            <div style={{ textAlign: 'center' }}>
              <div>🌅</div>
              <div style={{ fontSize: '0.8rem', marginTop: '4px' }}>Morning</div>
              <div style={{ fontSize: '1.1rem' }}>19°</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div>☀️</div>
              <div style={{ fontSize: '0.8rem', marginTop: '4px' }}>Noon</div>
              <div style={{ fontSize: '1.1rem' }}>24°</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div>🌅</div>
              <div style={{ fontSize: '0.8rem', marginTop: '4px' }}>Evening</div>
              <div style={{ fontSize: '1.1rem' }}>21°</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div>🌙</div>
              <div style={{ fontSize: '0.8rem', marginTop: '4px' }}>Night</div>
              <div style={{ fontSize: '1.1rem' }}>17°</div>
            </div>
          </div>
          <div style={{
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

export default Collapsible_40; 