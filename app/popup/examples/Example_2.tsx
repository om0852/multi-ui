"use client";
import React from 'react';
import Popup_2 from '../_components/Popup_2';

export default function PopupExample() {
  // Define menu items for the popup
  const menuItems = [
    { id: 'home', label: 'Home', href: '#home', onClick: () => console.log('Home clicked') },
    { id: 'about', label: 'About', href: '#about', onClick: () => console.log('About clicked') },
    { id: 'services', label: 'Services', href: '#services', onClick: () => console.log('Services clicked') },
    { id: 'portfolio', label: 'Portfolio', href: '#portfolio', onClick: () => console.log('Portfolio clicked') },
    { id: 'contact', label: 'Contact', href: '#contact', onClick: () => console.log('Contact clicked') },
  ];

  const handleCenterClick = () => {
    console.log('Center button clicked');
  };

  return (
    <div className="w-full h-screen">
      <Popup_2 
        menuItems={menuItems}
        centralContent="Menu"
        centerColor="bg-green-500"
        menuColor="bg-purple-400"
        centerRadius="w-36 h-36"
        menuItemRadius="w-14 h-14"
        distance={180}
        onCenterClick={handleCenterClick}
      />
    </div>
  );
}
