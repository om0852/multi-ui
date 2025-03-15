"use client"
import React from 'react';
import InputField from '../_components/InputField_11';

const Example_11: React.FC = () => {
  return (
    <div style={{ 
      maxWidth: '600px', 
      margin: '2rem auto', 
      padding: '2rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '3rem',
      background: '#2c3e50'
    }}>
      <div>
        <h4 style={{ marginBottom: '1rem', color: 'white' }}>Default Size Input</h4>
        <InputField
          label="First Name"
          placeholder="Your first name"
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: 'white' }}>Custom Size Input</h4>
        <InputField
          label="Email Address"
          placeholder="Enter your email"
          width="100%"
          fontSize="1.8rem"
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: 'white' }}>Compact Input</h4>
        <InputField
          label="Username"
          placeholder="Choose a username"
          width="60%"
          fontSize="1.4rem"
        />
      </div>
    </div>
  );
};

export default Example_11;
