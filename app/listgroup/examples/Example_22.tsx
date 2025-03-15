"use client"
import React, { useState } from 'react';
import CandyListGroup from '../_components/ListGroup_22';

const Example_22: React.FC = () => {
  const [activeItem, setActiveItem] = useState('item1');

  const items = [
    {
      id: 'item1',
      title: 'Chocolate Bars',
      description: 'Rich and creamy treats',
      badge: 'Popular',
      badgeColor: '#a52a2a'
    },
    {
      id: 'item2',
      title: 'Gummy Bears',
      description: 'Chewy fruit-flavored snacks',
      badge: 'New',
      badgeColor: '#ff69b4'
    },
    {
      id: 'item3',
      title: 'Lollipops',
      description: 'Colorful swirled candy',
      badge: '25%',
      badgeColor: '#ff4500'
    },
    {
      id: 'item4',
      title: 'Cotton Candy',
      description: 'Fluffy spun sugar',
    },
    {
      id: 'item5',
      title: 'Limited Edition',
      description: 'Seasonal flavors (sold out)',
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
      background: 'linear-gradient(135deg, #ffccd5 0%, #ffb3c6 100%)',
      borderRadius: '12px',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    }}>
      <h3 style={{ 
        marginBottom: '1.5rem', 
        color: '#f72585', 
        textAlign: 'center',
        fontFamily: 'Comic Sans MS, cursive',
        textShadow: '1px 1px 2px rgba(255, 255, 255, 0.5)'
      }}>
        Sweet Treats
      </h3>
      
      <CandyListGroup 
        items={items} 
        onSelect={handleSelect} 
        activeItem={activeItem} 
      />
    </div>
  );
};

export default Example_22;
