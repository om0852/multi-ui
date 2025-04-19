"use client"
import React from 'react';
import InputField from '../tsx/InputField_12';

const Example_12: React.FC = () => {
  return (
    <div style={{ 
      maxWidth: '800px', 
      margin: '2rem auto', 
      padding: '3rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '5rem'
    }}>
      <div>
        <h4 style={{ marginBottom: '1rem' }}>Default Large Input</h4>
        <InputField
          placeholderText="What's your name?"
          width="100%"
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem' }}>Custom Width Input</h4>
        <InputField
          placeholderText="Enter your email address"
          width="80%"
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem' }}>Compact Input</h4>
        <InputField
          placeholderText="Your phone number"
          width="60%"
        />
      </div>
    </div>
  );
};

export default Example_12;
