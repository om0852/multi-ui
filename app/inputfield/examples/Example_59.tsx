import React, { useState } from 'react';
import InputField from '../_components/InputField_59';

const Example_59: React.FC = () => {
  const [formData, setFormData] = useState({
    username: '',
    accessCode: '',
    coordinates: '',
    status: ''
  });

  const handleChange = (field: string) => (value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const validateUsername = (username: string): boolean => {
    return username.length >= 4 && /^[a-zA-Z0-9_]+$/.test(username);
  };

  return (
    <div style={{
      maxWidth: '800px',
      margin: '2rem auto',
      padding: '3rem',
      background: '#0a0a1a',
      borderRadius: '8px',
      boxShadow: '0 0 50px rgba(255, 0, 255, 0.1)',
      display: 'flex',
      flexDirection: 'column',
      gap: '2.5rem',
      position: 'relative',
      overflow: 'hidden',
      border: '1px solid rgba(255, 0, 255, 0.2)'
    }}>
      {/* Cyberpunk grid background */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `
          linear-gradient(90deg, rgba(255, 0, 255, 0.05) 1px, transparent 1px),
          linear-gradient(0deg, rgba(0, 255, 255, 0.05) 1px, transparent 1px)
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
          color: '#ff00ff',
          fontSize: '2.5rem',
          fontFamily: "'Orbitron', sans-serif",
          fontWeight: 700,
          marginBottom: '0.5rem',
          letterSpacing: '4px',
          textShadow: '0 0 10px #ff00ff, 0 0 20px #ff00ff, 0 0 30px #ff00ff',
          textTransform: 'uppercase'
        }}>
          Cyber Terminal
        </h3>
        <p style={{ 
          color: '#00ffff',
          fontFamily: "'Orbitron', sans-serif",
          fontSize: '1.1rem',
          letterSpacing: '2px',
          textShadow: '0 0 5px #00ffff'
        }}>
          ACCESS GRANTED
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
            label="Username"
            placeholder="Enter your handle"
            value={formData.username}
            onChange={handleChange('username')}
            success={validateUsername(formData.username)}
            error={formData.username && !validateUsername(formData.username) ? 'Invalid username format' : ''}
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
            label="Access Code"
            placeholder="Enter security code"
            type="password"
            value={formData.accessCode}
            onChange={handleChange('accessCode')}
            icon={
              <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            }
            required
          />
        </div>

        <div>
          <InputField
            label="Coordinates"
            placeholder="Enter grid location"
            value={formData.coordinates}
            onChange={handleChange('coordinates')}
            icon={
              <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            }
          />
        </div>

        <div>
          <InputField
            label="Status"
            placeholder="System status"
            value={formData.status}
            onChange={handleChange('status')}
            disabled
            icon={
              <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            }
          />
        </div>
      </div>
      
      <div style={{
        marginTop: '1rem',
        padding: '1.5rem',
        background: 'rgba(255, 0, 255, 0.05)',
        borderRadius: '4px',
        border: '1px solid rgba(255, 0, 255, 0.2)',
        color: '#00ffff',
        fontSize: '0.9rem',
        textAlign: 'center',
        fontFamily: "'Orbitron', sans-serif",
        position: 'relative',
        textShadow: '0 0 5px #00ffff',
        letterSpacing: '1px'
      }}>
        Focus on any input field to activate the neon grid effect
      </div>
    </div>
  );
};

export default Example_59; 