"use client"
import React from 'react';
import InputMask from '../tsx/InputMask_2';

const Example_2: React.FC = () => {
  const handleInputChange = (value: string) => {
    console.log("Animated Masked Input Value:", value);
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
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Credit Card Number</h4>
        <InputMask
          label="Card Number"
          mask="9999 9999 9999 9999"
          placeholder="1234 5678 9012 3456"
          onChange={handleInputChange}
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Expiry Date</h4>
        <InputMask
          label="MM/YY"
          mask="99/99"
          placeholder="MM/YY"
          onChange={handleInputChange}
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>CVV</h4>
        <InputMask
          label="Security Code"
          mask="999"
          placeholder="123"
          onChange={handleInputChange}
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>ZIP Code</h4>
        <InputMask
          label="ZIP Code"
          mask="99999"
          placeholder="12345"
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};

export default Example_2;
