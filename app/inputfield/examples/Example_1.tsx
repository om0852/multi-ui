"use client"
import React, { useState } from 'react';
import InputField from '../_components/InputField_1';

const Example_1: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [hasError, setHasError] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    // Example validation: Show error if input is less than 3 characters
    setHasError(value.length > 0 && value.length < 3);
  };

  return (
    <div style={{ maxWidth: '400px', margin: '2rem auto', padding: '0 1rem' }}>
      <InputField
        label="Username"
        value={inputValue}
        onChange={handleInputChange}
        error={hasError ? "Username must be at least 3 characters" : ""}
        outlinecolor="#4a90e2"
        labelColor="#2c3e50"
        labelSize="1rem"
      />
      {!hasError && inputValue.length > 0 && (
        <p style={{ color: 'green', marginTop: '0.5rem' }}>
          Valid username!
        </p>
      )}
    </div>
  );
};

export default Example_1;
