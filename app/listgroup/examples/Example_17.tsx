"use client"
import React, { useState } from 'react';
import NeonListGroup from '../_components/ListGroup_17';

const Example_17: React.FC = () => {
  const [activeItem, setActiveItem] = useState('item1');

  const items = [
    {
      id: 'item1',
      title: 'Nightclub',
      description: 'Dance floor and DJ booth',
      badge: 'HOT',
      badgeColor: '#ff00ff'
    },
    {
      id: 'item2',
      title: 'Arcade',
      description: 'Retro and modern games',
      badge: 'NEW',
      badgeColor: '#00ffff'
    },
    {
      id: 'item3',
      title: 'Lounge',
      description: 'Relaxation and drinks',
      badge: 'VIP',
      badgeColor: '#ffff00'
    },
    {
      id: 'item4',
      title: 'Rooftop',
      description: 'Skyline views and cocktails',
    },
    {
      id: 'item5',
      title: 'Private Room',
      description: 'Reserved for special events',
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
      background: '#0f0f1a',
      borderRadius: '12px',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.3)',
    }}>
      <h3 style={{ 
        marginBottom: '1.5rem', 
        color: '#ff00ff', 
        textAlign: 'center',
        fontFamily: 'Arial, sans-serif',
        textShadow: '0 0 5px #ff00ff, 0 0 10px #ff00ff, 0 0 15px #ff00ff'
      }}>
        Neon Nightlife
      </h3>
      
      <NeonListGroup 
        items={items} 
        onSelect={handleSelect} 
        activeItem={activeItem} 
      />
    </div>
  );
};

export default Example_17;
