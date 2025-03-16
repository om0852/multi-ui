"use client";
import React from 'react';
import Popup_16 from '../_components/Popup_16';

export default function PopupExample() {
  // Define menu items for the popup with communication options
  const menuItems = [
    { 
      label: <div className="flex flex-col items-center"><span className="text-lg">📱</span><span className="text-xs">Call</span></div>, 
      onClick: () => console.log('Call selected') 
    },
    { 
      label: <div className="flex flex-col items-center"><span className="text-lg">✉️</span><span className="text-xs">Email</span></div>, 
      onClick: () => console.log('Email selected') 
    },
    { 
      label: <div className="flex flex-col items-center"><span className="text-lg">💬</span><span className="text-xs">Chat</span></div>, 
      onClick: () => console.log('Chat selected') 
    },
    { 
      label: <div className="flex flex-col items-center"><span className="text-lg">📹</span><span className="text-xs">Video</span></div>, 
      onClick: () => console.log('Video selected') 
    },
  ];

  return (
    <div className="w-full h-screen">
      <Popup_16 
        menuItems={menuItems}
        label={<span className="text-lg">📞</span>}
        centerColor="bg-emerald-500"
        menuColor="bg-teal-400"
        centerRadius="w-16 h-16"
        menuItemRadius="w-16 h-16"
        distance={140}
      />
    </div>
  );
}
