import React from "react";

interface AnimatedButtonProps {
  label: string;
  onClick: () => void;
  className?: string; // Optional for additional styling
}

const Button1: React.FC<AnimatedButtonProps> = ({
  label,
  onClick,
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      className={`relative px-6 py-3 font-medium text-white rounded-full transition-all duration-300 shadow-lg bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 hover:scale-105 active:scale-95 focus:outline-none ${className}`}
    >
      <span className="absolute inset-0 transition-transform duration-300 scale-110 opacity-0 bg-white rounded-full mix-blend-overlay hover:opacity-20"></span>
      {label}
    </button>
  );
};

export default Button1;
