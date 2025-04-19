"use client"
import React, { useState } from 'react';
import InputField from '../tsx/InputField_4';

const Example_4: React.FC = () => {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    if (newValue.length < 3 && newValue.length > 0) {
      setError('Input must be at least 3 characters');
    } else {
      setError('');
    }
  };

  return (
    <div style={{ 
      background: '#1a1a1a', 
      padding: '2rem',
      minHeight: '200px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <InputField
        name="gradient-input"
        id="gradient-input"
        placeholder="Type something..."
        label="Gradient Input"
        value={value}
        onChange={handleChange}
        error={error}
        required
      />
    </div>
  );
};

export default Example_4;
