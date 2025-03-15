"use client"
import React, { useState } from 'react';
import InputMask from '../_components/InputMask_23';

const Example_23: React.FC = () => {
  const [values, setValues] = useState({
    latLong: '',
    cartesian: '',
    polar: '',
    vector: ''
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
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Latitude/Longitude</h4>
        <InputMask
          label="GPS Coordinates"
          placeholder="Lat, Long"
          mask="latlong"
          onChange={(value) => handleInputChange(value, 'latLong')}
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Cartesian Coordinates</h4>
        <InputMask
          label="Cartesian (x,y,z)"
          placeholder="X, Y, Z"
          mask="cartesian"
          onChange={(value) => handleInputChange(value, 'cartesian')}
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Polar Coordinates</h4>
        <InputMask
          label="Polar (r,θ)"
          placeholder="r, θ"
          mask="polar"
          onChange={(value) => handleInputChange(value, 'polar')}
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Vector Coordinates</h4>
        <InputMask
          label="Vector"
          placeholder="i, j, k"
          mask="vector"
          onChange={(value) => handleInputChange(value, 'vector')}
        />
      </div>
    </div>
  );
};

export default Example_23;
