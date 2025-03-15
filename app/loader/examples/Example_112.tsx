"use client";

import React, { useState } from "react";
import Loader from "../_components/Loader_112";

const Example_112 = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Function to toggle the loader visibility
  const toggleLoader = () => {
    setIsLoading(!isLoading);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Animated Loader Example</h1>
        
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
          <div className="relative h-96 bg-gray-900 rounded-lg overflow-hidden shadow-md flex items-center justify-center">
            <Loader />
          </div>
        )}
      </div>
    </div>
  );
};

export default Example_112; 