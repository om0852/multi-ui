import React, { useState } from "react";

const Popup10: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { id: 1, label: "Home", icon: "🏡" },
    { id: 2, label: "Shop", icon: "🛒" },
    { id: 3, label: "Offers", icon: "🎉" },
    { id: 4, label: "Cart", icon: "🛍️" },
    { id: 5, label: "Contact", icon: "☎️" },
  ];

  return (
    <div className="relative h-screen bg-gray-900">
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="absolute top-4 left-4 w-12 h-12 bg-pink-600 text-white rounded-full flex items-center justify-center shadow-md hover:bg-pink-700 transition-all duration-300"
      >
        {isOpen ? "×" : "☰"}
      </button>

      {/* Carousel Menu */}
      <div
        className={`fixed top-0 left-0 h-full bg-gray-800 shadow-lg transform transition-transform duration-500 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ width: "80%" }}
      >
        <ul className="flex flex-col items-center justify-center space-y-6 h-full">
          {menuItems.map((item, index) => (
            <li
              key={item.id}
              className={`w-48 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg shadow-md flex items-center justify-center text-white text-xl transition-transform duration-500 delay-${index * 150}`}
            >
              <span>{item.icon}</span>
              <span className="ml-2">{item.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Popup10;
