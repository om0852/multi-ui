import React, { useState } from 'react';
import InputField from '../_components/InputField_41';

const Example_41: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: ''
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
      maxWidth: '800px',
      margin: '2rem auto',
      padding: '3rem',
      background: '#e0e5ec',
      borderRadius: '16px',
      boxShadow: '20px 20px 60px #bec3c9, -20px -20px 60px #ffffff',
      display: 'flex',
      flexDirection: 'column',
      gap: '2rem'
    }}>
      <div style={{ 
        textAlign: 'center',
        marginBottom: '1rem'
      }}>
        <h3 style={{ 
          color: '#2d3748',
          fontSize: '2rem',
          fontFamily: "'Poppins', sans-serif",
          fontWeight: 600,
          marginBottom: '0.5rem'
        }}>
          Neumorphic Contact Form
        </h3>
        <p style={{ 
          color: '#4a5568',
          fontFamily: "'Poppins', sans-serif"
        }}>
          Experience the soft UI design with light and shadow effects
        </p>
      </div>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem',
        width: '100%'
      }}>
        <div>
          <InputField
            label="Full Name"
            placeholder="Enter your name"
            value={formData.fullName}
            onChange={handleChange('fullName')}
            success={formData.fullName.length >= 3}
            error={formData.fullName.length > 0 && formData.fullName.length < 3 ? 'Name is too short' : ''}
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
            placeholder="Enter your email"
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
            type="text"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={handleChange('phone')}
            success={Boolean(formData.phone && validatePhone(formData.phone))}
            error={formData.phone && !validatePhone(formData.phone) ? 'Please enter a valid 10-digit number' : ''}
            icon={
              <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            }
          />
        </div>

        <div>
          <InputField
            label="Company"
            placeholder="Enter your company name"
            value={formData.company}
            onChange={handleChange('company')}
            disabled
            icon={
              <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            }
          />
        </div>
      </div>
      
      <div style={{
        marginTop: '1rem',
        padding: '1.5rem',
        background: '#e0e5ec',
        borderRadius: '12px',
        boxShadow: 'inset 5px 5px 10px #bec3c9, inset -5px -5px 10px #ffffff',
        color: '#4a5568',
        fontSize: '0.9rem',
        textAlign: 'center',
        fontFamily: "'Poppins', sans-serif"
      }}>
        Notice how the input fields change from raised to inset when focused
      </div>
    </div>
  );
};

export default Example_41;
