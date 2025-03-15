"use client"
import React, { useState } from 'react';
import CandyListGroup from '../_components/ListGroup_27';
import { FaIceCream, FaCandyCane, FaBirthdayCake, FaCookieBite, FaGift } from 'react-icons/fa';

const Example_27: React.FC = () => {
  const [activeItem, setActiveItem] = useState('item1');

  const items = [
    {
      id: 'item1',
      title: 'Ice Cream Parlor',
      description: 'Dozens of flavors to choose from',
      icon: <FaIceCream />,
      badge: 'Popular',
      badgeColor: '#ff4d6d'
    },
    {
      id: 'item2',
      title: 'Candy Shop',
      description: 'Colorful sweets and treats',
      icon: <FaCandyCane />,
      badge: 'New',
      badgeColor: '#ff758f'
    },
    {
      id: 'item3',
      title: 'Cake Bakery',
      description: 'Custom cakes for any occasion',
      icon: <FaBirthdayCake />,
      badge: 'Special',
      badgeColor: '#ff8da1'
    },
    {
      id: 'item4',
      title: 'Cookie Corner',
      description: 'Freshly baked cookies all day',
      icon: <FaCookieBite />,
      badge: '4.9',
      badgeColor: '#ffa8b6'
    },
    {
      id: 'item5',
      title: 'Gift Baskets',
      description: 'Sweet gift collections (seasonal)',
      icon: <FaGift />,
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
      background: 'linear-gradient(135deg, #fff0f3 0%, #ffe5ec 100%)',
      borderRadius: '20px',
      boxShadow: '0 10px 25px rgba(255, 141, 161, 0.3)',
    }}>
      <h3 style={{ 
        marginBottom: '1.5rem', 
        color: '#ff4d6d', 
        textAlign: 'center',
        fontFamily: 'Quicksand, sans-serif',
        fontWeight: 700,
        textShadow: '0 2px 4px rgba(255, 255, 255, 0.5)'
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

export default Example_27;
