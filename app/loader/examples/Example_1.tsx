"use client";

import React, { useState } from "react";
import PyramidLoader from "../tsx/Loader_1";

const Example_1 = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Function to toggle the loader visibility
  const toggleLoader = () => {
    setIsLoading(!isLoading);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Pyramid Loader Example</h1>
        
        <div className="mb-6">
          <button 
            onClick={toggleLoader}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
          >
            {isLoading ? "Hide Loader" : "Show Loader"}
          </button>
        </div>

        {/* Loader display area */}
        {isLoading && (
          <div className="relative h-96 bg-gray-900 rounded-lg overflow-hidden">
            <PyramidLoader />
          </div>
        )}
      </div>
    </div>
  );
};

export default Example_1;
