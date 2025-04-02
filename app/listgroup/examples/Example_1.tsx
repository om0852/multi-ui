"use client"
import React from 'react';
import { ListGroup, ListItem } from '../tsx/ListGroup_1';

const Example_1: React.FC = () => {
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
      <h3 style={{ marginBottom: '1.5rem', color: '#1e293b' }}>Basic List Group</h3>
      
      <ListGroup>
        <ListItem onClick={() => handleItemClick('Dashboard')}>
          Dashboard
        </ListItem>
        <ListItem onClick={() => handleItemClick('Profile')}>
          Profile
        </ListItem>
        <ListItem onClick={() => handleItemClick('Settings')}>
          Settings
        </ListItem>
        <ListItem onClick={() => handleItemClick('Messages')}>
          Messages
        </ListItem>
        <ListItem onClick={() => handleItemClick('Logout')}>
          Logout
        </ListItem>
      </ListGroup>
    </div>
  );
};

export default Example_1;
