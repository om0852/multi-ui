"use client"
import React from 'react';
import { ListGroup, ListItem } from '../tsx/ListGroup_2';

const Example_2: React.FC = () => {
  const handleItemClick = (text: string) => {
    console.log(`Clicked on: ${text}`);
  };

  return (
    <div style={{ 
      maxWidth: '600px', 
      margin: '2rem auto', 
      padding: '2rem',
      background: '#f8fafc',
      borderRadius: '12px',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
    }}>
      <h3 style={{ marginBottom: '1.5rem', color: '#1e293b' }}>Dot-Prefixed List Group</h3>
      
      <ListGroup>
        <ListItem onClick={() => handleItemClick('Recent Projects')}>
          Recent Projects
        </ListItem>
        <ListItem onClick={() => handleItemClick('Favorites')}>
          Favorites
        </ListItem>
        <ListItem onClick={() => handleItemClick('Shared with me')}>
          Shared with me
        </ListItem>
        <ListItem onClick={() => handleItemClick('Archived')}>
          Archived
        </ListItem>
        <ListItem onClick={() => handleItemClick('Trash')}>
          Trash
        </ListItem>
      </ListGroup>
    </div>
  );
};

export default Example_2;
