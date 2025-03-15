"use client"
import React, { useState } from 'react';
import InputField from '../_components/InputField_25';

const Example_25: React.FC = () => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    year: '',
    tags: ''
  });

  const handleChange = (field: string) => (value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div style={{
      maxWidth: '800px',
      margin: '2rem auto',
      padding: '2rem',
      background: '#f0f0f0',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '2rem',
      border: '8px solid #000',
      position: 'relative'
    }}>
      <div style={{
        position: 'absolute',
        top: '-20px',
        left: '20px',
        background: '#000',
        color: '#fff',
        padding: '4px 12px',
        transform: 'rotate(-2deg)',
        fontWeight: 'bold',
        fontSize: '1.2rem'
      }}>
        BRUTALIST FORM
      </div>

      <div>
        <InputField
          label="Book Title"
          placeholder="ENTER TITLE"
          value={formData.title}
          onChange={handleChange('title')}
          success={formData.title.length >= 3}
          required
          icon={
            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          }
        />
      </div>

      <div>
        <InputField
          label="Author Name"
          placeholder="ENTER AUTHOR"
          value={formData.author}
          onChange={handleChange('author')}
          error={formData.author.length === 1 ? 'NAME TOO SHORT!' : ''}
          icon={
            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          }
        />
      </div>

      <div>
        <InputField
          label="Publication Year"
          type="number"
          placeholder="YYYY"
          value={formData.year}
          onChange={handleChange('year')}
          error={formData.year && (Number(formData.year) < 1900 || Number(formData.year) > 2024) ? 'INVALID YEAR!' : ''}
          icon={
            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          }
        />
      </div>

      <div>
        <InputField
          label="Tags"
          placeholder="ENTER TAGS"
          value={formData.tags}
          onChange={handleChange('tags')}
          disabled
          icon={
            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
            </svg>
          }
        />
      </div>
    </div>
  );
};

export default Example_25;
