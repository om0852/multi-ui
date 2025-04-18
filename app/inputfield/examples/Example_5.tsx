"use client"
import React from 'react';
import UrlInput, { EmailInput } from '../_components/InputField_5';

const Example_5: React.FC = () => {
  return (
    <div style={{ 
      maxWidth: '400px', 
      margin: '2rem auto', 
      padding: '0 1rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem'
    }}>
      <div>
        <h4 style={{ marginBottom: '0.5rem' }}>URL Input</h4>
        <UrlInput 
          name="website"
          id="website"
          placeholder="multiui.com"
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '0.5rem' }}>Email Input</h4>
        <EmailInput 
          name="email"
          id="email"
          placeholder="username"
        />
      </div>
    </div>
  );
};

export default Example_5;
