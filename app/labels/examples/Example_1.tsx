"use client"
import React from 'react';
import { Label_1 } from '../_components/Label_1';

const Example_1: React.FC = () => {
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
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Default Label</h4>
        <Label_1 text="Default Label" />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Info Label</h4>
        <Label_1 text="Info Label" type="info" />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Success Label</h4>
        <Label_1 text="Success Label" type="success" />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Warning Label</h4>
        <Label_1 text="Warning Label" type="warning" />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Error Label</h4>
        <Label_1 text="Error Label" type="error" />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Custom Class Label</h4>
        <Label_1 text="Custom Class Label" className="border-2 border-purple-500 bg-purple-100 text-purple-800" />
      </div>
    </div>
  );
};

export default Example_1;
