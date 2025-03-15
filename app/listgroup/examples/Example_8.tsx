"use client"
import React, { useState } from 'react';
import NeumorphicListGroup from '../_components/ListGroup_8';

const Example_8: React.FC = () => {
  const [activeItem, setActiveItem] = useState('item1');

  const items = [
    {
      id: 'item1',
      title: 'Music',
      description: 'Browse your favorite tracks',
      badge: '128',
      badgeColor: '#6366f1'
    },
    {
      id: 'item2',
      title: 'Podcasts',
      description: 'Listen to trending episodes',
      badge: 'New',
      badgeColor: '#10b981'
    },
    {
      id: 'item3',
      title: 'Playlists',
      description: 'Curated collections for you',
      badge: '12',
      badgeColor: '#f59e0b'
    },
    {
      id: 'item4',
      title: 'Artists',
      description: 'Your favorite musicians',
    },
    {
      id: 'item5',
      title: 'Downloads',
      description: 'Offline content',
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
      background: '#e0e5ec',
      borderRadius: '12px',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    }}>
      <h3 style={{ 
        marginBottom: '1.5rem', 
        color: '#1e293b', 
        textAlign: 'center',
        textShadow: '1px 1px 1px #fff'
      }}>
        Neumorphic List Group
      </h3>
      
      <NeumorphicListGroup 
        items={items} 
        onSelect={handleSelect} 
        activeItem={activeItem} 
      />
    </div>
  );
};

export default Example_8;
