import React from "react";

interface TiltHoverButtonProps {
  text: string;
  color?: string;
  size?: string;
  onClick?: () => void;
}

const Button27: React.FC<TiltHoverButtonProps> = ({
  text,
  color = "bg-orange-400",
  size = "w-36 h-12",
  onClick,
}) => {
  return (
    <button
      className={`relative ${size} ${color} text-white font-bold rounded-lg flex items-center justify-center overflow-hidden cursor-pointer transition-transform transform hover:rotate-6 hover:scale-105`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button27;
