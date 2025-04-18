"use client";
import React from 'react';
import Popup_3 from '../_components/Popup_3';

export default function PopupExample() {
  // Define menu items for the popup
  const menuItems = [
    { id: 'home', content: 'Home', href: '#home', onClick: () => console.log('Home clicked') },
    { id: 'about', content: 'About', href: '#about', onClick: () => console.log('About clicked') },
    { id: 'services', content: 'Services', href: '#services', onClick: () => console.log('Services clicked') },
    { id: 'portfolio', content: 'Portfolio', href: '#portfolio', onClick: () => console.log('Portfolio clicked') },
    { id: 'contact', content: 'Contact', href: '#contact', onClick: () => console.log('Contact clicked') },
  ];

  const handleCenterClick = () => {
    console.log('Center button clicked');
  };

  return (
    <div className="w-full h-screen">
      <Popup_3 
        menuItems={menuItems}
        centralContent={<span className="text-xl font-bold">+</span>}
        centerColor="bg-blue-600"
        menuColor="bg-teal-500"
        centerRadius="w-32 h-32"
        menuItemRadius="w-16 h-16"
        distance={200}
        onCenterClick={handleCenterClick}
      />
    </div>
  );
}
