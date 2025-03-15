"use client"
import React, { useState } from 'react';
import InputMask from '../_components/InputMask_21';

const Example_21: React.FC = () => {
  const [values, setValues] = useState({
    integer: '',
    decimal: '',
    scientific: '',
    hex: ''
  });

  const handleInputChange = (value: string, field: string) => {
    console.log(`${field} Value:`, value);
setValues(prev => ({ ...prev, [field]: value }));
    console.log(values)  };

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
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Integer Input</h4>
        <InputMask
          label="Integer"
          placeholder="Enter whole number"
          mask="integer"
          onChange={(value) => handleInputChange(value, 'integer')}
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Decimal Input</h4>
        <InputMask
          label="Decimal"
          placeholder="Enter decimal number"
          mask="decimal"
          onChange={(value) => handleInputChange(value, 'decimal')}
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Scientific Notation</h4>
        <InputMask
          label="Scientific"
          placeholder="Enter scientific notation"
          mask="scientific"
          onChange={(value) => handleInputChange(value, 'scientific')}
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Hexadecimal Input</h4>
        <InputMask
          label="Hexadecimal"
          placeholder="Enter hex value"
          mask="hex"
          onChange={(value) => handleInputChange(value, 'hex')}
        />
      </div>
    </div>
  );
};

export default Example_21;
