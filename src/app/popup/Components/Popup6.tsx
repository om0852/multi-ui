import React, { useState } from "react";

const Popup6: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { id: 1, label: "Profile", icon: "👤" },
    { id: 2, label: "Settings", icon: "⚙️" },
    { id: 3, label: "Messages", icon: "✉️" },
    { id: 4, label: "Notifications", icon: "🔔" },
    { id: 5, label: "Logout", icon: "🚪" },
  ];

  const circleRadius = 100; // Radius of the circular menu

  const calculatePosition = (index: number, total: number) => {
    const angle = (2 * Math.PI * index) / total;
    const x = circleRadius * Math.cos(angle);
    const y = circleRadius * Math.sin(angle);
    return { x, y };
  };

  return (
    <div className="flex items-center justify-center w-full h-screen bg-gray-800">
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full flex items-center justify-center text-2xl shadow-lg transition-transform duration-300 hover:scale-110"
      >
        {isOpen ? "×" : "☰"}
      </button>

      {/* Rotating Wheel Menu */}
      <div
        className={`absolute transition-transform duration-500 ${
          isOpen ? "scale-100" : "scale-0"
        }`}
      >
        {menuItems.map((item, index) => {
          const { x, y } = calculatePosition(index, menuItems.length);

          return (
            <div
              key={item.id}
              className={`absolute w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 text-white rounded-full flex items-center justify-center shadow-md transition-transform duration-500`}
              style={{
                transform: `translate(${x}px, ${y}px)`,
                opacity: isOpen ? 1 : 0,
                transitionDelay: `${index * 0.1}s`,
              }}
            >
              <span className="text-xl">{item.icon}</span>
              <span className="sr-only">{item.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Popup6;
