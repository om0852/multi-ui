import React, { useState } from 'react';
import InputField from '../_components/InputField_58';

const Example_58: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    meditation: '',
    wisdom: '',
    enlightenment: ''
  });

  const handleChange = (field: string) => (value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const validateName = (name: string): boolean => {
    return name.length >= 2;
  };

  return (
    <div style={{
      maxWidth: '800px',
      margin: '2rem auto',
      padding: '3rem',
      background: '#f8f9fa',
      borderRadius: '4px',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
      display: 'flex',
      flexDirection: 'column',
      gap: '2.5rem',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Zen pattern background */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23212529' fill-opacity='0.03' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        opacity: 0.5,
        pointerEvents: 'none'
      }}></div>
      
      <div style={{ 
        textAlign: 'center',
        marginBottom: '1rem',
        position: 'relative'
      }}>
        <h3 style={{ 
          color: '#212529',
          fontSize: '2rem',
          fontFamily: "'Noto Sans JP', sans-serif",
          fontWeight: 500,
          marginBottom: '0.5rem',
          letterSpacing: '2px'
        }}>
          禅の道
        </h3>
        <p style={{ 
          color: '#868e96',
          fontFamily: "'Noto Sans JP', sans-serif",
          fontSize: '1.1rem',
          letterSpacing: '1px'
        }}>
          The Path to Enlightenment
        </p>
      </div>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '3rem',
        width: '100%',
        position: 'relative',
        justifyItems: 'center'
      }}>
        <div>
          <InputField
            label="Name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange('name')}
            success={validateName(formData.name)}
            error={formData.name && !validateName(formData.name) ? 'Name is too short' : ''}
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
            label="Meditation"
            placeholder="Your practice"
            value={formData.meditation}
            onChange={handleChange('meditation')}
            icon={
              <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            }
            required
          />
        </div>

        <div>
          <InputField
            label="Wisdom"
            placeholder="Your insights"
            value={formData.wisdom}
            onChange={handleChange('wisdom')}
            icon={
              <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            }
          />
        </div>

        <div>
          <InputField
            label="Enlightenment"
            placeholder="Your awakening"
            value={formData.enlightenment}
            onChange={handleChange('enlightenment')}
            disabled
            icon={
              <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            }
          />
        </div>
      </div>
      
      <div style={{
        marginTop: '1rem',
        padding: '1.5rem',
        background: 'rgba(33, 37, 41, 0.05)',
        borderRadius: '4px',
        border: '1px solid #dee2e6',
        color: '#868e96',
        fontSize: '0.9rem',
        textAlign: 'center',
        fontFamily: "'Noto Sans JP', sans-serif",
        position: 'relative',
        boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.05)'
      }}>
        Click on any input field to create ink blot effects
      </div>
    </div>
  );
};

export default Example_58; 