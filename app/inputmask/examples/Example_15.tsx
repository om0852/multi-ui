"use client"
import React, { useState } from 'react';
import InputMask from '../tsx/InputMask_15';

const Example_15: React.FC = () => {
  const [values, setValues] = useState({
    us: '',
    uk: '',
    canada: '',
    australia: ''
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
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>US Phone Number</h4>
        <InputMask
          label="US Phone"
          placeholder="(555) 555-5555"
          onChange={(value) => handleInputChange(value, 'us')}
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>UK Phone Number</h4>
        <InputMask
          label="UK Phone"
          placeholder="+44 20 7123 4567"
          onChange={(value) => handleInputChange(value, 'uk')}
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Canadian Phone Number</h4>
        <InputMask
          label="Canada Phone"
          placeholder="+1 (555) 555-5555"
          onChange={(value) => handleInputChange(value, 'canada')}
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Australian Phone Number</h4>
        <InputMask
          label="Australia Phone"
          placeholder="+61 2 5555 5555"
          onChange={(value) => handleInputChange(value, 'australia')}
        />
      </div>
    </div>
  );
};

export default Example_15;
