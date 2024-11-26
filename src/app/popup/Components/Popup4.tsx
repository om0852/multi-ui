import React, { useState } from "react";

const Popup4: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { id: 1, label: "Dashboard", color: "bg-indigo-500" },
    { id: 2, label: "Profile", color: "bg-pink-500" },
    { id: 3, label: "Notifications", color: "bg-yellow-500" },
    { id: 4, label: "Settings", color: "bg-green-500" },
    { id: 5, label: "Logout", color: "bg-red-500" },
  ];

  return (
    <div className="relative flex items-center justify-center w-full h-screen bg-gray-900">
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Popup Menu */}
      <div className="relative z-10">
        {/* Toggle Button */}
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center text-2xl shadow-lg transition-transform duration-300 hover:scale-110"
        >
          {isOpen ? "X" : "☰"}
        </button>

        {/* Menu Items */}
        <ul
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 space-y-4 ${
            isOpen ? "scale-100 opacity-100" : "scale-75 opacity-0"
          } transition-all duration-500`}
        >
          {menuItems.map((item, index) => (
            <li
              key={item.id}
              className={`w-40 h-12 ${item.color} text-white rounded-lg shadow-lg flex items-center justify-center font-medium text-lg transform transition-transform duration-500 ${
                isOpen
                  ? `translate-y-0 animate-bounce delay-${index * 100}`
                  : "translate-y-10"
              }`}
              style={{
                animationDelay: `${index * 0.1}s`,
                animationTimingFunction: "ease-out",
              }}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Popup4;
