import React, { useState } from "react";

interface MenuItem {
  id: number;
  label: string;
  icon: string;
  link: string;
}

interface Popup7Props {
  menuItems: MenuItem[];
}

const Popup7: React.FC<Popup7Props> = ({ menuItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <div className="relative">
        {/* Toggle Button */}
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 text-white rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform duration-300"
        >
          {isOpen ? "×" : "☰"}
        </button>

        {/* Grid Menu */}
        <div
          className={`absolute top-20 left-1/2 transform -translate-x-1/2 grid grid-cols-3 gap-4 p-4 bg-gray-800 rounded-lg shadow-lg transition-all duration-500 ${
            isOpen ? "opacity-100 scale-100" : "opacity-0 scale-75 pointer-events-none"
          }`}
        >
          {menuItems.map((item, index) => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 text-white rounded-lg flex items-center justify-center text-2xl shadow-lg transition-all duration-500 delay-${index * 100}`}
            >
              <span>{item.icon}</span>
              <span className="sr-only">{item.label}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Popup7;
