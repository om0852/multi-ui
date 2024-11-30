import React, { useState } from "react";

const Popup8: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { id: 1, label: "Home", icon: "🏠" },
    { id: 2, label: "About", icon: "ℹ️" },
    { id: 3, label: "Services", icon: "🛠️" },
    { id: 4, label: "Contact", icon: "📞" },
  ];

  return (
    <div className="relative h-screen bg-gray-700">
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="fixed top-4 right-4 w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center shadow-md hover:bg-purple-700 transition-all duration-300 z-50"
      >
        {isOpen ? "×" : "☰"}
      </button>

      {/* Sliding Menu */}
      <div
        className={`fixed top-0 left-0 w-full bg-gray-800 text-white transition-transform duration-500 ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        } z-40`}
        style={{ height: "50vh" }}
      >
        <ul className="flex flex-col justify-center items-center h-full space-y-4">
          {menuItems.map((item, index) => (
            <li
              key={item.id}
              className={`flex items-center justify-center w-40 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg shadow-lg text-xl transition-transform duration-500 delay-${index * 150}`}
            >
              <span className="mr-2">{item.icon}</span>
              <span>{item.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Popup8;
