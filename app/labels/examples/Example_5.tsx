"use client"
import React from 'react';
import { Label_5 } from '../_components/Label_5';

const Example_5: React.FC = () => {
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
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Online Status</h4>
        <Label_5 
          text="John Doe" 
          status="online"
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Away Status</h4>
        <Label_5 
          text="Jane Smith" 
          status="away"
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Offline Status</h4>
        <Label_5 
          text="Mike Johnson" 
          status="offline"
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Busy Status</h4>
        <Label_5 
          text="Sarah Williams" 
          status="busy"
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Custom Styled Status</h4>
        <Label_5 
          text="Team Leader" 
          status="online"
          className="bg-blue-50 font-semibold"
        />
      </div>
    </div>
  );
};

export default Example_5;
