"use client"
import React, { useState } from 'react';
import ZenListGroup from '../_components/ListGroup_26';
import { FaLeaf, FaWater, FaMoon, FaFeather, FaMountain } from 'react-icons/fa';

const Example_26: React.FC = () => {
  const [activeItem, setActiveItem] = useState('item1');

  const items = [
    {
      id: 'item1',
      title: 'Meditation Garden',
      description: 'Find peace in our tranquil garden space',
      icon: <FaLeaf />,
      badge: 'Popular',
      badgeColor: '#2d2d2d'
    },
    {
      id: 'item2',
      title: 'Zen Pond',
      description: 'Reflect by the water with koi fish',
      icon: <FaWater />,
      badge: 'Quiet',
      badgeColor: '#4a4a4a'
    },
    {
      id: 'item3',
      title: 'Evening Meditation',
      description: 'Guided sessions under the stars',
      icon: <FaMoon />,
      badge: 'Daily',
      badgeColor: '#666666'
    },
    {
      id: 'item4',
      title: 'Mindfulness Walk',
      description: 'Guided nature path for reflection',
      icon: <FaFeather />,
      badge: '9am',
      badgeColor: '#808080'
    },
    {
      id: 'item5',
      title: 'Mountain Retreat',
      description: 'Weekend excursion (registration closed)',
      icon: <FaMountain />,
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
      background: '#f9f9f9',
      borderRadius: '8px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
    }}>
      <h3 style={{ 
        marginBottom: '1.5rem', 
        color: '#2d2d2d', 
        textAlign: 'center',
        fontFamily: 'Noto Sans JP, sans-serif',
        fontWeight: 500,
        letterSpacing: '0.05em'
      }}>
        Zen Retreat Activities
      </h3>
      
      <ZenListGroup 
        items={items} 
        onSelect={handleSelect} 
        activeItem={activeItem} 
      />
    </div>
  );
};

export default Example_26;


