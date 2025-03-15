import React, { useState } from 'react';
import InputField from '../_components/InputField_49';

const Example_49: React.FC = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    apiKey: ''
  });

  const handleChange = (field: string) => (value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const validateEmail = (email: string): boolean => {
    return !!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  };

  const validateUsername = (username: string): boolean => {
    return username.length >= 4 && /^[a-zA-Z0-9_]+$/.test(username);
  };

  return (
    <div style={{
      maxWidth: '800px',
      margin: '2rem auto',
      padding: '3rem',
      background: 'linear-gradient(135deg, #1e272e 0%, #2d3436 100%)',
      borderRadius: '16px',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
      display: 'flex',
      flexDirection: 'column',
      gap: '2.5rem',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background grid */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `
          linear-gradient(rgba(9, 132, 227, 0.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(9, 132, 227, 0.05) 1px, transparent 1px)
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
          color: '#dfe6e9',
          fontSize: '2rem',
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 700,
          marginBottom: '0.5rem',
          textShadow: '0 0 10px rgba(9, 132, 227, 0.5)'
        }}>
          Magnetic Field Interface
        </h3>
        <p style={{ 
          color: '#b2bec3',
          fontFamily: "'Space Grotesk', sans-serif",
          letterSpacing: '0.5px'
        }}>
          Interact with the fields to see the magnetic effects
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
            label="Email Address"
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange('email')}
            success={Boolean(formData.email && validateEmail(formData.email))}
            error={formData.email && !validateEmail(formData.email) ? 'Please enter a valid email' : ''}
            icon={
              <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
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
            label="API Key"
            placeholder="System generated"
            value={formData.apiKey}
            onChange={handleChange('apiKey')}
            disabled
            icon={
              <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
              </svg>
            }
          />
        </div>
      </div>
      
      <div style={{
        marginTop: '1rem',
        padding: '1.5rem',
        background: 'rgba(9, 132, 227, 0.1)',
        borderRadius: '8px',
        border: '1px solid rgba(9, 132, 227, 0.3)',
        color: '#b2bec3',
        fontSize: '0.9rem',
        textAlign: 'center',
        fontFamily: "'Space Grotesk', sans-serif",
        position: 'relative',
        zIndex: 1,
        boxShadow: '0 0 20px rgba(9, 132, 227, 0.1)'
      }}>
        Move your mouse over the input fields to see the magnetic field and particle effects
      </div>
    </div>
  );
};

export default Example_49;
