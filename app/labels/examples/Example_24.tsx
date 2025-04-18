"use client"
import React from 'react';
import { Label_24 } from '../_components/Label_24';

const Example_24: React.FC = () => {
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
        <h4 style={{ marginBottom: '1rem', color: '#ffffff' }}>Loading Typewriter Label</h4>
        <Label_24 
          text="Loading..." 
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#ffffff' }}>System Status Typewriter Label</h4>
        <Label_24 
          text="System ready" 
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#ffffff' }}>Command Typewriter Label</h4>
        <Label_24 
          text="$ npm start" 
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#ffffff' }}>Error Typewriter Label</h4>
        <Label_24 
          text="Error: 404 Not Found" 
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#ffffff' }}>Custom Styled Typewriter Label</h4>
        <Label_24 
          text="Initializing..." 
          className="font-bold"
        />
      </div>
    </div>
  );
};

export default Example_24;
