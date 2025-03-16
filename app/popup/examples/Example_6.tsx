"use client";
import React from 'react';
import Popup_6 from '../_components/Popup_6';

export default function PopupExample() {
  // Define menu items for the popup
  const menuItems = [
    { 
      id: 'home', 
      content: 'Home', 
      onClick: () => console.log('Home clicked') 
    },
    { 
      id: 'search', 
      content: 'Search', 
      onClick: () => console.log('Search clicked') 
    },
    { 
      id: 'favorites', 
      content: 'Favorites', 
      onClick: () => console.log('Favorites clicked') 
    },
    { 
      id: 'account', 
      content: 'Account', 
      onClick: () => console.log('Account clicked') 
    },
  ];

  return (
    <div className="w-full h-screen">
      <Popup_6 
        menuItems={menuItems}
        centralContent="+"
        centerColor="bg-purple-600"
        menuColor="bg-yellow-500"
        centerRadius="w-16 h-16"
        menuItemRadius="w-20 h-12"
        distance={160}
        onCenterClick={() => console.log('Center clicked')}
      />
    </div>
  );
}
