"use client"
import React, { useState } from 'react';
import CyberpunkListGroup from '../_components/ListGroup_10';

const Example_10: React.FC = () => {
  const [activeItem, setActiveItem] = useState('item1');
  interface ListGroupItem {
    id: string;
    title: string;
    description?: string;
    icon?: React.ReactNode;
    badge?: string | number;
    badgeColor?: string;
    disabled?: boolean;
  }
  
  const items = [
    {
      id: 'item1',
      title: 'NEURAL LINK',
      description: 'Connect to the mainframe',
      badge: 'LIVE',
      badgeColor: '#f43f5e'
    },
    {
      id: 'item2',
      title: 'CYBERWARE',
      description: 'Upgrade your hardware',
      badge: 'NEW',
      badgeColor: '#10b981'
    },
    {
      id: 'item3',
      title: 'NETRUNNER',
      description: 'Access the network protocols',
      badge: 'SECURE',
      badgeColor: '#3b82f6'
    },
    {
      id: 'item4',
      title: 'BLACKMARKET',
      description: 'Find rare components and tech',
    },
    {
      id: 'item5',
      title: 'SYSTEM REBOOT',
      description: 'Maintenance and recovery',
      disabled: true
    }
  ];

  const handleSelect = (item: ListGroupItem) => {
    setActiveItem(item.id);
    console.log(`Selected: ${item.title}`);
  };

  return (
    <div style={{ 
      maxWidth: '600px', 
      margin: '2rem auto', 
      padding: '2rem',
      background: '#0f0f1a',
      borderRadius: '12px',
      boxShadow: '0 0 20px rgba(0, 255, 255, 0.2)',
    }}>
      <h3 style={{ 
        marginBottom: '1.5rem', 
        color: '#f0f0f0', 
        textAlign: 'center',
        textShadow: '0 0 5px #00ffff, 0 0 10px #00ffff',
        fontFamily: 'monospace',
        letterSpacing: '2px'
      }}>
        CYBERPUNK INTERFACE v2.0
      </h3>
      
      <CyberpunkListGroup 
        items={items} 
        onSelect={handleSelect} 
        activeItem={activeItem} 
      />
    </div>
  );
};

export default Example_10;
