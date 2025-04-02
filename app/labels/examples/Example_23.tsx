"use client"
import React from 'react';
import { Label_23 } from '../tsx/Label_23';

const Example_23: React.FC = () => {
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
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Basic Rotating Label</h4>
        <Label_23 
          frontText="Hover me" 
          backText="Hello!"
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Price Rotating Label</h4>
        <Label_23 
          frontText="Price" 
          backText="$99.99"
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Status Rotating Label</h4>
        <Label_23 
          frontText="Status" 
          backText="Available"
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Info Rotating Label</h4>
        <Label_23 
          frontText="More Info" 
          backText="Click for details"
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Custom Styled Rotating Label</h4>
        <Label_23 
          frontText="Features" 
          backText="Premium features included"
          className="font-bold"
        />
      </div>
    </div>
  );
};

export default Example_23;
