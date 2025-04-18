"use client"
import React, { useState } from 'react';
import PaperListGroup from '../_components/ListGroup_18';

const Example_18: React.FC = () => {
  const [activeItem, setActiveItem] = useState('item1');

  const items = [
    {
      id: 'item1',
      title: 'Journal Entry',
      description: 'Personal thoughts and reflections',
      badge: 'New',
      badgeColor: '#8b4513'
    },
    {
      id: 'item2',
      title: 'To-Do List',
      description: 'Tasks and reminders',
      badge: '5',
      badgeColor: '#a0522d'
    },
    {
      id: 'item3',
      title: 'Recipes',
      description: 'Cooking instructions and ingredients',
      badge: 'Favorite',
      badgeColor: '#cd853f'
    },
    {
      id: 'item4',
      title: 'Travel Notes',
      description: 'Places to visit and experiences',
    },
    {
      id: 'item5',
      title: 'Sketches',
      description: 'Archived drawings',
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
      background: '#f8f4e8',
      borderRadius: '12px',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    }}>
      <h3 style={{ 
        marginBottom: '1.5rem', 
        color: '#8b4513', 
        textAlign: 'center',
        fontFamily: 'Georgia, serif',
      }}>
        Vintage Notebook
      </h3>
      
      <PaperListGroup 
        items={items} 
        onSelect={handleSelect} 
        activeItem={activeItem} 
      />
    </div>
  );
};

export default Example_18;
