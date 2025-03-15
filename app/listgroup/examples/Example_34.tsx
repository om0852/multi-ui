"use client"
import React, { useState } from 'react';
import BotanicalListGroup from '../_components/ListGroup_34';
import { FaLeaf, FaSeedling, FaTree, FaWater, FaPalette } from 'react-icons/fa';

const Example_34: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string>('item1');

  const items = [
    {
      id: 'item1',
      title: 'Indoor Plants',
      description: 'Low-maintenance houseplants for any space',
      icon: <FaLeaf />,
      badge: 'POPULAR',
      badgeColor: '#4CAF50'
    },
    {
      id: 'item2',
      title: 'Herb Garden',
      description: 'Culinary herbs for your kitchen garden',
      icon: <FaSeedling />,
      badge: 'EDIBLE',
      badgeColor: '#8BC34A'
    },
    {
      id: 'item3',
      title: 'Native Trees',
      description: 'Local species for sustainable landscaping',
      icon: <FaTree />,
      badge: 'ECO',
      badgeColor: '#388E3C'
    },
    {
      id: 'item4',
      title: 'Water Garden',
      description: 'Aquatic plants for ponds and water features',
      icon: <FaWater />,
      badge: 'AQUATIC',
      badgeColor: '#03A9F4'
    },
    {
      id: 'item5',
      title: 'Flower Arranging',
      description: 'Botanical design workshop (registration closed)',
      icon: <FaPalette />,
      badge: 'FULL',
      badgeColor: '#FF9800',
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
      padding: '2rem',
      background: 'linear-gradient(135deg, #f1f8e9, #e8f5e9)',
      borderRadius: '20px',
      boxShadow: '0 10px 30px rgba(76, 175, 80, 0.15)',
      maxWidth: '800px',
      margin: '0 auto',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{
        position: 'absolute',
        top: '10px',
        right: '15px',
        fontSize: '2rem',
        opacity: '0.2'
      }}>
        🌿
      </div>
      <h2 style={{
        color: '#2E7D32',
        marginBottom: '1.5rem',
        fontFamily: 'Libre Baskerville, serif',
        textAlign: 'center',
        fontSize: '1.75rem',
        fontWeight: 600,
        letterSpacing: '0.01em'
      }}>
        Botanical Collection
      </h2>
      <BotanicalListGroup
        items={items}
        onSelect={handleSelect}
        activeItem={activeItem}
      />
    </div>
  );
};

export default Example_34;
