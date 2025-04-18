"use client"
import React, { useState } from 'react';
import CosmicListGroup from '../_components/ListGroup_19';

const Example_19: React.FC = () => {
  const [activeItem, setActiveItem] = useState('item1');

  const items = [
    {
      id: 'item1',
      title: 'Solar System',
      description: 'Explore planets and moons',
      badge: 'Featured',
      badgeColor: '#5d5dff'
    },
    {
      id: 'item2',
      title: 'Nebulae',
      description: 'Stellar nurseries and cosmic clouds',
      badge: 'New',
      badgeColor: '#ff5dff'
    },
    {
      id: 'item3',
      title: 'Black Holes',
      description: 'Gravitational singularities',
      badge: 'Advanced',
      badgeColor: '#5dffff'
    },
    {
      id: 'item4',
      title: 'Galaxies',
      description: 'Collections of star systems',
    },
    {
      id: 'item5',
      title: 'Dark Matter',
      description: 'Research in progress',
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
      background: '#050520',
      borderRadius: '12px',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.3)',
    }}>
      <h3 style={{ 
        marginBottom: '1.5rem', 
        color: '#ffffff', 
        textAlign: 'center',
        fontFamily: 'Arial, sans-serif',
        textShadow: '0 0 10px #5d5dff, 0 0 20px #5d5dff'
      }}>
        Cosmic Explorer
      </h3>
      
      <CosmicListGroup 
        items={items} 
        onSelect={handleSelect} 
        activeItem={activeItem} 
      />
    </div>
  );
};

export default Example_19;
