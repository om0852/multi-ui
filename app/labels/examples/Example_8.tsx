"use client"
import React from 'react';
import { Label_8 } from '../_components/Label_8';

const Example_8: React.FC = () => {
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
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Recording Label (Red Pulse)</h4>
        <Label_8 
          text="Recording" 
          pulseColor="#ef4444"
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Live Label (Green Pulse)</h4>
        <Label_8 
          text="Live" 
          pulseColor="#22c55e"
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Processing Label (Blue Pulse)</h4>
        <Label_8 
          text="Processing" 
          pulseColor="#3b82f6"
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Streaming Label (Purple Pulse)</h4>
        <Label_8 
          text="Streaming" 
          pulseColor="#8b5cf6"
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Custom Styled Label</h4>
        <Label_8 
          text="Premium Content" 
          pulseColor="#f59e0b"
          className="bg-amber-50 font-semibold"
        />
      </div>
    </div>
  );
};

export default Example_8;
