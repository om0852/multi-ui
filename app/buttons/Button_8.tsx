import React from "react";

interface BounceButtonProps {
  text: string;
  color?: string; // Tailwind background color
  textColor?: string; // Tailwind text color
  size?: string; // Tailwind size classes
  onClick: () => void;
}

const Button8: React.FC<BounceButtonProps> = ({
  text,
  color = "bg-red-500",
  textColor = "text-white",
  size = "px-6 py-3",
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`relative ${color} ${textColor} ${size} font-semibold rounded-full transition-transform transform hover:animate-bounce`}
    >
      {text}
    </button>
  );
};

export default Button8;
