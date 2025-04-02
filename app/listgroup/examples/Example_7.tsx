"use client"
import React, { useState } from 'react';
import GlassmorphicListGroup from '../tsx/ListGroup_7';

const Example_7: React.FC = () => {
  const [activeItem, setActiveItem] = useState('item1');

  const items = [
    {
      id: 'item1',
      title: 'Premium Features',
      description: 'Unlock advanced capabilities',
      badge: 'PRO',
      badgeColor: '#8b5cf6'
    },
    {
      id: 'item2',
      title: 'Notifications',
      description: 'Stay updated with alerts',
      badge: '3',
      badgeColor: '#ec4899'
    },
    {
      id: 'item3',
      title: 'Cloud Storage',
      description: 'Securely store your files',
      badge: '2TB',
      badgeColor: '#3b82f6'
    },
    {
      id: 'item4',
      title: 'Analytics',
      description: 'Track your performance metrics',
    },
    {
      id: 'item5',
      title: 'Backup',
      description: 'Automatic data protection',
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
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      borderRadius: '12px',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    }}>
      <h3 style={{ marginBottom: '1.5rem', color: 'white', textAlign: 'center' }}>Glassmorphic List Group</h3>
      
      <GlassmorphicListGroup 
        items={items} 
        onSelect={handleSelect} 
        activeItem={activeItem} 
      />
    </div>
  );
};

export default Example_7;
