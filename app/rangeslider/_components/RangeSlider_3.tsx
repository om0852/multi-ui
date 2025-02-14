"use client";
import React, { useState, useRef, useCallback } from "react";
import { motion, PanInfo } from "framer-motion";
import clsx from "clsx";

interface RangeSliderProps {
  min?: number;
  max?: number;
  step?: number;
  defaultValue?: number;
  onChange?: (value: number) => void;
  className?: string;
  label?: string;
  showValue?: boolean;
}

const RangeSlider: React.FC<RangeSliderProps> = ({
  min = 0,
  max = 100,
  step = 1,
  defaultValue = 50,
  onChange,
  className,
  label,
  showValue = true,
}) => {
  const [value, setValue] = useState(defaultValue);
  const [isDragging, setIsDragging] = useState(false);
  const trackRef = useRef<HTMLDivElement | null>(null);

  const calculateSteppedValue = (rawValue: number): number => {
    const steppedValue = Math.round((rawValue - min) / step) * step + min;
    return Math.min(max, Math.max(min, steppedValue));
  };

  const handleClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (isDragging) return;
    const rect = trackRef.current?.getBoundingClientRect();
    if (!rect) return;
    
    const percentage = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    const newValue = min + percentage * (max - min);
    const steppedValue = calculateSteppedValue(newValue);
    setValue(steppedValue);
    if (onChange) onChange(steppedValue);
  }, [isDragging, min, max, onChange]);

  const handleDrag = useCallback((_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (!trackRef.current) return;
    
    const rect = trackRef.current.getBoundingClientRect();
    const percentage = Math.max(0, Math.min(1, (info.point.x - rect.left) / rect.width));
    const newValue = min + percentage * (max - min);
    const steppedValue = calculateSteppedValue(newValue);
    
    setValue(steppedValue);
    if (onChange) onChange(steppedValue);
  }, [min, max, onChange]);

  const handleDragStart = () => setIsDragging(true);
  const handleDragEnd = () => setIsDragging(false);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      let newValue = value;
      switch (e.key) {
        case "ArrowRight":
        case "ArrowUp":
          newValue = calculateSteppedValue(value + step);
          break;
        case "ArrowLeft":
        case "ArrowDown":
          newValue = calculateSteppedValue(value - step);
          break;
        case "Home":
          newValue = min;
          break;
        case "End":
          newValue = max;
          break;
        default:
          return;
      }
      e.preventDefault();
      setValue(newValue);
      if (onChange) onChange(newValue);
    },
    [value, min, max, step, onChange]
  );

  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <div className={clsx("w-full space-y-3", className)}>
      {label && (
        <div className="flex justify-between items-center mb-1">
          <label className="text-sm font-bold text-emerald-600">{label}</label>
          {showValue && (
            <motion.span 
              className="px-3 py-1 text-sm font-bold text-white bg-emerald-500 rounded-full shadow-lg"
              animate={{
                scale: isDragging ? 1.1 : 1,
                backgroundColor: isDragging ? "#10b981" : "#059669"
              }}
            >
              {value.toFixed(step < 1 ? 1 : 0)}
            </motion.span>
          )}
        </div>
      )}
      <div
        ref={trackRef}
        className="relative h-8 bg-emerald-100 rounded-full cursor-pointer shadow-inner group"
        onClick={handleClick}
        role="presentation"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 overflow-hidden rounded-full">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle,_#10b981_1px,_transparent_1px)] [background-size:8px_8px]" />
        </div>

        {/* Progress Bar */}
        <motion.div
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-full"
          style={{ width: `${percentage}%` }}
          initial={false}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.1, ease: "easeOut" }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent rounded-full" />
        </motion.div>

        {/* Slider Thumb */}
        <motion.div
          role="slider"
          tabIndex={0}
          aria-valuemin={min}
          aria-valuemax={max}
          aria-valuenow={value}
          aria-label={label || "Range slider"}
          className={clsx(
            "absolute top-1/2 -translate-x-1/2 -translate-y-1/2",
            "w-10 h-10 bg-white rounded-full shadow-lg",
            "cursor-grab focus:outline-none focus:ring-4 focus:ring-emerald-300",
            "group-hover:scale-105 transition-all duration-150",
            isDragging && "cursor-grabbing scale-110"
          )}
          style={{ left: `${percentage}%` }}
          drag="x"
          dragConstraints={{
            left: 0,
            right: trackRef.current?.offsetWidth || 0
          }}
          dragElastic={0}
          dragMomentum={false}
          onDragStart={handleDragStart}
          onDrag={handleDrag}
          onDragEnd={handleDragEnd}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onKeyDown={handleKeyDown}
        >
          {/* Thumb Inner Design */}
          <div className="absolute inset-2 bg-emerald-500 rounded-full">
            <div className="absolute inset-1 bg-gradient-to-br from-white/50 to-transparent rounded-full" />
          </div>
        </motion.div>
      </div>
      <div className="flex justify-between px-2">
        <span className="text-sm font-medium text-emerald-600">{min}</span>
        <span className="text-sm font-medium text-emerald-600">{max}</span>
      </div>
    </div>
  );
};

export default RangeSlider;
