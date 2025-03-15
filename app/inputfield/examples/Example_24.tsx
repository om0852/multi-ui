"use client"
import React, { useState } from 'react';
import InputField from '../_components/InputField_24';

const Example_24: React.FC = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    code: '',
    access: ''
  });

  const handleChange = (field: string) => (value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const validateAccessCode = (code: string): boolean => {
    return /^[A-Z0-9]{6}$/.test(code);
  };

  return (
    <div style={{
      maxWidth: '600px',
      margin: '2rem auto',
      padding: '3rem',
      background: '#0a0225',
      borderRadius: '8px',
      boxShadow: '0 0 20px rgba(255, 0, 255, 0.2)',
      display: 'flex',
      flexDirection: 'column',
      gap: '2rem'
    }}>
      <h3 style={{ 
        color: '#00ffff', 
        textAlign: 'center', 
        fontFamily: 'VT323, monospace',
        fontSize: '2rem',
        textShadow: '0 0 10px #00ffff'
      }}>
        SYSTEM ACCESS
      </h3>

      <div>
        <InputField
          label="Username"
          placeholder="Enter username"
          value={formData.username}
          onChange={handleChange('username')}
          success={formData.username.length >= 3}
          error={formData.username.length > 0 && formData.username.length < 3 ? 'Invalid username format' : ''}
          icon={
            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
          placeholder="Enter password"
          value={formData.password}
          onChange={handleChange('password')}
          icon={
            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          }
          required
        />
      </div>

      <div>
        <InputField
          label="Access Code"
          placeholder="ENTER-CODE"
          value={formData.code}
          onChange={handleChange('code')}
          success={validateAccessCode(formData.code)}
          error={formData.code && !validateAccessCode(formData.code) ? 'Code must be 6 characters (A-Z, 0-9)' : ''}
          icon={
            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
            </svg>
          }
        />
      </div>

      <div>
        <InputField
          label="Terminal"
          placeholder=">_"
          value={formData.access}
          onChange={handleChange('access')}
          disabled
          icon={
            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          }
        />
      </div>
    </div>
  );
};

export default Example_24;
