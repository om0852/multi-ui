"use client"
import React, { useState } from 'react';
import InputMask from '../_components/InputMask_24';

const Example_24: React.FC = () => {
  const [values, setValues] = useState({
    usd: '',
    eur: '',
    gbp: '',
    jpy: ''
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
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>USD Currency Input</h4>
        <InputMask
          label="US Dollar"
          placeholder="0.00"
          currencySymbol="$"
          decimals={2}
          onChange={(value) => handleInputChange(value, 'usd')}
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>EUR Currency Input</h4>
        <InputMask
          label="Euro"
          placeholder="0.00"
          currencySymbol="€"
          decimals={2}
          onChange={(value) => handleInputChange(value, 'eur')}
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>GBP Currency Input</h4>
        <InputMask
          label="British Pound"
          placeholder="0.00"
          currencySymbol="£"
          decimals={2}
          onChange={(value) => handleInputChange(value, 'gbp')}
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>JPY Currency Input</h4>
        <InputMask
          label="Japanese Yen"
          placeholder="0"
          currencySymbol="¥"
          decimals={0}
          onChange={(value) => handleInputChange(value, 'jpy')}
        />
      </div>
    </div>
  );
};

export default Example_24;
