"use client";

import React, { createContext, useContext, useState, ReactNode, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Context
interface CarouselContextProps {
  currentIndex: number;
  setIndex: (index: number, dir: number) => void;
  itemsCount: number;
  loop?: boolean;
  transitioning: boolean;
  setTransitioning: (value: boolean) => void;
  direction: number; // New: for determining slide direction
}

const CarouselContext = createContext<CarouselContextProps | undefined>(undefined);

// Carousel Props
interface CarouselProps {
  children: ReactNode;
  interval?: number;
  loop?: boolean;
  className?: string;
}

// Add this before the CarouselNext function
interface CarouselControlProps {
  onClick?: () => void;
  className?: string;
  children?: ReactNode;
}

export function Carousel({
  children,
  interval = 5000,
  loop = false,
  className = "",
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const [direction, setDirection] = useState(1); // Positive for next, negative for prev
  const itemsCount = React.Children.count(children);

  // Automatic slide transition with interval
  useEffect(() => {
    if (interval && itemsCount > 1) {
      const timer = setInterval(() => {
        if (!transitioning) {
          setCurrentIndex((prev) => {
            const nextIndex = loop ? (prev + 1) % itemsCount : Math.min(prev + 1, itemsCount - 1);
            setDirection(1); // Slide forward
            return nextIndex;
          });
        }
      }, interval);
      return () => clearInterval(timer);
    }
  }, [interval, itemsCount, loop, transitioning]);

  const setIndex = (index: number, dir: number) => {
    setDirection(dir);
    if (loop) {
      setCurrentIndex((index + itemsCount) % itemsCount);
    } else {
      setCurrentIndex(Math.max(0, Math.min(index, itemsCount - 1)));
    }
  };

  return (
    <CarouselContext.Provider
      value={{ currentIndex, setIndex, itemsCount, loop, transitioning, setTransitioning, direction }}
    >
      <div className={`relative overflow-hidden ${className}`}>{children}</div>
    </CarouselContext.Provider>
  );
}

// CarouselContent
interface CarouselContentProps {
  children: ReactNode;
  className?: string;
  transitionEffect?: number;
}

export function CarouselContent({
  children,
  className = "",
  transitionEffect = 0, // Default to the first effect
}: CarouselContentProps) {
  const context = useContext(CarouselContext);
  if (!context) {
    throw new Error("CarouselContent must be used within a Carousel");
  }

  const { currentIndex, direction } = context;

  // Define 10 animation variants
  const slideVariants = [
    {
      enter: (dir: number) => ({ x: dir > 0 ? "100%" : "-100%" }),
      center: { x: 0 },
      exit: (dir: number) => ({ x: dir > 0 ? "-100%" : "100%" }),
    },
    {
      enter: (dir: number) => ({ opacity: 0, scale: 0.8 }),
      center: { opacity: 1, scale: 1 },
      exit: (dir: number) => ({ opacity: 0, scale: 0.8 }),
    },
    {
      enter: (dir: number) => ({ rotate: dir > 0 ? 90 : -90, opacity: 0 }),
      center: { rotate: 0, opacity: 1 },
      exit: (dir: number) => ({ rotate: dir > 0 ? -90 : 90, opacity: 0 }),
    },
    {
      enter: (dir: number) => ({ y: dir > 0 ? "100%" : "-100%" }),
      center: { y: 0 },
      exit: (dir: number) => ({ y: dir > 0 ? "-100%" : "100%" }),
    },
    {
      enter: (dir: number) => ({ x: "100%", opacity: 0 }),
      center: { x: 0, opacity: 1 },
      exit: (dir: number) => ({ x: "-100%", opacity: 0 }),
    },
    {
      enter: (dir: number) => ({ x: dir > 0 ? "50%" : "-50%", scale: 0.5, opacity: 0 }),
      center: { x: 0, scale: 1, opacity: 1 },
      exit: (dir: number) => ({ x: dir > 0 ? "-50%" : "50%", scale: 0.5, opacity: 0 }),
    },
    {
      enter: (dir: number) => ({ scaleX: 0 }),
      center: { scaleX: 1 },
      exit: (dir: number) => ({ scaleX: 0 }),
    },
    {
      enter: (dir: number) => ({ y: "100%", rotate: 15 }),
      center: { y: 0, rotate: 0 },
      exit: (dir: number) => ({ y: "-100%", rotate: -15 }),
    },
    {
      enter: (dir: number) => ({ x: "100%", y: "100%", opacity: 0 }),
      center: { x: 0, y: 0, opacity: 1 },
      exit: (dir: number) => ({ x: "-100%", y: "-100%", opacity: 0 }),
    },
    {
      enter: (dir: number) => ({ opacity: 0, scale: 0.8, y: "50%" }),
      center: { opacity: 1, scale: 1, y: 0 },
      exit: (dir: number) => ({ opacity: 0, scale: 0.8, y: "-50%" }),
    },
  ];

  

  // Clamp the selected effect index to a valid range
  const selectedEffect = slideVariants[Math.max(0, Math.min(transitionEffect, slideVariants.length - 1))];

  return (
    <div className={`relative w-full h-full ${className}`}>
      <AnimatePresence initial={false} custom={direction}>
        {React.Children.map(children, (child, index) =>
          currentIndex === index ? (
            <motion.div
              key={index}
              className="absolute w-full h-full"
              variants={selectedEffect}
              initial="enter"
              animate="center"
              exit="exit"
              custom={direction}
              transition={{ duration: 0.8 }}
            >
              {child}
            </motion.div>
          ) : null
        )}
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

interface CarouselDotsProps {
  className?: string;
  dotClassName?: string;
  activeDotClassName?: string;
}

export function CarouselDots({
  className = "",
  dotClassName = "w-3 h-3 rounded-full bg-gray-300 mx-1",
  activeDotClassName = "bg-blue-500",
}: CarouselDotsProps) {
  const context = useContext(CarouselContext);
  if (!context) {
    throw new Error("CarouselDots must be used within a Carousel");
  }

  const { currentIndex, setIndex, itemsCount, transitioning, setTransitioning } = context;

  const handleClick = (index: number) => {
    if (transitioning || currentIndex === index) return;

    setTransitioning(true);
    const direction = index > currentIndex ? 1 : -1; // Determine direction based on index
    setIndex(index, direction);

    setTimeout(() => setTransitioning(false), 800);
  };

  return (
    <div className={`flex justify-center items-center mt-4 ${className}`}>
      {Array.from({ length: itemsCount }).map((_, index) => (
        <button
          key={index}
          className={`${dotClassName} ${currentIndex === index ? activeDotClassName : ""}`}
          onClick={() => handleClick(index)}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );
}

// CarouselNext Button
export function CarouselNext({ onClick, className = "", children }: CarouselControlProps) {
  const context = useContext(CarouselContext);
  if (!context) {
    throw new Error("CarouselNext must be used within a Carousel");
  }

  const { currentIndex, setIndex, itemsCount, loop, transitioning, setTransitioning } = context;

  const handleClick = () => {
    if (transitioning) return;

    setTransitioning(true);
    setIndex(loop ? (currentIndex + 1) % itemsCount : Math.min(currentIndex + 1, itemsCount - 1), 1); // Forward direction

    setTimeout(() => setTransitioning(false), 800); // Reset transition state
  };

  return (
    <button
      className={`absolute right-4 top-1/2 transform -translate-y-1/2 z-10 ${className}`}
      onClick={handleClick}
      disabled={transitioning}
    >
      {children || "Next"}
    </button>
  );
}

// CarouselPrevious Button
export function CarouselPrevious({ onClick, className = "", children }: CarouselControlProps) {
  const context = useContext(CarouselContext);
  if (!context) {
    throw new Error("CarouselPrevious must be used within a Carousel");
  }

  const { currentIndex, setIndex, itemsCount, loop, transitioning, setTransitioning } = context;

  const handleClick = () => {
    if (transitioning) return;

    setTransitioning(true);
    setIndex(loop ? (currentIndex - 1 + itemsCount) % itemsCount : Math.max(currentIndex - 1, 0), -1); // Reverse direction

    setTimeout(() => setTransitioning(false), 800);
  };

  return (
    <button
      className={`absolute left-4 top-1/2 transform -translate-y-1/2 z-10 ${className}`}
      onClick={handleClick}
      disabled={transitioning}
    >
      {children || "Previous"}
    </button>
  );
}
