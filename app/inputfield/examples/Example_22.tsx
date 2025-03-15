"use client"
import React, { useState } from 'react';
import InputField from '../_components/InputField_22';

const Example_22: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (field: string) => (value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const validateEmail = (email: string): boolean => {
    return !!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  };

  const validatePhone = (phone: string): boolean => {
    return !!phone.match(/^\d{10}$/);
  };

  return (
    <div style={{
      maxWidth: '500px',
      margin: '2rem auto',
      padding: '2rem',
      background: 'white',
      borderRadius: '16px',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem'
    }}>
      <h3 style={{ color: '#1e293b', marginBottom: '1rem' }}>Contact Form</h3>
      
      <div>
        <InputField
          label="Full Name"
          placeholder="John Doe"
          value={formData.name}
          onChange={handleChange('name')}
          success={Boolean(formData.name.length >= 3)}
          error={formData.name.length > 0 && formData.name.length < 3 ? 'Name must be at least 3 characters' : ''}
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
          placeholder="john@example.com"
          value={formData.email}
          onChange={handleChange('email')}
          success={Boolean(formData.email && validateEmail(formData.email))}
          error={formData.email && !validateEmail(formData.email) ? 'Please enter a valid email address' : ''}
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
          type="text"
          placeholder="1234567890"
          value={formData.phone}
          onChange={handleChange('phone')}
          success={Boolean(formData.phone && validatePhone(formData.phone))}
          error={formData.phone && !validatePhone(formData.phone) ? 'Please enter a valid 10-digit phone number' : ''}
          icon={
            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          }
        />
      </div>

      <div>
        <InputField
          label="Message"
          placeholder="Type your message"
          value={formData.message}
          onChange={handleChange('message')}
          icon={
            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
          }
        />
      </div>
    </div>
  );
};

export default Example_22;
