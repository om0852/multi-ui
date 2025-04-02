import React from "react";

interface SlidingButtonProps {
  text: string;
  color?: string;
  highlightColor?: string;
  size?: string;
  onClick?: () => void;
}

const Button16: React.FC<SlidingButtonProps> = ({
  text,
  color = "bg-gray-800",
  highlightColor = "bg-blue-400",
  size = "w-48 h-14",
  onClick,
}) => {
  return (
    <button
      className={`relative overflow-hidden ${size} ${color} text-white rounded-lg flex items-center justify-center`}
      onClick={onClick}
    >
      <span
        className={`absolute inset-0 transform scale-x-0 transition-transform duration-300 ${highlightColor}`}
      ></span>
      <span className="relative">{text}</span>
    </button>
  );
};

export default Button16;
