import React, { useState } from 'react';
import InputField from '../_components/InputField_39';

const Example_39: React.FC = () => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    content: '',
    date: ''
  });

  const handleChange = (field: string) => (value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div style={{
      maxWidth: '800px',
      margin: '2rem auto',
      padding: '3rem',
      background: '#f1f3f5',
      borderRadius: '8px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      fontFamily: "'Courier Prime', monospace"
    }}>
      <div style={{ 
        textAlign: 'center',
        marginBottom: '2rem'
      }}>
        <h3 style={{ 
          color: '#212529',
          fontSize: '1.8rem',
          fontFamily: "'Courier Prime', monospace",
          fontWeight: 700,
          marginBottom: '0.5rem',
          letterSpacing: '0.1em'
        }}>
          TYPEWRITER FORM
        </h3>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.5rem',
          color: '#495057',
          fontSize: '0.9rem',
          letterSpacing: '0.1em'
        }}>
          <span>{'>'}</span>
          <span>PLEASE FILL OUT THE FORM BELOW</span>
          <span style={{
            width: '8px',
            height: '16px',
            background: '#212529',
            display: 'inline-block',
            animation: 'blink 1s step-end infinite'
          }}></span>
        </div>
        <style jsx>{`
          @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
          }
        `}</style>
      </div>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem',
        width: '100%'
      }}>
        <div>
          <InputField
            label="DOCUMENT TITLE"
            placeholder="Enter title..."
            value={formData.title}
            onChange={handleChange('title')}
            success={formData.title.length >= 3}
            error={formData.title.length > 0 && formData.title.length < 3 ? 'Title too short' : ''}
            icon={
              <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
              </svg>
            }
            required
          />
        </div>

        <div>
          <InputField
            label="AUTHOR NAME"
            placeholder="Your name..."
            value={formData.author}
            onChange={handleChange('author')}
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
            label="DOCUMENT CONTENT"
            placeholder="Start typing..."
            value={formData.content}
            onChange={handleChange('content')}
            icon={
              <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            }
          />
        </div>

        <div>
          <InputField
            label="CREATION DATE"
            placeholder="MM/DD/YYYY"
            value={formData.date}
            onChange={handleChange('date')}
            disabled
            icon={
              <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            }
          />
        </div>
      </div>
      
      <div style={{
        marginTop: '2rem',
        padding: '1rem',
        borderTop: '1px dashed #adb5bd',
        color: '#495057',
        fontFamily: "'Courier Prime', monospace",
        fontSize: '0.9rem',
        letterSpacing: '0.1em'
      }}>
        <div>{"> SYSTEM: READY FOR INPUT"}</div>
        <div>{"> STATUS: "}{formData.title ? 'DOCUMENT INITIALIZED' : 'AWAITING DOCUMENT TITLE'}</div>
      </div>
    </div>
  );
};

export default Example_39;
