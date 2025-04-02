"use client"
import React from 'react';
import { ListGroup, ListItem } from '../tsx/ListGroup_3';

const Example_3: React.FC = () => {
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
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      display: 'flex',
      flexDirection: 'column',
      gap: '2rem'
    }}>
      <div>
        <h3 style={{ marginBottom: '1rem', color: '#1e293b' }}>Default Variant</h3>
        <ListGroup variant="default">
          <ListItem onClick={() => handleItemClick('Home')} animationType="hover-scale">
            Home
          </ListItem>
          <ListItem onClick={() => handleItemClick('Products')} animationType="slide-in">
            Products
          </ListItem>
          <ListItem onClick={() => handleItemClick('Services')} animationType="pulse">
            Services
          </ListItem>
        </ListGroup>
      </div>

      <div>
        <h3 style={{ marginBottom: '1rem', color: '#1e293b' }}>Card Variant</h3>
        <ListGroup variant="card">
          <ListItem onClick={() => handleItemClick('Team Members')} animationType="hover-scale">
            Team Members
          </ListItem>
          <ListItem onClick={() => handleItemClick('Projects')} animationType="slide-in">
            Projects
          </ListItem>
          <ListItem onClick={() => handleItemClick('Tasks')} animationType="pulse">
            Tasks
          </ListItem>
        </ListGroup>
      </div>

      <div>
        <h3 style={{ marginBottom: '1rem', color: '#1e293b' }}>Stacked Variant</h3>
        <ListGroup variant="stacked">
          <ListItem onClick={() => handleItemClick('Notifications')} animationType="hover-scale">
            Notifications
          </ListItem>
          <ListItem onClick={() => handleItemClick('Messages')} animationType="slide-in">
            Messages
          </ListItem>
          <ListItem onClick={() => handleItemClick('Settings')} animationType="pulse">
            Settings
          </ListItem>
        </ListGroup>
      </div>
    </div>
  );
};

export default Example_3;
