"use client"
import React from 'react';
import { Label_4 } from '../_components/Label_4';

const Example_4: React.FC = () => {
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
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Messages Label</h4>
        <Label_4 
          text="Messages" 
          count={3}
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Notifications Label</h4>
        <Label_4 
          text="Notifications" 
          count={12}
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Updates Label</h4>
        <Label_4 
          text="Updates" 
          count={5}
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Comments Label</h4>
        <Label_4 
          text="Comments" 
          count={8}
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Label without count</h4>
        <Label_4 
          text="Inbox"
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Custom styled Label</h4>
        <Label_4 
          text="Alerts" 
          count={99}
          className="bg-red-50 border-red-200"
        />
      </div>
    </div>
  );
};

export default Example_4;
