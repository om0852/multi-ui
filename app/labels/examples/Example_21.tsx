"use client"
import React from 'react';
import { Label_21 } from '../tsx/Label_21';

const Example_21: React.FC = () => {
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
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Basic Expanding Label</h4>
        <Label_21 
          text="Click me" 
          expandedText="More information here"
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Details Expanding Label</h4>
        <Label_21 
          text="Details" 
          expandedText="Additional context about this item"
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Info Expanding Label</h4>
        <Label_21 
          text="Info" 
          expandedText="Important message you should know"
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Help Expanding Label</h4>
        <Label_21 
          text="Help" 
          expandedText="Click here for assistance with this feature"
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Custom Styled Expanding Label</h4>
        <Label_21 
          text="Features" 
          expandedText="Premium features included in this package"
          className="border border-amber-200"
        />
      </div>
    </div>
  );
};

export default Example_21;
