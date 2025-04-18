"use client"
import React, { useState } from 'react';
import MagneticListGroup from '../_components/ListGroup_12';

const Example_12: React.FC = () => {
  const [activeItem, setActiveItem] = useState('item1');

  const items = [
    {
      id: 'item1',
      title: 'Today',
      description: 'Current tasks and events',
      badge: '5',
      badgeColor: '#3b82f6'
    },
    {
      id: 'item2',
      title: 'Tomorrow',
      description: 'Upcoming tasks and events',
      badge: '3',
      badgeColor: '#10b981'
    },
    {
      id: 'item3',
      title: 'This Week',
      description: 'Weekly schedule',
      badge: '12',
      badgeColor: '#8b5cf6'
    },
    {
      id: 'item4',
      title: 'This Month',
      description: 'Monthly overview',
    },
    {
      id: 'item5',
      title: 'Someday',
      description: 'Future plans and ideas',
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
        Magnetic List Group
      </h3>
      
      <MagneticListGroup 
        items={items} 
        onSelect={handleSelect} 
        activeItem={activeItem} 
      />
    </div>
  );
};

export default Example_12;
