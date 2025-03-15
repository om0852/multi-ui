import React, { useState } from 'react';
import InputField from '../_components/InputField_50';

const Example_50: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
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
      background: 'linear-gradient(135deg, #1a1c20 0%, #16181c 100%)',
      borderRadius: '16px',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
      display: 'flex',
      flexDirection: 'column',
      gap: '2.5rem',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Crystal background elements */}
      <div style={{
        position: 'absolute',
        top: '-50%',
        left: '-20%',
        width: '70%',
        height: '200%',
        background: 'radial-gradient(ellipse at center, rgba(165, 216, 255, 0.1) 0%, rgba(165, 216, 255, 0) 70%)',
        transform: 'rotate(-45deg)',
        pointerEvents: 'none',
        zIndex: 0
      }}></div>
      
      <div style={{
        position: 'absolute',
        bottom: '-30%',
        right: '-10%',
        width: '60%',
        height: '150%',
        background: 'radial-gradient(ellipse at center, rgba(165, 216, 255, 0.1) 0%, rgba(165, 216, 255, 0) 70%)',
        transform: 'rotate(30deg)',
        pointerEvents: 'none',
        zIndex: 0
      }}></div>
      
      <div style={{ 
        textAlign: 'center',
        marginBottom: '1rem',
        position: 'relative',
        zIndex: 1
      }}>
        <h3 style={{ 
          color: '#fff',
          fontSize: '2rem',
          fontFamily: "'Montserrat', sans-serif",
          fontWeight: 700,
          marginBottom: '0.5rem',
          textShadow: '0 0 15px rgba(165, 216, 255, 0.5)'
        }}>
          Crystal Interface
        </h3>
        <p style={{ 
          color: 'rgba(255, 255, 255, 0.7)',
          fontFamily: "'Montserrat', sans-serif",
          letterSpacing: '0.5px'
        }}>
          Experience the prismatic effects and light reflections
        </p>
      </div>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2.5rem',
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
            label="Access Code"
            placeholder="Enter access code"
            value={formData.code}
            onChange={handleChange('code')}
            disabled
            icon={
              <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            }
          />
        </div>
      </div>
      
      <div style={{
        marginTop: '1rem',
        padding: '1.5rem',
        background: 'rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(10px)',
        borderRadius: '12px',
        border: '1px solid rgba(165, 216, 255, 0.2)',
        color: 'rgba(255, 255, 255, 0.7)',
        fontSize: '0.9rem',
        textAlign: 'center',
        fontFamily: "'Montserrat', sans-serif",
        position: 'relative',
        zIndex: 1,
        boxShadow: '0 0 20px rgba(165, 216, 255, 0.1)'
      }}>
        Focus on any input field to see the crystal shimmer and prismatic effects
      </div>
    </div>
  );
};

export default Example_50;
