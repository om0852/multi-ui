"use client"
import React from 'react';
import InputMask from '../_components/InputMask_5';

const Example_5: React.FC = () => {
  const handleInputChange = (value: string) => {
    console.log("Custom Styled Masked Input Value:", value);
  };

  return (
    <div style={{ 
      maxWidth: '600px', 
      margin: '2rem auto', 
      padding: '2rem',
      background: '#f8fafc',
      borderRadius: '12px',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      display: 'flex',
      flexDirection: 'column',
      gap: '2rem'
    }}>
      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Custom Phone Input</h4>
        <InputMask
          label="Phone Number"
          mask="(999) 999-9999"
          placeholder="(555) 555-5555"
          onChange={handleInputChange}
          className="bg-slate-100 border-slate-400 rounded-lg p-3"
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Custom Date Input</h4>
        <InputMask
          label="Date"
          mask="99/99/9999"
          placeholder="MM/DD/YYYY"
          onChange={handleInputChange}
          className="bg-slate-100 border-slate-400 rounded-lg p-3"
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Custom Time Input</h4>
        <InputMask
          label="Time"
          mask="99:99"
          placeholder="HH:MM"
          onChange={handleInputChange}
          className="bg-slate-100 border-slate-400 rounded-lg p-3"
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Custom SSN Input</h4>
        <InputMask
          label="Social Security Number"
          mask="999-99-9999"
          placeholder="123-45-6789"
          onChange={handleInputChange}
          className="bg-slate-100 border-slate-400 rounded-lg p-3"
        />
      </div>
    </div>
  );
};

export default Example_5;
