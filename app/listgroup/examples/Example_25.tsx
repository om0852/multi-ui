"use client"
import React, { useState } from 'react';
import SunsetListGroup from '../_components/ListGroup_25';
import { FaSun, FaUmbrella, FaSwimmingPool, FaGlassCheers, FaCamera } from 'react-icons/fa';

const Example_25: React.FC = () => {
  const [activeItem, setActiveItem] = useState('item1');

  const items = [
    {
      id: 'item1',
      title: 'Beach Sunset',
      description: 'Watch the sun dip below the horizon',
      icon: <FaSun />,
      badge: 'Popular',
      badgeColor: '#f97316'
    },
    {
      id: 'item2',
      title: 'Beachside Cabanas',
      description: 'Relax in the shade with ocean views',
      icon: <FaUmbrella />,
      badge: 'Premium',
      badgeColor: '#ea580c'
    },
    {
      id: 'item3',
      title: 'Infinity Pool',
      description: 'Swim with panoramic sunset views',
      icon: <FaSwimmingPool />,
      badge: 'Hot',
      badgeColor: '#c2410c'
    },
    {
      id: 'item4',
      title: 'Sunset Cocktails',
      description: 'Signature drinks at golden hour',
      icon: <FaGlassCheers />,
      badge: '5.0',
      badgeColor: '#9a3412'
    },
    {
      id: 'item5',
      title: 'Photography Tour',
      description: 'Capture the perfect sunset (unavailable)',
      icon: <FaCamera />,
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
      background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)',
      borderRadius: '20px',
      boxShadow: '0 10px 25px rgba(251, 146, 60, 0.3)',
    }}>
      <h3 style={{ 
        marginBottom: '1.5rem', 
        color: '#9a3412', 
        textAlign: 'center',
        fontFamily: 'DM Sans, sans-serif',
        textShadow: '0 2px 4px rgba(255, 255, 255, 0.5)'
      }}>
        Sunset Paradise
      </h3>
      
      <SunsetListGroup 
        items={items} 
        onSelect={handleSelect} 
        activeItem={activeItem} 
      />
    </div>
  );
};

export default Example_25;
