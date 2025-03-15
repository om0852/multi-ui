"use client"
import React, { useState } from 'react';
import FrostListGroup from '../_components/ListGroup_24';
import { FaSnowflake, FaMountain, FaIcicles, FaWater, FaWind } from 'react-icons/fa';

const Example_24: React.FC = () => {
  const [activeItem, setActiveItem] = useState('item1');

  const items = [
    {
      id: 'item1',
      title: 'Winter Wonderland',
      description: 'Explore the frozen landscapes',
      icon: <FaSnowflake />,
      badge: 'Featured',
      badgeColor: '#3b82f6'
    },
    {
      id: 'item2',
      title: 'Alpine Peaks',
      description: 'Snow-capped mountain adventures',
      icon: <FaMountain />,
      badge: 'Popular',
      badgeColor: '#60a5fa'
    },
    {
      id: 'item3',
      title: 'Frozen Waterfalls',
      description: 'Spectacular ice formations',
      icon: <FaIcicles />,
      badge: 'New',
      badgeColor: '#93c5fd'
    },
    {
      id: 'item4',
      title: 'Glacier Lakes',
      description: 'Crystal clear waters',
      icon: <FaWater />,
      badge: '4.9',
      badgeColor: '#bfdbfe'
    },
    {
      id: 'item5',
      title: 'Arctic Winds',
      description: 'Experience the chill (currently closed)',
      icon: <FaWind />,
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
      background: 'linear-gradient(135deg, #dbeafe 0%, #eff6ff 100%)',
      borderRadius: '20px',
      boxShadow: '0 10px 25px rgba(59, 130, 246, 0.2)',
    }}>
      <h3 style={{ 
        marginBottom: '1.5rem', 
        color: '#1e40af', 
        textAlign: 'center',
        fontFamily: 'Inter, sans-serif',
        textShadow: '0 2px 4px rgba(255, 255, 255, 0.5)'
      }}>
        Frost Adventures
      </h3>
      
      <FrostListGroup 
        items={items} 
        onSelect={handleSelect} 
        activeItem={activeItem} 
      />
    </div>
  );
};

export default Example_24;
