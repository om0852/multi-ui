"use client"
import React from 'react';
import { Label_28 } from '../tsx/Label_28';

const Example_28: React.FC = () => {
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
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Blue Wavy Text Label</h4>
        <Label_28 
          text="Hover me!" 
          color="#3b82f6"
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Green Wavy Text Label</h4>
        <Label_28 
          text="Wavy text" 
          color="#10b981"
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Orange Wavy Text Label</h4>
        <Label_28 
          text="Animation" 
          color="#f59e0b"
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Purple Wavy Text Label</h4>
        <Label_28 
          text="Interactive" 
          color="#8b5cf6"
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Custom Styled Wavy Text Label</h4>
        <Label_28 
          text="Special" 
          color="#ef4444"
          className="font-bold"
        />
      </div>
    </div>
  );
};

export default Example_28;
