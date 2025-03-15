"use client"
import React, { useState } from 'react';
import InputMask from '../_components/InputMask_14';

const Example_14: React.FC = () => {
  const [values, setValues] = useState({
    cardNumber: '',
    expiry: '',
    cvv: '',
    name: ''
  });

  const handleInputChange = (value: string, field: string) => {
    console.log(`${field} Value:`, value);
setValues(prev => ({ ...prev, [field]: value }));
    console.log(values)  
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
          placeholder="1234 5678 9012 3456"
          onChange={(value) => handleInputChange(value, 'cardNumber')}
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Expiry Date</h4>
        <InputMask
          label="MM/YY"
          placeholder="MM/YY"
          onChange={(value) => handleInputChange(value, 'expiry')}
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>CVV</h4>
        <InputMask
          label="Security Code"
          placeholder="123"
          onChange={(value) => handleInputChange(value, 'cvv')}
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Cardholder Name</h4>
        <InputMask
          label="Full Name"
          placeholder="John Doe"
          onChange={(value) => handleInputChange(value, 'name')}
        />
      </div>
    </div>
  );
};

export default Example_14;
