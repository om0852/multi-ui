"use client"
import React, { useState } from 'react';
import InputMask from '../_components/InputMask_25';

const Example_25: React.FC = () => {
  const [values, setValues] = useState({
    ipv4: '',
    localhost: '',
    network: '',
    broadcast: ''
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
      background: '#0f172a',
      borderRadius: '12px',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.3)',
      display: 'flex',
      flexDirection: 'column',
      gap: '2rem'
    }}>
      <div>
        <h4 style={{ marginBottom: '1rem', color: '#e2e8f0' }}>IPv4 Address Input</h4>
        <InputMask
          label="IP Address"
          value={values.ipv4}
          onChange={(value) => handleInputChange(value, 'ipv4')}
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#e2e8f0' }}>Localhost Input</h4>
        <InputMask
          label="Localhost"
          value={values.localhost}
          onChange={(value) => handleInputChange(value, 'localhost')}
          success={values.localhost === '127.0.0.1'}
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#e2e8f0' }}>Network Address Input</h4>
        <InputMask
          label="Network Address"
          value={values.network}
          onChange={(value) => handleInputChange(value, 'network')}
          error={values.network && !values.network.endsWith('.0') ? 'Network address should end with .0' : ''}
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#e2e8f0' }}>Broadcast Address Input</h4>
        <InputMask
          label="Broadcast Address"
          value={values.broadcast}
          onChange={(value) => handleInputChange(value, 'broadcast')}
          error={values.broadcast && !values.broadcast.endsWith('.255') ? 'Broadcast address should end with .255' : ''}
        />
      </div>
    </div>
  );
};

export default Example_25;
