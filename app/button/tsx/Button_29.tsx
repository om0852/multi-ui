import React from "react";

interface FloatingBubbleButtonProps {
  text: string;
  color?: string;
  size?: string;
  onClick?: () => void;
}

const Button29: React.FC<FloatingBubbleButtonProps> = ({
  text,
  color = "bg-purple-600",
  size = "w-36 h-12",
  onClick,
}) => {
  return (
    <button
      className={`relative ${size} ${color} text-white font-bold rounded-lg overflow-hidden group`}
      onClick={onClick}
    >
      <div className="absolute inset-0 flex justify-center items-center overflow-hidden">
        {Array.from({ length: 5 }).map((_, index) => (
          <span
            key={index}
            className="absolute w-4 h-4 bg-white rounded-full opacity-0 group-hover:opacity-100 animate-bubble"
            style={{
              animationDelay: `${index * 0.2}s`,
              top: "100%",
              left: `${20 * index}%`,
            }}
          ></span>
        ))}
      </div>
      <span className="relative z-10">{text}</span>
      <style>
        {`
          @keyframes bubble {
            0% {
              transform: translateY(0);
              opacity: 0.5;
            }
            100% {
              transform: translateY(-100px);
              opacity: 0;
            }
          }
        `}
      </style>
    </button>
  );
};

export default Button29;
