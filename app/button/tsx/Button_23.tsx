import React from "react";

interface PulseGlowButtonProps {
  text: string;
  color?: string;
  size?: string;
  onClick?: () => void;
}

const Button23: React.FC<PulseGlowButtonProps> = ({
  text,
  color = "bg-indigo-500",
  size = "w-36 h-12",
  onClick,
  ...props
}) => {
  return (
    <button
      className={`relative ${size} ${color} text-white font-bold rounded-lg flex items-center justify-center overflow-hidden cursor-pointer`}
      onClick={onClick}
      {...props}
    >
      <span className="absolute inset-0 rounded-lg bg-indigo-500 opacity-50 blur-lg animate-pulse"></span>
      <span className="relative">{text}</span>
    </button>
  );
};

export default Button23;
