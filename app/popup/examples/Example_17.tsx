"use client";
import React from 'react';
import Popup_17 from '../_components/Popup_17';

export default function PopupExample() {
  // Define menu items for the popup with document actions
  const menuItems = [
    { 
      label: <div className="flex flex-col items-center"><span className="text-lg">📄</span><span className="text-xs">New</span></div>, 
      onClick: () => console.log('New document') 
    },
    { 
      label: <div className="flex flex-col items-center"><span className="text-lg">📂</span><span className="text-xs">Open</span></div>, 
      onClick: () => console.log('Open document') 
    },
    { 
      label: <div className="flex flex-col items-center"><span className="text-lg">💾</span><span className="text-xs">Save</span></div>, 
      onClick: () => console.log('Save document') 
    },
    { 
      label: <div className="flex flex-col items-center"><span className="text-lg">🖨️</span><span className="text-xs">Print</span></div>, 
      onClick: () => console.log('Print document') 
    },
    { 
      label: <div className="flex flex-col items-center"><span className="text-lg">🗑️</span><span className="text-xs">Delete</span></div>, 
      onClick: () => console.log('Delete document') 
    },
  ];

  return (
    <div className="w-full h-screen">
      <Popup_17 
        menuItems={menuItems}
        label={<span className="text-lg">📑</span>}
        centerColor="bg-blue-500"
        menuColor="bg-sky-400"
        centerRadius="w-16 h-16"
        menuItemRadius="w-16 h-16"
        distance={150}
      />
    </div>
  );
}
