"use client"
import React, { useState } from 'react';
import InputField from '../_components/InputField_23';

const Example_23: React.FC = () => {
  const [formData, setFormData] = useState({
    search: '',
    notification: '',
    payment: '',
    settings: ''
  });

  const handleChange = (field: string) => (value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div style={{
      maxWidth: '600px',
      margin: '2rem auto',
      padding: '3rem',
      background: '#ffffff',
      borderRadius: '16px',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '2rem'
    }}>
      <div>
        <h4 style={{ marginBottom: '1rem', color: '#6366f1' }}>Indigo Glow</h4>
        <InputField
          label="Search"
          placeholder="Search anything..."
          value={formData.search}
          onChange={handleChange('search')}
          color="indigo"
          icon={
            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          }
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#f43f5e' }}>Rose Glow</h4>
        <InputField
          label="Notifications"
          placeholder="Enter keywords"
          value={formData.notification}
          onChange={handleChange('notification')}
          color="rose"
          icon={
            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          }
          success={formData.notification.length > 0}
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#10b981' }}>Emerald Glow</h4>
        <InputField
          label="Payment Amount"
          type="number"
          placeholder="Enter amount"
          value={formData.payment}
          onChange={handleChange('payment')}
          color="emerald"
          icon={
            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          }
          success={Boolean(formData.payment && !isNaN(Number(formData.payment)))}
          error={formData.payment && isNaN(Number(formData.payment)) ? 'Please enter a valid number' : ''}
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#f59e0b' }}>Amber Glow</h4>
        <InputField
          label="Settings Key"
          placeholder="Enter key"
          value={formData.settings}
          onChange={handleChange('settings')}
          color="amber"
          icon={
            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          }
          disabled
        />
      </div>
    </div>
  );
};

export default Example_23;
