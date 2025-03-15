"use client"
import React, { useState } from 'react';
import InputField from '../_components/InputField_28';

const Example_28: React.FC = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    code: ''
  });

  const handleChange = (field: string) => (value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const validateEmail = (email: string): boolean => {
    return !!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  };

  return (
    <div style={{
      maxWidth: '800px',
      margin: '2rem auto',
      padding: '3rem',
      background: '#0a0a0a',
      borderRadius: '16px',
      boxShadow: '0 0 30px rgba(0, 0, 0, 0.5)',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: '2rem'
    }}>
      <div style={{ gridColumn: '1 / -1' }}>
        <h3 style={{ 
          marginBottom: '2rem', 
          color: '#ffffff',
          fontSize: '1.8rem',
          fontWeight: '500',
          textAlign: 'center',
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          textShadow: '0 0 10px rgba(0, 255, 255, 0.5)'
        }}>
          Neon Input Fields
        </h3>
      </div>

      <div>
        <InputField
          label="Username"
          placeholder="Enter username"
          value={formData.username}
          onChange={handleChange('username')}
          color="blue"
          success={formData.username.length >= 3}
          error={formData.username.length === 1 || formData.username.length === 2 ? 'Username too short' : undefined}
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
          label="Email Address"
          type="email"
          placeholder="Enter email"
          value={formData.email}
          onChange={handleChange('email')}
          color="pink"
          success={Boolean(formData.email && validateEmail(formData.email))}
          error={formData.email && !validateEmail(formData.email) ? 'Invalid email format' : undefined}
          icon={
            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
          placeholder="Enter password"
          value={formData.password}
          onChange={handleChange('password')}
          color="purple"
          success={formData.password.length >= 8}
          error={formData.password.length > 0 && formData.password.length < 8 ? 'Password too short' : undefined}
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
          placeholder="Enter code"
          value={formData.code}
          onChange={handleChange('code')}
          color="green"
          disabled
          icon={
            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
            </svg>
          }
        />
      </div>
    </div>
  );
};

export default Example_28;
