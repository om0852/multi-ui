import React from "react";

interface ExpandingOutlineButtonProps {
  text: string;
  color?: string;
  size?: string;
  onClick?: () => void;
}

const Button28: React.FC<ExpandingOutlineButtonProps> = ({
  text,
  color = "text-blue-500",
  size = "w-40 h-12",
  onClick,
}) => {
  return (
    <button
      className={`relative ${size} ${color} border-2 border-blue-500 rounded-lg flex items-center justify-center font-bold overflow-hidden group`}
      onClick={onClick}
    >
      <span
        className="absolute inset-0 bg-blue-500 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 ease-in-out"
        style={{ zIndex: -1 }}
      ></span>
      <span className="relative group-hover:text-white">{text}</span>
    </button>
  );
};

export default Button28;
