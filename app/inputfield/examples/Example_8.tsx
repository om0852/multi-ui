"use client"
import React from 'react';
import InputField from '../tsx/InputField_8';

const Example_8: React.FC = () => {
  return (
    <div style={{ 
      maxWidth: '400px', 
      margin: '2rem auto', 
      padding: '2rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '2rem'
    }}>
      <div>
        <h4 style={{ marginBottom: '1rem' }}>Password Input (min 6 chars)</h4>
        <InputField
          placeholder="Enter password"
          pattern=".{6,}"
          title="Six or more characters"
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem' }}>Email Input</h4>
        <InputField
          placeholder="Enter email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          title="Valid email address"
          type="email"
        />
      </div>
    </div>
  );
};

export default Example_8;
