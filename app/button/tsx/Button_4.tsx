import React from "react";

interface PulseButtonProps {
  text: string;
  color?: string; // Tailwind background color
  textColor?: string; // Tailwind text color
  size?: string; // Tailwind padding classes
  onClick: () => void;
}

const Button4: React.FC<PulseButtonProps> = ({
  text,
  color = "bg-purple-500",
  textColor = "text-white",
  size = "px-6 py-3",
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`relative ${color} ${textColor} ${size} font-semibold rounded-full shadow-lg hover:shadow-2xl transition-all focus:outline-none hover:animate-pulse`}
    >
      {text}
    </button>
  );
};

export default Button4;
