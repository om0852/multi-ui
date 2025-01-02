"use client";

import { useState } from "react";
import PlayfulPasswordInput from "./_components/PasswordInput_10";

export default function Page() {
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [shake, setShake] = useState(false);

  const handleSignUpClick = () => {
    if (!isPasswordValid) {
      setShake(true);
      setTimeout(() => setShake(false), 500);
    } else {
      console.log("Sign-up successful!");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div
        className="w-full max-w-md p-8 space-y-8 bg-white rounded-xl shadow-md"
      >
        <h1 className="text-2xl font-bold text-center text-gray-900">Sign Up</h1>
        <PlayfulPasswordInput
          onChange={(value) => {
            const isValid =
              value.length > 6 &&
              /[A-Z]/.test(value) &&
              /[0-9]/.test(value) &&
              /[^A-Za-z0-9]/.test(value);
            setIsPasswordValid(isValid);
          }}
        />
        <button
          className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition-colors duration-200"
          onClick={handleSignUpClick}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}
