"use client"
import React from 'react';
import { Label_6 } from '../tsx/Label_6';

const Example_6: React.FC = () => {
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
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Featured Ribbon (Blue)</h4>
        <div style={{ position: 'relative', width: 'fit-content' }}>
          <Label_6 
            text="Featured" 
            color="blue"
          />
        </div>
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>New Ribbon (Green)</h4>
        <div style={{ position: 'relative', width: 'fit-content' }}>
          <Label_6 
            text="New" 
            color="green"
          />
        </div>
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Sale Ribbon (Red)</h4>
        <div style={{ position: 'relative', width: 'fit-content' }}>
          <Label_6 
            text="Sale" 
            color="red"
          />
        </div>
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Limited Ribbon (Purple)</h4>
        <div style={{ position: 'relative', width: 'fit-content' }}>
          <Label_6 
            text="Limited" 
            color="purple"
          />
        </div>
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Custom Styled Ribbon</h4>
        <div style={{ position: 'relative', width: 'fit-content' }}>
          <Label_6 
            text="Best Seller" 
            color="blue"
            className="font-bold text-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Example_6;
