"use client"
import React, { useState } from 'react';
import InputMask from '../tsx/InputMask_7';

const Example_7: React.FC = () => {
  const [values, setValues] = useState({
    phone: '',
    date: '',
    time: '',
    ssn: ''
  });

  const handleInputChange = (value: string, field: string) => {
    console.log(`${field} Value:`, value);
setValues(prev => ({ ...prev, [field]: value }));
    console.log(values)  };

  const isComplete = (value: string, mask: string): boolean => {
    return value.length === mask.length;
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
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Phone Input with Success State</h4>
        <InputMask
          label="Phone Number"
          mask="(999) 999-9999"
          placeholder="(555) 555-5555"
          onChange={(value) => handleInputChange(value, 'phone')}
          className={isComplete(values.phone, '(999) 999-9999') ? "border-green-500" : ""}
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Date Input with Success State</h4>
        <InputMask
          label="Date"
          mask="99/99/9999"
          placeholder="MM/DD/YYYY"
          onChange={(value) => handleInputChange(value, 'date')}
          className={isComplete(values.date, '99/99/9999') ? "border-green-500" : ""}
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Time Input with Success State</h4>
        <InputMask
          label="Time"
          mask="99:99"
          placeholder="HH:MM"
          onChange={(value) => handleInputChange(value, 'time')}
          className={isComplete(values.time, '99:99') ? "border-green-500" : ""}
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>SSN Input with Success State</h4>
        <InputMask
          label="Social Security Number"
          mask="999-99-9999"
          placeholder="123-45-6789"
          onChange={(value) => handleInputChange(value, 'ssn')}
          className={isComplete(values.ssn, '999-99-9999') ? "border-green-500" : ""}
        />
      </div>
    </div>
  );
};

export default Example_7;
