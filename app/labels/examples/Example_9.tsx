"use client"
import React, { useState } from 'react';
import { Label_9 } from '../tsx/Label_9';

const Example_9: React.FC = () => {
  const [tags, setTags] = useState([
    { id: 1, text: 'React' },
    { id: 2, text: 'TypeScript' },
    { id: 3, text: 'Tailwind' },
    { id: 4, text: 'Next.js' },
    { id: 5, text: 'Framer Motion' }
  ]);

  const handleRemoveTag = (id: number) => {
    setTags(tags.filter(tag => tag.id !== id));
  };

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
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Removable Tags</h4>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
          {tags.map(tag => (
            <Label_9 
              key={tag.id}
              text={tag.text} 
              onRemove={() => handleRemoveTag(tag.id)}
            />
          ))}
        </div>
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Static Tags (No Remove Button)</h4>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
          <Label_9 text="JavaScript" />
          <Label_9 text="HTML" />
          <Label_9 text="CSS" />
        </div>
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Custom Styled Tags</h4>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
          <Label_9 
            text="Frontend" 
            className="bg-blue-100 text-blue-700"
            onRemove={() => {}}
          />
          <Label_9 
            text="Backend" 
            className="bg-green-100 text-green-700"
            onRemove={() => {}}
          />
          <Label_9 
            text="DevOps" 
            className="bg-purple-100 text-purple-700"
            onRemove={() => {}}
          />
        </div>
      </div>
    </div>
  );
};

export default Example_9;
