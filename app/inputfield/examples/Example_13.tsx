"use client"
import React from 'react';
import InputField from '../_components/InputField_13';

const Example_13: React.FC = () => {
  return (
    <div style={{ 
      maxWidth: '400px', 
      margin: '2rem auto', 
      padding: '2rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '2rem',
      background: 'white',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <div>
        <h4 style={{ marginBottom: '1rem', textAlign: 'center' }}>Credit Card Input</h4>
        <InputField />
      </div>
    </div>
  );
};

export default Example_13;
