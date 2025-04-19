"use client"
import React from 'react';
import InputMask from '../tsx/InputMask_1';

const Example_1: React.FC = () => {
  const handleInputChange = (value: string) => {
    console.log("Masked Input Value:", value);
  };

  return (
    <div style={{ 
      maxWidth: '600px', 
      margin: '2rem auto', 
      padding: '2rem',
      background: '#ffffff',
      borderRadius: '12px',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      display: 'flex',
      flexDirection: 'column',
      gap: '2rem'
    }}>
      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Phone Number Input</h4>
        <InputMask
          label="Phone Number"
          mask="(999) 999-9999"
          placeholder="(123) 456-7890"
          onChange={handleInputChange}
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Date Input</h4>
        <InputMask
          label="Date"
          mask="99/99/9999"
          placeholder="MM/DD/YYYY"
          onChange={handleInputChange}
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Time Input</h4>
        <InputMask
          label="Time"
          mask="99:99"
          placeholder="HH:MM"
          onChange={handleInputChange}
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>SSN Input</h4>
        <InputMask
          label="Social Security Number"
          mask="999-99-9999"
          placeholder="123-45-6789"
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};

export default Example_1;
