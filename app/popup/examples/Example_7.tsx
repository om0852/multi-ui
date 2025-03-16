"use client";
import React from 'react';
import Popup_7 from '../_components/Popup_7';

export default function PopupExample() {
  // Define menu items for the popup
  const menuItems = [
    { 
      label: 'Edit', 
      onClick: () => console.log('Edit clicked') 
    },
    { 
      label: 'Share', 
      onClick: () => console.log('Share clicked') 
    },
    { 
      label: 'Delete', 
      onClick: () => console.log('Delete clicked') 
    },
    { 
      label: 'Archive', 
      onClick: () => console.log('Archive clicked') 
    },
  ];

  return (
    <div className="w-full h-screen">
      <Popup_7 
        menuItems={menuItems}
        label="Actions"
        centerColor="bg-blue-700"
        menuColor="bg-green-600"
        centerRadius="w-28 h-28"
        menuItemRadius="w-24 h-12"
        distance={170}
        onCenterClick={() => console.log('Center clicked')}
      />
    </div>
  );
}
