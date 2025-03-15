"use client"
import React from 'react';
import { Label_10 } from '../_components/Label_10';

const Example_10: React.FC = () => {
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
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Pricing Labels</h4>
        <div style={{ display: 'flex', justifyContent: 'space-around', paddingTop: '2rem', paddingBottom: '1rem' }}>
          <Label_10 
            text="Basic Plan" 
            subtext="$9/month"
          />
          <Label_10 
            text="Premium Plan" 
            subtext="$29/month"
          />
          <Label_10 
            text="Enterprise" 
            subtext="Custom pricing"
          />
        </div>
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Feature Labels</h4>
        <div style={{ display: 'flex', justifyContent: 'space-around', paddingTop: '2rem', paddingBottom: '1rem' }}>
          <Label_10 
            text="New Feature" 
            subtext="Just released"
          />
          <Label_10 
            text="Popular" 
            subtext="Most used"
          />
          <Label_10 
            text="Coming Soon" 
            subtext="In development"
          />
        </div>
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Custom Styled Labels</h4>
        <div style={{ display: 'flex', justifyContent: 'space-around', paddingTop: '2rem', paddingBottom: '1rem' }}>
          <Label_10 
            text="Sale" 
            subtext="50% off"
            className="bg-red-50 text-red-700"
          />
          <Label_10 
            text="Limited Offer" 
            subtext="Ends soon"
            className="bg-amber-50 text-amber-700"
          />
          <Label_10 
            text="Best Value" 
            subtext="Recommended"
            className="bg-green-50 text-green-700"
          />
        </div>
      </div>
    </div>
  );
};

export default Example_10;
