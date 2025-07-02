import React from "react";

interface GlowingButtonProps {
  text: string;
  color?: string;
  size?: string;
  onClick?: () => void;
}

const Button14: React.FC<GlowingButtonProps> = ({
  text,
  color = "bg-pink-500",
  size = "w-36 h-12",
  onClick,
  ...props
}) => {
  return (
    <button
      className={`relative ${size} ${color} text-white rounded-lg shadow-lg transition-transform hover:scale-110`}
      style={{
        boxShadow: `0 0 20px rgba(255, 105, 180, 0.5)`,
        animation: "pulse 2s infinite",
      }}
      onClick={onClick}
      {...props}
    >
      {text}
    </button>
  );
};

export default Button14;
