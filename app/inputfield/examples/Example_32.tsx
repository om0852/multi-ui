import React, { useState } from 'react';
import InputField from '../_components/InputField_32';

const Example_32: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (field: string) => (value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const validateEmail = (email: string): boolean => {
    return !!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  };

  return (
    <div style={{
      maxWidth: '700px',
      margin: '2rem auto',
      padding: '3rem',
      background: '#f8f5f0',
      borderRadius: '8px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
      display: 'flex',
      flexDirection: 'column',
      gap: '3rem'
    }}>
      <div style={{ textAlign: 'center' }}>
        <h3 style={{ 
          color: '#1f2937',
          fontSize: '2rem',
          fontFamily: 'Crimson Text, serif',
          marginBottom: '0.5rem'
        }}>
          Calligraphy Form
        </h3>
        <p style={{ 
          color: '#6b7280',
          fontFamily: 'Crimson Text, serif',
          fontStyle: 'italic'
        }}>
          Please fill out the form with your elegant script
        </p>
      </div>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2.5rem',
        width: '100%'
      }}>
        <div>
          <InputField
            label="Your Name"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleChange('name')}
            success={formData.name.length >= 3}
            error={formData.name.length > 0 && formData.name.length < 3 ? 'Name is too short' : ''}
            icon={
              <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            placeholder="Your email address"
            value={formData.email}
            onChange={handleChange('email')}
            success={Boolean(formData.email && validateEmail(formData.email))}
            error={formData.email && !validateEmail(formData.email) ? 'Please enter a valid email' : ''}
            icon={
              <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            }
            required
          />
        </div>

        <div>
          <InputField
            label="Subject"
            placeholder="What is this regarding?"
            value={formData.subject}
            onChange={handleChange('subject')}
            icon={
              <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
              </svg>
            }
          />
        </div>

        <div>
          <InputField
            label="Message"
            placeholder="Your thoughtful message"
            value={formData.message}
            onChange={handleChange('message')}
            disabled
            icon={
              <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Example_32;
