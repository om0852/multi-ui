"use client"
import React, { useState } from 'react';
import FloatingListGroup from '../_components/ListGroup_9';

const Example_9: React.FC = () => {
  const [activeItem, setActiveItem] = useState('item1');

  const items = [
    {
      id: 'item1',
      title: 'Explore',
      description: 'Discover new content and features',
      badge: 'Hot',
      badgeColor: '#f43f5e'
    },
    {
      id: 'item2',
      title: 'Create',
      description: 'Start a new project or design',
      badge: 'New',
      badgeColor: '#8b5cf6'
    },
    {
      id: 'item3',
      title: 'Gallery',
      description: 'View your saved works and collections',
      badge: '25+',
      badgeColor: '#06b6d4'
    },
    {
      id: 'item4',
      title: 'Community',
      description: 'Connect with other creators',
    },
    {
      id: 'item5',
      title: 'Resources',
      description: 'Access tutorials and guides',
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
      background: 'linear-gradient(135deg, #4f46e5 0%, #7e22ce 100%)',
      borderRadius: '12px',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    }}>
      <h3 style={{ 
        marginBottom: '1.5rem', 
        color: 'white', 
        textAlign: 'center',
        textShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
      }}>
        Floating Animation List Group
      </h3>
      
      <FloatingListGroup 
        items={items} 
        onSelect={handleSelect} 
        activeItem={activeItem} 
      />
    </div>
  );
};

export default Example_9;
