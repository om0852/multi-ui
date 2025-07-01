import React from "react";

type FloatingBadgeProps = {
  text: string;
  color?: string;
};

const FloatingBadge: React.FC<FloatingBadgeProps> = ({ text, color = "bg-amber-500", ...props }) => {
  return (
    <div
      className={`inline-block px-4 py-2 text-white font-semibold rounded-lg ${color}
      hover:animate-float hover:-translate-y-1 hover:shadow-lg
      transition-all duration-300 cursor-pointer`}
      {...props}
    >
      {text}
    </div>
  );
};

export default FloatingBadge; 