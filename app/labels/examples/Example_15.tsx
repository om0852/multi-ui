"use client"
import React from 'react';
import { Label_15 } from '../tsx/Label_15';

const Example_15: React.FC = () => {
  return (
    <div style={{ 
      maxWidth: '600px', 
      margin: '2rem auto', 
      padding: '2rem',
      background: '#ffffff',
      borderRadius: '12px',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      display: 'flex',
      flexDirection: 'column',
      gap: '2rem'
    }}>
      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Success Label</h4>
        <Label_15 
          text="Operation successful" 
          type="success"
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Loading Label</h4>
        <Label_15 
          text="Processing request" 
          type="loading"
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Error Label</h4>
        <Label_15 
          text="Failed to connect" 
          type="error"
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Custom Success Message</h4>
        <Label_15 
          text="Payment completed" 
          type="success"
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Custom Styled Label</h4>
        <Label_15 
          text="Uploading files" 
          type="loading"
          className="font-bold"
        />
      </div>
    </div>
  );
};

export default Example_15;
