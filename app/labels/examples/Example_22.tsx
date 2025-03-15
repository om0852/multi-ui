"use client"
import React from 'react';
import { Label_22 } from '../_components/Label_22';

const Example_22: React.FC = () => {
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
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Premium Shimmer Label (Blue)</h4>
        <Label_22 
          text="Premium" 
          color="#3b82f6"
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Special Shimmer Label (Green)</h4>
        <Label_22 
          text="Special" 
          color="#10b981"
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Limited Shimmer Label (Orange)</h4>
        <Label_22 
          text="Limited" 
          color="#f59e0b"
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>New Shimmer Label (Purple)</h4>
        <Label_22 
          text="New" 
          color="#8b5cf6"
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Sale Shimmer Label (Red)</h4>
        <Label_22 
          text="Sale" 
          color="#ef4444"
          className="font-bold"
        />
      </div>
    </div>
  );
};

export default Example_22;
