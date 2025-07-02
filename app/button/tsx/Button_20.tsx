import React from "react";

interface SlideUpButtonProps {
  text: string;
  revealText: string;
  color?: string;
  size?: string;
  onClick?: () => void;
}

const Button20: React.FC<SlideUpButtonProps> = ({
  text,
  revealText,
  color = "bg-green-500",
  size = "w-40 h-14",
  onClick,
  ...props
}) => {
  return (
    <div
      className={`relative ${size} overflow-hidden ${color} text-white rounded-lg cursor-pointer`}
      onClick={onClick}
      {...props}
    >
      <span className="absolute inset-0 flex items-center justify-center transition-transform transform translate-y-full hover:translate-y-0 duration-500">
        {revealText}
      </span>
      <span className="absolute inset-0 flex items-center justify-center">
        {text}
      </span>
    </div>
  );
};

export default Button20;
