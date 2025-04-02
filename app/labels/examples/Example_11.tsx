"use client"
import React from 'react';
import { Label_11 } from '../tsx/Label_11';

const Example_11: React.FC = () => {
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
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Progress Label (Blue)</h4>
        <Label_11 
          text="Progress" 
          progress={75}
          color="#3b82f6"
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Loading Label (Green)</h4>
        <Label_11 
          text="Loading" 
          progress={45}
          color="#10b981"
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Complete Label (Purple)</h4>
        <Label_11 
          text="Complete" 
          progress={100}
          color="#8b5cf6"
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Starting Label (Orange)</h4>
        <Label_11 
          text="Starting" 
          progress={10}
          color="#f59e0b"
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Custom Styled Label</h4>
        <Label_11 
          text="Uploading" 
          progress={60}
          color="#ef4444"
          className="font-bold"
        />
      </div>
    </div>
  );
};

export default Example_11;
