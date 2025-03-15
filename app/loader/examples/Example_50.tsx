"use client";

import React, { useState } from "react";
import Loader from "../_components/Loader_50";

const Example_50 = () => {
  const [isLoading, setIsLoading] = useState(false);

  const toggleLoader = () => {
    setIsLoading(!isLoading);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <button
        onClick={toggleLoader}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
      >
        {isLoading ? "Hide Loader" : "Show Loader"}
      </button>

      {isLoading && (
        <div className="w-full max-w-md p-4 bg-white rounded shadow-md">
          <Loader />
        </div>
      )}
    </div>
  );
};

export default Example_50;
