import React, { useState } from 'react';
import InputField from '../_components/InputField_44';

const Example_44: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  });

  const handleChange = (field: string) => (value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const validateEmail = (email: string): boolean => {
    return !!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  };

  const validateName = (name: string): boolean => {
    return name.length >= 2;
  };

  return (
    <div style={{
      maxWidth: '800px',
      margin: '2rem auto',
      padding: '3rem',
      background: 'white',
      borderRadius: '8px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)',
      display: 'flex',
      flexDirection: 'column',
      gap: '2rem'
    }}>
      <div style={{ 
        textAlign: 'center',
        marginBottom: '1rem'
      }}>
        <h3 style={{ 
          color: '#1f2937',
          fontSize: '1.8rem',
          fontFamily: "'Roboto', sans-serif",
          fontWeight: 500,
          marginBottom: '0.5rem'
        }}>
          Material Design Form
        </h3>
        <p style={{ 
          color: '#6b7280',
          fontFamily: "'Roboto', sans-serif"
        }}>
          Experience the smooth animations and transitions
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
            label="First Name"
            placeholder="Enter your first name"
            value={formData.firstName}
            onChange={handleChange('firstName')}
            success={validateName(formData.firstName)}
            error={formData.firstName && !validateName(formData.firstName) ? 'First name is too short' : ''}
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
            label="Last Name"
            placeholder="Enter your last name"
            value={formData.lastName}
            onChange={handleChange('lastName')}
            success={validateName(formData.lastName)}
            error={formData.lastName && !validateName(formData.lastName) ? 'Last name is too short' : ''}
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
            placeholder="Enter your email address"
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
            label="Phone Number"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={handleChange('phone')}
            disabled
            icon={
              <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            }
          />
        </div>
      </div>
      
      <div style={{
        marginTop: '1rem',
        padding: '1.5rem',
        background: '#f9fafb',
        borderRadius: '4px',
        color: '#6b7280',
        fontSize: '0.9rem',
        textAlign: 'center',
        fontFamily: "'Roboto', sans-serif",
        border: '1px solid #e5e7eb'
      }}>
        Notice how the labels float up when you focus on the input fields
      </div>
    </div>
  );
};

export default Example_44;
