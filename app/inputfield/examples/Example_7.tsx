"use client"
import React from 'react';
import InputField from '../tsx/InputField_7';

const Example_7: React.FC = () => {
  return (
    <div style={{ 
      maxWidth: '600px', 
      margin: '2rem auto', 
      padding: '2rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '200px',
      background: '#f5f5f5'
    }}>
      <InputField
        inputHeight="5em"
        inputWidth="25em"
        buttonHeight="5em"
        buttonWidth="8em"
        placeholder="Enter your email"
      />
    </div>
  );
};

export default Example_7;
