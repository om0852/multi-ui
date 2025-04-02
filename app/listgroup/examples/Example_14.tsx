"use client"
import React, { useState } from 'react';
import NatureListGroup from '../tsx/ListGroup_14';

const Example_14: React.FC = () => {
  const [activeItem, setActiveItem] = useState('item1');

  const items = [
    {
      id: 'item1',
      title: 'Forest Trails',
      description: 'Explore woodland paths',
      badge: 'Popular',
      badgeColor: '#4caf50'
    },
    {
      id: 'item2',
      title: 'Mountain Peaks',
      description: 'Discover scenic viewpoints',
      badge: 'New',
      badgeColor: '#2196f3'
    },
    {
      id: 'item3',
      title: 'Coastal Beaches',
      description: 'Relax by the ocean',
      badge: '5',
      badgeColor: '#ff9800'
    },
    {
      id: 'item4',
      title: 'Desert Landscapes',
      description: 'Experience arid beauty',
    },
    {
      id: 'item5',
      title: 'Arctic Tundra',
      description: 'Currently unavailable',
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
      background: 'linear-gradient(135deg, #e8f5e9 0%, #f1f8e9 100%)',
      borderRadius: '12px',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    }}>
      <h3 style={{ 
        marginBottom: '1.5rem', 
        color: '#2e7d32', 
        textAlign: 'center',
        fontFamily: 'Georgia, serif',
      }}>
        Nature Exploration
      </h3>
      
      <NatureListGroup 
        items={items} 
        onSelect={handleSelect} 
        activeItem={activeItem} 
      />
    </div>
  );
};

export default Example_14;
