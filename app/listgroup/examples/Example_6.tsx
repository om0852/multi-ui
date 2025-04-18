"use client"
import React, { useState } from 'react';
import ListGroup from '../_components/ListGroup_6';

const Example_6: React.FC = () => {
  const [activeItem, setActiveItem] = useState('item1');

  const items = [
    {
      id: 'item1',
      title: 'Dashboard',
      description: 'View your analytics and statistics',
      badge: 'New',
      badgeColor: '#3b82f6'
    },
    {
      id: 'item2',
      title: 'Messages',
      description: 'Check your inbox and conversations',
      badge: '5',
      badgeColor: '#10b981'
    },
    {
      id: 'item3',
      title: 'Tasks',
      description: 'Manage your to-do list and projects',
      badge: '12',
      badgeColor: '#f59e0b'
    },
    {
      id: 'item4',
      title: 'Settings',
      description: 'Configure your account preferences',
    },
    {
      id: 'item5',
      title: 'Help Center',
      description: 'Get support and documentation',
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
      background: '#f8fafc',
      borderRadius: '12px',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      display: 'flex',
      flexDirection: 'column',
      gap: '2rem'
    }}>
      <div>
        <h3 style={{ marginBottom: '1rem', color: '#1e293b' }}>Default Variant</h3>
        <ListGroup 
          items={items} 
          onSelect={handleSelect} 
          activeItem={activeItem} 
          variant="default"
        />
      </div>

      <div>
        <h3 style={{ marginBottom: '1rem', color: '#1e293b' }}>Modern Variant</h3>
        <ListGroup 
          items={items} 
          onSelect={handleSelect} 
          activeItem={activeItem} 
          variant="modern"
        />
      </div>

      <div>
        <h3 style={{ marginBottom: '1rem', color: '#1e293b' }}>Compact Variant</h3>
        <ListGroup 
          items={items} 
          onSelect={handleSelect} 
          activeItem={activeItem} 
          variant="compact"
        />
      </div>
    </div>
  );
};

export default Example_6;
