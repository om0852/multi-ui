"use client"
import React from 'react';
import { Label_27 } from '../tsx/Label_27';

const Example_27: React.FC = () => {
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
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Messages Badge Label</h4>
        <Label_27 
          text="Messages" 
          badgeText="3"
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Notifications Badge Label</h4>
        <Label_27 
          text="Notifications" 
          badgeText="99+"
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Updates Badge Label</h4>
        <Label_27 
          text="Updates" 
          badgeText="New"
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Alerts Badge Label</h4>
        <Label_27 
          text="Alerts" 
          badgeText="5"
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Custom Styled Badge Label</h4>
        <Label_27 
          text="Premium Features" 
          badgeText="PRO"
          className="font-bold"
        />
      </div>
    </div>
  );
};

export default Example_27;
