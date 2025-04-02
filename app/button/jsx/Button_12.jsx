import React from "react";

function Button12({
  frontText,
  backText,
  color = "bg-purple-500",
  size = "w-40 h-20",
  textColor = "text-white",
  onClick,
}) {
  return (
    <div
      className={`relative ${size} perspective`}
      onClick={onClick}
      style={{ perspective: "1000px" }} // Ensures 3D effect
    >
      <div
        className={`absolute inset-0 transition-transform duration-500 transform-style-3d group-hover:rotate-y-180`}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front Side */}
        <div
          className={`absolute inset-0 ${color} ${textColor} flex items-center justify-center rounded-md`}
          style={{ backfaceVisibility: "hidden" }}
        >
          {frontText}
        </div>

        {/* Back Side */}
        <div
          className={`absolute inset-0 ${color} ${textColor} flex items-center justify-center rounded-md transform rotate-y-180`}
          style={{ backfaceVisibility: "hidden" }}
        >
          {backText}
        </div>
      </div>
    </div>
  );
}

export default Button12;
