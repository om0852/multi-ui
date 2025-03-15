"use client"
import React, { useState } from 'react';
import InputField from '../_components/InputField_19';

const Example_19: React.FC = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    amount: '',
    notes: ''
  });

  const handleChange = (field: string) => (value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div style={{
      maxWidth: '600px',
      margin: '2rem auto',
      padding: '2rem',
      background: '#e0e5ec',
      borderRadius: '16px',
      boxShadow: '8px 8px 16px rgba(163, 177, 198, 0.6), -8px -8px 16px rgba(255, 255, 255, 0.8)',
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '2rem'
    }}>
      <div>
        <InputField
          label="Username"
          placeholder="Enter username"
          value={formData.username}
          onChange={handleChange('username')}
          icon={
            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          }
          required
        />
      </div>

      <div>
        <InputField
          label="Password"
          type="password"
          placeholder="Enter password"
          value={formData.password}
          onChange={handleChange('password')}
          icon={
            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          }
          required
        />
      </div>

      <div>
        <InputField
          label="Amount"
          type="number"
          placeholder="Enter amount"
          value={formData.amount}
          onChange={handleChange('amount')}
          icon={
            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          }
          success={formData.amount !== '' && !isNaN(Number(formData.amount))}
          error={formData.amount !== '' && isNaN(Number(formData.amount)) ? 'Please enter a valid number' : ''}
        />
      </div>

      <div>
        <InputField
          label="Notes"
          placeholder="Optional notes"
          value={formData.notes}
          onChange={handleChange('notes')}
          icon={
            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
          }
        />
      </div>
    </div>
  );
};

export default Example_19;
