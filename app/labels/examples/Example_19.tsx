"use client"
import React from 'react';
import { Label_19 } from '../tsx/Label_19';

const Example_19: React.FC = () => {
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
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Blue Animated Border Label</h4>
        <Label_19 
          text="Hover me" 
          color="#3b82f6"
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Green Animated Border Label</h4>
        <Label_19 
          text="Animated" 
          color="#10b981"
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Orange Animated Border Label</h4>
        <Label_19 
          text="Border" 
          color="#f59e0b"
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Purple Animated Border Label</h4>
        <Label_19 
          text="Interactive" 
          color="#8b5cf6"
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Custom Styled Label</h4>
        <Label_19 
          text="Premium" 
          color="#ef4444"
          className="font-bold"
        />
      </div>
    </div>
  );
};

export default Example_19;
