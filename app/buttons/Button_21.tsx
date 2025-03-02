import React from "react";

interface FloatingBubbleButtonProps {
  text: string;
  color?: string;
  size?: string;
  onClick?: () => void;
}

const Button21: React.FC<FloatingBubbleButtonProps> = ({
  text,
  color = "bg-red-500",
  size = "w-36 h-12",
  onClick,
}) => {
  return (
    <button
      className={`relative ${size} ${color} text-white rounded-lg flex items-center justify-center overflow-hidden cursor-pointer`}
      onClick={onClick}
    >
      {Array.from({ length: 5 }).map((_, index) => (
        <span
          key={index}
          className="absolute w-4 h-4 bg-white rounded-full animate-[floating_3s_infinite] opacity-30"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${index * 0.5}s`,
          }}
        ></span>
      ))}
      <span className="relative">{text}</span>
    </button>
  );
};

export default Button21;
