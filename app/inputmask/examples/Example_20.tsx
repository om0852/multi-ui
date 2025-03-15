"use client"
import React, { useState } from 'react';
import InputMask from '../_components/InputMask_20';

const Example_20: React.FC = () => {
  const [values, setValues] = useState({
    time12: '',
    time24: '',
    duration: '',
    timezone: ''
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
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>12-Hour Time Format</h4>
        <InputMask
          label="Time (12h)"
          placeholder="hh:mm AM/PM"
          mask="time12"
          onChange={(value) => handleInputChange(value, 'time12')}
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>24-Hour Time Format</h4>
        <InputMask
          label="Time (24h)"
          placeholder="HH:MM"
          mask="time24"
          onChange={(value) => handleInputChange(value, 'time24')}
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Duration Format</h4>
        <InputMask
          label="Duration"
          placeholder="hh:mm:ss"
          mask="duration"
          onChange={(value) => handleInputChange(value, 'duration')}
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Timezone Format</h4>
        <InputMask
          label="Timezone"
          placeholder="GMT+/-hh:mm"
          mask="timezone"
          onChange={(value) => handleInputChange(value, 'timezone')}
        />
      </div>
    </div>
  );
};

export default Example_20;
