"use client"
import React, { useState } from 'react';
import JungleListGroup from '../_components/ListGroup_23';
import { FaLeaf, FaTree, FaSpider, FaPaw, FaFeather } from 'react-icons/fa';

const Example_23: React.FC = () => {
  const [activeItem, setActiveItem] = useState('item1');

  const items = [
    {
      id: 'item1',
      title: 'Tropical Plants',
      description: 'Exotic flora from the rainforest',
      icon: <FaLeaf />,
      badge: 'Native',
      badgeColor: '#10b981'
    },
    {
      id: 'item2',
      title: 'Ancient Trees',
      description: 'Centuries-old forest giants',
      icon: <FaTree />,
      badge: 'Protected',
      badgeColor: '#047857'
    },
    {
      id: 'item3',
      title: 'Rare Insects',
      description: 'Unique species found only in deep jungle',
      icon: <FaSpider />,
      badge: 'Endangered',
      badgeColor: '#f59e0b'
    },
    {
      id: 'item4',
      title: 'Wild Mammals',
      description: 'Jungle predators and prey',
      icon: <FaPaw />,
      badge: '12',
      badgeColor: '#7c3aed'
    },
    {
      id: 'item5',
      title: 'Exotic Birds',
      description: 'Colorful avian species (viewing restricted)',
      icon: <FaFeather />,
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
      background: 'linear-gradient(135deg, #064e3b 0%, #065f46 100%)',
      borderRadius: '20px',
      boxShadow: '0 10px 25px rgba(6, 78, 59, 0.3)',
    }}>
      <h3 style={{ 
        marginBottom: '1.5rem', 
        color: '#4ade80', 
        textAlign: 'center',
        fontFamily: 'Poppins, sans-serif',
        textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
      }}>
        Jungle Explorer
      </h3>
      
      <JungleListGroup 
        items={items} 
        onSelect={handleSelect} 
        activeItem={activeItem} 
      />
    </div>
  );
};

export default Example_23;
