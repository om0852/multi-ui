"use client"
import React, { useState } from 'react';
import InputField from '../_components/InputField_26';

const Example_26: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    code: ''
  });

  const handleChange = (field: string) => (value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const validateEmail = (email: string): boolean => {
    return !!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  };

  return (
    <div style={{
      maxWidth: '800px',
      margin: '2rem auto',
      padding: '3rem',
      background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
      borderRadius: '20px',
      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: '2rem',
      perspective: '1000px'
    }}>
      <div style={{ transform: 'translateZ(20px)' }}>
        <h3 style={{ 
          marginBottom: '2rem', 
          color: '#1e293b',
          fontSize: '1.5rem',
          fontWeight: 'bold',
          textAlign: 'center'
        }}>
          3D Form Experience
        </h3>
      </div>

      <div>
        <InputField
          label="Full Name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange('name')}
          success={Boolean(formData.name.length >= 3)}
          error={formData.name.length === 1 || formData.name.length === 2 ? 'Name too short' : undefined}
          icon={
            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
          value={formData.email}
          onChange={handleChange('email')}
          success={Boolean(formData.email && validateEmail(formData.email))}
          error={formData.email && !validateEmail(formData.email) ? 'Invalid email format' : undefined}
          icon={
            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          }
          required
        />
      </div>

      <div>
        <InputField
          label="Password"
          type="password"
          placeholder="Create password"
          value={formData.password}
          onChange={handleChange('password')}
          success={Boolean(formData.password.length >= 8)}
          error={formData.password.length > 0 && formData.password.length < 8 ? 'Password too short' : undefined}
          icon={
            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          }
          required
        />
      </div>

      <div>
        <InputField
          label="Access Code"
          placeholder="Enter code"
          value={formData.code}
          onChange={handleChange('code')}
          disabled
          icon={
            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
            </svg>
          }
        />
      </div>
    </div>
  );
};

export default Example_26;
