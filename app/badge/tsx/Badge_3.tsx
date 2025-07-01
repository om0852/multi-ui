import React, { useState } from "react";

type BounceBadgeProps = {
  text: string;
  color?: string;
};

const BounceOnClickBadge: React.FC<BounceBadgeProps> = ({ text, color = "bg-green-500", ...props }) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 300);
  };

  return (
    <div
      className={`inline-block px-4 py-2 text-white font-semibold rounded-lg cursor-pointer transition-transform duration-300 ${
        clicked ? "animate-bounce" : ""
      } ${color}`}
      onClick={handleClick}
      {...props}
    >
      {text}
    </div>
  );
};

export default BounceOnClickBadge;
