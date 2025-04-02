"use client"
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
  const dragStartX = useRef<number>(0);
  const dragStartValue = useRef<number>(0);

  const calculateSteppedValue = (rawValue: number): number => {
    const steppedValue = Math.round((rawValue - min) / step) * step + min;
    return Math.min(max, Math.max(min, steppedValue));
  };

  const handleClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (isDragging) {
      return;
    }
    const rect = trackRef.current?.getBoundingClientRect();
    if (!rect) return;
    
    const percentage = (e.clientX - rect.left) / rect.width;
    const newValue = min + percentage * (max - min);
    const steppedValue = calculateSteppedValue(newValue);
    setValue(steppedValue);
    if (onChange) onChange(steppedValue);
  }, [isDragging, min, max, onChange, step]);

  const handleDragStart = useCallback((event: MouseEvent | TouchEvent | PointerEvent) => {
    setIsDragging(true);
    dragStartX.current = 'touches' in event ? event.touches[0].clientX : event.clientX;
    dragStartValue.current = value;
  }, [value]);

  const handleDrag = useCallback((event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (!trackRef.current) return;
    
    const rect = trackRef.current.getBoundingClientRect();
    const deltaX = info.point.x - dragStartX.current;
    const deltaPercentage = deltaX / rect.width;
    const deltaValue = deltaPercentage * (max - min);
    const newValue = calculateSteppedValue(dragStartValue.current + deltaValue);
    
    setValue(newValue);
    if (onChange) onChange(newValue);
  }, [min, max, onChange, step]);

  const handleDragEnd = () => {
    setIsDragging(false);
  };

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
    <div className={clsx("w-full space-y-2", className)}>
      {label && (
        <div className="flex justify-between items-center">
          <label className="text-sm font-medium text-gray-700">{label}</label>
          {showValue && (
            <span className="text-sm text-gray-500">{value.toFixed(step < 1 ? 1 : 0)}</span>
          )}
        </div>
      )}
      <div
        ref={trackRef}
        className="relative h-3 bg-gray-200 rounded-full cursor-pointer shadow-inner"
        onClick={handleClick}
        role="presentation"
      >
        {/* Animated Progress Bar */}
        <motion.div
          className="absolute top-0 left-0 h-3 bg-gradient-to-r from-purple-400 to-blue-500 rounded-full"
          style={{ width: `${percentage}%` }}
          initial={false}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.1, ease: "easeOut" }}
        />

        {/* Slider Thumb */}
        <motion.div
          role="slider"
          tabIndex={0}
          aria-valuemin={min}
          aria-valuemax={max}
          aria-valuenow={value}
          aria-label={label || "Range slider"}
          className={clsx(
            "absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6",
            "rounded-full bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg",
            "cursor-grab focus:outline-none focus:ring-4 focus:ring-blue-300",
            "hover:scale-110 transition-transform",
            isDragging && "cursor-grabbing"
          )}
          style={{ left: `${percentage}%` }}
          drag="x"
          dragConstraints={trackRef}
          dragElastic={0}
          dragMomentum={false}
          onDragStart={handleDragStart}
          onDrag={handleDrag}
          onDragEnd={handleDragEnd}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1.1 }}
          onKeyDown={handleKeyDown}
        />
      </div>
      <div className="flex justify-between px-1">
        <span className="text-xs text-gray-500">{min}</span>
        <span className="text-xs text-gray-500">{max}</span>
      </div>
    </div>
  );
};

export default RangeSlider;
