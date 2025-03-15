"use client"
import React, { useState } from 'react';
import InputMask from '../_components/InputMask_26';

const Example_26: React.FC = () => {
  const [values, setValues] = useState({
    ssn1: '',
    ssn2: '',
    ssn3: '',
    ssn4: ''
  });

  const handleInputChange = (value: string, field: string) => {
    console.log(`${field} Value:`, value);
setValues(prev => ({ ...prev, [field]: value }));
    console.log(values)  };

  const validateSSN = (ssn: string): boolean => {
    const regex = /^\d{3}-\d{2}-\d{4}$/;
    return regex.test(ssn);
  };

  return (
    <div style={{ 
      maxWidth: '600px', 
      margin: '2rem auto', 
      padding: '2rem',
      background: 'linear-gradient(to right, #1a1a1a, #2a2a2a)',
      borderRadius: '12px',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.3)',
      display: 'flex',
      flexDirection: 'column',
      gap: '2rem'
    }}>
      <div>
        <h4 style={{ marginBottom: '1rem', color: '#e5e7eb' }}>Private SSN Input</h4>
        <InputMask
          label="Social Security Number"
          placeholder="000-00-0000"
          value={values.ssn1}
          onChange={(value) => handleInputChange(value, 'ssn1')}
          isPrivate={true}
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#e5e7eb' }}>Public SSN Input</h4>
        <InputMask
          label="Social Security Number"
          placeholder="000-00-0000"
          value={values.ssn2}
          onChange={(value) => handleInputChange(value, 'ssn2')}
          isPrivate={false}
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#e5e7eb' }}>SSN with Validation</h4>
        <InputMask
          label="Social Security Number"
          placeholder="000-00-0000"
          value={values.ssn3}
          onChange={(value) => handleInputChange(value, 'ssn3')}
          error={values.ssn3 && !validateSSN(values.ssn3) ? 'Please enter a valid SSN' : ''}
          success={validateSSN(values.ssn3)}
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#e5e7eb' }}>Disabled SSN Input</h4>
        <InputMask
          label="Social Security Number"
          placeholder="000-00-0000"
          value="123-45-6789"
          disabled={true}
        />
      </div>
    </div>
  );
};

export default Example_26;
