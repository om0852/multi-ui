"use client";

import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Context
interface CarouselContextProps {
  currentIndex: number;
  setIndex: (index: number) => void;
  itemsCount: number;
  loop?: boolean;
  reverse?: boolean;
}

const CarouselContext = createContext<CarouselContextProps | undefined>(
  undefined
);

// Carousel Props
interface CarouselProps {
  children: ReactNode;
  interval?: number;
  loop?: boolean;
  reverse?: boolean;
  className?: string;
}

export function Carousel({
  children,
  interval = 5000,
  loop = false,
  reverse = false,
  className = "",
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsCount = React.Children.count(children);

  // Automatic slide transition with interval
  useEffect(() => {
    if (interval) {
      const timer = setInterval(() => {
        setCurrentIndex((prev) => {
          if (reverse) {
            return prev === 0 ? itemsCount - 1 : prev - 1;
          }
          return loop ? (prev + 1) % itemsCount : Math.min(prev + 1, itemsCount - 1);
        });
      }, interval);
      return () => clearInterval(timer);
    }
  }, [interval, itemsCount, loop, reverse]);

  const setIndex = (index: number) => {
    if (reverse) {
      setCurrentIndex(index === 0 ? itemsCount - 1 : index - 1);
    } else {
      if (loop) {
        setCurrentIndex((index + itemsCount) % itemsCount);
      } else {
        setCurrentIndex(Math.max(0, Math.min(index, itemsCount - 1)));
      }
    }
  };

  return (
    <CarouselContext.Provider
      value={{ currentIndex, setIndex, itemsCount, loop, reverse }}
    >
      <div className={`relative overflow-hidden ${className}`}>{children}</div>
    </CarouselContext.Provider>
  );
}

// CarouselContent with Tailwind CSS and Fade Animation
interface CarouselContentProps {
  children: ReactNode;
  className?: string;
}

export function CarouselContent({ children, className = "" }: CarouselContentProps) {
  const context = useContext(CarouselContext);
  if (!context) {
    throw new Error("CarouselContent must be used within a Carousel");
  }

  const { currentIndex } = context;

  return (
    <div className={`relative w-full h-full ${className}`}>
      <AnimatePresence initial={false}>
        {React.Children.map(children, (child, index) => (
          <motion.div
            key={index}
            className="absolute w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: currentIndex === index ? 1 : 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {child}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

// CarouselItem Props
interface CarouselItemProps {
  children: ReactNode;
  className?: string;
}

export function CarouselItem({ children, className = "" }: CarouselItemProps) {
  return <div className={`h-full ${className}`}>{children}</div>;
}

// CarouselNext and Previous Props
interface CarouselControlProps {
  onClick?: () => void;
  className?: string;
  children?: ReactNode;
}

// Next Button
export function CarouselNext({ onClick, className = "", children }: CarouselControlProps) {
  const context = useContext(CarouselContext);
  if (!context) {
    throw new Error("CarouselNext must be used within a Carousel");
  }

  const { currentIndex, setIndex, itemsCount, loop, reverse } = context;

  return (
    <button
      className={`absolute right-4 top-1/2 transform -translate-y-1/2 z-10 ${className} bg-gray-800 text-white p-2 rounded-full`}
      onClick={() => {
        setIndex(reverse ? (currentIndex === 0 ? itemsCount - 1 : currentIndex - 1) : currentIndex + 1);
        if (onClick) onClick();
      }}
    >
      {children || "Next"}
    </button>
  );
}

// Previous Button
export function CarouselPrevious({ onClick, className = "", children }: CarouselControlProps) {
  const context = useContext(CarouselContext);
  if (!context) {
    throw new Error("CarouselPrevious must be used within a Carousel");
  }

  const { currentIndex, setIndex, itemsCount, reverse } = context;

  return (
    <button
      className={`absolute left-4 top-1/2 transform -translate-y-1/2 z-10 ${className} bg-gray-800 text-white p-2 rounded-full`}
      onClick={() => {
        setIndex(reverse ? (currentIndex === itemsCount - 1 ? 0 : currentIndex + 1) : currentIndex - 1);
        if (onClick) onClick();
      }}
    >
      {children || "Previous"}
    </button>
  );
}
