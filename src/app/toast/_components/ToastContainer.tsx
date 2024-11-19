"use client"
import React from "react";

interface ToastContainerProps {
  children: React.ReactNode;
}

const ToastContainer: React.FC<ToastContainerProps> = ({ children }) => {
  return (
    <div className="fixed top-4 right-4 z-50 flex flex-col space-y-2">
      {children}
    </div>
  );
};

export default ToastContainer;
