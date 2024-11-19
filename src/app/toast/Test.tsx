"use client"
import React, { useEffect } from "react";
import toast from "./_components/toast";
import { ToastProvider, useToast } from "./_components/ToastContext";

const Test: React.FC = () => {
  const { showToast } = useToast();

  useEffect(() => {
    toast.init(showToast);
  }, [showToast]);

  return (
    <div className="p-4">
      <button
        onClick={() => toast.success("Success message!")}
        className="mr-4 bg-green-500 text-white px-4 py-2 rounded"
      >
        Show Success Toast
      </button>
      <button
        onClick={() => toast.error("Error message!")}
        className="bg-red-500 text-white px-4 py-2 rounded"
      >
        Show Error Toast
      </button>
    </div>
  );
};

export default Test