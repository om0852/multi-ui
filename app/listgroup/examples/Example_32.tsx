"use client"
import React, { useState } from 'react';
import TropicalListGroup from '../_components/ListGroup_32';
import { FaUmbrellaBeach, FaSwimmer, FaShip, FaFish, FaGlassCheers } from 'react-icons/fa';

const Example_32: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string>('item1');

  const items = [
    {
      id: 'item1',
      title: 'Beach Relaxation',
      description: 'Lounge under palm trees on white sand beaches',
      icon: <FaUmbrellaBeach />,
      badge: 'POPULAR',
      badgeColor: '#f59e0b'
    },
    {
      id: 'item2',
      title: 'Water Activities',
      description: 'Swimming, snorkeling, and surfing adventures',
      icon: <FaSwimmer />,
      badge: 'ACTIVE',
      badgeColor: '#3b82f6'
    },
    {
      id: 'item3',
      title: 'Island Cruises',
      description: 'Explore nearby islands and hidden coves',
      icon: <FaShip />,
      badge: 'SCENIC',
      badgeColor: '#10b981'
    },
    {
      id: 'item4',
      title: 'Marine Life Tours',
      description: 'Discover colorful coral reefs and tropical fish',
      icon: <FaFish />,
      badge: 'NATURE',
      badgeColor: '#8b5cf6'
    },
    {
      id: 'item5',
      title: 'Sunset Cocktails',
      description: 'Beachfront bar service (evening only)',
      icon: <FaGlassCheers />,
      badge: 'EVENING',
      badgeColor: '#ec4899',
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
      background: 'linear-gradient(135deg, #87CEEB, #00CED1)',
      borderRadius: '12px',
      boxShadow: '0 10px 30px rgba(0, 206, 209, 0.3)',
      maxWidth: '800px',
      margin: '0 auto',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{
        position: 'absolute',
        top: '10px',
        right: '20px',
        fontSize: '2rem',
        opacity: '0.3'
      }}>
        🌴
      </div>
      <h2 style={{
        color: '#FFFFFF',
        marginBottom: '1.5rem',
        fontFamily: 'Montserrat, sans-serif',
        textAlign: 'center',
        fontSize: '1.75rem',
        fontWeight: 600,
        letterSpacing: '0.05em',
        textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
      }}>
        Tropical Paradise Activities
      </h2>
      <TropicalListGroup
        items={items}
        onSelect={handleSelect}
        activeItem={activeItem}
      />
    </div>
  );
};

export default Example_32;
