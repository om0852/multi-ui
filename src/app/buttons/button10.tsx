import React from "react";

interface GradientSwipeButtonProps {
  text: string;
  gradientColors?: string[];
  textColor?: string;
  size?: "small" | "medium" | "large";
  onClick?: () => void;
}

const Button10: React.FC<GradientSwipeButtonProps> = ({
  text,
  gradientColors = ["from-blue-500", "to-green-500"],
  textColor = "text-white",
  size = "medium",
  onClick,
}) => {
  const sizeClasses =
    size === "small"
      ? "px-4 py-2 text-sm"
      : size === "large"
      ? "px-8 py-4 text-lg"
      : "px-6 py-3 text-md";

  return (
    <button
      onClick={onClick}
      className={`relative overflow-hidden ${sizeClasses} rounded-lg ${textColor} font-semibold shadow-md transform transition-transform duration-300 hover:scale-105`}
    >
      <span
        className={`absolute inset-0 bg-gradient-to-r ${gradientColors.join(
          " "
        )} transition-transform duration-500 transform -translate-x-full hover:translate-x-0`}
      ></span>
      <span className="relative z-10">{text}</span>
    </button>
  );
};

export default Button10;
