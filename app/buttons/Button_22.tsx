import React from "react";

interface SwirlButtonProps {
  text: string;
  color?: string;
  size?: string;
  onClick?: () => void;
}

const Button22: React.FC<SwirlButtonProps> = ({
  text,
  color = "bg-gradient-to-r from-blue-500 to-purple-500",
  size = "w-44 h-14",
  onClick,
}) => {
  return (
    <button
      className={`relative ${size} ${color} text-white rounded-full overflow-hidden cursor-pointer transition-transform hover:rotate-360 duration-500`}
      onClick={onClick}
    >
      <span
        className="absolute inset-0 bg-opacity-10 animate-spin"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.2), transparent)",
        }}
      ></span>
      <span className="relative">{text}</span>
    </button>
  );
};

export default Button22;
