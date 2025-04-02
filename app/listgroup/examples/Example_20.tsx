"use client"
import React, { useState } from 'react';
import AquaListGroup from '../tsx/ListGroup_20';

const Example_20: React.FC = () => {
  const [activeItem, setActiveItem] = useState('item1');

  const items = [
    {
      id: 'item1',
      title: 'Coral Reef',
      description: 'Vibrant underwater ecosystem',
      badge: 'Explore',
      badgeColor: '#00ccff'
    },
    {
      id: 'item2',
      title: 'Deep Ocean',
      description: 'Mysterious abyssal zone',
      badge: 'Dive',
      badgeColor: '#0077ff'
    },
    {
      id: 'item3',
      title: 'Tropical Lagoon',
      description: 'Crystal clear waters',
      badge: 'Relax',
      badgeColor: '#00ffcc'
    },
    {
      id: 'item4',
      title: 'Arctic Waters',
      description: 'Polar marine life',
    },
    {
      id: 'item5',
      title: 'Mariana Trench',
      description: 'Expedition unavailable',
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
      background: 'linear-gradient(135deg, #003366 0%, #006699 100%)',
      borderRadius: '12px',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.3)',
    }}>
      <h3 style={{ 
        marginBottom: '1.5rem', 
        color: '#ffffff', 
        textAlign: 'center',
        fontFamily: 'Arial, sans-serif',
        textShadow: '0 0 10px rgba(0, 204, 255, 0.5)'
      }}>
        Ocean Explorer
      </h3>
      
      <AquaListGroup 
        items={items} 
        onSelect={handleSelect} 
        activeItem={activeItem} 
      />
    </div>
  );
};

export default Example_20;
