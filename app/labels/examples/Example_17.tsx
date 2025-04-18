"use client"
import React from 'react';
import { Label_17 } from '../_components/Label_17';

const Example_17: React.FC = () => {
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
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Loading Label (Blue)</h4>
        <Label_17 
          text="Loading" 
          dotCount={3}
          color="#3b82f6"
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Processing Label (Green)</h4>
        <Label_17 
          text="Processing" 
          dotCount={3}
          color="#10b981"
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Connecting Label (Purple)</h4>
        <Label_17 
          text="Connecting" 
          dotCount={4}
          color="#8b5cf6"
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Waiting Label (Orange)</h4>
        <Label_17 
          text="Waiting" 
          dotCount={2}
          color="#f59e0b"
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Custom Styled Label</h4>
        <Label_17 
          text="Syncing" 
          dotCount={5}
          color="#ef4444"
          className="font-bold"
        />
      </div>
    </div>
  );
};

export default Example_17;
