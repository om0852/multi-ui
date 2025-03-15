import React, { useState } from 'react';
import InputField from '../_components/InputField_40';

const Example_40: React.FC = () => {
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
      maxWidth: '800px',
      margin: '2rem auto',
      padding: '3rem',
      background: 'white',
      borderRadius: '16px',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
      fontFamily: "'Inter', sans-serif"
    }}>
      <div style={{ 
        textAlign: 'center',
        marginBottom: '2.5rem'
      }}>
        <h3 style={{ 
          color: '#1f2937',
          fontSize: '1.8rem',
          fontFamily: "'Inter', sans-serif",
          fontWeight: 600,
          marginBottom: '0.5rem'
        }}>
          Floating Label Form
        </h3>
        <p style={{ 
          color: '#6b7280',
          fontFamily: "'Inter', sans-serif"
        }}>
          Experience smooth label transitions as you interact with the fields
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
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleChange('name')}
            success={formData.name.length >= 3}
            error={formData.name.length > 0 && formData.name.length < 3 ? 'Name must be at least 3 characters' : ''}
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
            error={formData.email && !validateEmail(formData.email) ? 'Please enter a valid email address' : ''}
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
            label="Message"
            placeholder="Type your message"
            value={formData.message}
            onChange={handleChange('message')}
            disabled
            icon={
              <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            }
          />
        </div>
      </div>
      
      <div style={{
        marginTop: '2.5rem',
        padding: '1.5rem',
        background: '#f9fafb',
        borderRadius: '8px',
        color: '#6b7280',
        fontSize: '0.9rem',
        textAlign: 'center'
      }}>
        Try clicking on the input fields to see the floating label animation in action
      </div>
    </div>
  );
};

export default Example_40;
