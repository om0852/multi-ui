"use client"
import React from "react";
import PopupMenu from "./Components/Popup_15";

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
            
          />
        </div>
      );
    };
    
    export default App;
    