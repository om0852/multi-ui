import React, { useState } from 'react';
import InputField from '../_components/InputField_47';

const Example_47: React.FC = () => {
  const [formData, setFormData] = useState({
    sender: '',
    recipient: '',
    subject: '',
    message: ''
  });

  const handleChange = (field: string) => (value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div style={{
      maxWidth: '800px',
      margin: '2rem auto',
      padding: '3rem',
      background: '#f8f3e3',
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.08'/%3E%3C/svg%3E")`,
      borderRadius: '8px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      display: 'flex',
      flexDirection: 'column',
      gap: '2.5rem',
      position: 'relative'
    }}>
      {/* Vintage paper texture */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(45deg, transparent 0%, rgba(0, 0, 0, 0.02) 50%, transparent 100%)',
        borderRadius: '8px',
        pointerEvents: 'none'
      }}></div>
      
      <div style={{ 
        textAlign: 'center',
        marginBottom: '1rem',
        position: 'relative'
      }}>
        <h3 style={{ 
          color: '#2c1810',
          fontSize: '2.2rem',
          fontFamily: "'Playfair Display', serif",
          fontWeight: 700,
          marginBottom: '0.5rem',
          fontStyle: 'italic'
        }}>
          Vintage Correspondence
        </h3>
        <p style={{ 
          color: 'rgba(44, 24, 16, 0.7)',
          fontFamily: "'Playfair Display', serif",
          fontSize: '1.1rem',
          fontStyle: 'italic'
        }}>
          Please fill out the letter details below
        </p>
      </div>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '3rem',
        width: '100%',
        position: 'relative'
      }}>
        <div>
          <InputField
            label="From"
            placeholder="Your name..."
            value={formData.sender}
            onChange={handleChange('sender')}
            success={formData.sender.length >= 3}
            error={formData.sender.length > 0 && formData.sender.length < 3 ? 'Name is too short' : ''}
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
            label="To"
            placeholder="Recipient's name..."
            value={formData.recipient}
            onChange={handleChange('recipient')}
            success={formData.recipient.length >= 3}
            error={formData.recipient.length > 0 && formData.recipient.length < 3 ? 'Name is too short' : ''}
            icon={
              <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            }
            required
          />
        </div>

        <div>
          <InputField
            label="Subject"
            placeholder="What is this regarding..."
            value={formData.subject}
            onChange={handleChange('subject')}
            icon={
              <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
              </svg>
            }
          />
        </div>

        <div>
          <InputField
            label="Message"
            placeholder="Your message..."
            value={formData.message}
            onChange={handleChange('message')}
            disabled
            icon={
              <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            }
          />
        </div>
      </div>
      
      <div style={{
        marginTop: '1rem',
        padding: '1.5rem',
        background: '#f4e4bc',
        borderRadius: '8px',
        color: 'rgba(44, 24, 16, 0.7)',
        fontSize: '1rem',
        textAlign: 'center',
        fontFamily: "'Playfair Display', serif",
        fontStyle: 'italic',
        border: '1px solid rgba(44, 24, 16, 0.1)',
        position: 'relative',
        boxShadow: '2px 2px 8px rgba(0, 0, 0, 0.05)'
      }}>
        Focus on any field to see the ink blot animation effect
      </div>
    </div>
  );
};

export default Example_47;
