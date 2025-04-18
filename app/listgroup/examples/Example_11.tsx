"use client"
import React, { useState } from 'react';
import MinimalListGroup from '../_components/ListGroup_11';

const Example_11: React.FC = () => {
  const [activeItem, setActiveItem] = useState('item1');

  const items = [
    {
      id: 'item1',
      title: 'Inbox',
      description: '12 new messages',
      badge: '12',
      badgeColor: '#3b82f6'
    },
    {
      id: 'item2',
      title: 'Drafts',
      description: '4 unsent emails',
      badge: '4',
      badgeColor: '#6b7280'
    },
    {
      id: 'item3',
      title: 'Sent',
      description: 'All sent emails',
    },
    {
      id: 'item4',
      title: 'Spam',
      description: 'Filtered messages',
      badge: '23',
      badgeColor: '#ef4444'
    },
    {
      id: 'item5',
      title: 'Trash',
      description: 'Deleted items',
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
    }}>
      <h3 style={{ 
        marginBottom: '1.5rem', 
        color: '#1e293b', 
        textAlign: 'center',
      }}>
        Minimal List Group
      </h3>
      
      <MinimalListGroup 
        items={items} 
        onSelect={handleSelect} 
        activeItem={activeItem} 
      />
    </div>
  );
};

export default Example_11;
