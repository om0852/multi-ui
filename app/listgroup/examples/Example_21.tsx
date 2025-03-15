"use client"
import React, { useState } from 'react';
import OrigamiListGroup from '../_components/ListGroup_21';

const Example_21: React.FC = () => {
  const [activeItem, setActiveItem] = useState('item1');

  const items = [
    {
      id: 'item1',
      title: 'Origami Crane',
      description: 'Traditional Japanese paper folding',
      badge: 'Beginner',
      badgeColor: '#4dabf7'
    },
    {
      id: 'item2',
      title: 'Paper Lotus',
      description: 'Elegant flower design',
      badge: 'Medium',
      badgeColor: '#51cf66'
    },
    {
      id: 'item3',
      title: 'Modular Cube',
      description: 'Geometric 3D structure',
      badge: 'Advanced',
      badgeColor: '#ff922b'
    },
    {
      id: 'item4',
      title: 'Dragon Design',
      description: 'Complex mythical creature',
    },
    {
      id: 'item5',
      title: 'Master Class',
      description: 'Expert techniques (coming soon)',
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
      background: '#f8f9fa',
      borderRadius: '12px',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    }}>
      <h3 style={{ 
        marginBottom: '1.5rem', 
        color: '#495057', 
        textAlign: 'center',
        fontFamily: 'Arial, sans-serif',
      }}>
        Origami Tutorials
      </h3>
      
      <OrigamiListGroup 
        items={items} 
        onSelect={handleSelect} 
        activeItem={activeItem} 
      />
    </div>
  );
};

export default Example_21;
