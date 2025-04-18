"use client"
import React from 'react';
import { ListGroup, ListItem } from '../_components/ListGroup_5';

const Example_5: React.FC = () => {
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
          <ListItem onClick={() => handleItemClick('Profile')} animationType="hover-scale">
            Profile
          </ListItem>
          <ListItem onClick={() => handleItemClick('Account')} animationType="slide-in">
            Account
          </ListItem>
          <ListItem onClick={() => handleItemClick('Security')} animationType="fade-in">
            Security
          </ListItem>
        </ListGroup>
      </div>

      <div>
        <h3 style={{ marginBottom: '1rem', color: '#1e293b' }}>Soft Blue Variant</h3>
        <ListGroup variant="soft-blue">
          <ListItem onClick={() => handleItemClick('Documentation')} animationType="rotate">
            Documentation
          </ListItem>
          <ListItem onClick={() => handleItemClick('Tutorials')} animationType="flip">
            Tutorials
          </ListItem>
          <ListItem onClick={() => handleItemClick('API Reference')} animationType="bounce">
            API Reference
          </ListItem>
        </ListGroup>
      </div>

      <div>
        <h3 style={{ marginBottom: '1rem', color: '#1e293b' }}>Pastel Variant</h3>
        <ListGroup variant="pastel">
          <ListItem onClick={() => handleItemClick('Favorites')} animationType="hover-scale">
            Favorites
          </ListItem>
          <ListItem onClick={() => handleItemClick('Recent')} animationType="slide-in">
            Recent
          </ListItem>
          <ListItem onClick={() => handleItemClick('Bookmarks')} animationType="fade-in">
            Bookmarks
          </ListItem>
        </ListGroup>
      </div>

      <div>
        <h3 style={{ marginBottom: '1rem', color: '#1e293b' }}>Gradient Shift Variant</h3>
        <ListGroup variant="gradient-shift">
          <ListItem onClick={() => handleItemClick('Trending')} animationType="rotate">
            Trending
          </ListItem>
          <ListItem onClick={() => handleItemClick('Popular')} animationType="flip">
            Popular
          </ListItem>
          <ListItem onClick={() => handleItemClick('Recommended')} animationType="bounce">
            Recommended
          </ListItem>
        </ListGroup>
      </div>
    </div>
  );
};

export default Example_5;
