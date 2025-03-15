import React, { useState } from 'react';
import InputField from '../_components/InputField_35';

const Example_35: React.FC = () => {
  const [formData, setFormData] = useState({
    galaxy: '',
    starSystem: '',
    planet: '',
    coordinates: ''
  });

  const handleChange = (field: string) => (value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const validateGalaxyName = (name: string): boolean => {
    return name.length >= 3 && /^[A-Za-z0-9\s-]+$/.test(name);
  };

  return (
    <div style={{
      maxWidth: '800px',
      margin: '2rem auto',
      padding: '3rem',
      background: 'linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)',
      borderRadius: '16px',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      gap: '3rem'
    }}>
      {/* Stars background */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(circle, transparent 20%, #0f0c29 80%), radial-gradient(circle, transparent 20%, #0f0c29 80%) 50px 50px',
        backgroundSize: '100px 100px',
        backgroundPosition: '0 0, 50px 50px',
        opacity: 0.3,
        zIndex: 0
      }}></div>

      <div style={{ 
        textAlign: 'center',
        position: 'relative',
        zIndex: 1
      }}>
        <h3 style={{ 
          color: '#ffffff',
          fontSize: '2rem',
          fontFamily: "'Space Mono', monospace",
          letterSpacing: '3px',
          textShadow: '0 0 10px rgba(124, 77, 255, 0.8)',
          marginBottom: '0.5rem'
        }}>
          COSMIC NAVIGATOR
        </h3>
        <p style={{ 
          color: 'rgba(255, 255, 255, 0.7)',
          fontFamily: "'Space Mono', monospace",
          letterSpacing: '1px'
        }}>
          Enter your interstellar coordinates
        </p>
      </div>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2.5rem',
        width: '100%',
        position: 'relative',
        zIndex: 1
      }}>
        <div>
          <InputField
            label="Galaxy"
            placeholder="Enter galaxy name"
            value={formData.galaxy}
            onChange={handleChange('galaxy')}
            success={validateGalaxyName(formData.galaxy)}
            error={formData.galaxy && !validateGalaxyName(formData.galaxy) ? 'Invalid galaxy format' : ''}
            icon={
              <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            }
            required
          />
        </div>

        <div>
          <InputField
            label="Star System"
            placeholder="Enter star system"
            value={formData.starSystem}
            onChange={handleChange('starSystem')}
            icon={
              <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            }
          />
        </div>

        <div>
          <InputField
            label="Planet"
            placeholder="Enter planet name"
            value={formData.planet}
            onChange={handleChange('planet')}
            icon={
              <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            }
          />
        </div>

        <div>
          <InputField
            label="Coordinates"
            placeholder="X:000 Y:000 Z:000"
            value={formData.coordinates}
            onChange={handleChange('coordinates')}
            disabled
            icon={
              <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Example_35;
