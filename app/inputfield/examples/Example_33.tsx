import React, { useState } from 'react';
import InputField from '../_components/InputField_33';

const Example_33: React.FC = () => {
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
      maxWidth: '700px',
      margin: '2rem auto',
      padding: '3rem',
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
      borderRadius: '16px',
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)',
      display: 'flex',
      flexDirection: 'column',
      gap: '3rem'
    }}>
      <div style={{ textAlign: 'center' }}>
        <h3 style={{ 
          color: '#ffffff',
          fontSize: '2rem',
          textTransform: 'uppercase',
          letterSpacing: '3px',
          textShadow: '0 0 10px rgba(255, 255, 255, 0.5)',
          marginBottom: '0.5rem'
        }}>
          Holographic Interface
        </h3>
        <p style={{ 
          color: 'rgba(255, 255, 255, 0.7)',
          letterSpacing: '1px'
        }}>
          Enter your credentials to access the system
        </p>
      </div>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2.5rem',
        width: '100%'
      }}>
        <div>
          <InputField
            label="Username"
            placeholder="Enter your username"
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
            label="Password"
            type="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange('password')}
            success={formData.password.length >= 8}
            error={formData.password.length > 0 && formData.password.length < 8 ? 'Password too short' : ''}
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
            label="Access Code"
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
            label="Biometric ID"
            placeholder="Scan biometric ID"
            value={formData.biometricId}
            onChange={handleChange('biometricId')}
            disabled
            icon={
              <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
              </svg>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Example_33;
