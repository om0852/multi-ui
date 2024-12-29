"use client"
import React from "react";
import PopupMenu from "./Components/Popup7";

const App = () => {
    const menuItems = [
        { label: "Home", href: "#home", onClick: () => alert("Home clicked") },
        { label: "About", href: "#about", onClick: () => alert("About clicked") },
        { label: "Services", href: "#services", onClick: () => alert("Services clicked") },
        { label: "Contact", href: "#contact", onClick: () => alert("Contact clicked") },
        { label: "Blog", href: "#blog", onClick: () => alert("Blog clicked") },
      ];
    
      const handleCenterClick = () => {
        // alert("Center button clicked");
      };
    
      return (
        <div className="App">
          <h1 className="text-center text-4xl text-white mb-8">Interactive Popup Menu</h1>
          <PopupMenu
            menuItems={menuItems}
            distance={180}
            label=" Menu"
            centerColor="bg-teal-500"
            menuColor="bg-yellow-400"
            centerRadius="w-20 h-20" // Custom radius for the center button
            menuItemRadius="w-10 h-10" // Custom radius for the menu items
            onCenterClick={handleCenterClick} // Handle click on the center button
          />
        </div>
      );
    };
    
    export default App;
    