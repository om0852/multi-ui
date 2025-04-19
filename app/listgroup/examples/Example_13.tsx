"use client"
import React, { useState } from 'react';
import RetroGamingListGroup from '../tsx/ListGroup_13';

const Example_13: React.FC = () => {
  const [activeItem, setActiveItem] = useState('item1');

  const items = [
    {
      id: 'item1',
      title: 'START GAME',
      description: 'Begin your adventure',
      badge: 'NEW',
      badgeColor: '#33ff33'
    },
    {
      id: 'item2',
      title: 'LOAD GAME',
      description: 'Continue from save point',
      badge: '3',
      badgeColor: '#33ff33'
    },
    {
      id: 'item3',
      title: 'OPTIONS',
      description: 'Configure game settings',
    },
    {
      id: 'item4',
      title: 'HIGH SCORES',
      description: 'View leaderboards',
      badge: 'TOP',
      badgeColor: '#ffff33'
    },
    {
      id: 'item5',
      title: 'QUIT GAME',
      description: 'Exit to desktop',
      disabled: true
    }
  ];

interface ListGroupItem {
    id: string;
    title: string;
    description?: string;
    icon?: React.ReactNode;
    badge?: string | number;
    badgeColor?: string;
    disabled?: boolean;
  }
  
  const handleSelect = (item: ListGroupItem) => {    setActiveItem(item.id);
    console.log(`Selected: ${item.title}`);
  };

  return (
    <div style={{ 
      maxWidth: '600px', 
      margin: '2rem auto', 
      padding: '2rem',
      background: '#000000',
      borderRadius: '12px',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    }}>
      <h3 style={{ 
        marginBottom: '1.5rem', 
        color: '#33ff33', 
        textAlign: 'center',
        fontFamily: '"Press Start 2P", monospace',
        fontSize: '1.2rem',
        textShadow: '0 0 5px #33ff33'
      }}>
        RETRO GAMING MENU
      </h3>
      
      <RetroGamingListGroup 
        items={items} 
        onSelect={handleSelect} 
        activeItem={activeItem} 
      />
    </div>
  );
};

export default Example_13;
