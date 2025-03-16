import React, { useState, ReactNode } from "react";

interface MenuItem {
  label: ReactNode; // Allow ReactNode content (e.g., JSX, icons, etc.)
  onClick?: () => void; // Optional onClick handler for menu items
}

interface FanMenuProps {
  menuItems: MenuItem[]; // Array of menu items
  radius?: number; // Radius of circular expansion
  label?: ReactNode; // Content for central button
  centerColor?: string; // Optional: Custom color for the central button
  menuColor?: string; // Optional: Custom color for the menu items
}

const FanMenu: React.FC<FanMenuProps> = ({
  menuItems,
  radius = 120,
  label = "⚙️", // Default label for central button
  centerColor = "bg-blue-500", // Default center button color
  menuColor = "bg-green-500", // Default menu item color
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuStyles = (index: number, total: number) => {
    const angle = (360 / total) * index;
    const radian = (angle * Math.PI) / 180;

    const x = isOpen ? Math.cos(radian) * radius : 0;
    const y = isOpen ? Math.sin(radian) * radius : 0;

    return {
      transform: `translate(${x}px, ${y}px) rotate(${isOpen ? angle : 0}deg) scale(${isOpen ? 1 : 0.5})`,
      opacity: isOpen ? 1 : 0,
      transition: `transform 0.6s cubic-bezier(0.68, -0.55, 0.27, 1.55) ${index * 0.1}s, opacity 0.4s ease-in-out`,
    };
  };

  const handleMenuItemClick = (item: MenuItem) => {
    item.onClick?.();
    setIsOpen(false);
  };

  return (
    <div className="flex items-center justify-center w-full h-screen bg-gradient-to-br from-purple-800 to-gray-900">
      <div className="relative flex items-center justify-center">
        {/* Center Toggle Button */}
        <button
          onClick={toggleMenu}
          className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold ${centerColor} text-white shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out relative z-10`}
        >
          {label}
        </button>

        {/* Radial Menu Items */}
        {menuItems.map((item, index) => (
          <div
            key={item.label as string} // Use item.label as key or another unique identifier
            onClick={() => handleMenuItemClick(item)}
            style={menuStyles(index, menuItems.length)}
            className={`absolute w-10 h-10 rounded-full flex items-center justify-center text-xs font-medium ${menuColor} text-white shadow-md hover:shadow-lg transition-all duration-300 ease-in-out cursor-pointer`}
          >
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FanMenu;
