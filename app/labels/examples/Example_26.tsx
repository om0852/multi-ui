"use client"
import React from 'react';
import { Label_26 } from '../tsx/Label_26';

const Example_26: React.FC = () => {
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
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Blue-Purple Gradient Border</h4>
        <Label_26 
          text="Gradient" 
          startColor="#3b82f6"
          endColor="#8b5cf6"
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Green Gradient Border</h4>
        <Label_26 
          text="Border" 
          startColor="#10b981"
          endColor="#059669"
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Orange-Red Gradient Border</h4>
        <Label_26 
          text="Effect" 
          startColor="#f59e0b"
          endColor="#dc2626"
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Pink-Purple Gradient Border</h4>
        <Label_26 
          text="Premium" 
          startColor="#ec4899"
          endColor="#8b5cf6"
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Custom Styled Gradient Border</h4>
        <Label_26 
          text="Special" 
          startColor="#06b6d4"
          endColor="#3b82f6"
          className="font-bold"
        />
      </div>
    </div>
  );
};

export default Example_26;
