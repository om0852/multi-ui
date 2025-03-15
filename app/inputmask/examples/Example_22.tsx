"use client"
import React, { useState } from 'react';
import InputMask from '../_components/InputMask_22';

const Example_22: React.FC = () => {
  const [values, setValues] = useState({
    hex: '',
    rgb: '',
    rgba: '',
    hsl: ''
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
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>HEX Color Code</h4>
        <InputMask
          label="HEX Color"
          placeholder="#RRGGBB"
          mask="hex-color"
          onChange={(value) => handleInputChange(value, 'hex')}
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>RGB Color Code</h4>
        <InputMask
          label="RGB Color"
          placeholder="rgb(R, G, B)"
          mask="rgb-color"
          onChange={(value) => handleInputChange(value, 'rgb')}
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>RGBA Color Code</h4>
        <InputMask
          label="RGBA Color"
          placeholder="rgba(R, G, B, A)"
          mask="rgba-color"
          onChange={(value) => handleInputChange(value, 'rgba')}
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>HSL Color Code</h4>
        <InputMask
          label="HSL Color"
          placeholder="hsl(H, S%, L%)"
          mask="hsl-color"
          onChange={(value) => handleInputChange(value, 'hsl')}
        />
      </div>
    </div>
  );
};

export default Example_22;
