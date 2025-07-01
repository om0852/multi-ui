import React from "react";

type BounceBadgeProps = {
  text: string;
  color?: string;
};

const BounceBadge: React.FC<BounceBadgeProps> = ({ 
  text, 
  color = "bg-yellow-500",
  ...props 
}) => {
  return (
    <span
      className={`inline-block px-4 py-2 text-white text-sm font-semibold rounded-full shadow-lg ${color} transform transition-transform duration-500 hover:animate-bounce`}
      {...props}
    >
      {text}
    </span>
  );
};

export default BounceBadge;
