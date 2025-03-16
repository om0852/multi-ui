"use client";
import React from 'react';
import Popup_8 from '../_components/Popup_8';

export default function PopupExample() {
  // Define menu items for the popup
  const menuItems = [
    { 
      label: <span className="font-bold">New</span>, 
      onClick: () => console.log('New clicked') 
    },
    { 
      label: <span className="font-bold">Open</span>, 
      onClick: () => console.log('Open clicked') 
    },
    { 
      label: <span className="font-bold">Save</span>, 
      onClick: () => console.log('Save clicked') 
    },
    { 
      label: <span className="font-bold">Print</span>, 
      onClick: () => console.log('Print clicked') 
    },
  ];

  return (
    <div className="w-full h-screen">
      <Popup_8 
        menuItems={menuItems}
        label={<span className="text-xl">File</span>}
        centerColor="bg-gray-800"
        menuColor="bg-gray-600"
        centerRadius="w-24 h-24"
        menuItemRadius="w-20 h-20"
        distance={180}
        onCenterClick={() => console.log('File menu opened')}
      />
    </div>
  );
}
