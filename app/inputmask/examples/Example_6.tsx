"use client"
import React, { useState } from 'react';
import InputMask from '../_components/InputMask_6';

const Example_6: React.FC = () => {
  const [errors, setErrors] = useState({
    phone: '',
    date: '',
    time: '',
    ssn: ''
  });

  const handleInputChange = (value: string, field: string) => {
    console.log(`${field} Value:`, value);
    
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
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Validated Phone Input</h4>
        <InputMask
          label="Phone Number"
          mask="(999) 999-9999"
          placeholder="(555) 555-5555"
          onChange={(value) => handleInputChange(value, 'phone')}
          className={errors.phone ? "border-red-500" : ""}
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Validated Date Input</h4>
        <InputMask
          label="Date"
          mask="99/99/9999"
          placeholder="MM/DD/YYYY"
          onChange={(value) => handleInputChange(value, 'date')}
          className={errors.date ? "border-red-500" : ""}
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Validated Time Input</h4>
        <InputMask
          label="Time"
          mask="99:99"
          placeholder="HH:MM"
          onChange={(value) => handleInputChange(value, 'time')}
          className={errors.time ? "border-red-500" : ""}
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Validated SSN Input</h4>
        <InputMask
          label="Social Security Number"
          mask="999-99-9999"
          placeholder="123-45-6789"
          onChange={(value) => handleInputChange(value, 'ssn')}
          className={errors.ssn ? "border-red-500" : ""}
        />
      </div>
    </div>
  );
};

export default Example_6;
