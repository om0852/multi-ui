"use client";
import React from "react";
import PopupMenu from "./Components/Popup_24";

const App = () => {
  const menuItems = [
    { label: "Home", href: "#home", onClick: () => alert("Home clicked") },
    { label: "About", href: "#about", onClick: () => alert("About clicked") },
    {
      label: "Services",
      href: "#services",
      onClick: () => alert("Services clicked"),
    },
    {
      label: "Contact",
      href: "#contact",
      onClick: () => alert("Contact clicked"),
    },
    { label: "Blog", href: "#blog", onClick: () => alert("Blog clicked") },
  ];

  const handleCenterClick = () => {
    // alert("Center button clicked");
  };

  return (
    <div className="App">
      <h1 className="text-center text-4xl text-white mb-8">
        Interactive Popup Menu
      </h1>
      <PopupMenu
        menuItems={menuItems}
        distance={80}
        label="✨"
        centerColor="bg-green-500" // Pass a custom color for the center button
        // menuColor="bg-yellow-500" // Pass a custom color for the menu items
      />
    </div>
  );
};

export default App;
