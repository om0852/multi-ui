import React, { useState } from 'react';
import InputField from '../_components/InputField_51';

const Example_51: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    phone: ''
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
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
      borderRadius: '16px',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
      display: 'flex',
      flexDirection: 'column',
      gap: '2rem'
    }}>
      <div style={{ 
        textAlign: 'center',
        marginBottom: '1rem'
      }}>
        <h3 style={{ 
          color: '#339af0',
          fontSize: '2rem',
          fontFamily: "'Nunito', sans-serif",
          fontWeight: 700,
          marginBottom: '0.5rem'
        }}>
          Liquid Bubble Interface
        </h3>
        <p style={{ 
          color: '#495057',
          fontFamily: "'Nunito', sans-serif"
        }}>
          Experience the fluid animations with bubbles and ripple effects
        </p>
      </div>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem',
        width: '100%',
        justifyItems: 'center'
      }}>
        <div>
          <InputField
            label="Your Name"
            placeholder="Enter your name"
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
            label="Message"
            placeholder="Type your message"
            value={formData.message}
            onChange={handleChange('message')}
            icon={
              <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            }
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
        background: 'rgba(51, 154, 240, 0.1)',
        borderRadius: '12px',
        border: '1px solid rgba(51, 154, 240, 0.3)',
        color: '#495057',
        fontSize: '0.9rem',
        textAlign: 'center',
        fontFamily: "'Nunito', sans-serif"
      }}>
        <p>Click on any input field to see the ripple effect and focus to see bubbles rise!</p>
        <p style={{ marginTop: '0.5rem', fontSize: '0.8rem', color: '#868e96' }}>
          The liquid level rises when the field is focused, creating a water-like animation
        </p>
      </div>
    </div>
  );
};

export default Example_51; 