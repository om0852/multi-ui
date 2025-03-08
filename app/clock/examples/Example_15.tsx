"use client"

import React from "react";
import { FaClock } from "react-icons/fa";
import LedDigitalClock from "../_components/Clock_15";

const Example_15 = () => {
  return (
    <div>
      <div className="flex items-center gap-2 mb-4">
        <FaClock className="text-2xl" />
        <h2 className="text-2xl font-bold">LED Digital Clock</h2>
      </div>

      <div className="grid grid-cols-1 gap-8">
        {/* Default Style */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Default Style</h3>
          <LedDigitalClock />
        </div>

        {/* Dark Theme */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Dark Theme</h3>
          <LedDigitalClock />
        </div>

        {/* Colorful Theme */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Colorful Theme</h3>
          <LedDigitalClock />
        </div>

        {/* Minimal Theme */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Minimal Theme</h3>
          <LedDigitalClock />
        </div>
      </div>
    </div>
  );
};

export default Example_15; 