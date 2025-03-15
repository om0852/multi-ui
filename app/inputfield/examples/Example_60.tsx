import React, { useState } from 'react';
import InputField from '../_components/InputField_60';

const Example_60: React.FC = () => {
  const [formData, setFormData] = useState({
    pilotId: '',
    coordinates: '',
    missionCode: '',
    status: ''
  });

  const handleChange = (field: string) => (value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const validatePilotId = (id: string): boolean => {
    return id.length >= 6 && /^[A-Z0-9-]+$/.test(id);
  };

  return (
    <div style={{
      maxWidth: '800px',
      margin: '2rem auto',
      padding: '3rem',
      background: 'rgba(16, 24, 48, 0.95)',
      borderRadius: '12px',
      boxShadow: '0 0 50px rgba(102, 255, 255, 0.1)',
      display: 'flex',
      flexDirection: 'column',
      gap: '2.5rem',
      position: 'relative',
      overflow: 'hidden',
      border: '1px solid rgba(102, 255, 255, 0.2)',
      backdropFilter: 'blur(10px)'
    }}>
      {/* Holographic grid background */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `
          linear-gradient(90deg, rgba(102, 255, 255, 0.05) 1px, transparent 1px),
          linear-gradient(0deg, rgba(102, 255, 255, 0.05) 1px, transparent 1px)
        `,
        backgroundSize: '20px 20px',
        opacity: 0.5,
        pointerEvents: 'none'
      }}></div>
      
      <div style={{ 
        textAlign: 'center',
        marginBottom: '1rem',
        position: 'relative'
      }}>
        <h3 style={{ 
          color: '#66ffff',
          fontSize: '2.5rem',
          fontFamily: "'Exo 2', sans-serif",
          fontWeight: 700,
          marginBottom: '0.5rem',
          letterSpacing: '4px',
          textShadow: '0 0 10px rgba(102, 255, 255, 0.5)',
          textTransform: 'uppercase'
        }}>
          Flight Control Terminal
        </h3>
        <p style={{ 
          color: '#66ffff',
          fontFamily: "'Exo 2', sans-serif",
          fontSize: '1.1rem',
          letterSpacing: '2px',
          opacity: 0.8
        }}>
          SYSTEM ACTIVE
        </p>
      </div>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '3rem',
        width: '100%',
        position: 'relative',
        justifyItems: 'center'
      }}>
        <div>
          <InputField
            label="Pilot ID"
            placeholder="Enter pilot identifier"
            value={formData.pilotId}
            onChange={handleChange('pilotId')}
            success={validatePilotId(formData.pilotId)}
            error={formData.pilotId && !validatePilotId(formData.pilotId) ? 'Invalid pilot ID format' : ''}
            icon={
              <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            }
            required
          />
        </div>

        <div>
          <InputField
            label="Coordinates"
            placeholder="Enter flight coordinates"
            value={formData.coordinates}
            onChange={handleChange('coordinates')}
            icon={
              <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            }
            required
          />
        </div>

        <div>
          <InputField
            label="Mission Code"
            placeholder="Enter mission identifier"
            value={formData.missionCode}
            onChange={handleChange('missionCode')}
            icon={
              <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            }
          />
        </div>

        <div>
          <InputField
            label="Status"
            placeholder="Flight status"
            value={formData.status}
            onChange={handleChange('status')}
            disabled
            icon={
              <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            }
          />
        </div>
      </div>
      
      <div style={{
        marginTop: '1rem',
        padding: '1.5rem',
        background: 'rgba(102, 255, 255, 0.05)',
        borderRadius: '4px',
        border: '1px solid rgba(102, 255, 255, 0.2)',
        color: '#66ffff',
        fontSize: '0.9rem',
        textAlign: 'center',
        fontFamily: "'Exo 2', sans-serif",
        position: 'relative',
        letterSpacing: '1px',
        opacity: 0.8
      }}>
        Focus on any input field to activate the holographic interface
      </div>
    </div>
  );
};

export default Example_60; 