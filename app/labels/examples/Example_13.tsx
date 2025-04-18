"use client"
import React from 'react';
import { Label_13 } from '../_components/Label_13';

const Example_13: React.FC = () => {
  return (
    <div style={{ 
      maxWidth: '600px', 
      margin: '2rem auto', 
      padding: '2rem',
      background: '#1e293b',
      borderRadius: '12px',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      display: 'flex',
      flexDirection: 'column',
      gap: '2rem'
    }}>
      <div>
        <h4 style={{ marginBottom: '1rem', color: '#ffffff' }}>Trending Label (Blue Glow)</h4>
        <Label_13 
          text="Trending" 
          glowColor="#3b82f6"
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#ffffff' }}>Popular Label (Pink Glow)</h4>
        <Label_13 
          text="Popular" 
          glowColor="#ec4899"
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#ffffff' }}>Featured Label (Purple Glow)</h4>
        <Label_13 
          text="Featured" 
          glowColor="#8b5cf6"
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#ffffff' }}>New Label (Green Glow)</h4>
        <Label_13 
          text="New" 
          glowColor="#10b981"
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#ffffff' }}>Hot Deal Label (Red Glow)</h4>
        <Label_13 
          text="Hot Deal" 
          glowColor="#ef4444"
          className="font-bold"
        />
      </div>
    </div>
  );
};

export default Example_13;
