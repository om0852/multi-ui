"use client"
import React from 'react';
import { Label_18 } from '../tsx/Label_18';

const Example_18: React.FC = () => {
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
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Steps Progress</h4>
        <Label_18 
          text="Steps" 
          count={3}
          total={5}
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Task Progress</h4>
        <Label_18 
          text="Progress" 
          count={7}
          total={10}
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Completed Progress</h4>
        <Label_18 
          text="Complete" 
          count={10}
          total={10}
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Just Started Progress</h4>
        <Label_18 
          text="Started" 
          count={1}
          total={10}
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Custom Styled Progress</h4>
        <Label_18 
          text="Lessons" 
          count={5}
          total={12}
          className="bg-blue-50 font-bold"
        />
      </div>
    </div>
  );
};

export default Example_18;
