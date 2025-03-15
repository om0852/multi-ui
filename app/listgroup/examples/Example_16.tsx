"use client"
import React, { useState } from 'react';
import HolographicListGroup from '../_components/ListGroup_16';

const Example_16: React.FC = () => {
  const [activeItem, setActiveItem] = useState('item1');

  const items = [
    {
      id: 'item1',
      title: 'Neural Interface',
      description: 'Connect to virtual reality',
      badge: 'ONLINE',
      badgeColor: '#00ffff'
    },
    {
      id: 'item2',
      title: 'Augmented Vision',
      description: 'Enhanced visual overlay',
      badge: 'ACTIVE',
      badgeColor: '#ff00ff'
    },
    {
      id: 'item3',
      title: 'Quantum Database',
      description: 'Access secure information',
      badge: '99.9%',
      badgeColor: '#00ff00'
    },
    {
      id: 'item4',
      title: 'Biometric Scanner',
      description: 'Identity verification',
    },
    {
      id: 'item5',
      title: 'System Diagnostics',
      description: 'Maintenance required',
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
      background: 'linear-gradient(135deg, #0f1b41 0%, #232b5c 100%)',
      borderRadius: '12px',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.3)',
    }}>
      <h3 style={{ 
        marginBottom: '1.5rem', 
        color: '#00ffff', 
        textAlign: 'center',
        fontFamily: 'Arial, sans-serif',
        textShadow: '0 0 10px #00ffff, 0 0 20px #00ffff'
      }}>
        Holographic Interface
      </h3>
      
      <HolographicListGroup 
        items={items} 
        onSelect={handleSelect} 
        activeItem={activeItem} 
      />
    </div>
  );
};

export default Example_16;
