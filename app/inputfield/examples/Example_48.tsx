import React, { useState } from 'react';
import InputField from '../_components/InputField_48';

const Example_48: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    website: ''
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
      background: 'linear-gradient(145deg, #f0f0f0 0%, #e6e6e6 100%)',
      borderRadius: '16px',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
      display: 'flex',
      flexDirection: 'column',
      gap: '2.5rem',
      perspective: '1000px',
      transformStyle: 'preserve-3d'
    }}>
      <div style={{ 
        textAlign: 'center',
        marginBottom: '1rem',
        transform: 'translateZ(40px)',
        transformStyle: 'preserve-3d'
      }}>
        <h3 style={{ 
          color: '#333',
          fontSize: '2rem',
          fontFamily: "'Inter', sans-serif",
          fontWeight: 700,
          marginBottom: '0.5rem',
          textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
        }}>
          3D Contact Form
        </h3>
        <p style={{ 
          color: '#666',
          fontFamily: "'Inter', sans-serif",
          textShadow: '0 1px 2px rgba(0, 0, 0, 0.05)'
        }}>
          Experience the depth with our 3D perspective inputs
        </p>
      </div>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '3rem',
        width: '100%',
        transformStyle: 'preserve-3d'
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
            label="Phone Number"
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
            label="Website"
            placeholder="Enter your website"
            value={formData.website}
            onChange={handleChange('website')}
            disabled
            icon={
              <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            }
          />
        </div>
      </div>
      
      <div style={{
        marginTop: '1rem',
        padding: '1.5rem',
        background: 'linear-gradient(145deg, #ffffff 0%, #f5f5f5 100%)',
        borderRadius: '12px',
        color: '#666',
        fontSize: '0.9rem',
        textAlign: 'center',
        fontFamily: "'Inter', sans-serif",
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0, 0, 0, 0.1)',
        transform: 'translateZ(20px) rotateX(5deg)',
        transformStyle: 'preserve-3d'
      }}>
        Focus on any input field to see the 3D floating animation effect
      </div>
    </div>
  );
};

export default Example_48;
