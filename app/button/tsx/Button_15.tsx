import React from "react";

interface ElasticButtonProps {
  text: string;
  color?: string;
  size?: string;
  onClick?: () => void;
}

const Button15: React.FC<ElasticButtonProps> = ({
  text,
  color = "bg-green-500",
  size = "w-32 h-10",
  onClick,
}) => {
  return (
    <button
      className={`relative ${size} ${color} text-white rounded-full flex items-center justify-center transform transition-all hover:scale-105 active:scale-90`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button15;
