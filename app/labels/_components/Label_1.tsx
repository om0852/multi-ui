"use client";

import React from "react";

type LabelProps = {
  text: string;
  type?: "success" | "warning" | "error" | "info";
  className?: string;
};

export function Label_1({ text, type = "info", className = "" }: LabelProps) {
  const colors = {
    success: "bg-green-100 text-green-800 border-green-200",
    warning: "bg-yellow-100 text-yellow-800 border-yellow-200",
    error: "bg-red-100 text-red-800 border-red-200",
    info: "bg-blue-100 text-blue-800 border-blue-200",
  };

  return (
    <span
      className={`
        inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
        border ${colors[type]} ${className}
      `}
    >
      {text}
    </span>
  );
}

export function Component() {
  return (
    <div className="space-x-2">
      <Label_1 text="Success" type="success" />
      <Label_1 text="Warning" type="warning" />
      <Label_1 text="Error" type="error" />
      <Label_1 text="Info" type="info" />
    </div>
  );
} 