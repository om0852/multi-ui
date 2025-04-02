import React from "react";

interface RotatingIconButtonProps {
  text: string;
  icon: React.ReactNode;
  color?: string;
  textColor?: string;
  size?: "small" | "medium" | "large";
  onClick?: () => void;
}

const Button9: React.FC<RotatingIconButtonProps> = ({
  text,
  icon,
  color = "bg-purple-500",
  textColor = "text-white",
  size = "medium",
  onClick,
}) => {
  const sizeClasses =
    size === "small"
      ? "px-3 py-2 text-sm"
      : size === "large"
      ? "px-6 py-4 text-lg"
      : "px-4 py-3 text-md";

  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center space-x-2 ${color} ${textColor} ${sizeClasses} rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-110`}
    >
      <span
        className="inline-block transform transition-transform duration-500 hover:rotate-360"
        style={{ willChange: "transform" }}
      >
        {icon}
      </span>
      <span>{text}</span>
    </button>
  );
};

export default Button9;
