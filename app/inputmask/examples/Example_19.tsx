"use client"
import React, { useState } from 'react';
import InputMask from '../_components/InputMask_19';

const Example_19: React.FC = () => {
  const [values, setValues] = useState({
    weight: '',
    height: '',
    distance: '',
    volume: ''
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
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Weight Measurement</h4>
        <InputMask
          label="Weight (kg)"
          placeholder="Enter weight"
          mask="measurement"
          onChange={(value) => handleInputChange(value, 'weight')}
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Height Measurement</h4>
        <InputMask
          label="Height (cm)"
          placeholder="Enter height"
          mask="measurement"
          onChange={(value) => handleInputChange(value, 'height')}
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Distance Measurement</h4>
        <InputMask
          label="Distance (km)"
          placeholder="Enter distance"
          mask="measurement"
          onChange={(value) => handleInputChange(value, 'distance')}
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Volume Measurement</h4>
        <InputMask
          label="Volume (L)"
          placeholder="Enter volume"
          mask="measurement"
          onChange={(value) => handleInputChange(value, 'volume')}
        />
      </div>
    </div>
  );
};

export default Example_19;
