'use client';
import React, { useState } from 'react';

const travelAnimation = `
  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-5px); }
  }

  @keyframes fadeSlide {
    from { opacity: 0; transform: translateX(-10px); }
    to { opacity: 1; transform: translateX(0); }
  }
`;

const Collapsible_46: React.FC<{ title: string; children: React.ReactNode; defaultOpen?: boolean }> = ({
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
      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
      overflow: 'hidden',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    }}>
      <style>{travelAnimation}</style>

      <div
        onClick={() => setIsOpen(!isOpen)}
        style={{
          padding: '20px',
          cursor: 'pointer',
          background: 'linear-gradient(135deg, #2193b0, #6dd5ed)',
          color: '#fff',
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
            <span style={{
              fontSize: '1.5rem',
              animation: 'float 3s ease-in-out infinite',
            }}>
              ✈️
            </span>
            <div>
              <h3 style={{
                margin: 0,
                fontSize: '1.1rem',
                fontWeight: 500,
              }}>
                {title}
              </h3>
              <div style={{
                fontSize: '0.9rem',
                opacity: 0.9,
                marginTop: '4px',
              }}>
                Round Trip • 2 Passengers
              </div>
            </div>
          </div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
          }}>
            <div style={{
              textAlign: 'right',
            }}>
              <div style={{
                fontSize: '1.2rem',
                fontWeight: 600,
              }}>
                $599
              </div>
              <div style={{
                fontSize: '0.8rem',
                opacity: 0.9,
              }}>
                per person
              </div>
            </div>
            <div style={{
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
        }}>
          {/* Flight details */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '16px',
            background: '#f8f9fa',
            borderRadius: '8px',
            marginBottom: '16px',
            animation: isOpen ? 'fadeSlide 0.3s ease-out' : 'none',
          }}>
            <div>
              <div style={{ fontSize: '0.9rem', color: '#666' }}>Departure</div>
              <div style={{ fontSize: '1.1rem', color: '#2c3e50', marginTop: '4px' }}>09:45 AM</div>
              <div style={{ fontSize: '0.9rem', color: '#666', marginTop: '4px' }}>JFK</div>
            </div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              color: '#2193b0',
            }}>
              <div>•</div>
              <div style={{ fontSize: '0.8rem' }}>2h 45m</div>
              <div>•</div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '0.9rem', color: '#666' }}>Arrival</div>
              <div style={{ fontSize: '1.1rem', color: '#2c3e50', marginTop: '4px' }}>12:30 PM</div>
              <div style={{ fontSize: '0.9rem', color: '#666', marginTop: '4px' }}>LAX</div>
            </div>
          </div>

          {/* Additional info */}
          <div style={{
            color: '#2c3e50',
            fontSize: '0.95rem',
            lineHeight: '1.6',
          }}>
            {children}
          </div>

          {/* Amenities */}
          <div style={{
            display: 'flex',
            gap: '12px',
            marginTop: '16px',
            fontSize: '0.9rem',
            color: '#666',
          }}>
            <span>🛄 Baggage included</span>
            <span>🍽️ Meals included</span>
            <span>📱 Mobile boarding</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collapsible_46; 