"use client"
import React from 'react';
import { Label_20 } from '../tsx/Label_20';

const Example_20: React.FC = () => {
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
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Price Label</h4>
        <Label_20 
          text="Price" 
          subtext="$99.99"
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Status Label</h4>
        <Label_20 
          text="Status" 
          subtext="In Stock"
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Category Label</h4>
        <Label_20 
          text="Category" 
          subtext="Electronics"
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Shipping Label</h4>
        <Label_20 
          text="Shipping" 
          subtext="Free"
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Custom Styled Label</h4>
        <Label_20 
          text="Rating" 
          subtext="4.9/5.0"
          className="border border-amber-200"
        />
      </div>
    </div>
  );
};

export default Example_20;
