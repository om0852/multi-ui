"use client"
import React from 'react';
import { Label_2 } from '../tsx/Label_2';

const Example_2: React.FC = () => {
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
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Premium Label</h4>
        <Label_2 
          text="Premium" 
          startColor="#4F46E5" 
          endColor="#7C3AED"
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>New Label</h4>
        <Label_2 
          text="New" 
          startColor="#059669" 
          endColor="#10B981"
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Hot Label</h4>
        <Label_2 
          text="Hot" 
          startColor="#DC2626" 
          endColor="#EF4444"
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Featured Label</h4>
        <Label_2 
          text="Featured" 
          startColor="#F59E0B" 
          endColor="#FBBF24"
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Limited Edition Label</h4>
        <Label_2 
          text="Limited Edition" 
          startColor="#6D28D9" 
          endColor="#8B5CF6"
          className="font-bold"
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Sale Label</h4>
        <Label_2 
          text="Sale" 
          startColor="#E11D48" 
          endColor="#FB7185"
        />
      </div>
    </div>
  );
};

export default Example_2;
