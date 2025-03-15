import React, { useState } from 'react';
import InputField from '../_components/InputField_37';

const Example_37: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    location: ''
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
      background: 'linear-gradient(135deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)',
      borderRadius: '16px',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Glass particles */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(circle at 20% 30%, rgba(255, 255, 255, 0.2) 0%, transparent 8%), radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.2) 0%, transparent 6%), radial-gradient(circle at 40% 80%, rgba(255, 255, 255, 0.2) 0%, transparent 10%)',
        zIndex: 0,
        pointerEvents: 'none'
      }}></div>

      <div style={{ 
        textAlign: 'center',
        position: 'relative',
        zIndex: 1,
        marginBottom: '2rem'
      }}>
        <h3 style={{ 
          color: 'white',
          fontSize: '2rem',
          fontFamily: "'Inter', sans-serif",
          fontWeight: 600,
          marginBottom: '0.5rem',
          textShadow: '0 2px 10px rgba(0, 0, 0, 0.2)'
        }}>
          Glass Login
        </h3>
        <p style={{ 
          color: 'rgba(255, 255, 255, 0.8)',
          fontFamily: "'Inter', sans-serif"
        }}>
          Enter your credentials to continue
        </p>
      </div>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem',
        width: '100%',
        position: 'relative',
        zIndex: 1
      }}>
        <div>
          <InputField
            label="Full Name"
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
            label="Password"
            type="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange('password')}
            success={formData.password.length >= 8}
            error={formData.password.length > 0 && formData.password.length < 8 ? 'Password must be at least 8 characters' : ''}
            icon={
              <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            }
            required
          />
        </div>

        <div>
          <InputField
            label="Location"
            placeholder="Enter your location"
            value={formData.location}
            onChange={handleChange('location')}
            disabled
            icon={
              <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Example_37;
