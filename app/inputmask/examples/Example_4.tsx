"use client"
import React from 'react';
import InputMask from '../tsx/InputMask_4';

const Example_4: React.FC = () => {
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
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>International Phone</h4>
        <InputMask
          label="Phone Number"
          mask="+99 999 999 9999"
          placeholder="+1 555 555 5555"
          onChange={handleInputChange}
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>License Plate</h4>
        <InputMask
          label="License Plate"
          mask="999-9999"
          placeholder="123-4567"
          onChange={handleInputChange}
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Account Number</h4>
        <InputMask
          label="Account Number"
          mask="9999-9999-9999-9999"
          placeholder="1234-5678-9012-3456"
          onChange={handleInputChange}
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Tracking Number</h4>
        <InputMask
          label="Tracking Number"
          mask="999-999999-999"
          placeholder="123-456789-012"
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};

export default Example_4;
