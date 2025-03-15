"use client"
import React, { useState } from 'react';
import InputMask from '../_components/InputMask_13';

const Example_13: React.FC = () => {
  const [values, setValues] = useState({
    email: '',
    workEmail: '',
    personalEmail: '',
    newsletterEmail: ''
  });

  const handleInputChange = (value: string, field: string) => {
    console.log(`${field} Value:`, value);
setValues(prev => ({ ...prev, [field]: value }));
    console.log(values)  };

  return (
    <div style={{ 
      maxWidth: '600px', 
      margin: '2rem auto', 
      padding: '2rem',
      background: '#ffffff',
      borderRadius: '12px',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      display: 'flex',
      flexDirection: 'column',
      gap: '2rem'
    }}>
      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Primary Email Input</h4>
        <InputMask
          label="Email Address"
          placeholder="Enter your email"
          onChange={(value) => handleInputChange(value, 'email')}
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Work Email Input</h4>
        <InputMask
          label="Work Email"
          placeholder="Enter your work email"
          onChange={(value) => handleInputChange(value, 'workEmail')}
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Personal Email Input</h4>
        <InputMask
          label="Personal Email"
          placeholder="Enter your personal email"
          onChange={(value) => handleInputChange(value, 'personalEmail')}
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Newsletter Email Input</h4>
        <InputMask
          label="Newsletter Email"
          placeholder="Enter email for newsletter"
          onChange={(value) => handleInputChange(value, 'newsletterEmail')}
        />
      </div>
    </div>
  );
};

export default Example_13;
