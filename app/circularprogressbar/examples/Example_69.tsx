import React, { useState, useEffect } from "react";
import CircularProgressBar_69 from "../_components/CircularProgressBar_69";

const Example_69: React.FC = () => {
  const [value, setValue] = useState(50);
  const [max, setMax] = useState(100);
  const [size, setSize] = useState(200);
  const [strokeWidth, setStrokeWidth] = useState(8);

  useEffect(() => {
    // Update component key to re-render on state change
  }, [value, max, size, strokeWidth]);

  return (
    <div className="flex flex-col items-center space-y-4">
      <CircularProgressBar_69
        value={value}
        max={max}
        size={size}
        strokeWidth={strokeWidth}
      />
      <div className="flex flex-col space-y-2">
        <label>
          Value: {value}
          <input
            type="range"
            min="0"
            max={max}
            value={value}
            onChange={(e) => setValue(Number(e.target.value))}
          />
        </label>
        <label>
          Max: {max}
          <input
            type="range"
            min="1"
            max="200"
            value={max}
            onChange={(e) => setMax(Number(e.target.value))}
          />
        </label>
        <label>
          Size: {size}
          <input
            type="range"
            min="100"
            max="300"
            value={size}
            onChange={(e) => setSize(Number(e.target.value))}
          />
        </label>
        <label>
          Stroke Width: {strokeWidth}
          <input
            type="range"
            min="1"
            max="20"
            value={strokeWidth}
            onChange={(e) => setStrokeWidth(Number(e.target.value))}
          />
        </label>
      </div>
      <div className="text-center">
        <h2>Fire Theme Features</h2>
        <ul className="list-disc">
          <li>Animated flame particles with dynamic scaling</li>
          <li>Heat haze effect with radial gradient</li>
          <li>Fire-themed gradient progress ring</li>
          <li>Dynamic fire core display</li>
          <li>Vibrant fire aesthetic</li>
        </ul>
      </div>
    </div>
  );
};

export default Example_69; 