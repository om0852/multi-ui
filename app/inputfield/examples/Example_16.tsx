"use client"
import React, { useState } from 'react';
import InputField from '../_components/InputField_16';

const Example_16: React.FC = () => {
  const [values, setValues] = useState({
    blue: '',
    purple: '',
    green: '',
    pink: ''
  });

  const handleChange = (color: string) => (value: string) => {
    setValues(prev => ({ ...prev, [color]: value }));
  };

  return (
    <div style={{ 
      maxWidth: '600px', 
      margin: '2rem auto', 
      padding: '3rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '2rem',
      background: '#111827',
      borderRadius: '16px',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
    }}>
      <div>
        <h4 style={{ marginBottom: '1rem', color: '#3b82f6' }}>Blue Neon Input</h4>
        <InputField
          label="Username"
          placeholder="Enter username"
          value={values.blue}
          onChange={handleChange('blue')}
          color="blue"
          icon={
            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          }
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#9333ea' }}>Purple Neon Input</h4>
        <InputField
          label="Email"
          type="email"
          placeholder="Enter email"
          value={values.purple}
          onChange={handleChange('purple')}
          color="purple"
          icon={
            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          }
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#22c55e' }}>Green Neon Input</h4>
        <InputField
          label="Password"
          type="password"
          placeholder="Enter password"
          value={values.green}
          onChange={handleChange('green')}
          color="green"
          icon={
            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          }
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#ec4899' }}>Pink Neon Input</h4>
        <InputField
          label="API Key"
          placeholder="Enter API key"
          value={values.pink}
          onChange={handleChange('pink')}
          color="pink"
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

export default Example_16;


