"use client"
import React, { useState } from 'react';
import InputMask from '../_components/InputMask_18';

const Example_18: React.FC = () => {
  const [values, setValues] = useState({
    discount: '',
    tax: '',
    interest: '',
    completion: ''
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
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Discount Percentage</h4>
        <InputMask
          label="Discount"
          placeholder="Enter discount percentage"
          mask="percentage"
          onChange={(value) => handleInputChange(value, 'discount')}
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Tax Rate</h4>
        <InputMask
          label="Tax Rate"
          placeholder="Enter tax rate"
          mask="percentage"
          onChange={(value) => handleInputChange(value, 'tax')}
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Interest Rate</h4>
        <InputMask
          label="Interest Rate"
          placeholder="Enter interest rate"
          mask="percentage"
          onChange={(value) => handleInputChange(value, 'interest')}
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Completion Rate</h4>
        <InputMask
          label="Completion"
          placeholder="Enter completion percentage"
          mask="percentage"
          onChange={(value) => handleInputChange(value, 'completion')}
        />
      </div>
    </div>
  );
};

export default Example_18;
