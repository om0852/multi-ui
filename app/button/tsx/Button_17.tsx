import React from "react";

interface GearButtonProps {
  text: string;
  color?: string;
  size?: string;
  onClick?: () => void;
}

const Button17: React.FC<GearButtonProps> = ({
  text,
  color = "bg-red-500",
  size = "w-36 h-36",
  onClick,
}) => {
  return (
    <button
      className={`relative overflow-hidden ${size} ${color} text-white rounded-full flex items-center justify-center`}
      onClick={onClick}
    >
      <span className="absolute w-16 h-16 border-4 border-white rounded-full animate-spin"></span>
      <span className="relative z-10">{text}</span>
    </button>
  );
};

export default Button17;
