"use client"
import React, { useState } from 'react';
import InputField from '../_components/InputField_6';

const Example_6: React.FC = () => {
  const [value, setValue] = useState('');

  return (
    <div style={{ 
      maxWidth: '400px', 
      margin: '2rem auto', 
      padding: '0 1rem' 
    }}>
      <InputField
        label="Full Name"
        id="full-name"
        name="full-name"
        placeholder="Enter your full name"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        style={{ marginTop: '1rem' }}
      />
    </div>
  );
};

export default Example_6;


