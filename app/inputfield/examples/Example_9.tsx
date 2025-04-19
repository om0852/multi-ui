"use client"
import React from 'react';
import InputField from '../tsx/InputField_9';

const Example_9: React.FC = () => {
  return (
    <div style={{ 
      maxWidth: '400px', 
      margin: '2rem auto', 
      padding: '2rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '2rem',
      background: '#f8f9fa'
    }}>
      <div>
        <h4 style={{ marginBottom: '1rem' }}>Default Height Input</h4>
        <InputField
          placeholder="Type something..."
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem' }}>Custom Height Input</h4>
        <InputField
          placeholder="Taller input field"
          height="4em"
        />
      </div>
    </div>
  );
};

export default Example_9;
