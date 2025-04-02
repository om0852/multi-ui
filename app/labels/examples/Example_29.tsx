"use client"
import React from 'react';
import { Label_29 } from '../tsx/Label_29';

const Example_29: React.FC = () => {
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
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>News Sliding Label</h4>
        <Label_29 
          texts={[
            "Breaking News",
            "Latest Updates",
            "Top Stories"
          ]}
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Offer Sliding Label</h4>
        <Label_29 
          texts={[
            "Special Offer",
            "50% Off",
            "Limited Time"
          ]}
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Status Sliding Label</h4>
        <Label_29 
          texts={[
            "Online",
            "Active",
            "Available"
          ]}
          interval={1500}
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Weather Sliding Label</h4>
        <Label_29 
          texts={[
            "Sunny",
            "72°F",
            "Clear Skies"
          ]}
          interval={1000}
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Custom Styled Sliding Label</h4>
        <Label_29 
          texts={[
            "Premium",
            "Pro Features",
            "Exclusive Access"
          ]}
          className="bg-purple-100 text-purple-800 font-bold"
        />
      </div>
    </div>
  );
};

export default Example_29;
