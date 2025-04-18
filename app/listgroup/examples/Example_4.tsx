"use client"
import React from 'react';
import { ListGroup, ListItem } from '../_components/ListGroup_4';

const Example_4: React.FC = () => {
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
          <ListItem onClick={() => handleItemClick('Dashboard')} animationType="hover-scale">
            Dashboard
          </ListItem>
          <ListItem onClick={() => handleItemClick('Analytics')} animationType="slide-in">
            Analytics
          </ListItem>
          <ListItem onClick={() => handleItemClick('Reports')} animationType="fade-in">
            Reports
          </ListItem>
        </ListGroup>
      </div>

      <div>
        <h3 style={{ marginBottom: '1rem', color: '#1e293b' }}>Bordered Variant</h3>
        <ListGroup variant="bordered">
          <ListItem onClick={() => handleItemClick('Inbox')} animationType="rotate">
            Inbox
          </ListItem>
          <ListItem onClick={() => handleItemClick('Sent')} animationType="flip">
            Sent
          </ListItem>
          <ListItem onClick={() => handleItemClick('Drafts')} animationType="bounce">
            Drafts
          </ListItem>
        </ListGroup>
      </div>

      <div>
        <h3 style={{ marginBottom: '1rem', color: '#1e293b' }}>Highlighted Variant</h3>
        <ListGroup variant="highlighted">
          <ListItem onClick={() => handleItemClick('New Features')} animationType="hover-scale">
            New Features
          </ListItem>
          <ListItem onClick={() => handleItemClick('Updates')} animationType="slide-in">
            Updates
          </ListItem>
          <ListItem onClick={() => handleItemClick('Announcements')} animationType="fade-in">
            Announcements
          </ListItem>
        </ListGroup>
      </div>

      <div>
        <h3 style={{ marginBottom: '1rem', color: '#1e293b' }}>Gradient Variant</h3>
        <ListGroup variant="gradient">
          <ListItem onClick={() => handleItemClick('Premium')} animationType="rotate">
            Premium
          </ListItem>
          <ListItem onClick={() => handleItemClick('Standard')} animationType="flip">
            Standard
          </ListItem>
          <ListItem onClick={() => handleItemClick('Basic')} animationType="bounce">
            Basic
          </ListItem>
        </ListGroup>
      </div>
    </div>
  );
};

export default Example_4;
