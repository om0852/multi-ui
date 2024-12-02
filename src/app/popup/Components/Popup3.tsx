import React, { useState } from "react";

interface MenuItem {
  id: number;
  label: string;
  color: string;
}

interface Popup3Props {
  menuItems: MenuItem[];
  radius?: number; // Optional: Radius of the radial menu
}

const Popup3: React.FC<Popup3Props> = ({ menuItems, radius = 120 }) => {
  const [isOpen, setIsOpen] = useState(false);

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
        <ul className="list-none m-0 p-0 relative">
          {menuItems.map((item, index) => {
            const angle = (index * 360) / menuItems.length; // Distribute evenly in a circle
            const x = Math.cos((angle * Math.PI) / 180) * radius;
            const y = Math.sin((angle * Math.PI) / 180) * radius;

            return (
              <li
                key={item.id}
                className={`absolute w-12 h-12 ${item.color} text-white rounded-full flex items-center justify-center text-sm transform transition-all duration-500`}
                style={{
                  transform: isOpen
                    ? `translate(${x}px, ${y}px)`
                    : "translate(0px, 0px)",
                  opacity: isOpen ? 1 : 0,
                  transitionDelay: `${index * 0.1}s`,
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
