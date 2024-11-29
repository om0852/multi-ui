import React, { useState } from "react";

const Popup5: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { id: 1, label: "Home", icon: "🏠" },
    { id: 2, label: "Search", icon: "🔍" },
    { id: 3, label: "Notifications", icon: "🔔" },
    { id: 4, label: "Messages", icon: "✉️" },
    { id: 5, label: "Settings", icon: "⚙️" },
  ];

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <div className="relative">
        {/* Toggle Button */}
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="w-16 h-16 bg-purple-500 text-white rounded-full flex items-center justify-center text-2xl shadow-md hover:bg-purple-600 transition-all duration-300"
        >
          {isOpen ? "×" : "☰"}
        </button>

        {/* Sliding Menu */}
        <ul
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex space-x-4 transition-all duration-500 ${
            isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {menuItems.map((item, index) => (
            <li
              key={item.id}
              className={`w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 text-white rounded-full flex items-center justify-center text-xl transform transition-transform duration-500 ${
                isOpen
                  ? `scale-100 delay-${index * 100}`
                  : "scale-0 translate-x-4"
              }`}
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <span className="tooltip text-xs absolute bottom-14 bg-gray-700 text-white px-2 py-1 rounded">
                {item.label}
              </span>
              {item.icon}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Popup5;
