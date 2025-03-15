"use client"
import React from 'react';
import { Label_30 } from '../_components/Label_30';

const Example_30: React.FC = () => {
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
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Blue Magnetic Label</h4>
        <Label_30 
          text="Magnetic" 
          color="#3b82f6"
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Green Magnetic Label</h4>
        <Label_30 
          text="Interactive" 
          color="#10b981"
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Orange Magnetic Label</h4>
        <Label_30 
          text="Movement" 
          color="#f59e0b"
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Purple Magnetic Label</h4>
        <Label_30 
          text="Hover Me" 
          color="#8b5cf6"
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Custom Styled Magnetic Label</h4>
        <Label_30 
          text="Follow Cursor" 
          color="#ef4444"
          className="font-bold"
        />
      </div>
    </div>
  );
};

export default Example_30;
