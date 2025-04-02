import React from "react";

function Button7({
  frontText,
  backText,
  color = "bg-green-500",
  backColor = "bg-black",
  textColor = "text-white",
  size = "px-6 py-3",
  onClick,
}) {
  return (
    <div className="group perspective">
      <button
        onClick={onClick}
        className={`relative ${size} ${textColor} font-semibold rounded overflow-hidden`}
        style={{ transformStyle: "preserve-3d" }}
      >
        <span
          className={`absolute inset-0 flex items-center justify-center ${color} rounded`}
          style={{ backfaceVisibility: "hidden" }}
        >
          {frontText}
        </span>
        <span
          className={`absolute inset-0 flex items-center justify-center ${backColor} rotate-y-180 rounded`}
          style={{ backfaceVisibility: "hidden" }}
        >
          {backText}
        </span>
      </button>
    </div>
  );
}

export default Button7;
