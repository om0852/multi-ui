"use client"
import React, { useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

interface RangeSliderProps {
  min?: number;
  max?: number;
  step?: number;
  defaultValue?: number;
  onChange?: (value: number) => void;
  className?: string;
}

const RangeSlider: React.FC<RangeSliderProps> = ({
  min = 0,
  max = 100,
  step = 1,
  defaultValue = 50,
  onChange,
  className,
}) => {
  const [value, setValue] = useState(defaultValue);
  const trackRef = useRef<HTMLDivElement | null>(null);

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (trackRef.current) {
        const rect = trackRef.current.getBoundingClientRect();
        const newValue = Math.round(
          ((e.clientX - rect.left) / rect.width) * (max - min) + min
        );
        const clampedValue = Math.min(max, Math.max(min, newValue));
        setValue(clampedValue);
        if (onChange) onChange(clampedValue);
      }
    },
    [min, max, onChange]
  );

  const handleDrag = useCallback(
    (event: MouseEvent, info: any) => {
      if (trackRef.current) {
        const rect = trackRef.current.getBoundingClientRect();
        const newValue = Math.round(
          ((info.point.x - rect.left) / rect.width) * (max - min) + min
        );
        const clampedValue = Math.min(max, Math.max(min, newValue));
        setValue(clampedValue);
        if (onChange) onChange(clampedValue);
      }
    },
    [min, max, onChange]
  );

  return (
    <div className={clsx("w-full", className)}>
      <div
        ref={trackRef}
        className="relative h-3 bg-gray-200 rounded-full cursor-pointer shadow-inner"
        onClick={handleClick}
      >
        {/* Animated Progress Bar */}
        <motion.div
          className="absolute top-0 h-3 bg-gradient-to-r from-purple-400 to-blue-500 rounded-full"
          style={{
            width: `${((value - min) / (max - min)) * 100}%`,
          }}
          initial={{ width: 0 }}
          animate={{ width: `${((value - min) / (max - min)) * 100}%` }}
          transition={{
            duration: 0.4,
            ease: "easeOut",
          }}
        />

        {/* Slider Thumb */}
        <motion.div
          className={clsx(
            "absolute top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg cursor-pointer",
            "hover:scale-110 hover:ring-4 hover:ring-blue-300 transition-transform"
          )}
          style={{
            left: `${((value - min) / (max - min)) * 100}%`,
          }}
          drag="x"
          dragConstraints={{
            left: 0,
            right: trackRef.current ? trackRef.current.offsetWidth : 0,
          }}
          dragElastic={0}
          onDrag={handleDrag}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1.1 }}
        />
      </div>
    </div>
  );
};

export default RangeSlider;
