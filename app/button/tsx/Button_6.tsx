import React from "react";

interface GlowButtonProps {
  text: string;
  color?: string; // Tailwind background color
  textColor?: string; // Tailwind text color
  size?: string; // Tailwind size classes
  onClick: () => void;
}

const Button6: React.FC<GlowButtonProps> = ({
  text,
  color = "bg-cyan-500",
  textColor = "text-black",
  size = "px-6 py-3",
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`relative ${color} ${textColor} ${size} font-semibold rounded-full transition-shadow shadow-md hover:shadow-[0_0_15px_5px_rgba(0,255,255,0.6)]`}
    >
      {text}
    </button>
  );
};

export default Button6;
