import React from "react";

interface ZoomButtonProps {
  text: string;
  color?: string;
  size?: string;
  onClick?: () => void;
}

const Button19: React.FC<ZoomButtonProps> = ({
  text,
  color = "bg-purple-500",
  size = "w-32 h-12",
  onClick,
}) => {
  return (
    <button
      className={`relative ${size} ${color} text-white rounded-lg flex items-center justify-center overflow-hidden cursor-pointer`}
      onClick={onClick}
    >
      <span className="absolute inset-0 bg-opacity-20 animate-pulse"></span>
      <span className="relative">{text}</span>
    </button>
  );
};

export default Button19;
