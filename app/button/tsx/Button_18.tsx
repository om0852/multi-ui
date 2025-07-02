import React from "react";

interface HoverFlipButtonProps {
  text: string;
  backText: string;
  color?: string;
  size?: string;
  onClick?: () => void;
}

const Button18: React.FC<HoverFlipButtonProps> = ({
  text,
  backText,
  color = "bg-blue-600",
  size = "w-40 h-14",
  onClick,
  ...props
}) => {
  return (
    <div
      className={`relative ${size} perspective-1000 cursor-pointer`}
      onClick={onClick}
      {...props}
    >
      <div
        className={`absolute inset-0 ${size} ${color} text-white flex items-center justify-center rounded-lg transition-transform transform hover:rotate-y-180 duration-500`}
      >
        <span className="absolute inset-0 flex items-center justify-center">
          {text}
        </span>
        <span
          className={`absolute inset-0 ${color} text-white flex items-center justify-center rotate-y-180`}
        >
          {backText}
        </span>
      </div>
    </div>
  );
};

export default Button18;
