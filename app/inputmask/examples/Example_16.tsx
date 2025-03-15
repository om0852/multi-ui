"use client"
import React, { useState } from 'react';
import InputMask from '../_components/InputMask_16';

const Example_16: React.FC = () => {
  const [values, setValues] = useState({
    short: '',
    long: '',
    iso: '',
    custom: ''
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
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Short Date Format</h4>
        <InputMask
          label="MM/DD/YY"
          placeholder="MM/DD/YY"
          mask="99/99/99"
          onChange={(value) => handleInputChange(value, 'short')}
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Long Date Format</h4>
        <InputMask
          label="Month DD, YYYY"
          placeholder="January 01, 2024"
          mask="99/99/9999"
          onChange={(value) => handleInputChange(value, 'long')}
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>ISO Date Format</h4>
        <InputMask
          label="YYYY-MM-DD"
          placeholder="2024-01-01"
          mask="9999-99-99"
          onChange={(value) => handleInputChange(value, 'iso')}
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Custom Date Format</h4>
        <InputMask
          label="DD.MM.YYYY"
          placeholder="01.01.2024"
          mask="99.99.9999"
          onChange={(value) => handleInputChange(value, 'custom')}
        />
      </div>
    </div>
  );
};

export default Example_16;
