"use client"
import React, { useState } from 'react';
import InputField from '../_components/InputField_29';

const Example_29: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    message: '',
    date: ''
  });

  const handleChange = (field: string) => (value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div style={{
      maxWidth: '600px',
      margin: '2rem auto',
      padding: '3rem',
      background: '#fdfaf6',
      borderRadius: '12px',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
      display: 'flex',
      flexDirection: 'column',
      gap: '2rem'
    }}>
      <div>
        <h3 style={{ 
          marginBottom: '2rem', 
          color: '#2c3e50',
          fontSize: '1.8rem',
          fontFamily: 'Architects Daughter, cursive',
          textAlign: 'center',
          borderBottom: '2px solid #ff9999',
          paddingBottom: '1rem'
        }}>
          Notebook Entry
        </h3>
      </div>

      <div>
        <InputField
          label="Your Name"
          placeholder="Write your name..."
          value={formData.name}
          onChange={handleChange('name')}
          success={formData.name.length >= 3}
          error={formData.name.length === 1 || formData.name.length === 2 ? 'Name is too short' : undefined}
          icon={
            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          }
          required
        />
      </div>

      <div>
        <InputField
          label="Subject"
          placeholder="What's this about?"
          value={formData.subject}
          onChange={handleChange('subject')}
          success={formData.subject.length >= 5}
          icon={
            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          }
          required
        />
      </div>

      <div>
        <InputField
          label="Message"
          placeholder="Write your thoughts..."
          value={formData.message}
          onChange={handleChange('message')}
          success={formData.message.length >= 10}
          error={formData.message.length > 0 && formData.message.length < 10 ? 'Message is too short' : undefined}
          icon={
            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
          }
          required
        />
      </div>

      <div>
        <InputField
          label="Date"
          type="text"
          placeholder="Today's date..."
          value={formData.date}
          onChange={handleChange('date')}
          disabled
          icon={
            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          }
        />
      </div>
    </div>
  );
};

export default Example_29;
