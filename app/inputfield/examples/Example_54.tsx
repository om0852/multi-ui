import React, { useState } from 'react';
import InputField from '../_components/InputField_54';

const Example_54: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    planet: ''
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
      background: 'linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)',
      borderRadius: '16px',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
      display: 'flex',
      flexDirection: 'column',
      gap: '2.5rem',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Cosmic background elements */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(circle at 20% 30%, rgba(255, 0, 255, 0.1) 0%, transparent 40%), radial-gradient(circle at 80% 70%, rgba(0, 255, 255, 0.1) 0%, transparent 40%)',
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
          fontSize: '2.2rem',
          fontFamily: "'Quicksand', sans-serif",
          fontWeight: 600,
          marginBottom: '0.5rem',
          textShadow: '0 0 15px rgba(0, 255, 255, 0.5)',
        }}>
          Cosmic Contact Portal
        </h3>
        <p style={{ 
          color: 'rgba(255, 255, 255, 0.7)',
          fontFamily: "'Quicksand', sans-serif",
          letterSpacing: '0.5px'
        }}>
          Send your message across the universe
        </p>
      </div>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2.5rem',
        width: '100%',
        position: 'relative',
        zIndex: 1,
        justifyItems: 'center'
      }}>
        <div>
          <InputField
            label="Cosmic Name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange('name')}
            success={formData.name.length >= 3}
            error={formData.name.length > 0 && formData.name.length < 3 ? 'Name too short for cosmic registry' : ''}
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
            label="Astral Email"
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange('email')}
            success={Boolean(formData.email && validateEmail(formData.email))}
            error={formData.email && !validateEmail(formData.email) ? 'Invalid cosmic communication channel' : ''}
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
            label="Stellar Message"
            placeholder="Type your message to the stars"
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
            label="Home Planet"
            placeholder="Select your origin"
            value={formData.planet}
            onChange={handleChange('planet')}
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
        background: 'rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(10px)',
        borderRadius: '12px',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        color: 'rgba(255, 255, 255, 0.7)',
        fontSize: '0.9rem',
        textAlign: 'center',
        fontFamily: "'Quicksand', sans-serif",
        position: 'relative',
        zIndex: 1,
        boxShadow: '0 0 20px rgba(0, 255, 255, 0.1)'
      }}>
        Focus on any input field to activate the cosmic animation with stars and meteors
      </div>
    </div>
  );
};

export default Example_54; 