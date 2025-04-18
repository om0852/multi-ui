"use client"
import React, { useState } from 'react';
import InputMask from '../_components/InputMask_11';

const Example_11: React.FC = () => {
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
      background: '#ffffff',
      borderRadius: '12px',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      display: 'flex',
      flexDirection: 'column',
      gap: '2rem'
    }}>
      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>IPv4 Address Input</h4>
        <InputMask
          label="IP Address"
          placeholder="Enter IPv4 address"
          onChange={(value) => handleInputChange(value, 'ipv4')}
          className="bg-slate-50 border-slate-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Localhost Input</h4>
        <InputMask
          label="Localhost"
          placeholder="Enter localhost IP"
          onChange={(value) => handleInputChange(value, 'localhost')}
          className="bg-slate-50 border-slate-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Network Address Input</h4>
        <InputMask
          label="Network Address"
          placeholder="Enter network address"
          onChange={(value) => handleInputChange(value, 'network')}
          className="bg-slate-50 border-slate-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Broadcast Address Input</h4>
        <InputMask
          label="Broadcast Address"
          placeholder="Enter broadcast address"
          onChange={(value) => handleInputChange(value, 'broadcast')}
          className="bg-slate-50 border-slate-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
  );
};

export default Example_11;
