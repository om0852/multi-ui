"use client"
import React from 'react';
import { Label_12 } from '../tsx/Label_12';

const Example_12: React.FC = () => {
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
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Countdown Timer Label</h4>
        <Label_12 
          text="Offer ends in" 
          time="23:59:59"
          type="countdown"
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Elapsed Timer Label</h4>
        <Label_12 
          text="Session duration" 
          time="01:45:30"
          type="elapsed"
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Short Countdown Label</h4>
        <Label_12 
          text="Starting in" 
          time="00:30"
          type="countdown"
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Long Elapsed Label</h4>
        <Label_12 
          text="Uptime" 
          time="72:15:45"
          type="elapsed"
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Custom Styled Timer Label</h4>
        <Label_12 
          text="Auction ends" 
          time="04:30:00"
          type="countdown"
          className="font-bold text-base"
        />
      </div>
    </div>
  );
};

export default Example_12;
