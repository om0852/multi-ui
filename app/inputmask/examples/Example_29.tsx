"use client"
import React, { useState } from 'react';
import InputMask from '../_components/InputMask_29';

const Example_29: React.FC = () => {
  const [values, setValues] = useState({
    password1: '',
    password2: '',
    password3: '',
    password4: ''
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
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Standard Password Input</h4>
        <InputMask
          label="Password"
          placeholder="Enter your password"
          value={values.password1}
          onChange={(value) => handleInputChange(value, 'password1')}
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Custom Requirements Password</h4>
        <InputMask
          label="Strong Password"
          placeholder="Enter a strong password"
          value={values.password2}
          onChange={(value) => handleInputChange(value, 'password2')}
          minLength={10}
          requireSpecialChars={true}
          requireNumbers={true}
          requireUppercase={true}
          requireLowercase={true}
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Simple Password</h4>
        <InputMask
          label="Simple Password"
          placeholder="Enter a simple password"
          value={values.password3}
          onChange={(value) => handleInputChange(value, 'password3')}
          minLength={6}
          requireSpecialChars={false}
          requireNumbers={true}
          requireUppercase={false}
          requireLowercase={true}
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Disabled Password Input</h4>
        <InputMask
          label="Password"
          placeholder="Enter your password"
          value="SecurePassword123!"
          disabled={true}
        />
      </div>
    </div>
  );
};

export default Example_29;
