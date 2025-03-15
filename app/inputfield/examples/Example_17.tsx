"use client"
import React, { useState } from 'react';
import InputField from '../_components/InputField_17';

const Example_17: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validateEmail = (email: string): boolean => {
    return !!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  };

  return (
    <div style={{ 
      maxWidth: '600px', 
      margin: '2rem auto', 
      padding: '3rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '2rem',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      borderRadius: '16px',
      boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)'
    }}>
      <div>
        <h4 style={{ marginBottom: '1rem', color: 'white' }}>Glass Email Input</h4>
        <InputField
          label="Email Address"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={setEmail}
          error={email && !validateEmail(email) ? 'Please enter a valid email' : ''}
          success={Boolean(email && validateEmail(email))}
          icon={
            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          }
          required
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: 'white' }}>Glass Password Input</h4>
        <InputField
          label="Password"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={setPassword}
          icon={
            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          }
          required
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: 'white' }}>Disabled Glass Input</h4>
        <InputField
          label="API Key"
          placeholder="Enter API key"
          disabled
          icon={
            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
            </svg>
          }
        />
      </div>
    </div>
  );
};

export default Example_17;
