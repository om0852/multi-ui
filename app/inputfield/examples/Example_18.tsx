"use client"
import React, { useState } from 'react';
import InputField from '../_components/InputField_18';

const Example_18: React.FC = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleChange = (field: string) => (value: string) => {
setValues(prev => ({ ...prev, [field]: value }));
    console.log(values)    
    // Validate fields
    switch (field) {
      case 'name':
        setErrors(prev => ({
          ...prev,
          name: value.length < 2 ? 'Name must be at least 2 characters' : ''
        }));
        break;
      case 'email':
        setErrors(prev => ({
          ...prev,
          email: !value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/) ? 'Please enter a valid email' : ''
        }));
        break;
      case 'phone':
        setErrors(prev => ({
          ...prev,
          phone: !value.match(/^\d{10}$/) ? 'Please enter a valid 10-digit phone number' : ''
        }));
        break;
    }
  };

  return (
    <div style={{ 
      maxWidth: '400px', 
      margin: '2rem auto', 
      padding: '2rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '2rem'
    }}>
      <div>
        <InputField
          label="Full Name"
          placeholder="Enter your full name"
          value={values.name}
          onChange={handleChange('name')}
          error={errors.name}
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
          label="Email Address"
          type="email"
          placeholder="Enter your email"
          value={values.email}
          onChange={handleChange('email')}
          error={errors.email}
          success={Boolean(values.email && !errors.email)}
          icon={
            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          }
          required
        />
      </div>

      <div>
        <InputField
          label="Phone Number"
          type="number"
          placeholder="Enter your phone number"
          value={values.phone}
          onChange={handleChange('phone')}
          error={errors.phone}
          icon={
            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          }
        />
      </div>

      <div>
        <InputField
          label="Disabled Input"
          placeholder="This input is disabled"
          disabled
          icon={
            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          }
        />
      </div>
    </div>
  );
};

export default Example_18;
