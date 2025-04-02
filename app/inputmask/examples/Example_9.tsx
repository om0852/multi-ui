"use client"
import React, { useState } from 'react';
import InputMask from '../tsx/InputMask_9';

const Example_9: React.FC = () => {
  const [values, setValues] = useState({
    amount: '',
    price: '',
    total: '',
    discount: ''
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
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Amount Input with Currency Format</h4>
        <InputMask
          label="Amount"
          placeholder="Enter amount"
          onChange={(value) => handleInputChange(value, 'amount')}
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Price Input with Currency Format</h4>
        <InputMask
          label="Price"
          placeholder="Enter price"
          onChange={(value) => handleInputChange(value, 'price')}
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Total Input with Currency Format</h4>
        <InputMask
          label="Total"
          placeholder="Enter total"
          onChange={(value) => handleInputChange(value, 'total')}
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Discount Input with Currency Format</h4>
        <InputMask
          label="Discount"
          placeholder="Enter discount"
          onChange={(value) => handleInputChange(value, 'discount')}
        />
      </div>
    </div>
  );
};

export default Example_9;
