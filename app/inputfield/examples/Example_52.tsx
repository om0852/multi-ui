import React, { useState } from 'react';
import InputField from '../_components/InputField_52';

const Example_52: React.FC = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    accessCode: '',
    biometricId: ''
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
      background: 'linear-gradient(135deg, #0f1219 0%, #1a1f29 100%)',
      borderRadius: '12px',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5), 0 0 50px rgba(0, 255, 255, 0.2)',
      display: 'flex',
      flexDirection: 'column',
      gap: '2.5rem',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Grid background */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `
          linear-gradient(rgba(0, 255, 255, 0.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 255, 255, 0.05) 1px, transparent 1px)
        `,
        backgroundSize: '20px 20px',
        pointerEvents: 'none',
        zIndex: 0
      }}></div>
      
      <div style={{ 
        textAlign: 'center',
        marginBottom: '1rem',
        position: 'relative',
        zIndex: 1
      }}>
        <h3 style={{ 
          color: '#fff',
          fontSize: '2.2rem',
          fontFamily: "'Rajdhani', sans-serif",
          fontWeight: 600,
          marginBottom: '0.5rem',
          textShadow: '0 0 10px rgba(0, 255, 255, 0.8), 0 0 20px rgba(0, 255, 255, 0.5)',
          textTransform: 'uppercase',
          letterSpacing: '3px'
        }}>
          HOLOGRAPHIC INTERFACE
        </h3>
        <p style={{ 
          color: 'rgba(255, 255, 255, 0.7)',
          fontFamily: "'Rajdhani', sans-serif",
          letterSpacing: '1px',
          textTransform: 'uppercase'
        }}>
          ENTER YOUR CREDENTIALS TO ACCESS THE SYSTEM
        </p>
      </div>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2.5rem',
        width: '100%',
        position: 'relative',
        zIndex: 1,
        justifyItems: 'center'
      }}>
        <div>
          <InputField
            label="USERNAME"
            placeholder="Enter your username"
            value={formData.username}
            onChange={handleChange('username')}
            success={validateUsername(formData.username)}
            error={formData.username && !validateUsername(formData.username) ? 'INVALID FORMAT' : ''}
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
            label="PASSWORD"
            type="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange('password')}
            success={formData.password.length >= 8}
            error={formData.password.length > 0 && formData.password.length < 8 ? 'INSUFFICIENT LENGTH' : ''}
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
            label="ACCESS CODE"
            placeholder="Enter access code"
            value={formData.accessCode}
            onChange={handleChange('accessCode')}
            icon={
              <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
              </svg>
            }
          />
        </div>

        <div>
          <InputField
            label="BIOMETRIC ID"
            placeholder="Scan required"
            value={formData.biometricId}
            onChange={handleChange('biometricId')}
            disabled
            icon={
              <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 10v8a2 2 0 002 2h6a2 2 0 002-2v-8m-9 4h10M5 8h14M10 4h4" />
              </svg>
            }
          />
        </div>
      </div>
      
      <div style={{
        marginTop: '1rem',
        padding: '1.5rem',
        background: 'rgba(0, 0, 0, 0.3)',
        borderRadius: '8px',
        border: '1px solid rgba(0, 255, 255, 0.3)',
        color: 'rgba(255, 255, 255, 0.7)',
        fontSize: '0.9rem',
        textAlign: 'center',
        fontFamily: "'Rajdhani', sans-serif",
        letterSpacing: '1px',
        position: 'relative',
        zIndex: 1,
        boxShadow: 'inset 0 0 10px rgba(0, 255, 255, 0.2)',
        textTransform: 'uppercase'
      }}>
        FOCUS ON ANY INPUT FIELD TO ACTIVATE THE HOLOGRAPHIC GLITCH EFFECT
      </div>
    </div>
  );
};

export default Example_52; 