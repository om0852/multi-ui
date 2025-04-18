"use client"
import React from 'react';
import { Label_25 } from '../_components/Label_25';

const Example_25: React.FC = () => {
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
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Progress Circular Label</h4>
        <Label_25 
          text="Progress" 
          value={75}
          maxValue={100}
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Storage Circular Label</h4>
        <Label_25 
          text="Storage" 
          value={45}
          maxValue={100}
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Tasks Circular Label</h4>
        <Label_25 
          text="Tasks" 
          value={8}
          maxValue={10}
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Battery Circular Label</h4>
        <Label_25 
          text="Battery" 
          value={85}
          maxValue={100}
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Custom Styled Circular Label</h4>
        <Label_25 
          text="Completion" 
          value={60}
          maxValue={100}
          className="bg-blue-50"
        />
      </div>
    </div>
  );
};

export default Example_25;
