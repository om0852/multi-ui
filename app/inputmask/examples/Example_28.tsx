"use client"
import React, { useState } from 'react';
import InputMask from '../_components/InputMask_28';

const Example_28: React.FC = () => {
  const [values, setValues] = useState({
    hex: '#3b82f6',
    rgb: 'rgb(239, 68, 68)',
    hsl: 'hsl(142, 76%, 36%)',
    custom: ''
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
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>HEX Color Input</h4>
        <InputMask
          label="HEX Color"
          placeholder="#000000"
          value={values.hex}
          onChange={(value) => handleInputChange(value, 'hex')}
          format="hex"
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>RGB Color Input</h4>
        <InputMask
          label="RGB Color"
          placeholder="rgb(0, 0, 0)"
          value={values.rgb}
          onChange={(value) => handleInputChange(value, 'rgb')}
          format="rgb"
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>HSL Color Input</h4>
        <InputMask
          label="HSL Color"
          placeholder="hsl(0, 0%, 0%)"
          value={values.hsl}
          onChange={(value) => handleInputChange(value, 'hsl')}
          format="hsl"
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Custom Color Input</h4>
        <InputMask
          label="Custom Color"
          placeholder="Enter color value"
          value={values.custom}
          onChange={(value) => handleInputChange(value, 'custom')}
        />
      </div>
    </div>
  );
};

export default Example_28;
