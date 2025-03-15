"use client"
import React, { useState } from 'react';
import InputMask from '../_components/InputMask_27';

const Example_27: React.FC = () => {
  const [values, setValues] = useState({
    vin1: '',
    vin2: '',
    vin3: '',
    vin4: ''
  });

  const handleInputChange = (value: string, field: string) => {
    console.log(`${field} Value:`, value);
setValues(prev => ({ ...prev, [field]: value }));
    console.log(values)  };

  const validateVIN = (vin: string): boolean => {
    if (vin.length !== 17) return false;
    return /^[A-HJ-NPR-Z0-9]{17}$/i.test(vin);
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
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Standard VIN Input</h4>
        <InputMask
          label="Vehicle Identification Number"
          placeholder="1HGCM82633A123456"
          value={values.vin1}
          onChange={(value) => handleInputChange(value, 'vin1')}
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>VIN Input with Validation</h4>
        <InputMask
          label="Vehicle Identification Number"
          placeholder="1HGCM82633A123456"
          value={values.vin2}
          onChange={(value) => handleInputChange(value, 'vin2')}
          error={values.vin2 && !validateVIN(values.vin2) ? 'Please enter a valid 17-character VIN' : ''}
          success={validateVIN(values.vin2)}
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>VIN Input without Validation Display</h4>
        <InputMask
          label="Vehicle Identification Number"
          placeholder="1HGCM82633A123456"
          value={values.vin3}
          onChange={(value) => handleInputChange(value, 'vin3')}
          showValidation={false}
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Disabled VIN Input</h4>
        <InputMask
          label="Vehicle Identification Number"
          placeholder="1HGCM82633A123456"
          value="1HGCM82633A123456"
          disabled={true}
        />
      </div>
    </div>
  );
};

export default Example_27;
