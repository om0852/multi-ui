"use client"
import React from 'react';
import { Label_16 } from '../tsx/Label_16';

const Example_16: React.FC = () => {
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
      gap: '3rem'
    }}>
      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Top Right Corner Label</h4>
        <div style={{ position: 'relative', width: '200px', height: '200px', border: '2px solid #e5e7eb', borderRadius: '8px', overflow: 'hidden', margin: '0 auto' }}>
          <Label_16 
            text="New" 
            position="top-right"
            color="#3b82f6"
          />
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', color: '#6b7280' }}>
            Product Card
          </div>
        </div>
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Top Left Corner Label</h4>
        <div style={{ position: 'relative', width: '200px', height: '200px', border: '2px solid #e5e7eb', borderRadius: '8px', overflow: 'hidden', margin: '0 auto' }}>
          <Label_16 
            text="Sale" 
            position="top-left"
            color="#ef4444"
          />
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', color: '#6b7280' }}>
            Product Card
          </div>
        </div>
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Bottom Right Corner Label</h4>
        <div style={{ position: 'relative', width: '200px', height: '200px', border: '2px solid #e5e7eb', borderRadius: '8px', overflow: 'hidden', margin: '0 auto' }}>
          <Label_16 
            text="-20%" 
            position="bottom-right"
            color="#10b981"
          />
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', color: '#6b7280' }}>
            Product Card
          </div>
        </div>
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Bottom Left Corner Label</h4>
        <div style={{ position: 'relative', width: '200px', height: '200px', border: '2px solid #e5e7eb', borderRadius: '8px', overflow: 'hidden', margin: '0 auto' }}>
          <Label_16 
            text="Hot" 
            position="bottom-left"
            color="#f59e0b"
          />
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', color: '#6b7280' }}>
            Product Card
          </div>
        </div>
      </div>
    </div>
  );
};

export default Example_16;
