"use client";
import React from "react";
import { useToast } from "./_components/toast-context";

const Page = () => {
  const toast = useToast();

  return (
    <div className="flex flex-col items-center gap-4 mt-10">
      <button
        className="w-[20vh] h-10 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        onClick={() =>
          toast?.open({
            message: "This is a custom toast with an icon!",
            icon: "op",
            theme: "custom",
            position: "top-right",
            animationType: "slide",
            duration: 4000,
            // actionButton: {
            //   label: "Undo",
            //   onClick: () => alert("Undo clicked"),
            // },
          })
        }
      >
        Custom Toast
      </button>

      <button
        className="w-[20vh] h-10 bg-green-600 text-white rounded hover:bg-green-700 transition"
        onClick={() => {
          toast?.success("Operation successful!", {
            duration: 5000,
            position: "top-right",
            animationType: "zoom",
          });
        }}
      >
        Success Toast
      </button>

      <button
        className="w-[20vh] h-10 bg-red-600 text-white rounded hover:bg-red-700 transition"
        onClick={() => toast?.error("An error occurred!")}
      >
        Error Toast
      </button>
    </div>
  );
};

export default Page;
