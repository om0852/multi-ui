import React from "react";

interface SplitSlideButtonProps {
  text: string;
  color1?: string;
  color2?: string;
  size?: string;
  onClick?: () => void;
}

const Button30: React.FC<SplitSlideButtonProps> = ({
  text,
  color1 = "bg-green-500",
  color2 = "bg-green-700",
  size = "w-40 h-12",
  onClick,
}) => {
  return (
    <button
      className={`relative ${size} text-white font-bold rounded-lg overflow-hidden group`}
      onClick={onClick}
    >
      <span
        className={`absolute inset-0 ${color1} group-hover:translate-x-full transition-transform duration-300`}
      ></span>
      <span
        className={`absolute inset-0 ${color2} translate-x-full group-hover:translate-x-0 transition-transform duration-300`}
      ></span>
      <span className="relative z-10">{text}</span>
    </button>
  );
};

export default Button30;
