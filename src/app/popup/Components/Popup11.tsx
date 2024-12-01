import React, { useState } from "react";

interface MenuItem {
  id: number;
  label: string;
  icon: string;
  link: string;
}

interface SpiralMenuProps {
  menuItems: MenuItem[];
}

const Popup11: React.FC<SpiralMenuProps> = ({ menuItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  const spiralPosition = (index: number) => {
    const angle = (index * 144) * (Math.PI / 180); // 144 degrees for the spiral
    const radius = isOpen ? 60 + index * 40 : 0; // Radius grows when open
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    return { transform: `translate(${x}px, ${y}px)` };
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-800">
      <div className="relative">
        {/* Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
        >
          {isOpen ? "×" : "+"}
        </button>

        {/* Spiral Menu Items */}
        <div className="relative">
          {menuItems.map((item, index) => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              style={spiralPosition(index)}
              className={`absolute bg-gradient-to-r from-pink-500 to-yellow-500 w-12 h-12 rounded-full text-white flex items-center justify-center shadow-md transition-all duration-500 ${
                isOpen ? "opacity-100 scale-100" : "opacity-0 scale-50"
              }`}
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

export default Popup11;
