import React from "react";

type OutlineBadgeProps = {
  text: string;
  color?: string;
};

const OutlineBadge: React.FC<OutlineBadgeProps> = ({ text, color = "bg-emerald-500", ...props }) => {
  return (
    <div
      className={`inline-block px-4 py-2 text-white font-semibold rounded-lg ${color} 
      hover:ring-4 hover:ring-emerald-300 hover:ring-opacity-50 
      transition-all duration-300 cursor-pointer`}
      {...props}
    >
      {text}
    </div>
  );
};

export default OutlineBadge; 