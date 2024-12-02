import React, { useState } from "react";

interface MenuItem {
  id: number;
  label: string;
  icon: string;
  link: string;
}

interface Popup10Props {
  menuItems: MenuItem[];
}

const Popup10: React.FC<Popup10Props> = ({ menuItems }) => {
  const [isOpen, setIsOpen] = useState(false);

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
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2"
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Popup10;
