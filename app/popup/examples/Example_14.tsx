"use client";
import React from 'react';
import Popup_14 from '../_components/Popup_14';

export default function PopupExample() {
  // Define menu items for the popup with food options
  const menuItems = [
    { 
      label: <div className="flex flex-col items-center"><span className="text-lg">🍕</span><span className="text-xs">Pizza</span></div>, 
      onClick: () => console.log('Pizza selected') 
    },
    { 
      label: <div className="flex flex-col items-center"><span className="text-lg">🍔</span><span className="text-xs">Burger</span></div>, 
      onClick: () => console.log('Burger selected') 
    },
    { 
      label: <div className="flex flex-col items-center"><span className="text-lg">🍣</span><span className="text-xs">Sushi</span></div>, 
      onClick: () => console.log('Sushi selected') 
    },
    { 
      label: <div className="flex flex-col items-center"><span className="text-lg">🍜</span><span className="text-xs">Noodles</span></div>, 
      onClick: () => console.log('Noodles selected') 
    },
    { 
      label: <div className="flex flex-col items-center"><span className="text-lg">🥗</span><span className="text-xs">Salad</span></div>, 
      onClick: () => console.log('Salad selected') 
    },
  ];

  return (
    <div className="w-full h-screen">
      <Popup_14 
        menuItems={menuItems}
        label={<span className="text-lg">🍽️</span>}
        centerColor="bg-amber-500"
        menuColor="bg-orange-400"
        centerRadius="w-16 h-16"
        menuItemRadius="w-16 h-16"
        distance={160}
      />
    </div>
  );
}
