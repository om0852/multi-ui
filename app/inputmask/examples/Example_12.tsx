"use client"
import React, { useState } from 'react';
import InputMask from '../tsx/InputMask_12';

const Example_12: React.FC = () => {
  const [values, setValues] = useState({
    phone: '',
    date: '',
    time: '',
    ssn: ''
  });

  const [errors, setErrors] = useState({
    phone: '',
    date: '',
    time: '',
    ssn: ''
  });

  const handleInputChange = (value: string, field: string) => {
    console.log(`${field} Value:`, value);
setValues(prev => ({ ...prev, [field]: value }));
    console.log(values)    
    // Validate inputs
    switch (field) {
      case 'phone':
        setErrors(prev => ({
          ...prev,
          phone: value.length < 14 ? 'Please enter a complete phone number' : ''
        }));
        break;
      case 'date':
        setErrors(prev => ({
          ...prev,
          date: value.length < 10 ? 'Please enter a complete date' : ''
        }));
        break;
      case 'time':
        setErrors(prev => ({
          ...prev,
          time: value.length < 5 ? 'Please enter a complete time' : ''
        }));
        break;
      case 'ssn':
        setErrors(prev => ({
          ...prev,
          ssn: value.length < 11 ? 'Please enter a complete SSN' : ''
        }));
        break;
    }
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
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Phone Input with Validation</h4>
        <InputMask
          label="Phone Number"
          placeholder="(555) 555-5555"
          onChange={(value) => handleInputChange(value, 'phone')}
          className={errors.phone ? "border-red-500" : ""}
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Date Input with Validation</h4>
        <InputMask
          label="Date"
          placeholder="MM/DD/YYYY"
          onChange={(value) => handleInputChange(value, 'date')}
          className={errors.date ? "border-red-500" : ""}
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Time Input with Validation</h4>
        <InputMask
          label="Time"
          placeholder="HH:MM"
          onChange={(value) => handleInputChange(value, 'time')}
          className={errors.time ? "border-red-500" : ""}
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>SSN Input with Validation</h4>
        <InputMask
          label="Social Security Number"
          placeholder="123-45-6789"
          onChange={(value) => handleInputChange(value, 'ssn')}
          className={errors.ssn ? "border-red-500" : ""}
        />
      </div>
    </div>
  );
};

export default Example_12;
