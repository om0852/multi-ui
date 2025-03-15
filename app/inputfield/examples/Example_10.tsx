"use client"
import React from 'react';
import InputField from '../_components/InputField_10';

const Example_10: React.FC = () => {
  return (
    <div style={{ 
      maxWidth: '600px', 
      margin: '2rem auto', 
      padding: '2rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '3rem'
    }}>
      <div>
        <h4 style={{ marginBottom: '1rem' }}>Default Input</h4>
        <InputField
          placeholder="What's your name?"
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem' }}>Custom Styled Input</h4>
        <InputField
          placeholder="Enter your email"
          width="300px"
          fontSize="1.2em"
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem' }}>Large Input</h4>
        <InputField
          placeholder="Type your message"
          width="100%"
          fontSize="1.8em"
        />
      </div>
    </div>
  );
};

export default Example_10;
