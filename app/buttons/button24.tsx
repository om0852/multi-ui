import React from "react";

interface OrbitButtonProps {
  text: string;
  color?: string;
  size?: string;
  onClick?: () => void;
}

const Button24: React.FC<OrbitButtonProps> = ({
  text,
  color = "bg-pink-500",
  size = "w-40 h-14",
  onClick,
}) => {
  return (
    <div className="relative">
      <button
        className={`relative ${size} ${color} text-white font-bold rounded-full flex items-center justify-center cursor-pointer`}
        onClick={onClick}
      >
        {text}
      </button>
      {Array.from({ length: 3 }).map((_, index) => (
        <div
          key={index}
          className="absolute w-4 h-4 bg-white rounded-full animate-spin"
          style={{
            top: "-10px",
            left: `${index * 30 + 20}px`,
            animationDuration: `${1.5 + index * 0.5}s`,
          }}
        ></div>
      ))}
    </div>
  );
};

export default Button24;
