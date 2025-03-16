"use client";
import React from 'react';
import Popup1 from '../_components/Popup_1';

export default function PopupExample() {
  // Define menu items for the popup
  const menuItems = [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'about', label: 'About', href: '#about' },
    { id: 'services', label: 'Services', href: '#services' },
    { id: 'portfolio', label: 'Portfolio', href: '#portfolio' },
    { id: 'contact', label: 'Contact', href: '#contact' },
  ];

  return (
    <div className="w-full h-screen">
      <Popup1 
        menuItems={menuItems}
        centralContent="Menu"
        centerColor="bg-indigo-600"
        menuColor="bg-pink-500"
        distance={150}
      />
    </div>
  );
}
