import React, { useState } from 'react';
import InputField from '../_components/InputField_55';

const Example_55: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    correspondence: '',
    invention: '',
    airshipId: ''
  });

  const handleChange = (field: string) => (value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const validateName = (name: string): boolean => {
    return name.length >= 3;
  };

  return (
    <div style={{
      maxWidth: '800px',
      margin: '2rem auto',
      padding: '3rem',
      background: '#e9d8a6',
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%238b4513' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
      borderRadius: '8px',
      boxShadow: '0 10px 30px rgba(139, 69, 19, 0.2)',
      border: '8px solid #8b4513',
      display: 'flex',
      flexDirection: 'column',
      gap: '2.5rem',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Decorative rivets */}
      {[...Array(8)].map((_, i) => (
        <div key={i} style={{
          position: 'absolute',
          width: '12px',
          height: '12px',
          background: '#cd7f32',
          borderRadius: '50%',
          boxShadow: 'inset 0 2px 2px rgba(255, 255, 255, 0.3), inset 0 -2px 2px rgba(0, 0, 0, 0.3)',
          top: i < 4 ? '10px' : 'calc(100% - 22px)',
          left: `${(i % 4) * 33 + 10}%`
        }}></div>
      ))}
      
      <div style={{ 
        textAlign: 'center',
        marginBottom: '1rem',
        position: 'relative'
      }}>
        <h3 style={{ 
          color: '#8b4513',
          fontSize: '2.5rem',
          fontFamily: "'IM Fell English', serif",
          fontWeight: 700,
          marginBottom: '0.5rem',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)'
        }}>
          Aetheric Communication Device
        </h3>
        <p style={{ 
          color: '#5e3a1e',
          fontFamily: "'IM Fell English', serif",
          fontSize: '1.2rem',
          fontStyle: 'italic'
        }}>
          Please inscribe your particulars below
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
            label="Full Name"
            placeholder="Enter your distinguished name"
            value={formData.name}
            onChange={handleChange('name')}
            success={validateName(formData.name)}
            error={formData.name.length > 0 && !validateName(formData.name) ? 'Name is insufficiently detailed' : ''}
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
            label="Correspondence Address"
            placeholder="Your telegram location"
            value={formData.correspondence}
            onChange={handleChange('correspondence')}
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
            label="Invention Description"
            placeholder="Describe your mechanical marvel"
            value={formData.invention}
            onChange={handleChange('invention')}
            icon={
              <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            }
          />
        </div>

        <div>
          <InputField
            label="Airship Registration"
            placeholder="Your vessel's identification"
            value={formData.airshipId}
            onChange={handleChange('airshipId')}
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
        background: '#d4b33f',
        borderRadius: '8px',
        border: '2px solid #8b4513',
        color: '#5e3a1e',
        fontSize: '1rem',
        textAlign: 'center',
        fontFamily: "'IM Fell English', serif",
        fontStyle: 'italic',
        position: 'relative',
        boxShadow: 'inset 0 2px 4px rgba(255, 255, 255, 0.3), inset 0 -2px 4px rgba(0, 0, 0, 0.1)'
      }}>
        Focus on any input field to activate the gears and steam mechanisms
      </div>
    </div>
  );
};

export default Example_55; 