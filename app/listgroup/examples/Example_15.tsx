"use client"
import React, { useState } from 'react';
import SteampunkListGroup from '../_components/ListGroup_15';

const Example_15: React.FC = () => {
  const [activeItem, setActiveItem] = useState('item1');

  const items = [
    {
      id: 'item1',
      title: 'Airship Controls',
      description: 'Navigation and altitude systems',
      badge: 'ACTIVE',
      badgeColor: '#d4af37'
    },
    {
      id: 'item2',
      title: 'Steam Engine',
      description: 'Power generation status',
      badge: '87%',
      badgeColor: '#cd7f32'
    },
    {
      id: 'item3',
      title: 'Gear Mechanisms',
      description: 'Clockwork and mechanical systems',
      badge: 'STABLE',
      badgeColor: '#8b7355'
    },
    {
      id: 'item4',
      title: 'Pressure Valves',
      description: 'Steam pressure regulation',
    },
    {
      id: 'item5',
      title: 'Boiler System',
      description: 'Currently under maintenance',
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
      background: '#3c3028',
      borderRadius: '12px',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.3)',
    }}>
      <h3 style={{ 
        marginBottom: '1.5rem', 
        color: '#d4af37', 
        textAlign: 'center',
        fontFamily: 'Georgia, serif',
        textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)'
      }}>
        Airship Control Panel
      </h3>
      
      <SteampunkListGroup 
        items={items} 
        onSelect={handleSelect} 
        activeItem={activeItem} 
      />
    </div>
  );
};

export default Example_15;
