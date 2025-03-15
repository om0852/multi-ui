"use client";

import React, { useState } from 'react';
import ArtDecoListGroup from '../_components/ListGroup_47';
import { FaGem, FaGlassMartini, FaTheaterMasks, FaMusic, FaLock } from 'react-icons/fa';

const Example_38: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string>('item1');

  const items = [
    {
      id: 'item1',
      title: 'Luxury Lounge',
      description: 'Exclusive VIP area with premium service',
      icon: <FaGem />,
      badge: 'PREMIUM',
      badgeColor: '#d4af37'
    },
    {
      id: 'item2',
      title: 'Cocktail Bar',
      description: 'Signature drinks and classic cocktails',
      icon: <FaGlassMartini />,
      badge: 'FEATURED',
      badgeColor: '#a08a3c'
    },
    {
      id: 'item3',
      title: 'Theater Hall',
      description: 'Live performances and entertainment',
      icon: <FaTheaterMasks />,
      badge: 'EVENTS',
      badgeColor: '#7a6830'
    },
    {
      id: 'item4',
      title: 'Jazz Club',
      description: 'Live music in an intimate setting',
      icon: <FaMusic />,
      badge: 'NIGHTLY',
      badgeColor: '#5a4e24'
    },
    {
      id: 'item5',
      title: 'Private Suite',
      description: 'Members-only area (requires membership)',
      icon: <FaLock />,
      badge: 'EXCLUSIVE',
      badgeColor: '#3a3418',
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
      background: '#1a1a20',
      borderRadius: '0',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4), inset 0 0 0 2px #d4af37',
      maxWidth: '800px',
      margin: '0 auto',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: 'linear-gradient(45deg, #d4af37 25%, transparent 25%), linear-gradient(-45deg, #d4af37 25%, transparent 25%)',
        backgroundSize: '8px 8px',
        backgroundPosition: '0 0, 4px 0',
        opacity: 0.1,
        zIndex: 0
      }}></div>
      <h2 style={{
        color: '#d4af37',
        marginBottom: '1.5rem',
        fontFamily: 'Playfair Display, serif',
        textAlign: 'center',
        fontSize: '1.75rem',
        fontWeight: 600,
        letterSpacing: '0.05em',
        textTransform: 'uppercase',
        position: 'relative',
        zIndex: 1
      }}>
        The Golden Palace
      </h2>
      <ArtDecoListGroup
        items={items}
        onSelect={handleSelect}
        activeItem={activeItem}
      />
    </div>
  );
};

export default Example_38;
