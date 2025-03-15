"use client"
import React, { useState } from 'react';
import VintageListGroup from '../_components/ListGroup_29';
import { FaBook, FaPen, FaGlobe, FaCamera, FaEnvelope } from 'react-icons/fa';

const Example_29: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string>('item1');

  const items = [
    {
      id: 'item1',
      title: 'Antique Books',
      description: 'Rare first editions and classic literature',
      icon: <FaBook />,
      badge: 'Collection',
      badgeColor: '#8b4513'
    },
    {
      id: 'item2',
      title: 'Fountain Pens',
      description: 'Handcrafted writing instruments',
      icon: <FaPen />,
      badge: 'Artisan',
      badgeColor: '#a67b5b'
    },
    {
      id: 'item3',
      title: 'Vintage Maps',
      description: 'Historical cartography from around the world',
      icon: <FaGlobe />,
      badge: 'Rare',
      badgeColor: '#b38b4d'
    },
    {
      id: 'item4',
      title: 'Film Cameras',
      description: 'Classic photography equipment',
      icon: <FaCamera />,
      badge: '1950s',
      badgeColor: '#c4a473'
    },
    {
      id: 'item5',
      title: 'Postcard Collection',
      description: 'Vintage correspondence (not for sale)',
      icon: <FaEnvelope />,
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
      background: '#f8f5f0',
      borderRadius: '8px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      maxWidth: '800px',
      margin: '0 auto'
    }}>
      <h2 style={{
        color: '#8b4513',
        marginBottom: '1.5rem',
        fontFamily: 'Playfair Display, serif',
        textAlign: 'center',
        fontSize: '1.75rem',
        fontWeight: 600,
        letterSpacing: '0.05em'
      }}>
        Vintage Collectibles
      </h2>
      <VintageListGroup
        items={items}
        onSelect={handleSelect}
        activeItem={activeItem}
      />
    </div>
  );
};

export default Example_29;
