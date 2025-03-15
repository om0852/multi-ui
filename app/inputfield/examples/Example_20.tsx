"use client"
import React, { useState } from 'react';
import InputField from '../_components/InputField_20';

const Example_20: React.FC = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    tags: '',
    url: ''
  });

  const handleChange = (field: string) => (value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const validateUrl = (url: string) => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  return (
    <div style={{
      maxWidth: '500px',
      margin: '2rem auto',
      padding: '2rem',
      background: 'linear-gradient(145deg, #f3f4f6, #ffffff)',
      borderRadius: '20px',
      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.05)',
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem'
    }}>
      <div>
        <InputField
          label="Project Title"
          placeholder="Enter project title"
          value={formData.title}
          onChange={handleChange('title')}
          icon={
            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          }
          required
        />
      </div>

      <div>
        <InputField
          label="Description"
          placeholder="Enter project description"
          value={formData.description}
          onChange={handleChange('description')}
          icon={
            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          }
        />
      </div>

      <div>
        <InputField
          label="Tags"
          placeholder="Enter comma-separated tags"
          value={formData.tags}
          onChange={handleChange('tags')}
          icon={
            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
            </svg>
          }
          success={Boolean(formData.tags.split(',').filter(tag => tag.trim()).length > 0)}
        />
      </div>

      <div>
        <InputField
          label="Project URL"
          type="text"
          placeholder="Enter project URL"
          value={formData.url}
          onChange={handleChange('url')}
          icon={
            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
          }
          error={formData.url && !validateUrl(formData.url) ? 'Please enter a valid URL' : ''}
          success={Boolean(formData.url && validateUrl(formData.url))}
        />
      </div>
    </div>
  );
};

export default Example_20;
