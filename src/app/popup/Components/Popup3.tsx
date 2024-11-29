import React, { useState } from "react";

const Popup3: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { id: 1, label: "Home", color: "bg-blue-400" },
    { id: 2, label: "Profile", color: "bg-green-400" },
    { id: 3, label: "Messages", color: "bg-red-400" },
    { id: 4, label: "Settings", color: "bg-yellow-400" },
    { id: 5, label: "Logout", color: "bg-purple-400" },
  ];

  return (
    <div className="flex items-center justify-center w-full h-screen bg-gray-800">
      <div className="relative">
        {/* Central Button */}
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="w-16 h-16 bg-teal-500 text-white rounded-full flex items-center justify-center text-xl shadow-lg transform transition-transform duration-300 hover:scale-110"
        >
          {isOpen ? "X" : "+"}
        </button>

        {/* Radial Menu Items */}
        <ul className="list-none m-0 p-0">
          {menuItems.map((item, index) => {
            const angle = (index * 360) / menuItems.length; // Distribute evenly in a circle
            const x = Math.cos((angle * Math.PI) / 180) * 120; // Adjust radius here
            const y = Math.sin((angle * Math.PI) / 180) * 120;

            return (
              <li
                key={item.id}
                className={`absolute top-1/2 left-1/2 w-12 h-12 ${item.color} text-white rounded-full flex items-center justify-center text-sm transform transition-all duration-500 ${
                  isOpen
                    ? `translate-x-[${x}px] translate-y-[${y}px] opacity-100`
                    : "translate-x-0 translate-y-0 opacity-0"
                }`}
                style={{
                  transform: isOpen
                    ? `translate(${x}px, ${y}px)`
                    : `translate(0px, 0px)`,
                  opacity: isOpen ? 1 : 0,
                }}
              >
                {item.label}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Popup3;